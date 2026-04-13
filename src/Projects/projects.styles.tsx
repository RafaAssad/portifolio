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

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  max-width: 1100px;
  margin: 0 auto;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const ProjectCard = styled.div`
  border: 1px solid currentColor;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 8px;
    background: linear-gradient(
      135deg,
      rgba(93, 138, 168, 0.15) 0%,
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  &:hover::after {
    opacity: 1;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid currentColor;
  @media (max-width: 768px) {
    height: 160px;
  }
`;

export const ProjectContent = styled.div`
  padding: 20px;
`;

export const ProjectTitle = styled.h3`
  font-size: 18px;
  margin: 0 0 8px 0;
  font-family: "Courier New", Courier, monospace;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 16px 0;
  opacity: 0.85;
  font-family: "Courier New", Courier, monospace;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

export const Tag = styled.span`
  font-size: 11px;
  padding: 4px 10px;
  border: 1px solid #5d8aa8;
  border-radius: 20px;
  color: #5d8aa8;
  font-family: "Courier New", Courier, monospace;
  letter-spacing: 0.5px;
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #5d8aa8;
  text-decoration: none;
  font-family: "Courier New", Courier, monospace;
  letter-spacing: 0.5px;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
    text-decoration: underline;
  }
`;
