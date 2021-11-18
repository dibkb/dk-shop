"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = cartReducer;
exports.DELETE_ITEM = exports.DECREASE_ITEM = exports.INCREASE_ITEM = exports.ADD_ITEMS = exports.ADD_TO_CART = void 0;

var _products = require("../../products");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ADD_TO_CART = "ADD_TO_CART";
exports.ADD_TO_CART = ADD_TO_CART;
var ADD_ITEMS = "ADD_ITEMS";
exports.ADD_ITEMS = ADD_ITEMS;
var INCREASE_ITEM = "INCREASE_ITEM";
exports.INCREASE_ITEM = INCREASE_ITEM;
var DECREASE_ITEM = "DECREASE_ITEM";
exports.DECREASE_ITEM = DECREASE_ITEM;
var DELETE_ITEM = "DELETE_ITEM";
exports.DELETE_ITEM = DELETE_ITEM;
var initialState = {
  items: _products.products,
  addedItems: [],
  total: 0
};

function cartReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_TO_CART:
      var payload = parseInt(action.payload);
      var addedItem = state.items.find(function (item) {
        return item.id === payload;
      });
      var existed_item = state.addedItems.find(function (item) {
        return payload === item.id;
      });

      if (existed_item) {
        addedItem.quantity += 1;
        return _objectSpread({}, state, {
          total: state.total + addedItem.price
        });
      } else {
        addedItem.quantity = 1;
        var newTotal = state.total + addedItem.price;
        return _objectSpread({}, state, {
          addedItems: [].concat(_toConsumableArray(state.addedItems), [addedItem]),
          total: newTotal
        });
      }

    case INCREASE_ITEM:
      var itemToIncrease = state.items.find(function (item) {
        return item.id === parseInt(action.payload);
      });
      itemToIncrease.quantity += 1;
      var otherItemsIncrease = state.addedItems.filter(function (item) {
        return item.id !== itemToIncrease.id;
      });
      var totalPrice = state.addedItems.reduce(function (acc, obj) {
        return acc + parseInt(obj.price) * parseInt(obj.quantity);
      }, 0);
      return _objectSpread({}, state, {
        addedItems: [itemToIncrease].concat(_toConsumableArray(otherItemsIncrease)),
        total: totalPrice
      });

    case DECREASE_ITEM:
      var itemToDecrease = state.items.find(function (item) {
        return item.id === parseInt(action.payload);
      });

      if (itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
        var otherItemsDecrease = state.addedItems.filter(function (item) {
          return item.id !== itemToDecrease.id;
        });
        var decreaseTotal = state.addedItems.reduce(function (acc, obj) {
          return acc + parseInt(obj.price) * parseInt(obj.quantity);
        }, 0); // let newTotalDecrease = otherItemsDecreaseTotal + itemToDecrease.price;
        // console.log(newTotalDecrease);

        return _objectSpread({}, state, {
          addedItems: [itemToDecrease].concat(_toConsumableArray(otherItemsDecrease)),
          total: decreaseTotal
        });
      } else {
        return state;
      }

    case DELETE_ITEM:
      var newListItems = state.addedItems.filter(function (item) {
        return item.id !== parseInt(action.payload);
      });
      var totalDelPrice = newListItems.reduce(function (acc, obj) {
        return acc + parseInt(obj.price) * parseInt(obj.quantity);
      }, 0);
      return _objectSpread({}, state, {
        addedItems: _toConsumableArray(newListItems),
        total: totalDelPrice
      });

    default:
      return state;
  }
}