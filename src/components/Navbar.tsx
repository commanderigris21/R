import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #1a1a2e;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    justify-content: center;
    padding: 1.2rem 1rem;
  }
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #4ecca3;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #4ecca3;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.3rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #4ecca3;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 1001;

  span {
    height: 3px;
    width: 28px;
    background: #4ecca3;
    margin-bottom: 5px;
    border-radius: 2px;
    transition: 0.3s;
  }

  @media (max-width: 900px) {
    display: flex;
  }
`;

const MobileMenu = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(10, 25, 47, 0.97);
  z-index: 2000;
  padding: 0;
  transition: opacity 0.3s;
  gap: 2rem;

  a {
    color: #e6f1ff;
    text-decoration: none;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 1px;
    transition: color 0.2s;
    margin: 0;

    &:hover {
      color: #4ecca3;
    }
  }
`;

const MobileBar = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    position: absolute;
    left: 0;
    top: 0;
    padding: 1.2rem 1rem;
    background: #1a1a2e;
    z-index: 1002;
  }
`;

const CenterLogo = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    font-size: 1.8rem;
    font-weight: 700;
    color: #4ecca3;
    gap: 0.6rem;
  }
`;

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavContainer>
      {/* Desktop */}
      <Logo className="desktop-logo">
        <img
          src="/logo2.png"
          alt="Logo"
          style={{ height: '2.2rem', width: '2.2rem', borderRadius: '50%', objectFit: 'cover' }}
        />
        Portfolio.
      </Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <MobileMenu open={menuOpen}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink>
        <NavLink to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </MobileMenu>
      <SocialIcons>
        <SocialIcon href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </SocialIcon>
        <SocialIcon href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialIcon>
        <SocialIcon href="https://instagram.com/notkhush.ant" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </SocialIcon>
         <SocialIcon href="https://youtube.com/@l0ser2108" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </SocialIcon>

      </SocialIcons>

      {/* Mobile Bar */}
      <MobileBar>
        <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <CenterLogo>
          <img
            src="/logo2.png"
            alt="Logo"
            style={{ height: '2.2rem', width: '2.2rem', borderRadius: '50%', objectFit: 'cover' }}
          />
          Portfolio.
        </CenterLogo>
      </MobileBar>
    </NavContainer>
  );
};

export default Navbar;