require("./sentry");
console.log("Entry loaded");
const { render } = require("react-dom");
const React = require("react");
const X = () => {
  throw new Error("this is a react error");
};
render(React.createElement(X, null), document.body);

// setTimeout(() => {
//   console.log("Throwing an unhandled error");
//   throw new Error("This is an error");
// }, 1000);
