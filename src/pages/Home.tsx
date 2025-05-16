import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4vw;
  padding: 0 2vw;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
    padding: 0 1vw;
  }
`;

const glowAnimation = `
  @keyframes text-glow {
    0% {
      text-shadow: 0 0 8px #4ecca3, 0 0 16px #4ecca3, 0 0 32px #4ecca333;
    }
    50% {
      text-shadow: 0 0 24px #4ecca3, 0 0 48px #4ecca3cc, 0 0 96px #4ecca3cc;
    }
    100% {
      text-shadow: 0 0 8px #4ecca3, 0 0 16px #4ecca3, 0 0 32px #4ecca333;
    }
  }
`;

const Greeting = styled(motion.h2)`
  color: #4ecca3;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: #e6f1ff;
    animation: text-glow 1.2s infinite alternate;
  }
  ${glowAnimation}
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #e6f1ff;
  transition: color 0.3s;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  &:hover {
    color: #4ecca3;
    animation: text-glow 1.2s infinite alternate;
  }
  ${glowAnimation}
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: #8892b0;
  margin-bottom: 2rem;
  transition: color 0.3s;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  &:hover {
    color: #4ecca3;
    animation: text-glow 1.2s infinite alternate;
  }
  ${glowAnimation}
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #8892b0;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 2rem;

  &:hover {
    color: #4ecca3;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: transparent;
  color: #4ecca3;
  border: 1px solid #4ecca3;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(78, 204, 163, 0.1);
    transform: translateY(-3px);
  }
`;

const SocialSection = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialIcon = styled.a`
  color: #8892b0;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #4ecca3;
    transform: translateY(-3px);
  }
`;

const ImageWrapper = styled(motion.div)`
  flex: 1 1 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  height: 100vh;
  position: relative;

  @media (max-width: 900px) {
    width: 100vw;
    height: auto;
    margin-bottom: 2rem;
  }
`;

const StyledImage = styled.img`
  width: 340px;
  height: 340px;
  border-radius: 50%;
  box-shadow: 0 0 80px 10px #4ecca3cc, 0 0 0 10px #0a192f;
  position: relative;
  z-index: 2;
  animation: float 3.5s ease-in-out infinite;

  &::after {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 380px;
    height: 380px;
    border-radius: 50%;
    background: conic-gradient(
      #4ecca3 0deg 90deg,
      #1a1a2e 90deg 180deg,
      #4ecca3 180deg 270deg,
      #1a1a2e 270deg 360deg
    );
    filter: blur(32px);
    opacity: 0.7;
    z-index: 1;
    animation: spin 6s linear infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-24px); }
  }

  @keyframes spin {
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }

  @media (max-width: 900px) {
    width: 60vw;
    max-width: 320px;
    height: auto;
  }
`;

const ContentWrapper = styled(motion.div)`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  padding: 0 5vw;
  max-width: none;
  width: 100%;

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
    height: auto;
    padding: 0 2vw;
  }
`;

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 10 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', duration: 1.2 } },
  hover: { scale: 1.1, rotate: 5, boxShadow: "0 10px 40px rgba(78, 204, 163, 0.5)" },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    backgroundColor: "#4ecca3",
    color: "#1a1a2e",
    transition: { duration: 0.3 },
  },
};

const Home: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <HeroSection as={motion.section} variants={containerVariants}>
        <ImageWrapper
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <StyledImage src="/logo2.png" alt="Logo" />
        </ImageWrapper>
        <ContentWrapper variants={containerVariants}>
          <Greeting as={motion.h2} variants={itemVariants}>
            Hi, my name is
          </Greeting>
          <Name as={motion.h1} variants={itemVariants}>
            Khushant.
          </Name>
          <Title as={motion.h2} variants={itemVariants}>
            I build things for the web.
          </Title>
          <Description as={motion.p} variants={itemVariants}>
            I'm a web developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on creating accessible, human-centered products using 
            HTML, CSS, JavaScript, React, TypeScript, and Angular.
          </Description>
          <CTAButton
            as={motion.a}
            variants={itemVariants}
            whileHover={{ scale: 1.08, backgroundColor: "#4ecca3", color: "#1a1a2e" }}
            href="/contact"
          >
            Get In Touch
          </CTAButton>
          <SocialSection as={motion.div} variants={itemVariants}>
            <SocialIcon
              as={motion.a}
              whileHover={{ scale: 1.2, color: "#4ecca3" }}
              href="https://github.com/commanderigris21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </SocialIcon>
            <SocialIcon
              as={motion.a}
              whileHover={{ scale: 1.2, color: "#4ecca3" }}
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialIcon>
            <SocialIcon
              as={motion.a}
              whileHover={{ scale: 1.2, color: "#4ecca3" }}
              href="https://instagram.com/notkhush.ant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </SocialIcon>
            <SocialIcon
              as={motion.a}
              whileHover={{ scale: 1.2, color: "#4ecca3" }}
              href="https://youtube.com/@l0ser2108"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </SocialIcon>
          </SocialSection>
        </ContentWrapper>
      </HeroSection>
    </motion.div>
  );
};

export default Home;