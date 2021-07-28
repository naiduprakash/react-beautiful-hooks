"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useToggle = useToggle;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

function useToggle() {
  let initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  const [value, setValue] = (0, _react.useState)(initialState);
  const toggle = (0, _react.useCallback)(value => {
    if (value !== undefined) {
      setValue(value);
      return;
    }

    setValue(prev => !prev);
  }, []);
  return [value, toggle];
}