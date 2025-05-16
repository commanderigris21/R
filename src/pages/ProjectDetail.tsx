import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const ProjectDetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #4ecca3;
  text-decoration: none;
  margin-bottom: 2rem;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }

  &:before {
    content: '←';
    margin-right: 0.5rem;
  }
`;

const ProjectTitle = styled.h1`
  font-size: 3rem;
  color: #e6f1ff;
  margin-bottom: 1.5rem;
`;

const ProjectImage = styled.div<{ bg?: string }>`
  width: 100%;
  height: 400px;
  background-color: #172a45;
  border-radius: 5px;
  margin-bottom: 2rem;
  background-size: cover;
  background-position: center;
  ${({ bg }) => bg && `background-image: url(${bg});`}
`;

const ProjectContent = styled.div`
  background-color: #172a45;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
`;

const ProjectDescription = styled.div`
  color: #8892b0;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;

  p {
    margin-bottom: 1.5rem;
  }

  a {
    color: #4ecca3;
    text-decoration: underline;
  }
`;

const TechStack = styled.div`
  margin-bottom: 2rem;

  h3 {
    font-size: 1.5rem;
    color: #e6f1ff;
    margin-bottom: 1rem;
  }
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const TechTag = styled.span`
  background-color: rgba(78, 204, 163, 0.1);
  color: #4ecca3;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  font-size: 0.9rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ProjectLink = styled.a`
  display: inline-block;
  background-color: transparent;
  color: #4ecca3;
  border: 1px solid #4ecca3;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(78, 204, 163, 0.1);
    transform: translateY(-3px);
  }
`;

interface RouteParams {
  id: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  imageBackground?: string; // changed from imageColor
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Introvise-Your AI Interviewer',
    description: 'A fully responsive e-commerce platform.',
    technologies: ['React', 'Python', 'SpringBoot', 'MySQL'],
    liveLink: 'https://project1.com',
    githubLink: 'https://github.com/commanderigris21/IntroVise',
    imageBackground: '/SS.png', 
    fullDescription: `
# 🎤 Introvise – AI-Powered Interview Web App

**Introvise** is a sleek, frontend-only React application that simulates interviews using AI and generates personalized, downloadable PDF reports based on responses.

---

## 🚀 Features

- 🤖 AI-driven interview simulation  
- 📄 Automatic generation of interview results in downloadable PDF format  
- ⚡ Fast and responsive UI powered by React  
- 🎯 Designed to enhance user experience for both candidates and evaluators

---

## 🛠️ Tech Stack

- ⚛️ React (JavaScript)  
- 🧾 jsPDF for PDF generation  
- 🎨 Styled Components and CSS  
- 🧠 Python & Spring Boot for backend processing  

---

[🎥 Watch the Video](https://youtu.be/3xorPpc4Ud8?si=RdL2HpUNjJBzCxdd)
`,
  },
  {
    id: 2,
    title: 'NIRAMAY',
    description: 'Maternal Care App for Rural India to empower pregnant women and ASHA care workers.',
    technologies: ['React Native', 'Spring Boot', 'MySQL', 'Python'],
    liveLink: 'https://www.youtube.com/watch?v=4bddoCV_UKQ',
    githubLink: 'https://github.com/commanderigris21/introvise', // Replace with actual repo if different
    imageBackground: '/niramay_logo.png',
    fullDescription: `
## NIRAMAY

![Logo](Assets/niramay_logo.png)

Maternal Care App for Rural India to empower pregnant women and ASHA care workers.

---

This project is a native mobile application aimed at improving maternal healthcare in rural India. It digitizes the existing manual process carried out by ASHA workers (Accredited Social Health Activists) to track pregnant women's health data. By enhancing the existing system, the app ensures timely medical intervention, personalized care, and reduces data loss. The app includes features such as:

- A Primary and Secondary survey system for registering and analyzing pregnant women's health data.
- AI-powered health risk classification (High, Moderate, Low).
- Personalized diet suggestions based on nutritional requirements.
- Emergency contact features for urgent medical assistance.
- Multi-language support (Hindi and English).

---

### 🛠️ Tech Stack

- Frontend: React Native
- Backend: Spring Boot
- Database: MySQL
- Machine Learning: Python

---

### 🚀 Features

- Digitized Health Tracking: ASHA workers can register health data and get preliminary AI-driven suggestions.
- AI Model for Risk Classification: The app suggests steps like blood tests, sonography based on AI analysis.
- Personalized Diet Suggestions: AI analyzes data to suggest localized dietary improvements for pregnant women.
- Emergency Support: Instant contact with ASHA workers and PHC doctors in case of complications.
- Multi-language Support: The app supports Hindi and English for ease of use by rural communities.

---

### DEMO OF THE APP:

[![Watch the demo](https://img.youtube.com/vi/4bddoCV_UKQ/0.jpg)](https://www.youtube.com/watch?v=4bddoCV_UKQ)

---

## 📦 Installation

\`\`\`bash
git clone https://github.com/commanderigris21/introvise.git
cd niramay
npm install
npm run dev
\`\`\`
`
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing projects and skills with a modern, responsive design.',
    technologies: ['React', 'Styled Components', 'TypeScript', 'Vercel'],
    liveLink: 'https://your-portfolio-link.com', // Replace with your actual portfolio link
    githubLink: 'https://github.com/username/portfolio', // Replace with your actual GitHub repo
    imageBackground: '/image.png', // Update path if needed
    fullDescription: `
## Portfolio Website

![Portfolio Screenshot](/image.png)

A modern, responsive personal portfolio website to showcase my projects, skills, and experience as a web developer.

---

### 🌟 Overview

This portfolio is designed to provide a seamless and engaging experience for visitors. It highlights my best work, technical skills, and background, while making it easy for potential employers and collaborators to get in touch.

---

### 🚀 Features

- **Responsive Design:** Looks great on all devices, from desktops to smartphones.
- **Project Gallery:** Interactive cards for each project with detailed descriptions and links.
- **About Me Section:** A brief introduction and background.
- **Contact Form:** Easy way for visitors to reach out.
- **Smooth Animations:** Subtle transitions and hover effects for a polished feel.
- **Dark Mode:** Comfortable viewing in any environment.

---

### 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Styled Components
- **Deployment:** Vercel
- **Other:** React Router, Formspree (for contact form)

---

### 📸 Preview

![Portfolio Preview](/image.png)

---

### 📬 Contact

Feel free to connect with me via the contact form on the website or through my social links!

---

[🌐 Visit Portfolio](https://your-portfolio-link.com)
`
  },
  // ... other projects as before
];

const ProjectDetail: React.FC = () => {
 const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <ProjectDetailContainer>
        <BackLink to="/projects">Back to Projects</BackLink>
        <h2>Project not found</h2>
      </ProjectDetailContainer>
    );
  }

  return (
    <ProjectDetailContainer>
      <BackLink to="/projects">Back to Projects</BackLink>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectImage bg={project.imageBackground} />
      <ProjectContent>
        <ProjectDescription>
          <ReactMarkdown>{project.fullDescription || project.description}</ReactMarkdown>
        </ProjectDescription>

        <TechStack>
          <h3>Technologies Used</h3>
          <TechTags>
            {project.technologies.map((tech, index) => (
              <TechTag key={index}>{tech}</TechTag>
            ))}
          </TechTags>
        </TechStack>

        <ProjectLinks>
          <ProjectLink href={project.liveLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </ProjectLink>
          <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </ProjectLink>
        </ProjectLinks>
      </ProjectContent>
    </ProjectDetailContainer>
  );
};

export default ProjectDetail;
