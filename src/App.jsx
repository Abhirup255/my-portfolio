import { useEffect, useState } from "react";
import "./App.css";

import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Camera,
  Code2,
  Database,
  Download,
  GraduationCap,
  Languages,
  Mail,
  Menu,
  Phone,
  Trophy,
  X,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import profilePhoto from "./assets/profile.jpg";

import cognizantLogo from "./assets/cognizant-logo.png";
import codsoftLogo from "./assets/codsoft-logo.jpg";

import alzheimerImage from "./assets/alzheimer-project.png";
import employeeImage from "./assets/employee-management-project.png";
import spamImage from "./assets/sms-spam-project.png";
import hospitalImage from "./assets/hospital-management-project.png";

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    number: "01",
    category: "MACHINE LEARNING",
    title: "Alzheimer's Disease Detection",
    image: alzheimerImage,
    description:
      "Developed a machine learning based Alzheimer's disease detection project using ADNI and OASIS datasets with an end-to-end Scikit-learn pipeline for preprocessing, augmentation and benchmarking.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Nibabel",
    ],
    github:
      "https://github.com/Abhirup255/Alziemer-Disease-Detection",
  },

  {
    number: "02",
    category: "JAVA APPLICATION",
    title: "Employee Management System",
    image: employeeImage,
    description:
      "Developed a Java Swing desktop application with MySQL integration featuring CRUD operations, validation and employee record management.",
    technologies: [
      "Java",
      "Java Swing",
      "MySQL",
      "JDBC",
    ],
    github:
      "https://github.com/Abhirup255/Employee-Management-System",
  },

  {
    number: "03",
    category: "NATURAL LANGUAGE PROCESSING",
    title: "SMS Spam Classifier",
    image: spamImage,
    description:
      "Built a machine learning project for SMS spam classification using text preprocessing, tokenization, stemming, TF-IDF feature extraction and model performance evaluation.",
    technologies: [
      "Python",
      "Machine Learning",
      "NLP",
      "TF-IDF",
      "Scikit-learn",
    ],
    github:
      "https://github.com/Abhirup255/SMS-Spam-Classifier",
  },

  {
    number: "04",
    category: "JAVA APPLICATION",
    title: "Hospital Management System",
    image: hospitalImage,
    description:
      "Developed a Java-based hospital management application with patient registration, doctor listings and appointment booking backed by MySQL using JDBC.",
    technologies: [
      "Java",
      "MySQL",
      "JDBC",
      "OOP",
    ],
    github:
      "https://github.com/Abhirup255/Hospital-Management-System",
  },
];

/* =========================================================
   SKILLS
========================================================= */

const skills = [
  {
    icon: <Code2 size={22} />,
    title: "Programming",
    items: [
      "C",
      "C++",
      "Java",
      "Python",
      "C#",
      "JavaScript",
    ],
  },

  {
    icon: <Code2 size={22} />,
    title: "Web Development",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },

  {
    icon: <BriefcaseBusiness size={22} />,
    title: "Enterprise Technologies",
    items: [
      ".NET Framework",
      "Microsoft Dynamics 365",
    ],
  },

  {
    icon: <Code2 size={22} />,
    title: "Power Platform",
    items: [
      "Power Apps",
      "Power Automate",
      "Dataverse",
    ],
  },

  {
    icon: <Database size={22} />,
    title: "Databases",
    items: [
      "SQL Server",
      "MySQL",
    ],
  },

  {
    icon: <Code2 size={22} />,
    title: "Tools",
    items: [
      "VS Code",
      "Eclipse",
      "GitHub",
    ],
  },
];

/* =========================================================
   CERTIFICATIONS
========================================================= */

