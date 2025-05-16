import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #e6f1ff;
  margin-bottom: 2rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 70px;
    height: 4px;
    background-color: #4ecca3;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div`
  p {
    color: #8892b0;
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
`;

const SkillsContainer = styled.div`
  background-color: #172a45;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
`;

const SkillsTitle = styled.h3`
  font-size: 1.5rem;
  color: #e6f1ff;
  margin-bottom: 1.5rem;
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem 1rem;
  padding: 0;
  margin: 20px 0 0 0;
  overflow: hidden;
  list-style: none;
`;

const SkillItem = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-size: 1rem;
  color: #8892b0;
  
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: #4ecca3;
    font-size: 1rem;
    line-height: 20px;
  }
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <SectionTitle>About Me</SectionTitle>
      <AboutContent>
        <AboutText>
          <p>
            Hello! I'm Khushant, a passionate web developer with a love for creating beautiful, 
            functional, and user-friendly websites and applications.
          </p>
          <p>
            My journey in web development started several years ago, and since then, 
            I've been continuously learning and improving my skills. I enjoy the process 
            of bringing ideas to life in the browser and solving complex problems with elegant solutions.
          </p>
          <p>
            I specialize in front-end development, creating responsive and interactive user interfaces 
            that provide exceptional user experiences. I'm also comfortable working with back-end technologies 
            to build full-stack applications.
          </p>
          <p>
            When I'm not coding, you can find me reading tech blogs, exploring new technologies, 
            or contributing to open-source projects. I'm always open to new opportunities and challenges 
            that allow me to grow as a developer.
          </p>
        </AboutText>
        <SkillsContainer>
          <SkillsTitle>Skills & Technologies</SkillsTitle>
          <SkillsList>
            <SkillItem>HTML5</SkillItem>
            <SkillItem>CSS3</SkillItem>
            <SkillItem>JavaScript (ES6+)</SkillItem>
            <SkillItem>TypeScript</SkillItem>
            <SkillItem>React</SkillItem>
            <SkillItem>Angular</SkillItem>
            <SkillItem>Responsive Design</SkillItem>
            <SkillItem>UI/UX Design</SkillItem>
            <SkillItem>Git & GitHub</SkillItem>
            <SkillItem>RESTful APIs</SkillItem>
            <SkillItem>Node.js</SkillItem>
            <SkillItem>Express</SkillItem>
          </SkillsList>
        </SkillsContainer>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;