import React from "react";

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1 style={{ color: "green" }}>Oh, page not available!</h1>;
};

export default {
  component: NotFoundPage,
};
