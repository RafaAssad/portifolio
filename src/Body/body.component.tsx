import * as S from "./body.styles";
import { useEffect, useState } from "react";
import { frontSkillsMock } from "../Templates/frontSkillsMock";
import { mobileSkillsMock } from "../Templates/mobileSkillsMock";
import { otherSkillsMock } from "../Templates/otherSkillsMock";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  Variants,
} from "framer-motion";
import WppButton from "../Buttons/wppButton.component";
import ResumeButton from "../Buttons/resumeButton.component";
import Projects from "../Projects/projects.component";
import Certificates from "../Certificates/certificates.component";

type AnimatedTextProps = {
  text: string;
  skillText: string;
};

const skillIconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 11 + i * 0.15,
      duration: 0.5,
      type: "spring",
      bounce: 0.4,
    },
  }),
};

const mobileSkillsVariants: Variants = {
  offscreen: { y: 300, opacity: 0 },
  onscreen: {
    y: -30,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

const otherSkillsVariants: Variants = {
  offscreen: { y: 300, opacity: 0 },
  onscreen: {
    y: -30,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

function Body({ text, skillText }: AnimatedTextProps) {
  const count = useMotionValue(0);
  const skillCount = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const skillRounded = useTransform(skillCount, (latest) => Math.round(latest));
  const displaytext = useTransform(rounded, (latest) => text.slice(0, latest));
  const displayskilltext = useTransform(skillRounded, (latest) =>
    skillText.slice(0, latest)
  );

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSkills(true), 12500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 7,
      ease: "linear",
    });
    return () => controls.stop();
  }, [count, text.length]);

  useEffect(() => {
    const skillControls = animate(skillCount, skillText.length, {
      type: "tween",
      duration: 4,
      ease: "linear",
      delay: 7,
    });
    return () => skillControls.stop();
  }, [skillCount, skillText.length]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <S.Wrapper>
      {/* Hero */}
      <S.ImgWrapper>
        <motion.img
          whileHover={{ scaleY: 1.1, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          src="/images/logos/welcome.png"
          alt="rafael"
          width={isSmallScreen ? "200" : "600"}
          height={isSmallScreen ? "100" : "300"}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </S.ImgWrapper>

      <S.DisplayText>
        <motion.span>{displaytext}</motion.span>
      </S.DisplayText>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 6,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <S.ButtonWrapper>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ResumeButton />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <WppButton />
          </motion.div>
        </S.ButtonWrapper>
      </motion.div>

      {/* Skills */}
      <motion.h1
        initial={{ x: -1500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 7, type: "spring", bounce: 0.3 }}
        style={{ fontSize: isSmallScreen ? "16px" : "24px", paddingTop: "4%" }}
      >
        My Skills
      </motion.h1>

      <S.DisplaySkillText>
        <motion.span>{displayskilltext}</motion.span>
      </S.DisplaySkillText>

      <S.SkillsWrapper>
        {frontSkillsMock.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={skillIconVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              scale: 1.2,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.4 },
            }}
          >
            <S.Skills {...item.skill} />
          </motion.div>
        ))}
      </S.SkillsWrapper>

      {showSkills && (
        <>
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }}>
            <motion.div variants={mobileSkillsVariants}>
              <S.MobileText>Mobile Development Enthusiast</S.MobileText>
              <S.MobileSkillsWrapper>
                {mobileSkillsMock.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.4 },
                    }}
                  >
                    <S.OtherSkills {...item.mobileSkill} />
                  </motion.div>
                ))}
              </S.MobileSkillsWrapper>
            </motion.div>
          </motion.div>

          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }}>
            <motion.div variants={otherSkillsVariants}>
              <h2 style={{ fontSize: isSmallScreen ? "14px" : "18px" }}>
                Other Skills
              </h2>
              <S.MobileSkillsWrapper>
                {otherSkillsMock.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.4 },
                    }}
                  >
                    <S.OtherSkills {...item.otherSkill} />
                  </motion.div>
                ))}
              </S.MobileSkillsWrapper>
            </motion.div>
          </motion.div>
        </>
      )}

      {/* Dividers + New Sections */}
      <S.SectionDivider />
      <Projects />
      <S.SectionDivider />
      <Certificates />
    </S.Wrapper>
  );
}

export default Body;
