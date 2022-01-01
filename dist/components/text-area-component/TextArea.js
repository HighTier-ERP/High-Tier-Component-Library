"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//PACKAGE IMPORTS
//COMPONENT DESCRIPTION

/*----------------------------------------------------------------------------*/
// Reusable textarea component to speed up form development.

/*----------------------------------------------------------------------------*/
const TextArea = _ref => {
  let {
    classes,
    groupClasses,
    name,
    onChange,
    rows,
    type,
    value
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "form__group field ".concat(groupClasses)
  }, /*#__PURE__*/_react.default.createElement("textarea", {
    type: type,
    name: name,
    defaultValue: value,
    className: "form__field ".concat(classes),
    onChange: onChange,
    rows: rows
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: name,
    className: "form__label text-capitalize"
  }, name));
};

var _default = TextArea;
exports.default = _default;