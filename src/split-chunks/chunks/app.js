//app.js
import "./my-statis-module";
import("jquery" /* webpackChunkName: "jquery" */)
import "lodash"
import(
  /* webpackChunkName: "my-dynamic-module" */
  "./my-dynamic-module")