// Special express import. Otherwise: Critical dependency: the request of a dependency is an expression
// const express = __non_webpack_require__("express");
import express from "express";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import Routes from "./Routes";
import renderer from "./renderer";
import createStore from "./createStore";

// CSS
// import { cssGrid } from "../styles/grid";
import { noScriptCSS } from "../styles/headUtils";
import { normalizeCSS } from "../styles/normalize";

const app = express();

// Proxy must be on top!
app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    },
  })
);

//Delivering brotli compression
app.get("*.js", (req, res, next) => {
  if (req.header("Accept-Encoding").includes("br")) {
    req.url = req.url + ".br";
    // console.log(req.header("Accept-Encoding"));
    res.set("Content-Encoding", "br");
    res.set("Content-Type", "application/javascript; charset=UTF-8");
  }

  next();
});

app.use(express.static("config/bundles/public"));
app.use(express.static("config/bundles/public/main.css"));

app.get("*", (req, res) => {
  console.log("req.path", req.path, req.url, req.header);
  const z = 1;
  if (1 === z) {
    const store = createStore(req);
    console.log(`SSR for ${req.path}`);

    // Checking route configuration object. Decision what set of components need to be loaded
    // First argument: List of routes, routes config array, Second: The path the user attempts to fetch/view
    // Returns array of components to render
    // Map: Looping over the list of routes to check if loadData Statement
    const promises = matchRoutes(Routes, req.path)
      .map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
      })
      .map((promise) => {
        // Error handling following. Map over the list of promises and null values.
        // For every promise inside of there
        if (promise) {
          // Return a new promise with function which gets called as the new instance to create
          return new Promise((resolve, reject) => {
            // No matter what, the inner promise gets will be resolved and then passed down
            promise.then(resolve).catch(resolve);
          });
        }
      });

    Promise.all(promises).then(() => {
      const context = {};
      const content = renderer(req, store, context);

      if (context.url) {
        return res.redirect(301, context.url);
      }
      if (context.notFound) {
        res.status(404);
      }

      res.send(content);
    });
  } else {
    console.log("CSR for", req.path);
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
    <style> ${normalizeCSS}</style>
    <style> ${noScriptCSS}</style>
    <link rel="stylesheet" type="text/css" href="./main.css" />
    <head/>
    <body>
        <div class="page">
          <div id="root"></div>
          <script src="bundle.js"></script>    
        </div>
    <body/>
    <html/>`);
  }
});

app.listen(2000, () => {
  console.log(`Listening on port 2000`);
});

{
  /* 
  
  <style> ${cssGrid}</style>
  
  <noscript>
          <p class="noscript" >You need to enable JavaScript to run this app.</p>
          </noscript> */
}
