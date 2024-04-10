import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header/header.component";
import Body from "./Body/body.component";
import { motion } from "framer-motion";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
    },
  };

  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.0 }}
    >
      <Header />
      <Body
        text={
          "My name is Rafael Assad. I'm a software engineer based in Brazil, speciallizing in building exquisite digital experiences. I'm passionate about cutting-edge, pixel-perfect, beautifully designed interfaces and intuitively implemented UX."
        }
        skillText={
          "I like to take responsibility to craft aesthetic user experience using modern frontend architecture."
        }
      />
      {/* <motion.div
        className="cursor"
        variants={cursorVariants}
        animate="default"
      /> */}
    </motion.div>
  );
}

export default App;
