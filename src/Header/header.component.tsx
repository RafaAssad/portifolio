import { Checkbox } from "../Checkbox/checkbox.component";
import * as S from "./header.styles";
import { useState } from "react";

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


    const wppBorder = document.querySelector(".wppButton") as HTMLElement;
    if(wppBorder) {
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
      <S.SocialWrapper>
        <S.EmailButton onClick={mailToMe} />
        <S.LinkedInButton onClick={navigateToLinkedIn} />
      </S.SocialWrapper>
    </S.Wrapper>
  );
}

export default Header;
