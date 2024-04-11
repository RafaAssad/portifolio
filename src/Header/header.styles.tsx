import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export const Wrapper = styled.div`
  font-family: "Courier New", Courier, monospace;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const SocialWrapper = styled.div`
  font-family: "Courier New", Courier, monospace;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 12px;
`;

export const CheckboxWrapper = styled.div`
  font-family: "Courier New", Courier, monospace;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 12px 12px 48px;
  @media (max-width: 768px) {
    padding: 12px;
  }
`;

export const Header = styled.div``;

export const LinkedInButton = styled(FaLinkedin)`
  height: 2.5em;
  width: 2.5em;
  padding: 12px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(0.9);
  }
  @media (max-width: 768px) {
    height: 2em;
    width: 2em;
  }
`;

export const EmailButton = styled(BiLogoGmail)`
  height: 2.5em;
  width: 2.5em;
  padding: 12px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(0.9);
  }
  @media (max-width: 768px) {
    height: 2em;
    width: 2em;
  }
`;
