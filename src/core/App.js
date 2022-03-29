import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "../client/components/Header";
import { fetchCurrentUser } from "../client/actions";

const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
  component: App,
};

// loadData function gets called with Redux store
// ... and the only function to care of that redux store is the dispatch function
// restructuring through ({dispatch})
// no return needed if {} > An arrow function without {} has an automatic return
