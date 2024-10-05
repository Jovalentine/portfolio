import React, { useState } from 'react';
import './App.css'; // Ensure you have styles imported

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [sectionAnimation, setSectionAnimation] = useState('fadeInUp'); // Default animation
  const [menuOpen, setMenuOpen] = useState(false); // Hamburger menu state

  // State for the contact form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 200) {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' }); // Clear form
        } else {
          alert('Failed to send message.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error sending message.');
      });
  };

  const handleNavClick = (section) => {
    setMenuOpen(false); // Close menu after navigating
    setSectionAnimation('fadeOut');
    setTimeout(() => {
      setActiveSection(section);
      setSectionAnimation('fadeInUp');
    }, 500); // Delay matches the animation duration
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header>
        <h1>Personal Portfolio</h1>

        {/* Hamburger Icon */}
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={menuOpen ? 'open' : ''}>
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
      </header>

      {/* Content Sections */}
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
            I am also Batman, the Dark Knight of Gotham City. My journey began in tragedy...
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
          <ul className="projects-list">
            <li className="project-item">
              <h3>First React</h3>
              <p>This is my first project built using React. It demonstrates my foundational skills in building interactive UIs.</p>
              <a href="http://localhost:3001/" target="_blank" rel="noopener noreferrer">
                <button className="view-project-btn">View Project</button>
              </a>
            </li>
            <li className="project-item">
              <h3>Portfolio</h3>
              <p>My personal portfolio showcasing my skills, projects, and experience. It serves as a hub for all my work.</p>
              <a href="http://localhost:3000/#projects" target="_blank" rel="noopener noreferrer">
                <button className="view-project-btn">View Project</button>
              </a>
            </li>
          </ul>
        </section>
      )}

      {activeSection === 'skills' && (
        <section id="skills" className={sectionAnimation}>
          <h2>Skills</h2>
          <p>Combat training, detective skills, technology expert, strategic planning.</p>
          <ul>
            <li>Physical Abilities</li>
            <li>Intellectual Abilities</li>
            <li>Psychological Abilities</li>
          </ul>
        </section>
      )}

      {activeSection === 'contact' && (
        <section id="contact" className={sectionAnimation}>
          <h2>Contact Me</h2>
          <p className="contact-description glow">
            I would love to hear from you! Please fill out the form below, and I will get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </section>
      )}

      <footer>
        <p>&copy; 2024 Wayne Foundation. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
