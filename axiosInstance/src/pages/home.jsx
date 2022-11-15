import { useContext } from "react";
import { darkModeContext } from "../App";

const Home = () => {
  const { isDarkMode } = useContext(darkModeContext);

  const styles = {
    box: {
      width: 200,
      height: 200,
      backgroundColor: isDarkMode ? "blue" : "red",
    },
  };
  return <div style={styles.box}>home color box</div>;
};

export default Home;
