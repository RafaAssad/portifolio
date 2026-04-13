import { Checkbox } from "../Checkbox/checkbox.component";
import * as S from "./header.styles";
import { useState } from "react";
import { motion } from "framer-motion";

let navigateToLinkedIn = () => {
  window.open("https://www.linkedin.com/in/rafaelassad/", "_blank");
};

let mailToMe = () => {
  window.location.href = "mailto:rafaassad@hotmail.com";
};

function Header() {
  const [checked, setChecked] = useState("Dark");

  const handleCheckboxChange = (name: string) => {
    setChecked(name);

    const resBorder = document.querySelector(".resButton") as HTMLElement;
    if (resBorder) {
      resBorder.style.borderColor = name === "Dark" ? "#d1d1d1" : "#000000";
    }

    const wppBorder = document.querySelector(".wppButton") as HTMLElement;
    if (wppBorder) {
      wppBorder.style.borderColor = name === "Dark" ? "#d1d1d1" : "#000000";
    }

    const colorLabel = document.querySelector(
      ".MuiTypography-body1"
    ) as HTMLElement;
    if (colorLabel) {
      colorLabel.style.transition = "color 0.4s";
      colorLabel.style.color = name === "Dark" ? "#d1d1d1" : "#000000";
    }

    const appElement = document.querySelector(".App") as HTMLElement;
    if (appElement) {
      appElement.style.transition = "background-color 0.4s, color 0.4s";
      appElement.style.setProperty(
        "--c",
        name === "Dark" ? "#d1d1d1" : "#000000"
      );
    }

    document.body.style.transition = "background-color 0.4s, color 0.4s";
    document.body.style.backgroundColor =
      name === "Dark" ? "#1d1d20" : "hsl(0, 0%, 90%)";
    document.body.style.color = name === "Dark" ? "#d1d1d1" : "#000000";

    const image = document.querySelector("img");
    if (image) {
      image.style.transition = "src 0.4s";
      image.src =
        name === "Dark"
          ? "/images/logos/welcome.png"
          : "/images/logos/welcomeBlack.png";
    }
  };

  return (
    <S.Wrapper>
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <S.CheckboxWrapper>
          <Checkbox
            isChecked={checked === "Dark"}
            handleChange={() => handleCheckboxChange("Dark")}
            label={"Dark"}
            name={"Dark"}
          />
          <Checkbox
            isChecked={checked === "Light"}
            handleChange={() => handleCheckboxChange("Light")}
            label={"Light"}
            name={"Light"}
          />
        </S.CheckboxWrapper>
      </motion.div>
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <S.SocialWrapper>
          <motion.div whileHover={{ scale: 1.15, rotate: 5 }} whileTap={{ scale: 0.9 }}>
            <S.EmailButton onClick={mailToMe} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.15, rotate: -5 }} whileTap={{ scale: 0.9 }}>
            <S.LinkedInButton onClick={navigateToLinkedIn} />
          </motion.div>
        </S.SocialWrapper>
      </motion.div>
    </S.Wrapper>
  );
}

export default Header;
