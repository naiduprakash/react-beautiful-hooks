"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useBoolean = useBoolean;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

var _useToggle = require("../useToggle");

function useBoolean() {
  let initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  const [value, toggleValue] = (0, _useToggle.useToggle)(initialState);
  const on = (0, _react.useCallback)(() => {
    toggleValue(true);
  }, [toggleValue]);
  const off = (0, _react.useCallback)(() => {
    toggleValue(false);
  }, [toggleValue]);
  const toggle = (0, _react.useCallback)(() => {
    toggleValue();
  }, [toggleValue]);
  return [value, {
    on,
    off,
    toggle
  }];
}