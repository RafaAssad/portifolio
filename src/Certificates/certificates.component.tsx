import * as S from "./certificates.styles";
import { motion, Variants } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const certificates = [
  {
    icon: "📝",
    type: "Article",
    title: "Integrate Datadog with Next.js",
    description:
      "Artigo publicado no Medium sobre como integrar o Datadog com aplicações Next.js para monitoramento e observabilidade em produção.",
    link: "https://rafaassad.medium.com/integrate-datadog-with-nextjs-591fe126e339",
    linkLabel: "Ler no Medium",
  },
  {
    icon: "🏅",
    type: "Certification",
    title: "Microsoft AI-900",
    description:
      "Certificação Microsoft Azure AI Fundamentals. Demonstra conhecimento em conceitos de IA, machine learning e serviços cognitivos do Azure.",
    link: "https://learn.microsoft.com/pt-br/users/rafaelassad-8939/credentials/5c0705b4dd82b1fd",
    linkLabel: "Ver Credencial",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
    rotateY: -8,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.9,
    },
  },
};

function Certificates() {
  return (
    <S.SectionWrapper>
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <S.SectionTitle>Certificates & Contributions</S.SectionTitle>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <S.CertsGrid>
          {certificates.map((cert, index) => (
            <motion.div key={index} variants={cardVariants}>
              <S.CertCard
                as={motion.div}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.25 },
                }}
              >
                <S.CertIcon>{cert.icon}</S.CertIcon>
                <S.CertType>{cert.type}</S.CertType>
                <S.CertTitle style={{ marginTop: 12 }}>
                  {cert.title}
                </S.CertTitle>
                <S.CertDescription>{cert.description}</S.CertDescription>
                <S.CertLink
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cert.linkLabel} <FiExternalLink />
                </S.CertLink>
              </S.CertCard>
            </motion.div>
          ))}
        </S.CertsGrid>
      </motion.div>
    </S.SectionWrapper>
  );
}

export default Certificates;
