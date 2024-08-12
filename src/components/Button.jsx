/* eslint-disable react/prop-types */
const Button = ({ text, bgColor, color }) => {
  return (
    <button
      style={{
        ...styles.button,
        color: color ? color : "white",
        backgroundColor: bgColor ? bgColor : "blue",
      }}
    >
      {text}
    </button>
  );
};

const styles = {
  button: {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
};

export default Button;

const myDetails = {
  name: "John",
  age: 12,
  complexion: "dark",
};

const myDetailedDetails = {
  height: "6ft",
  ...myDetails,
  weight: "70kg",
};

console.log(myDetails);
console.log(myDetailedDetails);
