import Button from "./Button";
import "./../styles/nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <h2>Logo</h2>
      </div>
      <div className="menus">
        <div className="menu">
          <p>Home</p>
        </div>
        <div className="menu">
          <p>About</p>
        </div>
        <div className="menu">
          <p>Contact</p>
        </div>
        <div className="menu">
          <p>Services</p>
        </div>
      </div>
      <div className="btns">
        <Button text={"Signup"} bgColor={"#B1B1B1"} color={"#333"} />
        <Button text={"Login"} />
      </div>
    </nav>
  );
};

export default Nav;
