"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = testReducer;
var initialState = {
  data: 42
};

function testReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return state;
}