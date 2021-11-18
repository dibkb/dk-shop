"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStore = configureStore;

var _redux = require("redux");

var _cartReducer = _interopRequireDefault(require("./reducers/cartReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { composeWithDevTools } from "redux-devtools-extension";
function configureStore() {
  return (0, _redux.createStore)(_cartReducer["default"]);
}