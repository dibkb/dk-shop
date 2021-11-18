"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = asyncReducer;
exports.asyncActionError = exports.asyncActionFinish = exports.asyncActionStart = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ASYNC_ACTION_START = "ASYNC_ACTION_START";
var ASYNC_ACTION_FINISH = "ASYNC_ACTION_FINISH";
var ASYNC_ACTION_ERROR = "ASYNC_ACTION_ERROR";

var asyncActionStart = function asyncActionStart() {
  return {
    type: ASYNC_ACTION_START
  };
};

exports.asyncActionStart = asyncActionStart;

var asyncActionFinish = function asyncActionFinish() {
  return {
    type: ASYNC_ACTION_FINISH
  };
};

exports.asyncActionFinish = asyncActionFinish;

var asyncActionError = function asyncActionError(error) {
  return {
    type: ASYNC_ACTION_START,
    payload: error
  };
};

exports.asyncActionError = asyncActionError;
var initialState = {
  loading: false,
  error: null
};

function asyncReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case ASYNC_ACTION_START:
      return _objectSpread({}, state, {
        loading: true,
        error: null
      });

    case ASYNC_ACTION_FINISH:
      return _objectSpread({}, state, {
        loading: false,
        error: payload
      });

    default:
      return state;
  }
}