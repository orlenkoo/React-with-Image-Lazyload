import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import Routes from "./Routes";
import Helmet from "react-helmet";

// CSS
// import { cssGrid } from "../styles/grid";
import { noScriptCSS } from "../styles/headUtils";
import { normalizeCSS } from "../styles/normalize";

// STYLED COMPONENTS
import { GlobalStyles } from "../styles/globalStyles";
import { GlobalFonts } from "../styles/fonts/fonts";
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from "styled-components";
const sheet = new ServerStyleSheet();
import theme from "../styles/theme";

export default (req, store, context) => {
  const content = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <GlobalFonts />
            <div>{renderRoutes(Routes)}</div>
          </ThemeProvider>
        </StaticRouter>
      </Provider>
    </StyleSheetManager>
  );

  // Styles for SSR rendered <style> head
  const styleTags = sheet.getStyleTags();

  // Pull out all tags from the Helmet library
  // helmet represents all tags from the helmet library
  const helmet = Helmet.renderStatic();

  return `
  <!DOCTYPE html>
  <html>
  <head>
  <style> ${normalizeCSS}</style>
  <style> ${noScriptCSS}</style>
  <link rel="stylesheet" type="text/css" href="./main.css" />
  ${styleTags}
  ${helmet.title.toString()}
  ${helmet.meta.toString()}
  <head/>
  <body>
    <div class="page">
       <div id="root">${content}</div>
       <script>window.INITIAL_STATE=${serialize(store.getState())}</script> 
       <script src="bundle.js"></script>
    </div>
  <body/>
  <html/>`;
};

{
  /* 
  
    <style> ${cssGrid}</style>
  <p class="noscript" >You need to enable JavaScript to run this app.</p> */
}
