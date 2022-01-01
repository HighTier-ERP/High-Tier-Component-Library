"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
  return /*#__PURE__*/React.createElement("div", {
    className: "form__group field ".concat(groupClasses)
  }, /*#__PURE__*/React.createElement("textarea", {
    type: type,
    name: name,
    defaultValue: value,
    className: "form__field ".concat(classes),
    onChange: onChange,
    rows: rows
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: name,
    className: "form__label text-capitalize"
  }, name));
};

var _default = TextArea;
exports.default = _default;