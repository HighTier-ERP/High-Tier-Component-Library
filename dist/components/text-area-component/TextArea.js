"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./TextArea.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//PACKAGE IMPORTS
//COMPONENT DESCRIPTION

/*----------------------------------------------------------------------------*/
// Reusable textarea component to speed up form development

/*----------------------------------------------------------------------------*/
const Textarea = _ref => {
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

TextArea.propTypes = {
  classes: _propTypes.default.string,
  groupClasses: _propTypes.default.string,
  name: _propTypes.default.string,
  onChange: _propTypes.default.func,
  rows: _propTypes.default.number,
  type: _propTypes.default.string,
  value: _propTypes.default.string
};
var _default = TextArea;
exports.default = _default;