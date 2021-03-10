//app.js
import "./my-statis-module";
// import "jquery"
import("jquery" /* webpackChunkName: "jquery" */)
import("lodash" /* webpackChunkName: "lodash" */)
import "react"
import(
  /* webpackChunkName: "my-dynamic-module" */
  "./my-dynamic-module")