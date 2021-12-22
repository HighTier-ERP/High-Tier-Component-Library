//PACKAGE IMPORTS
import PropTypes from "prop-types";
import "./TextArea.css";

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
// Reusable textarea component to speed up form development
/*----------------------------------------------------------------------------*/

const Textarea = ({
  classes,
  groupClasses,
  name,
  onChange,
  rows,
  type,
  value,
}) => {
  return (
    <div className={`form__group field ${groupClasses}`}>
      <textarea
        type={type}
        name={name}
        defaultValue={value}
        className={`form__field ${classes}`}
        onChange={onChange}
        rows={rows}
      />
      <label htmlFor={name} className="form__label text-capitalize">
        {name}
      </label>
    </div>
  );
};

TextArea.propTypes = {
  classes: PropTypes.string,
  groupClasses: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  rows: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default TextArea;
