import React, { useEffect, useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'hero';

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;

        if (sectionTop <= window.innerHeight / 2 && sectionTop + sectionHeight > window.innerHeight / 2) {
          currentSection = section.getAttribute('id') || '';
        }
      });

      setActiveSection(currentSection);
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsTransparent(window.scrollY < heroHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getNavLinkClass = (section: string) => {
    return activeSection === section ? 'nav-link active' : 'nav-link';
  };

  return (
    <header id="header" className={`fixed-top ${isTransparent ? 'transparent' : 'semi-transparent'}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo"><a href="#hero" className={getNavLinkClass('hero')}>Portfolio</a></h1>
        <nav id="navbar" className="navbar">
          <ul>
            <li><a className={getNavLinkClass('hero')} href="#hero">Intro</a></li>
            <li><a className={getNavLinkClass('about')} href="#about">Me</a></li>
            <li><a className={getNavLinkClass('services')} href="#services">Experience</a></li>
            <li><a className={getNavLinkClass('work')} href="#work">Projects</a></li>
            <li><a className={getNavLinkClass('blog')} href="#blog">Blog</a></li>
            <li><a className={getNavLinkClass('contact')} href="#contact">Contact</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
