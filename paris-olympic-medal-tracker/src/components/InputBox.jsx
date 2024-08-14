function InputBox({ name, type, placeholder, value, onChangeFunc }) {
  return (
    <div>
      <h4>{name}</h4>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeFunc}
      />
    </div>
  );
}

export default InputBox;
