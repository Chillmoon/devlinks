import "./customInputStyles.css";

const CustomInput = ({ type, name, value, onChange, style, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      style={style}
      className="custom-input"
    />
  );
};

export default CustomInput;
