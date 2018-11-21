require("./sentry");
console.log("Entry loaded");
setTimeout(() => {
  console.log("Throwing an unhandled error");
  throw new Error("This is an error");
}, 1000);
