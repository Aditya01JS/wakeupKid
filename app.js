import React from "react";
import  ReactDOM  from "react-dom/client";

const heading = [React.createElement("div", {id:"parent"}, [
  React.createElement("h1", {}, "I'm child1"),
  React.createElement("h1", {}, "hey I'm child2"),
]),React.createElement("div", {id:"parent1"}, [
    React.createElement("h1", {}, "I'm child1"),
    React.createElement("h1", {}, "hey I'm child2"),
  ])];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

