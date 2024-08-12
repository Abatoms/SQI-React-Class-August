/* eslint-disable react/prop-types */
import Button from "./Button";
const Heading = ({ title, content, btnText }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{title}</h1>
      <p style={styles.content}>{content}</p>
      <div style={styles.btn}>
        <Button text={btnText} />
      </div>
    </div>
  );
};

export default Heading;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",
    height: "10vh",
  },

  title: {
    fontSize: "2rem",
    color: "blue",
  },

  content: {
    fontSize: "1.5rem",
    color: "B1B1B1",
  },

  btn: {
    width: "100px",
    maxWidth: "200px",
  },
};
