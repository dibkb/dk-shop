"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = _interopRequireDefault(require("firebase/compat/app"));

require("firebase/compat/firestore");

require("firebase/compat/database");

require("firebase/compat/auth");

require("firebase/compat/storage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { initializeApp } from "firebase/app";
var firebaseConfig = {
  apiKey: "AIzaSyBRDUIlxjSj6y6opiv_jLDN4K-Bt_f-Huo",
  authDomain: "dktechshop.firebaseapp.com",
  projectId: "dktechshop",
  storageBucket: "dktechshop.appspot.com",
  messagingSenderId: "763793715999",
  appId: "1:763793715999:web:0f841c62e29f372642f62a"
};

_app["default"].initializeApp(firebaseConfig);

_app["default"].firestore();

var _default = _app["default"];
exports["default"] = _default;