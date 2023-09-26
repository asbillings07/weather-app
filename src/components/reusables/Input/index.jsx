import PropTypes from "prop-types";
import { InputLabel, TextInput, ErrorMessage, ErrorWrapper } from "./styles";

export function Input({
  placeholder = "",
  initialValue = "",
  defaultValue = null,
  label = null,
  type = "text",
  errorMessage = "",
  hasError = null,
  domID = null,
  disabled = false,
  name = null,
  onChange = () => false,
  ...restProps
}) {
  if (label && !domID) {
    console.warn('Please enter a valid "domID" prop into Input component');
  }

  return (
    <ErrorWrapper hasError={hasError}>
      {label ? (
        <InputLabel id={`${name}_label`} htmlFor={domID} {...restProps}>
          {label}
        </InputLabel>
      ) : null}

      <TextInput
        id={domID}
        defaultValue={defaultValue}
        initialValue={initialValue}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        {...restProps}
      />
      {hasError ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </ErrorWrapper>
  );
}

Input.propTypes = {
  cols: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  domID: PropTypes.string.isRequired,
  initialValue: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  errorMessage: PropTypes.string,
  hasError: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  rows: PropTypes.string,
  type: PropTypes.string,
};