const certifications = [
  {
    number: "01",
    provider: "MICROSOFT",
    title:
      "Microsoft Certified: Dynamics 365 Customer Experience Analyst Associate",
    code: "MB-280",
    date: "Earned July 29, 2026",
    validity: "Valid until July 30, 2027",
    credential:
      "Credential ID: 96419C3930975558",
    certificate:
      "/certificates/microsoft-dynamics-365.pdf",
  },

  {
    number: "02",
    provider: "MICROSOFT",
    title:
      "Microsoft Certified: Power Platform Functional Consultant Associate",
    code: "PL-200",
    date: "Earned July 20, 2026",
    validity: "Valid until July 21, 2027",
    credential:
      "Credential ID: 737380664042E2EC",
    certificate:
      "/certificates/microsoft-power-platform-functional-consultant.pdf",
  },

  {
    number: "03",
    provider: "MICROSOFT 365",
    title:
      "Microsoft 365 Certified: Copilot and Agent Administration Fundamentals",
    code: "AB-900",
    date: "Earned July 24, 2026",
    validity: "Microsoft Learn Credential",
    credential:
      "Credential ID: 7216459F0BF7FDF9",
    certificate:
      "/certificates/microsoft-copilot-agent-administration.pdf",
  },

  {
    number: "04",
    provider: "MICROSOFT",
    title:
      "Microsoft Certified: Power Platform Fundamentals",
    code: "PL-900",
    date: "Earned July 18, 2026",
    validity: "Microsoft Learn Credential",
    credential:
      "Credential ID: F736B7FED12E0393",
    certificate:
      "/certificates/microsoft-power-platform-fundamentals.pdf",
  },

  {
    number: "05",
    provider: "WIPRO TALENTNEXT",
    title:
      "Digital Skills Readiness Program — Java Full Stack",
    code: "JAVA FULL STACK",
    date: "Completed 2025",
    validity: "Course Completion Certificate",
    credential:
      "Wipro TalentNext",
    certificate:
      "/certificates/wipro-java-full-stack.jpg",
  },
];

/* =========================================================
   MILESTONES
   EXACTLY 5
========================================================= */

const achievements = [
  {
    icon: <Trophy size={23} />,
    number: "01",
    title: "Academic Excellence",
    text: (
      <>
        Achieved Grade <strong>‘A’</strong> in Data Structures and
        Algorithms in University Exams, highlighting strong
        problem-solving skills.
      </>
    ),
  },

  {
    icon: <Award size={23} />,
    number: "02",
    title: "Microsoft Certified",
    text: (
      <>
        Earned <strong>4 Microsoft certifications</strong> across
        Dynamics 365, Power Platform and Microsoft 365 technologies.
      </>
    ),
  },

  {
    icon: <BriefcaseBusiness size={23} />,
    number: "03",
    title: "Industry Experience",
    text: (
      <>
        Gained professional industry experience through internships
        at <strong>Cognizant</strong> and <strong>CodSoft</strong>.
      </>
    ),
  },

  {
    icon: <Award size={23} />,
    number: "04",
    title: "Wipro TalentNext",
    text: (
      <>
        Selected for <strong>Wipro’s TalentNext Full Stack Java
        Program</strong> through competitive assessments.
      </>
    ),
  },

  {
    icon: <Trophy size={23} />,
    number: "05",
    title: "Hackathon Achievement",
    text: (
      <>
        Qualified in the <strong>Top 10</strong> for the final
        round of SCCSE’s 1st offline college hackathon,
        <strong> “InterHacktive.”</strong>
      </>
    ),
  },
];

