function Button({ onClickFunc, btnName }) {
  return <button onClick={onClickFunc}>{btnName}</button>;
}

export default Button;
