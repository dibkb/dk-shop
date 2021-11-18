"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStore = configureStore;

var _redux = require("redux");

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _cartReducer = _interopRequireDefault(require("./reducers/cartReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function configureStore() {
  return (0, _redux.createStore)(_cartReducer["default"]);
}