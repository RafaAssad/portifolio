import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  //color: #d1d1d1;
  font-family: "Courier New", Courier, monospace;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    text-align: start;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding:2% 0% 7% 0%;
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 40px;
  margin: 0% 10% 0% 10%;
  @media (max-width: 768px) {
    margin: 0;
  }
`;
export const MobileSkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 40px;
`;

export const DisplayText = styled.h2`
margin: 0 150px 0 150px;
font-size: 18px;
@media (max-width: 768px) {
    font-size: 14px;
    margin: 0;
  }
`;

export const DisplaySkillText = styled.h2`
margin: 0 150px 0 150px;
font-size: 18px;
@media (max-width: 768px) {
    font-size: 14px;
    margin: 0;
  }
`;

export const MobileText = styled.h2`
font-size: 18px;
padding-top: 5%;
@media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Skills = styled.img`
  &:hover {
    transform: scale(1.1);
  }
`;

export const OtherSkills = styled.img`
  padding: 0 10px 0 10px;
  &:hover {
    transform: scale(1.1);
  }
`;
