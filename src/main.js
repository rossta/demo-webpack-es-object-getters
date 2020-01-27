import { value, object } from "./individual_exports";
import * as Default from "./default_export";

console.log("value:", value);

console.log("object.property", object.property);
console.log("this works -- modified object property", ++object.property);

Default.method();

Default.method = function() {
  console.log("new function");
};

Default.method();
