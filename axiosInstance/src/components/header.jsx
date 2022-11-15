import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useContext } from "react";
import { darkModeContext } from "../App";

const Header = () => {
  const { setIsDarkMode } = useContext(darkModeContext);

  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/dashka22">Sign up</Link>
      <Form>
        <Form.Check
          onChange={(e) => setIsDarkMode(e.target.checked)}
          type="switch"
          id="custom-switch"
          label="dark mode"
        />
      </Form>
    </div>
  );
};

export default Header;
