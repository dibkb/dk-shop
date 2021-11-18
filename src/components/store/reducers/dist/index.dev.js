"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _cartReducer = _interopRequireDefault(require("./cartReducer"));

var _asyncReducer = _interopRequireDefault(require("../../async/asyncReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = (0, _redux.combineReducers)({
  cartReducer: _cartReducer["default"]
});
var _default = rootReducer;
exports["default"] = _default;