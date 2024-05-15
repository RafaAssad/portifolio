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

type AnimatedTextProps = {
  text: string;
  skillText: string;
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

  setInterval(() => setShowSkills(true), 12500);

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 7,
      ease: "linear",
    });
    return () => {
      controls.stop();
    };
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

  const mobileSkillsVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: -30,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const otherSkillsVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: -30,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <S.Wrapper>
      <S.ImgWrapper>
        <motion.img
          whileHover={{ scaleY: 1.1 }}
          src="/images/logos/welcome.png"
          alt="rafael"
          width={isSmallScreen ? "200" : "600"}
          height={isSmallScreen ? "100" : "300"}
        />
      </S.ImgWrapper>

      <S.DisplayText>
        <motion.span>{displaytext}</motion.span>
      </S.DisplayText>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 4.0,
          delay: 6,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <S.ButtonWrapper>
          <ResumeButton />
          <WppButton />
        </S.ButtonWrapper>
      </motion.div>
      <motion.h1
        initial={{ x: -1500 }}
        animate={{ x: 0 }}
        transition={{ duration: 2, delay: 7 }}
        style={{ fontSize: isSmallScreen ? "16px" : "24px", paddingTop: "4%" }}
      >
        My Skills
      </motion.h1>
      <S.DisplaySkillText>
        <motion.span>{displayskilltext}</motion.span>
      </S.DisplaySkillText>
      <S.SkillsWrapper>
        {frontSkillsMock.map((item, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 4.0,
                delay: 11,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              key={index}
            >
              <S.Skills {...item.skill} />
            </motion.div>
          );
        })}
      </S.SkillsWrapper>
      {showSkills && (
        <>
          <motion.div initial="offscreen" whileInView="onscreen">
            <motion.div variants={mobileSkillsVariants}>
              <S.MobileText>Mobile Development Enthusiast</S.MobileText>{" "}
              <S.MobileSkillsWrapper>
                {mobileSkillsMock.map((item, index) => {
                  return (
                    <div key={index}>
                      <S.OtherSkills {...item.mobileSkill} />
                    </div>
                  );
                })}
              </S.MobileSkillsWrapper>
            </motion.div>
          </motion.div>
          <motion.div initial="offscreen" whileInView="onscreen">
            <motion.div variants={otherSkillsVariants}>
              <h2 style={{ fontSize: isSmallScreen ? "14px" : "18px" }}>
                Other Skills
              </h2>{" "}
              <S.MobileSkillsWrapper>
                {otherSkillsMock.map((item, index) => {
                  return (
                    <div key={index}>
                      <S.OtherSkills {...item.otherSkill} />
                    </div>
                  );
                })}
              </S.MobileSkillsWrapper>
            </motion.div>
          </motion.div>
        </>
      )}
    </S.Wrapper>
  );
}

export default Body;
