// some module
import(
  /* webpackChunkName: "my-chunk-name" */
  /* webpackMode: "lazy" */
  "./async1"
  );
import("./async2");
import {a} from './async3'
console.log('a', a);