/* =========================================================
   APP
========================================================= */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal:not(.milestone-card)"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="app">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar">

        <div className="nav-container">

          <a
            href="#home"
            className="logo"
            onClick={closeMenu}
          >
            AN<span>.</span>
          </a>

          <nav className="nav-links">

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#achievements">Milestones</a>
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
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

        </div>

        <div
          className={`mobile-menu ${
            menuOpen ? "mobile-menu-open" : ""
          }`}
        >

          <nav>

            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#education" onClick={closeMenu}>
              Education
            </a>

            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>

            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>

            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>

            <a href="#certifications" onClick={closeMenu}>
              Certifications
            </a>

            <a href="#achievements" onClick={closeMenu}>
              Milestones
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>

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

        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          className="hero section"
          id="home"
        >

          <div className="hero-content reveal reveal-left">

            <p className="eyebrow">
              COMPUTER SCIENCE & ENGINEERING
            </p>

            <h1>
              Abhirup
              <span>Nandi</span>
            </h1>

            <h2>
              Software Developer
            </h2>

            <p className="hero-description">
              Computer Science and Engineering graduate with hands-on
              experience in Java, Python, C#, .NET, SQL and Microsoft
              Power Platform. Passionate about building reliable
              software and solving real-world problems through
              technology.
            </p>

            <div className="hero-buttons">

              <a
                href="#projects"
                className="btn btn-primary"
              >
                View My Work
                <ArrowUpRight size={19} />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                Resume
                <Download size={18} />
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

                <h3>
                  ABHIRUP NANDI
                </h3>

                <p>
                  SOFTWARE DEVELOPER
                </p>

                <div className="profile-divider"></div>

                <div className="profile-status">

                  <span className="status-dot"></span>

                  Available for opportunities

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            ABOUT
        ===================================================== */}

        <section
          className="section"
          id="about"
        >

          <div className="section-heading reveal">

            <p className="section-label">
              01 — ABOUT
            </p>

            <h2>
              Building with purpose.
            </h2>

          </div>

          <div className="about-grid">

            <div className="about-text reveal reveal-left">

              <p>
                I am a Computer Science and Engineering graduate from
                Academy of Technology with a strong foundation in
                software development, programming and problem solving.
              </p>

              <p>
                My technical experience spans Java, Python, C#,
                JavaScript, SQL, .NET Framework, Microsoft Dynamics 365
                and Microsoft Power Platform.
              </p>

              <p>
                During my internships at Cognizant and CodSoft, I gained
                practical exposure to enterprise application
                development, Java programming and modern software
                technologies.
              </p>

            </div>

            <div className="about-highlights reveal reveal-right">

              <div className="highlight-card">

                <div className="highlight-icon">
                  <GraduationCap size={24} />
                </div>

                <div>
                  <strong>B.Tech CSE</strong>
                  <span>Academy of Technology</span>
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

        {/* =====================================================
            EDUCATION
        ===================================================== */}

        <section
          className="section"
          id="education"
        >

          <div className="section-heading reveal">

            <p className="section-label">
              02 — EDUCATION
            </p>

            <h2>
              Academic foundation.
            </h2>

          </div>

          <div className="timeline">

            <div className="timeline-item reveal">

              <div className="education-icon">
                <GraduationCap size={22} />
              </div>

              <div className="timeline-year">
                2022 — 2026
              </div>

              <div className="timeline-content">

                <h3>
                  B.Tech in Computer Science and Engineering
                </h3>

                <p className="institution">
                  Academy of Technology, Hooghly
                </p>

                <p>
                  Strong academic foundation in computer science,
                  programming, data structures, algorithms and software
                  development.
                </p>

                <span className="result">
                  7.75 CGPA
                </span>

              </div>

            </div>

            <div className="timeline-item reveal">

              <div className="education-icon">
                <Award size={22} />
              </div>

              <div className="timeline-year">
                2021
              </div>

              <div className="timeline-content">

                <h3>
                  Class 12
                </h3>

                <p className="institution">
                  Kalna Maharaja’s High School
                </p>

                <p>
                  Higher Secondary education.
                </p>

                <span className="result">
                  96.67%
                </span>

              </div>

            </div>

            <div className="timeline-item reveal">

              <div className="education-icon">
                <Award size={22} />
              </div>

              <div className="timeline-year">
                2019
              </div>

              <div className="timeline-content">

                <h3>
                  Class 10
                </h3>

                <p className="institution">
                  Kalna Maharaja’s High School
                </p>

                <p>
                  Secondary education.
                </p>

                <span className="result">
                  87.78%
                </span>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            SKILLS
        ===================================================== */}

        <section
          className="section"
          id="skills"
        >

          <div className="section-heading reveal">

            <p className="section-label">
              03 — SKILLS
            </p>

            <h2>
              Technical toolkit.
            </h2>

          </div>

          <div className="skills-list">

            {skills.map((skill) => (

              <div
                className="skill-row reveal"
                key={skill.title}
              >

                <div className="skill-title">

                  <div className="skill-icon">
                    {skill.icon}
                  </div>

                  <h3>
                    {skill.title}
                  </h3>

                </div>

                <div className="skill-tags">

                  {skill.items.map((item) => (

                    <span key={item}>
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* =====================================================
            EXPERIENCE
        ===================================================== */}

        <section
          className="section"
          id="experience"
        >

          <div className="section-heading reveal">

            <p className="section-label">
              04 — EXPERIENCE
            </p>

            <h2>
              Professional journey.
            </h2>

          </div>

          <div className="experience-list">

            <article className="experience-card reveal">

              <div className="experience-logo">

                <img
                  src={cognizantLogo}
                  alt="Cognizant"
                />

              </div>

              <div className="experience-main">

                <div className="experience-top">

                  <div>

                    <p className="experience-company">
                      COGNIZANT
                    </p>

                    <h3>
                      GenC .NET Intern
                    </h3>

                  </div>

                  <span className="experience-date">
                    Mar 2026 — Jul 2026
                  </span>

                </div>

                <ul>

                  <li>
                    Completed GenC .NET Training with hands-on
                    experience in C#, SQL Server, .NET Framework,
                    Microsoft Dynamics 365 and Plugin Development.
                  </li>

                  <li>
                    Gained practical exposure to Dataverse, Power
                    Platform and enterprise application development.
                  </li>

                </ul>

              </div>

            </article>

            <article className="experience-card reveal">

              <div className="experience-logo">

                <img
                  src={codsoftLogo}
                  alt="CodSoft"
                />

              </div>

              <div className="experience-main">

                <div className="experience-top">

                  <div>

                    <p className="experience-company">
                      CODSOFT
                    </p>

                    <h3>
                      Java Programming Intern
                    </h3>

                  </div>

                  <span className="experience-date">
                    Sept 2025 — Oct 2025
                  </span>

                </div>

                <ul>

                  <li>
                    Completed a four-week virtual internship focused
                    on Java programming and application development.
                  </li>

                  <li>
                    Worked on practical programming tasks and
                    strengthened object-oriented programming concepts.
                  </li>

                </ul>

              </div>

            </article>

          </div>

        </section>

        {/* =====================================================
            PROJECTS
        ===================================================== */}

        <section
          className="section"
          id="projects"
        >

          <div className="section-heading reveal">

            <p className="section-label">
              05 — PROJECTS
            </p>

            <h2>
              Selected work.
            </h2>

          </div>

          <div className="projects-grid">

            {projects.map((project) => (

              <article
                className="project-card reveal"
                key={project.number}
              >

                <div className="project-visual">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <div className="project-overlay">
                    <span>
                      {project.category}
                    </span>
                  </div>

                </div>

                <div className="project-body">

                  <div className="project-meta">

                    <span className="project-number">
                      {project.number}
                    </span>

                    <span className="project-category">
                      {project.category}
                    </span>

                  </div>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="project-tech">

                    {project.technologies.map(
                      (tech) => (
                        <span key={tech}>
                          {tech}
                        </span>
                      )
                    )}

                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >

                    <FaGithub />

                    View on GitHub

                    <ArrowUpRight size={17} />

                  </a>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* =====================================================
            CERTIFICATIONS
        ===================================================== */}

        <section
          className="section"
          id="certifications"
        >

          <div className="section-heading reveal">

            <p className="section-label">
              06 — CERTIFICATIONS
            </p>

            <h2>
              Credentials.
            </h2>

          </div>

          <div className="certifications-list">

            {certifications.map((cert) => (

              <article
                className="certification-card reveal"
                key={cert.number}
              >

                <div className="cert-number">
                  {cert.number}
                </div>

                <div className="cert-icon">
                  <Award size={22} />
                </div>

                <div className="cert-content">

                  <span className="cert-provider">
                    {cert.provider}
                  </span>

                  <h3>
                    {cert.title}
                  </h3>

                  <div className="cert-details">

                    <span>
                      {cert.code}
                    </span>

                    <span>
                      {cert.date}
                    </span>

                    <span>
                      {cert.validity}
                    </span>

                  </div>

                  <p>
                    {cert.credential}
                  </p>

                </div>

                <a
                  href={cert.certificate}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-link"
                  aria-label={`View ${cert.title} certificate`}
                >

                  VIEW

                  <ArrowUpRight size={16} />

                </a>

              </article>

            ))}

          </div>

        </section>

        {/* =====================================================
            MILESTONES
            EXACTLY 5 CARDS
        ===================================================== */}

        <section
          className="section milestones-section"
          id="achievements"
        >

          <div className="section-heading">

            <p className="section-label">
              07 — MILESTONES
            </p>

            <h2>
              Professional milestones.
            </h2>

          </div>

          <div className="achievements-grid">

            {achievements.map((achievement) => (

              <article
                className="achievement-card milestone-card"
                key={achievement.number}
              >

                <div className="achievement-icon">
                  {achievement.icon}
                </div>

                <div className="achievement-content">

                  <span className="achievement-number">
                    {achievement.number}
                  </span>

                  <h3>
                    {achievement.title}
                  </h3>

                  <p>
                    {achievement.text}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* =====================================================
            PROFESSIONAL SKILLS
        ===================================================== */}

        <section className="section">

          <div className="section-heading reveal">

            <p className="section-label">
              08 — PROFESSIONAL SKILLS
            </p>

            <h2>
              Beyond code.
            </h2>

          </div>

          <div className="professional-tags reveal">

            <span>
              Presentation Skills
            </span>

            <span>
              Leadership
            </span>

            <span>
              Problem Solving
            </span>

            <span>
              Project Management
            </span>

            <span>
              Time Management
            </span>

            <span>
              Communication
            </span>

            <span>
              Teamwork
            </span>

            <span>
              Adaptability
            </span>

          </div>

        </section>

        {/* =====================================================
            PERSONAL
        ===================================================== */}

        <section className="section personal-section">

          <div className="personal-grid">

            <div className="personal-card reveal">

              <div className="personal-card-heading">

                <Languages size={22} />

                <h3>
                  Languages
                </h3>

              </div>

              <div className="personal-list">

                <span>
                  English
                </span>

                <span>
                  Bengali
                </span>

                <span>
                  Hindi
                </span>

              </div>

            </div>

            <div className="personal-card reveal">

              <div className="personal-card-heading">

                <Camera size={22} />

                <h3>
                  Interests & Hobbies
                </h3>

              </div>

              <div className="personal-list">

                <span>
                  Playing Football
                </span>

                <span>
                  Photography
                </span>

                <span>
                  Reading Books
                </span>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            CONTACT
        ===================================================== */}

        <section
          className="section contact-section"
          id="contact"
        >

          <div className="section-heading reveal">

            <p className="section-label">
              09 — CONTACT
            </p>

            <h2>
              Let’s build something.
            </h2>

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

                  <span>
                    Email
                  </span>

                  <strong>
                    nandiabhirup297@gmail.com
                  </strong>

                </div>

              </a>

              <a
                href="tel:+917584952687"
                className="contact-item"
              >

                <div className="contact-icon-large">
                  <Phone size={21} />
                </div>

                <div>

                  <span>
                    Phone
                  </span>

                  <strong>
                    +91 7584952687
                  </strong>

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

                  <span>
                    Resume
                  </span>

                  <strong>
                    View / Download Resume
                  </strong>

                </div>

              </a>

            </div>

          </div>

        </section>

      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="footer-inner">

          <div>

            <a
              href="#home"
              className="footer-logo"
            >
              AN<span>.</span>
            </a>

            <p>
              © 2026 Abhirup Nandi. All rights reserved.
            </p>

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