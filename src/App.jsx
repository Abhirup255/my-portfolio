import { useEffect, useState } from "react";
import "./App.css";
import {
  Mail,
  Phone,
  Download,
  ArrowUpRight,
  Code2,
  Database,
  BriefcaseBusiness,
  GraduationCap,
  Award,
  Trophy,
  Languages,
  Camera,
  Menu,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profilePhoto from "./assets/profile.jpg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            AN<span>.</span>
          </a>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-socials">
            <a
              href="https://github.com/Abhirup255"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/abhirup-nandi-bb416b376/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
          <nav>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <div className="mobile-socials">
            <a
              href="https://github.com/Abhirup255"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/abhirup-nandi-bb416b376/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section" id="home">
          <div className="hero-content reveal reveal-left">
            <p className="eyebrow">
              COMPUTER SCIENCE & ENGINEERING
            </p>

            <h1>
              Abhirup
              <span>Nandi</span>
            </h1>

            <h2>Software Developer</h2>

            <p className="hero-description">
              Computer Science and Engineering graduate with hands-on
              experience in Java, Python, C#, .NET, SQL and Microsoft Power
              Platform. Passionate about building reliable software and
              solving real-world problems through technology.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
                <ArrowUpRight size={19} />
              </a>

              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/Abhirup255"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/abhirup-nandi-bb416b376/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
                LinkedIn
              </a>
            </div>
          </div>

          {/* PROFILE CARD */}
          <div className="hero-profile reveal reveal-right">
            <div className="profile-card">
              <div className="profile-image-wrapper">
                <img
                  src={profilePhoto}
                  alt="Abhirup Nandi"
                  className="profile-image"
                />
              </div>

              <div className="profile-card-content">
                <h3>ABHIRUP NANDI</h3>

                <p>SOFTWARE DEVELOPER</p>

                <div className="profile-divider"></div>

                <div className="profile-status">
                  <span className="status-dot"></span>
                  Available for opportunities
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="section-heading reveal">
            <p className="section-label">01 — ABOUT</p>
            <h2>Building with purpose.</h2>
          </div>

          <div className="about-grid">
            <div className="about-text reveal reveal-left">
              <p>
                I am a Computer Science and Engineering graduate from
                Academy of Technology with a strong foundation in software
                development, programming and problem solving.
              </p>

              <p>
                My technical experience spans Java, Python, C#, JavaScript,
                SQL, .NET Framework, Microsoft Dynamics 365 and Microsoft
                Power Platform.
              </p>

              <p>
                During my internships at Cognizant and CodSoft, I gained
                practical exposure to enterprise application development,
                Java programming and modern software technologies.
              </p>
            </div>

            <div className="about-highlights reveal reveal-right">
              <div className="highlight-card">
                <div className="highlight-icon">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <strong>7.75 CGPA</strong>
                  <span>B.Tech CSE</span>
                </div>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">
                  <Code2 size={24} />
                </div>
                <div>
                  <strong>2026</strong>
                  <span>Graduation</span>
                </div>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">
                  <BriefcaseBusiness size={24} />
                </div>
                <div>
                  <strong>2 Internships</strong>
                  <span>Industry Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section" id="education">
          <div className="section-heading reveal">
            <p className="section-label">02 — EDUCATION</p>
            <h2>Academic foundation.</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item reveal">
              <div className="education-icon">
                <GraduationCap size={22} />
              </div>

              <div className="timeline-year">2022 — 2026</div>

              <div className="timeline-content">
                <h3>B.Tech in Computer Science and Engineering</h3>
                <p className="institution">
                  Academy of Technology, Hooghly
                </p>
                <p>
                  Strong academic foundation in computer science,
                  programming, data structures, algorithms and software
                  development.
                </p>
                <span className="result">7.75 CGPA</span>
              </div>
            </div>

            <div className="timeline-item reveal">
              <div className="education-icon">
                <Award size={22} />
              </div>

              <div className="timeline-year">2021</div>

              <div className="timeline-content">
                <h3>Class 12</h3>
                <p className="institution">
                  Kalna Maharaja’s High School
                </p>
                <p>Higher Secondary education.</p>
                <span className="result">96.67%</span>
              </div>
            </div>

            <div className="timeline-item reveal">
              <div className="education-icon">
                <Award size={22} />
              </div>

              <div className="timeline-year">2019</div>

              <div className="timeline-content">
                <h3>Class 10</h3>
                <p className="institution">
                  Kalna Maharaja’s High School
                </p>
                <p>Secondary education.</p>
                <span className="result">87.78%</span>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <div className="section-heading reveal">
            <p className="section-label">03 — SKILLS</p>
            <h2>Technical toolkit.</h2>
          </div>

          <div className="skills-grid">
            <div className="skill-card reveal">
              <div className="skill-icon">
                <Code2 size={22} />
              </div>
              <h3>Programming Languages</h3>
              <div className="skill-tags">
                <span>C</span>
                <span>C++</span>
                <span>Java</span>
                <span>Python</span>
                <span>C#</span>
                <span>JavaScript</span>
              </div>
            </div>

            <div className="skill-card reveal">
              <div className="skill-icon">
                <Code2 size={22} />
              </div>
              <h3>Web Technologies</h3>
              <div className="skill-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </div>

            <div className="skill-card reveal">
              <div className="skill-icon">
                <BriefcaseBusiness size={22} />
              </div>
              <h3>.NET & Enterprise</h3>
              <div className="skill-tags">
                <span>.NET Framework</span>
                <span>Dynamics 365</span>
              </div>
            </div>

            <div className="skill-card reveal">
              <div className="skill-icon">
                <Code2 size={22} />
              </div>
              <h3>Power Platform</h3>
              <div className="skill-tags">
                <span>Power Apps</span>
                <span>Power Automate</span>
                <span>Dataverse</span>
              </div>
            </div>

            <div className="skill-card reveal">
              <div className="skill-icon">
                <Database size={22} />
              </div>
              <h3>Databases</h3>
              <div className="skill-tags">
                <span>SQL Server</span>
                <span>MySQL</span>
              </div>
            </div>

            <div className="skill-card reveal">
              <div className="skill-icon">
                <Code2 size={22} />
              </div>
              <h3>Development Tools</h3>
              <div className="skill-tags">
                <span>VS Code</span>
                <span>Eclipse</span>
                <span>GitHub</span>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section" id="experience">
          <div className="section-heading reveal">
            <p className="section-label">04 — EXPERIENCE</p>
            <h2>Industry experience.</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item reveal">
              <div className="experience-icon">
                <BriefcaseBusiness size={22} />
              </div>

              <div className="timeline-year">
                MAR 2026 — JUL 2026
              </div>

              <div className="timeline-content">
                <h3>GenC .NET Intern</h3>
                <p className="institution">Cognizant</p>

                <ul className="experience-list">
                  <li>
                    Completed GenC .NET Training with hands-on experience
                    in C#, SQL Server, .NET Framework, Microsoft Dynamics
                    365 and Plugin Development.
                  </li>
                  <li>
                    Gained practical exposure to Dataverse, Power Platform
                    and enterprise application development.
                  </li>
                </ul>
              </div>
            </div>

            <div className="timeline-item reveal">
              <div className="experience-icon">
                <BriefcaseBusiness size={22} />
              </div>

              <div className="timeline-year">
                SEP 2025 — OCT 2025
              </div>

              <div className="timeline-content">
                <h3>Java Programming Intern</h3>
                <p className="institution">CodSoft</p>

                <ul className="experience-list">
                  <li>
                    Completed a four-week virtual internship focused on
                    Java programming and application development.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" id="projects">
          <div className="section-heading reveal">
            <p className="section-label">05 — PROJECTS</p>
            <h2>Selected work.</h2>
          </div>

          <div className="projects-grid">
            <article className="project-card reveal">
              <div className="project-top">
                <div className="project-icon">
                  <Code2 size={25} />
                </div>
                <span className="project-number">01</span>
              </div>

              <h3>
                Alzheimer’s Disease Detection Using Deep Learning
              </h3>

              <p>
                Developed an ML-based Alzheimer’s detection solution using
                ADNI and OASIS datasets with an end-to-end Scikit-learn
                pipeline for preprocessing, augmentation and benchmarking.
              </p>

              <div className="project-tech">
                <span>Python</span>
                <span>Scikit-learn</span>
                <span>Pandas</span>
                <span>NumPy</span>
                <span>Matplotlib</span>
                <span>Seaborn</span>
                <span>Nibabel</span>
              </div>

              <a
                href="https://github.com/Abhirup255/Alziemer-Disease-Detection"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <FaGithub />
                View on GitHub
                <ArrowUpRight size={17} />
              </a>
            </article>

            <article className="project-card reveal">
              <div className="project-top">
                <div className="project-icon">
                  <Database size={25} />
                </div>
                <span className="project-number">02</span>
              </div>

              <h3>Employee Management System</h3>

              <p>
                Developed a Java Swing desktop application with MySQL
                integration featuring CRUD operations, validation and
                employee record management.
              </p>

              <div className="project-tech">
                <span>Java</span>
                <span>Java Swing</span>
                <span>MySQL</span>
              </div>

              <a
                href="https://github.com/Abhirup255/Employee-Management-System"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <FaGithub />
                View on GitHub
                <ArrowUpRight size={17} />
              </a>
            </article>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="section" id="certifications">
          <div className="section-heading reveal">
            <p className="section-label">06 — CERTIFICATIONS</p>
            <h2>Credentials.</h2>
          </div>

          <div className="certifications-grid">
            <div className="certification-card reveal">
              <div className="certification-icon">
                <Award size={22} />
              </div>
              <h3>
                Microsoft Certified: Dynamics 365 Customer Experience
                Analyst Associate
              </h3>
            </div>

            <div className="certification-card reveal">
              <div className="certification-icon">
                <Award size={22} />
              </div>
              <h3>
                Microsoft Certified: Power Platform Functional Consultant
                Associate
              </h3>
            </div>

            <div className="certification-card reveal">
              <div className="certification-icon">
                <Award size={22} />
              </div>
              <h3>
                Microsoft 365 Certified: Copilot and Agent Administration
                Fundamentals
              </h3>
            </div>

            <div className="certification-card reveal">
              <div className="certification-icon">
                <Award size={22} />
              </div>
              <h3>
                Microsoft Certified: Power Platform Fundamentals
              </h3>
            </div>

            <div className="certification-card reveal">
              <div className="certification-icon">
                <Award size={22} />
              </div>
              <h3>WIPRO JAVA Certification</h3>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="section" id="achievements">
          <div className="section-heading reveal">
            <p className="section-label">07 — ACHIEVEMENTS</p>
            <h2>Milestones.</h2>
          </div>

          <div className="achievements-grid">
            <div className="achievement-card reveal">
              <div className="achievement-icon">
                <Trophy size={23} />
              </div>
              <p>
                Grade <strong>‘A’</strong> in Data Structures and
                Algorithms in University Exams, highlighting strong
                problem-solving skills.
              </p>
            </div>

            <div className="achievement-card reveal">
              <div className="achievement-icon">
                <Trophy size={23} />
              </div>
              <p>
                Selected for Wipro’s{" "}
                <strong>TalentNext Full Stack Java Program</strong>{" "}
                through competitive assessments.
              </p>
            </div>

            <div className="achievement-card reveal">
              <div className="achievement-icon">
                <Trophy size={23} />
              </div>
              <p>
                Qualified in <strong>Top 10</strong> for the final round
                of SCCSE’s 1st offline college hackathon,
                “InterHacktive.”
              </p>
            </div>
          </div>
        </section>

        {/* PROFESSIONAL SKILLS */}
        <section className="section">
          <div className="section-heading reveal">
            <p className="section-label">08 — PROFESSIONAL SKILLS</p>
            <h2>Beyond code.</h2>
          </div>

          <div className="professional-tags reveal">
            <span>Presentation Skills</span>
            <span>Leadership</span>
            <span>Problem Solving</span>
            <span>Project Management</span>
            <span>Time Management</span>
            <span>Communication</span>
            <span>Teamwork</span>
            <span>Adaptability</span>
          </div>
        </section>

        {/* PERSONAL */}
        <section className="section personal-section">
          <div className="personal-grid">
            <div className="personal-card reveal">
              <div className="personal-card-heading">
                <Languages size={22} />
                <h3>Languages</h3>
              </div>

              <div className="personal-list">
                <span>English</span>
                <span>Bengali</span>
                <span>Hindi</span>
              </div>
            </div>

            <div className="personal-card reveal">
              <div className="personal-card-heading">
                <Camera size={22} />
                <h3>Interests & Hobbies</h3>
              </div>

              <div className="personal-list">
                <span>Playing Football</span>
                <span>Photography</span>
                <span>Reading Books</span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact-section" id="contact">
          <div className="section-heading reveal">
            <p className="section-label">09 — CONTACT</p>
            <h2>Let’s build something.</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-intro reveal reveal-left">
              <p>
                I’m open to software development opportunities,
                internships, collaborations and interesting technical
                projects.
              </p>

              <div className="contact-socials">
                <a
                  href="https://github.com/Abhirup255"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/abhirup-nandi-bb416b376/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <div className="contact-details reveal reveal-right">
              <a
                href="mailto:nandiabhirup297@gmail.com"
                className="contact-item"
              >
                <div className="contact-icon-large">
                  <Mail size={21} />
                </div>

                <div>
                  <span>Email</span>
                  <strong>nandiabhirup297@gmail.com</strong>
                </div>
              </a>

              <a href="tel:+917584952687" className="contact-item">
                <div className="contact-icon-large">
                  <Phone size={21} />
                </div>

                <div>
                  <span>Phone</span>
                  <strong>+91 7584952687</strong>
                </div>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <div className="contact-icon-large">
                  <Download size={21} />
                </div>

                <div>
                  <span>Resume</span>
                  <strong>View / Download Resume</strong>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <a href="#home" className="footer-logo">
              AN<span>.</span>
            </a>

            <p>© 2026 Abhirup Nandi. All rights reserved.</p>
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/Abhirup255"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/abhirup-nandi-bb416b376/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;