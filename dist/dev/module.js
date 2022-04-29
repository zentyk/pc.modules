var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/module.js
var Nakama = class {
  constructor(greeting) {
    __publicField(this, "Greet", function() {
      console.log("Hello " + this.greeting + "!");
    });
    this.greeting = greeting;
    console.log("module loaded");
  }
};
var module_default = Nakama;
export {
  module_default as default
};
//# sourceMappingURL=module.js.map
