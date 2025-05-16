import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProjectsContainer = styled.div`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background-color: #172a45;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
  }
`;

const ProjectImage = styled.div<{ bg?: string }>`
  height: 200px;
  background-color: #2d3748;
  background-size: cover;
  background-position: center;
  ${({ bg }) => bg && `background-image: url(${bg});`}
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #e6f1ff;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: #8892b0;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background-color: rgba(78, 204, 163, 0.1);
  color: #4ecca3;
  padding: 0.3rem 0.8rem;
  border-radius: 3px;
  font-size: 0.8rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: #e6f1ff;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border: 1px solid #4ecca3;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(78, 204, 163, 0.1);
  }
`;

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'IntroVise',
      description:
        'Introvise is a sleek, frontend-only React application that simulates interviews using AI and generates personalized, downloadable PDF reports based on responses.',
      technologies: ['React', 'Python', 'Java', 'MySQL'],
      githubLink: 'https://github.com/commanderigris21/IntroVise',
      imageBackground: '/SS.png', 
    },

    {
      id: 2,
      title: 'Niramay',
      description:'Maternal Care App for Rural India to empower pregnant women and ASHA care workers. Project Overview',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
      githubLink: 'https://github.com/commanderigris21/Niramay',
      imageBackground: '/niramay_logo.png', 
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description:
        'A personal portfolio website showcasing projects and skills with a modern, responsive design.',
      technologies: ['React', 'Styled Components'],
      liveLink: 'https://project4.com',
      githubLink: 'https://github.com/username/project4',
      imageBackground: '/image.png', // no image provided
    },
  ];

  return (
    <ProjectsContainer>
      <SectionTitle>My Projects</SectionTitle>
      <ProjectsGrid>
        {projects.map((project) => (
          <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none' }} key={project.id}>
            <ProjectCard>
              <ProjectImage bg={project.imageBackground} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.technologies.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  {project.liveLink && (
                    <ProjectLink href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </ProjectLink>
                  )}
                  {project.githubLink && (
                    <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          </Link>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
