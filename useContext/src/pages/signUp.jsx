import { useContext } from "react";
import { darkModeContext } from "../App";

const SignUp = () => {
  const { isDarkMode } = useContext(darkModeContext);

  const styles = {
    box: {
      width: 200,
      height: 200,
      backgroundColor: isDarkMode ? "blue" : "red",
    },
  };

  return <div style={styles.box}> sign up color box</div>;
};

export default SignUp;
