import React, { useState } from 'react';
import './App.css'; // Ensure you have styles imported

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [sectionAnimation, setSectionAnimation] = useState('fadeInUp'); // Default animation

  const handleNavClick = (section) => {
    setSectionAnimation('fadeOut');
    setTimeout(() => {
      setActiveSection(section);
      setSectionAnimation('fadeInUp');
    }, 500); // Delay matches the animation duration
  };

  return (
    <div className="App">
      <header>
        <h1>Personal Portfolio</h1>
      </header>

      <nav>
        <ul>
          <li>
            <a href="#home" onClick={() => handleNavClick('home')}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={() => handleNavClick('about')}>About</a>
          </li>
          <li>
            <a href="#projects" onClick={() => handleNavClick('projects')}>Projects</a>
          </li>
          <li>
            <a href="#skills" onClick={() => handleNavClick('skills')}>Skills</a>
          </li>
          <li>
            <a href="#contact" onClick={() => handleNavClick('contact')}>Contact</a>
          </li>
        </ul>
      </nav>

      {activeSection === 'home' && (
        <section id="home" className={sectionAnimation}>
          <h2 className="glow">Mr. Bruce Wayne</h2>
          <p>CEO of Wayne Foundation</p>
          <img
            src="https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/23288182/rev_1_TBM_TRL_001_High_Res_JPEG.jpeg?quality=90&strip=all&crop=16.562087186262%2C0%2C66.875825627477%2C100&w=1080"
            alt="Bruce Wayne"
            className="header-image"
          />
          <p>
            I am Bruce Wayne, a name synonymous with wealth, privilege, and a certain kind of lifestyle. 
            The world sees me as a playboy, a philanthropist, and a businessman, but there's a side to me that few know. 
            I am also Batman, the Dark Knight of Gotham City. My journey began in tragedy. The murder of my parents, Thomas and Martha Wayne, left a void in my heart that nothing could fill.
          </p>
        </section>
      )}

      {activeSection === 'about' && (
        <section id="about" className={sectionAnimation}>
          <h2>About Me</h2>
          <p>
            I am Bruce Wayne, a business magnate, philanthropist, and the CEO of Wayne Foundation. 
            My mission is to leverage my resources to improve lives and promote social justice.
          </p>
        </section>
      )}

      {activeSection === 'projects' && (
        <section id="projects" className={sectionAnimation}>
          <h2>Projects</h2>
          <ul>
            <li>Wayne Enterprises</li>
            <li>Wayne Manor and the Batcave</li>
            <li>Batman Foundation</li>
            <li>Gotham City Police Department</li>
            <li>Gotham Restoration Initiative</li>
          </ul>
        </section>
      )}

      {activeSection === 'skills' && (
        <section id="skills" className={sectionAnimation}>
          <h2>Skills</h2>
          <p>Combat training, detective skills, technology expert, strategic planning.</p>
          <li>Physical Abilities</li>
          <li>Intellectual Abilities</li>
          <li>Psychological Abilities</li>
        </section>
      )}

      {activeSection === 'contact' && (
        <section id="contact" className={sectionAnimation}>
          <h2>Contact Me</h2>
          <p>Email: bruce.wayne@waynefoundation.org</p>
          <p>Github : </p>
        </section>
      )}

      <footer>
        <p>&copy; 2024 Wayne Foundation. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
