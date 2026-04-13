import * as S from "./projects.styles";
import { motion, Variants } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "IronTracker",
    description:
      "Aplicativo de treino para musculação. Crie treinos personalizados, registre séries e acompanhe sua evolução. 100% offline, publicado na Google Play Store.",
    image: null,
    tags: ["React Native", "Mobile", "Play Store"],
    link: "https://play.google.com/store/apps/details?id=com.irontracker.app",
    linkLabel: "Google Play",
    emoji: "🏋️",
  },
  {
    title: "Riffer - Banda de Rock",
    description:
      "Website desenvolvido para a banda de rock Riffer. Design moderno com experiência imersiva, apresentando a banda, músicas e agenda de shows.",
    image: null,
    tags: ["React", "Next.js", "Web"],
    link: "https://bandariffer.vercel.app/",
    linkLabel: "Visitar Site",
    emoji: "🎸",
  },
  {
    title: "Radar Gamer",
    description:
      "Primeiro aplicativo com descrição, curiosidades e datas previstas de lançamento de jogos de todas as plataformas. Interface intuitiva com busca e detalhes completos.",
    image: "/images/projects/radar-gamer.png",
    tags: ["Flutter", "Dart", "Mobile", "API"],
    link: null,
    linkLabel: null,
    emoji: "🎮",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.35,
      duration: 0.8,
    },
  },
};

function Projects() {
  return (
    <S.SectionWrapper>
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <S.SectionTitle>Projects</S.SectionTitle>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <S.ProjectsGrid>
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <S.ProjectCard
                as={motion.div}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {project.image ? (
                  <S.ProjectImage
                    src={project.image}
                    alt={project.title}
                  />
                ) : (
                  <div
                    style={{
                      height: 200,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 64,
                      borderBottom: "1px solid currentColor",
                      background: "rgba(93, 138, 168, 0.08)",
                    }}
                  >
                    {project.emoji}
                  </div>
                )}
                <S.ProjectContent>
                  <S.ProjectTitle>{project.title}</S.ProjectTitle>
                  <S.ProjectDescription>
                    {project.description}
                  </S.ProjectDescription>
                  <S.ProjectTags>
                    {project.tags.map((tag) => (
                      <S.Tag key={tag}>{tag}</S.Tag>
                    ))}
                  </S.ProjectTags>
                  {project.link && (
                    <S.ProjectLink
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.linkLabel} <FiExternalLink />
                    </S.ProjectLink>
                  )}
                </S.ProjectContent>
              </S.ProjectCard>
            </motion.div>
          ))}
        </S.ProjectsGrid>
      </motion.div>
    </S.SectionWrapper>
  );
}

export default Projects;
