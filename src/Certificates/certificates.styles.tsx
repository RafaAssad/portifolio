import styled from "styled-components";

export const SectionWrapper = styled.div`
  padding: 60px 40px;
  font-family: "Courier New", Courier, monospace;
  @media (max-width: 768px) {
    padding: 40px 16px;
  }
`;

export const SectionTitle = styled.h1`
  font-size: 28px;
  text-align: center;
  margin-bottom: 48px;
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 32px;
  }
`;

export const CertsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 28px;
  max-width: 900px;
  margin: 0 auto;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const CertCard = styled.div`
  border: 1px solid currentColor;
  border-radius: 8px;
  padding: 24px;
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  cursor: pointer;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: #5d8aa8;
    border-radius: 8px 0 0 8px;
    transform: scaleY(0);
    transition: transform 0.3s ease;
    transform-origin: bottom;
  }
  &:hover::before {
    transform: scaleY(1);
  }
`;

export const CertIcon = styled.div`
  font-size: 32px;
  margin-bottom: 12px;
`;

export const CertTitle = styled.h3`
  font-size: 17px;
  margin: 0 0 8px 0;
  font-family: "Courier New", Courier, monospace;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const CertDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 16px 0;
  opacity: 0.85;
  font-family: "Courier New", Courier, monospace;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const CertType = styled.span`
  font-size: 11px;
  padding: 4px 10px;
  border: 1px solid #78866b;
  border-radius: 20px;
  color: #78866b;
  font-family: "Courier New", Courier, monospace;
  letter-spacing: 0.5px;
  margin-right: 8px;
`;

export const CertLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #5d8aa8;
  text-decoration: none;
  font-family: "Courier New", Courier, monospace;
  letter-spacing: 0.5px;
  transition: opacity 0.2s;
  margin-top: 12px;
  &:hover {
    opacity: 0.7;
    text-decoration: underline;
  }
`;
