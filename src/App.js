import logo from "./logo.svg";
import "./App.css";
import RoleTyper from "./components/RoleTyper";
import blobImage from "./images/blobVector.png";
import { IoIosSend } from "react-icons/io";
import { GrLinkedin } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { useEffect, useRef, useState } from "react";
import path from "./images/path.svg";
import signBoard from "./images/signBoard.svg";
import hikingMan from "./images/hikingMan.svg";
import blob from "./images/blob.svg";
import sun from "./images/sun.svg";
import cloud from "./images/cloud.svg";
import mountain from "./images/mountain.svg";
import waveImage from "./images/wave.png";
import roadmapImage from "./images/roadmap.svg";
import footprintImage from "./images/footprints.svg";
import { IoAddOutline } from "react-icons/io5";
import { HiOutlineMinus } from "react-icons/hi";
//
import ccskLogo from "./images/ccsk-logo.png";
import cdpseLogo from "./images/cdpse-logo.png";
import ctpraLogo from "./images/ctpra-logo.png";
// import isc2Logo from "./images/isc2-logo.png";
import oneTrustBadge from "./images/onetrust-badge.png";
import oneTrustThirdPartyBadge from "./images/onetrust-certified-third-party-management-track-bad.png";
import instructorEliteBadge from "./images/instructorBadge-Elite.png";
import iso9001Logo from "./images/ISO_9001.png";
import iso27001Logo from "./images/ISO_27001.png";
import iso27701Logo from "./images/ISO_27701.png";
import iso42001Logo from "./images/ISO_42001.png";
import pluralsiteLogo from "./images/pluralsight-badge.png";
import ccLogo from "./images/cc-logo.png";
import cippLogo from "./images/cipp-logo.png";
import boatImage from "./images/boat.svg";
import instructorImage from "./images/instructor.svg";
import foundationImage from "./images/Foundation.svg";
import domainImage from "./images/Domain.svg";
import learningImage from "./images/Learning.svg";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { IoCheckmarkSharp } from "react-icons/io5";
import FeedbackModal from "./components/FeedbackModal";
import useReveal from "./hooks/useReveal";

function App() {
  useReveal();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedAccordian, setSelectedAccordia] = useState(-1);
  const [selectedTraining, setSelectedTraining] = useState(-1);

  const navRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  const expertiseData = [
    {
      title: "Information Security & Privacy Program Leadership",
      points: [
        "Led enterprise-wide implementation and integration of ISO 27001, ISO 27701, SOC 2, HITRUST, and GDPR frameworks, aligning security programs with business strategy.",
        "Advised leadership on scalable governance models, setting long-term security objectives and success metrics.",
      ],
    },
    {
      title: "Security Risk Management & Audit Readiness",
      points: [
        "Directed end-to-end risk assessments and internal audits across global operations, driving maturity through continuous improvement.",
        "Managed external assessments and ensured audit readiness through tailored remediation strategies and monitoring.",
      ],
    },
    {
      title: "Third-Party Risk & Compliance Oversight",
      points: [
        "Built and operationalized third-party risk frameworks, including onboarding, due diligence, reassessment, and SIG-based compliance.",
        "Collaborated with procurement, legal, and risk teams to align vendor security posture with business and regulatory requirements.",
      ],
    },
    {
      title: "Secure SDLC & Product Security Strategy",
      points: [
        "Integrated OWASP ASVS and ISO controls into the development lifecycle, ensuring security by design for customer-facing platforms.",
        "Provided ongoing advisory to product and engineering teams to embed threat modeling and security validation in release cycles.",
      ],
    },
    {
      title: "Cybersecurity Education, Enablement & Thought Leadership",
      points: [
        "Designed undergraduate cybersecurity curriculum with lab-based learning in forensics, VAPT, and GRC tools; trained over 500+ learners.",
        "Championed internal R&D initiatives, including audit automation tools and academic ERP development projects.",
      ],
    },
    {
      title: "Business Advisory & Cross-Functional Collaboration",
      points: [
        "Translated complex risk scenarios into business-relevant terms, influencing decision-making across IT, R&D, HR, and leadership.",
        "Fostered a culture of shared responsibility by integrating privacy and security objectives into product, legal, and operational workflows.",
      ],
    },
  ];
  const industryExposureList = [
    "Aviation",
    "Global IT Services",
    "Healthcare Industry",
    "SaaS Product Based",
    "PaaS Product Based",
    "Academia & Research",
    "Fortune 500 Companies",
    "Consulting (including Big 4)",
    "Language Services Industry",
    "Engineering & Manufacturing",
    "Banking & Financial Services (BFSI)",
  ];
  const experiencePerDomain = [
    { domain: "Cloud Security", experience: "03 years" },
    { domain: "IT Risk Management", experience: "11 years" },
    { domain: "Third-Party Risk Management", experience: "07 years" },
    { domain: "Academia & Curriculum Design", experience: "05 years" },
    { domain: "Audits & Technical Assessments", experience: "09 years" },
    { domain: "Governance, Risk & Compliance (GRC)", experience: "12 years" },
    { domain: "Data Privacy (GDPR, CCPA, ISO 27701)", experience: "07 years" },
    {
      domain: "Secure SDLC, OWASP, and Product Security",
      experience: "06 years",
    },
    {
      domain: "Merger & Acquisition Information Security Activities",
      experience: "02 years",
    },
    {
      domain: "ISO 27001, SOC 2, NIST CSF, NIST 800-53, NESA",
      experience: "09 years",
    },
    { domain: "HITRUST, HIPAA, ISO 42001", experience: "03 years" },
  ];
  const clientPortfolio = [
    "Mastercard",
    "Wolters Kluwer",
    "Barclays",
    "CISCO",
    "Medtronic",
    "Salesforce",
    "Deloitte",
    "Boston Consulting Group",
    "Pluralsight",
    "Uttarakhand Police",
    "UPES Dehradun",
    "NLIU Bhopal",
    "Symbiosis (SUAS) Indore",
    "Symbiosis (SIU) Nagpur",
    "ONGC Dehradun",
    "XLRI Jamshedpur (Mentorship)",
    "Avantika University",
  ];
  const trainingExperience = {
    isc2Certifications: [
      "Certified Information Systems Security Professional (CISSP)",
      "Certified Cloud Security Professional (CCSP)",
      "Certified Secure Software Lifecycle Professional (CSSLP)",
      "HealthCare Information Security and Privacy Practitioner (HCISPP)",
      "Systems Security Certified Practitioner (SSCP)",
      "Governance, Risk and Compliance certification (CGRC)",
      "Certificate in Cyber Security (CC)",
    ],

    isacaCertifications: [
      "Certified Information Systems Auditor (CISA)",
      "Certified Information Security Manager (CISM)",
      "Certified in Risk and Information Systems Control (CRISC)",
      "Certified in the Governance of Enterprise IT (CGEIT)",
      "Certified Data Privacy Solutions Engineer (CDPSE)",
      "CSX-P",
    ],

    customizedTrainings: [
      "Threat Modeling",
      "GRC based on Industry Best Practices",
      "Secure Coding and Secure SDLC",
      "Pathway to Cyber Security: Domains, Roles & Opportunities",
      "ISO 27701:2025 Implementation / Auditor or Combined Training",
      "ISO 42001:2023 Implementation / Auditor or Combined Training",
      "ISO 27001:2022 Implementation / Auditor or Combined Training",
      "Data Privacy, GDPR Implementation",
      "Transition from ISO 27001:2013 to ISO 27001:2022",
      "NIST CSF Implementation",
      "SOC 2 Type 1 and Type 2 Implementation and Internal Audit Training",
      "Cyber Security Best Practices for Software Engineers",
      "Third Party Risk Assessment",
    ],

    others: [
      "EC Council Certified Ethical Hacker (CEH)",
      "CompTIA Security+ SY0-601, SY0-701",
      "Google Cloud Platform Security Engineer",
      "Certificate of Cloud Security Knowledge (CCSK)",
    ],
  };

  const scrollToSection = (id) => {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  return (
    <div id="wrapper">
      <header>
        <div class="logo">
          <h2 class="logoText">JATIN SETHI</h2>
        </div>
        {/* <div
          ref={hamburgerRef}
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div> */}
        <nav ref={navRef} className={`nav ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a
                href="#home"
                onClick={() => {
                  setMenuOpen(false);
                  scrollToSection("home");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => {
                  setMenuOpen(false);
                  scrollToSection("about");
                }}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#experience"
                onClick={() => {
                  setMenuOpen(false);
                  scrollToSection("experience");
                }}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#credentials"
                onClick={() => {
                  setMenuOpen(false);
                  scrollToSection("credentials");
                }}
              >
                Credentials
              </a>
            </li>
            <li>
              <a
                href="#training"
                onClick={() => {
                  setMenuOpen(false);
                  scrollToSection("training");
                }}
              >
                Trainings
              </a>
            </li>

            <li>
              <a
                href="#footer"
                onClick={() => {
                  setMenuOpen(false);
                  scrollToSection("footer");
                }}
              >
                Let's Connect
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="home" class="heroSection">
        <div class="heroSection-left-container">
          <h1 class="headline">
            Blueprinting <span class="highlight-script-bold">frameworks,</span>
            <br />
            aligning mandates,
            <br />
            <span class="highlight-script">mentoring success</span>
          </h1>

          <p class="heroSection-description">
            <span class="heroSection-description-bold">Empowering CXOs</span>{" "}
            with Cybersecurity & Privacy Solutions , Expert in{" "}
            <span class="heroSection-description-bold">GRC Frameworks</span> &
            Regulatory Requirements , Trainer by Choice.
          </p>

          <div class="sign-board-container">
            <img src={signBoard} alt="board" width={200} />
          </div>
        </div>
        <div class="heroSection-right-container">
          <img src={path} alt="path" class="path-img" width={600} />
          <img src={hikingMan} alt="man" class="hiking-man-img" width={350} />
          <img src={blob} alt="blob" class="blob-img" width={350} />
          <img src={sun} alt="blob" class="sun-img" width={150} />
          <img src={cloud} alt="blob" class="cloud-img" width={150} />
          <img src={mountain} alt="blob" class="mountain-img" width={500} />
          <img
            src={footprintImage}
            alt="blob"
            class="footprint-img"
            width={150}
          />
        </div>
      </section>

      <section id="about" class="aboutSection">
        <div class="aboutSection-container">
          <p class="aboutSection-tagline">
            A progression grounded in{" "}
            <span class="highlight-script">learning deeply,</span> leading
            thoughtfully and growing continuously.
          </p>
        </div>

        <div class="about-container">
          <div class="about-card-container reveal reveal-delay-1">
            <img src={foundationImage} alt="domain" width={200} />
            <p class="about-card-heading">Foundation</p>
            <ul class="about-card-list">
              <li>
                Strong academic grounding in information security and data
                privacy
              </li>
              <li>
                Over a decade of experience working across multiple industries
              </li>
              <li>
                A unique blend of institutional research and hands-on industrial
                security leadership .
              </li>
            </ul>
          </div>
          <div class="about-card-container reveal reveal-delay-2">
            <img src={domainImage} alt="domain" width={200} />

            <p class="about-card-heading">Domain Focus</p>
            <ul class="about-card-list">
              <li>
                Orchestrating governance, risk, and privacy programs across
                global organizational contexts.
              </li>
              <li>
                Translating rigid regulatory and framework requirements into
                usable, scalable, real‑world programs.
              </li>
              <li>
                ISO 27001 · ISO 27701 · SOC 2 · GDPR · NIST CSF · TPRM · HIPAA ·
                HITRUST · UAE NESA · ISO 9001 · ISO 17100 · ISO 13485 · ISO
                18587 · ISO 42001
              </li>
            </ul>
          </div>
          <div class="about-card-container reveal reveal-delay-3">
            <img src={learningImage} alt="domain" width={200} />

            <p class="about-card-heading">Learning & Development</p>
            <ul class="about-card-list">
              <li>
                Being part of Academic/Training/Mentoring is the vital oxygen
                that sustains my professional journey.{" "}
              </li>
              <li>
                Designing bespoke academic and corporate programs that bridge
                theory with industrial reality
              </li>
              <li>
                Actively enabling global teams and academic institutions to
                excel through collaborative knowledge exchange.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="experience" class="experienceSection">
        {/* heading */}
        <p class="section-heading reveal">The Strategic Architect</p>

        {/* Experience container */}
        <div class="experience-container">
          <div style={{ width: "60%" }}>
            <div class="industry-section">
              <h1>
                <span class="highlight-script" style={{ marginBottom: "2rem" }}>
                  Industry Exposure
                </span>
              </h1>
              <div class="industry-tags">
                {industryExposureList?.map((item) => (
                  <span class="industry-tag">{item}</span>
                ))}
              </div>
            </div>
            <table class="experience-table reveal">
              <thead>
                <tr>
                  <th>Experience per Domain</th>
                  <th>Total 12+ Experience</th>
                </tr>
              </thead>
              <tbody>
                {experiencePerDomain?.map((item) => (
                  <tr>
                    <td>{item?.domain}</td> <td>{item?.experience}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div class="experience-accordian-section reveal">
            <h2>
              <span class="highlight-script" style={{ marginBottom: "2rem" }}>
                Key Projects & Strategic Initiative
              </span>
            </h2>
            {expertiseData?.map((item, index) => (
              <div class="accordian-container">
                <div class="accordian-header-container">
                  <p class="accordian-heading">{item?.title}</p>
                  {index !== selectedAccordian ? (
                    <IoAddOutline
                      size={"2rem"}
                      style={{ cursor: "pointer" }}
                      onClick={() => setSelectedAccordia(index)}
                    />
                  ) : (
                    <HiOutlineMinus
                      size={"2rem"}
                      style={{ cursor: "pointer" }}
                      onClick={() => setSelectedAccordia(-1)}
                    />
                  )}
                </div>
                {index === selectedAccordian && (
                  <ul class="accordian-list">
                    {item?.points?.map((point) => (
                      <li>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="credentials" class="education-section">
        <p class="section-heading">Credentials</p>
        <div class="edu-pub-grid">
          <div class="education-container">
            <h1>
              <span class="highlight-script" style={{ marginBottom: "2rem" }}>
                Education
              </span>
            </h1>
            <div style={{ display: "flex" }}>
              <img
                src={roadmapImage}
                alt="roadmap"
                width={200}
                style={{ transform: "rotate(340deg)" }}
              />
              <div>
                <div class="edu-item reveal reveal-delay-1">
                  <h3 class="degree">PhD in Data Security & Privacy</h3>
                  <p class="institute">
                    Indian Institute of Information Technology (IIIT) Allahabad
                  </p>
                  <p class="duration">2024 – 2027 (Expected)</p>
                </div>

                <div class="edu-item reveal reveal-delay-2">
                  <h3 class="degree">
                    Master of Science (MS) in Cyber Law & Information Security
                  </h3>
                  <p class="institute">
                    Indian Institute of Information Technology (IIIT) Allahabad
                  </p>
                  <p class="duration">2012 – 2014</p>
                </div>

                <div class="edu-item reveal reveal-delay-3">
                  <h3 class="degree">
                    Bachelor of Engineering (BE) in Computer Science &
                    Engineering
                  </h3>
                  <p class="institute">
                    Rajiv Gandhi Prodyogiki Vishwavidyalaya, Bhopal
                  </p>
                  <p class="duration">2007 – 2011</p>
                </div>
              </div>
            </div>
          </div>
          <div class="certificate-container" style={{ marginTop: "3rem" }}>
            <h1>
              <span class="highlight-script" style={{ marginBottom: "2rem" }}>
                Certificate
              </span>
            </h1>
            <div className="cert-box">
              <img src={cippLogo} alt="img" width={100} />
              <img src={ccskLogo} alt="img" width={100} />
              <img src={iso27001Logo} alt="img" width={100} />
              <img src={iso42001Logo} alt="img" width={100} />
              <img src={ctpraLogo} alt="img" width={100} />
              <img src={ccLogo} alt="img" width={100} />
              <img src={iso27701Logo} alt="img" width={100} />
              <img src={iso9001Logo} alt="img" width={100} />
              <img src={cdpseLogo} alt="img" width={100} />
              <img src={oneTrustBadge} alt="img" width={100} />
              <img src={oneTrustThirdPartyBadge} alt="img" width={100} />
              <img src={pluralsiteLogo} alt="img" width={100} />
              <img src={instructorEliteBadge} alt="img" width={100} />
            </div>
          </div>
        </div>
        <div class="publication-container">
          <h1>
            <span class="highlight-script" style={{ marginBottom: "2rem" }}>
              Publications
            </span>
          </h1>

          <section class="publications-section">
            <div class="pub-item">
              <h3 class="pub-title">
                Book Chapter – Integrating Threat Modelling and Risk Management
                into Cyber Resilience Strategies
              </h3>
              <p class="pub-meta">
                Book: Cyber Resilience: Fundamentals, Frameworks, and Future
                Directions
              </p>
              <p class="pub-meta">
                Chapter 7, Scrivener Publication, Wiley, ISBN [Book Under
                Publication]
              </p>
              <p class="pub-year">2026</p>
            </div>
            <div class="pub-item">
              <h3 class="pub-title">
                Book Chapter – Patient Data Privacy using Blockchain -{" "}
                <a
                  href="https://www.amazon.com/Blockchain-Applications-Healthcare-Innovations-Practices/dp/1786308940"
                  target="_blank"
                  class="pub-link"
                >
                  eBook Link
                </a>
              </h3>
              <p class="pub-meta">
                Book: Blockchain Applications in Healthcare: Innovations &
                Practices
              </p>
              <p class="pub-meta">
                Chapter 7, Wiley Publication, ISBN 9781786308948
              </p>
              <p class="pub-year">2023</p>
            </div>

            <div class="pub-item">
              <h3 class="pub-title">
                Book Chapter – Message Authentication -{" "}
                <a
                  href="https://www.taylorfrancis.com/chapters/edit/10.1201/9781351021708-14/message-authentication-ajay-prasad-jatin-sethi?context=ubx&refId=e01ae696-7660-4501-a17b-0248269d6c92"
                  class="pub-link"
                  target="_blank"
                >
                  eBook Link
                </a>
              </h3>
              <p class="pub-meta">
                Book: Message Authentication, Emerging Security Algorithms &
                Techniques
              </p>
              <p class="pub-meta">
                Chapter 14, CRC Press–Taylor & Francis Group, ISBN 9781351021708
              </p>
              <p class="pub-year">2019</p>
            </div>

            <div class="pub-item">
              <h3 class="pub-title">
                Cyber Tension in South Asian Countries -{" "}
                <a
                  href="https://pentestmag.com/product/pentest-pawning-powershell/"
                  class="pub-link"
                >
                  Article Link
                </a>
              </h3>
              <p class="pub-meta">Article published in PenTest Journal</p>
              <p class="pub-year">2016</p>
            </div>

            <div class="pub-item">
              <h3 class="pub-title">
                Transforming & Consolidating Health Informatics Operation
                Management System through Information Technology Driven
                Effective Approach
              </h3>
              <p class="pub-meta">
                Research paper presented and published at IIM Calcutta
              </p>
              <p class="pub-year">2015</p>
            </div>

            <div class="pub-item">
              <h3 class="pub-title">
                Impact Calculation and Measures for Healthcare Privacy Breaches
                -
                <a
                  href="https://www.bluetoad.com/publication/?i=208124&p=32&view=issueViewer"
                  class="pub-link"
                  target="_blank"
                >
                  Article Link
                </a>
              </h3>
              <p class="pub-meta">
                Research paper published in ISSA Journal USA
              </p>
              <p class="pub-year">2014</p>
            </div>
          </section>
        </div>
      </section>

      <section id="training" class="training-section">
        <p class="section-heading">The Mentor by Choice</p>

        <div class="training-container">
          {/* image */}

          <img
            src={instructorImage}
            alt="instructor"
            width={600}
            style={{ marginTop: "3rem" }}
          />

          {/* content */}
          <div>
            <div>
              <h1>
                <span class="highlight-script" style={{ marginBottom: "2rem" }}>
                  Engagement Portfolio
                </span>
              </h1>

              <div class="portfolio-container">
                {clientPortfolio?.map((item) => (
                  <p>{item}</p>
                ))}
              </div>
            </div>
            <div>
              <h1>
                <span class="highlight-script" style={{ marginBottom: "2rem" }}>
                  Training Experience & Expertise
                </span>
              </h1>
              <div class="training-experience-container">
                <div
                  class="training-experience-item"
                  onClick={() =>
                    setSelectedTraining((prev) =>
                      prev === -1
                        ? setSelectedTraining(0)
                        : setSelectedTraining(-1),
                    )
                  }
                >
                  {selectedTraining === 0 ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight />
                  )}
                  <p>ISC2 Certifications Preparation</p>
                </div>

                {selectedTraining === 0 && (
                  <ul class="training-list">
                    {trainingExperience.isc2Certifications?.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                )}

                <div
                  class="training-experience-item"
                  onClick={() =>
                    setSelectedTraining((prev) =>
                      prev === -1
                        ? setSelectedTraining(1)
                        : setSelectedTraining(-1),
                    )
                  }
                >
                  {selectedTraining === 1 ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight />
                  )}
                  <p>ISACA Certifications Preparation</p>
                </div>

                {selectedTraining === 1 && (
                  <ul class="training-list">
                    {trainingExperience.isacaCertifications?.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                )}

                <div
                  class="training-experience-item"
                  onClick={() =>
                    setSelectedTraining((prev) =>
                      prev === -1
                        ? setSelectedTraining(2)
                        : setSelectedTraining(-1),
                    )
                  }
                >
                  {selectedTraining === 2 ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight />
                  )}
                  <p>Customized Trainings</p>
                </div>

                {selectedTraining === 2 && (
                  <ul class="training-list">
                    {trainingExperience.customizedTrainings?.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                )}

                <div
                  class="training-experience-item"
                  onClick={() =>
                    setSelectedTraining((prev) =>
                      prev === -1
                        ? setSelectedTraining(3)
                        : setSelectedTraining(-1),
                    )
                  }
                >
                  {selectedTraining === 3 ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight />
                  )}
                  <p>Others</p>
                </div>

                {selectedTraining === 3 && (
                  <ul class="training-list">
                    {trainingExperience.others?.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="success-section">
        <div className="success-content">
          <h4 className="success-label">Success Story</h4>

          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h2 className="success-title">
                Proof of Trust & Professional Impact
              </h2>

              <ul className="success-list">
                <li>
                  <IoCheckmarkSharp className="check-icon" color="black" />
                  <div>
                    <span>LinkedIn Recommendations</span>
                    <a
                      href="https://www.linkedin.com/in/sethijatin/details/recommendations/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin /> View LinkedIn
                    </a>
                  </div>
                </li>

                <li>
                  <IoCheckmarkSharp className="check-icon" color="black" />
                  <div>
                    <span>Training Feedbacks</span>
                    <a
                      onClick={() => setOpen(true)}
                      style={{ cursor: "pointer" }}
                    >
                      <FaStar /> View Feedbacks
                    </a>

                    {open && (
                      <FeedbackModal
                        open={open}
                        onClose={() => setOpen(false)}
                      />
                    )}
                  </div>
                </li>
              </ul>
            </div>
            <div className="success-illustration">
              <img src={boatImage} alt="Success Illustration" />
            </div>
          </div>
        </div>
      </section> */}

      <section className="success-section">
        <div className="success-content">
          <h4 className="success-label">Success Story</h4>

          <div className="success-body">
            <div className="success-left">
              <h2 className="success-title">
                Proof of Trust & Professional Impact
              </h2>

              <div className="proof-cards">
                {/* LinkedIn Card */}
                <a
                  href="https://www.linkedin.com/in/sethijatin/details/recommendations/"
                  target="_blank"
                  rel="noreferrer"
                  className="proof-card proof-card--linkedin reveal reveal-delay-1"
                >
                  <div className="proof-card__top">
                    <div className="proof-card__icon-wrap proof-card__icon-wrap--linkedin">
                      <FaLinkedin size={20} />
                    </div>
                    <span className="proof-card__title">
                      LinkedIn Recommendations
                    </span>
                  </div>
                  <p className="proof-card__desc">
                    Peer and client endorsements from professionals across
                    industries — directly on LinkedIn.
                  </p>
                </a>

                {/* Feedback Card */}
                <div
                  className="proof-card proof-card--feedback reveal reveal-delay-1"
                  onClick={() => setOpen(true)}
                >
                  <div className="proof-card__top">
                    <div className="proof-card__icon-wrap proof-card__icon-wrap--feedback">
                      <FaStar size={20} />
                    </div>
                    <span className="proof-card__title">Training Feedback</span>
                  </div>
                  <p className="proof-card__desc">
                    Real responses collected from participants after live
                    training sessions and certification bootcamps.
                  </p>
                </div>
              </div>

              {open && (
                <FeedbackModal open={open} onClose={() => setOpen(false)} />
              )}
            </div>

            <div className="success-illustration">
              <img src={boatImage} alt="Success Illustration" />
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" class="footer">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="logo">
              <span class="logo-text">JATIN SETHI</span>
            </div>
            <p>
              Empowering CXOs with Cybersecurity & Privacy Solutions | Expert in
              GRC Frameworks & Regulatory Requirements | Trainer by Choice
            </p>
          </div>

          {/* <div class="footer-nav">
            <h4>NAVIGATION</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Money Tips</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div> */}

          <div class="footer-contact">
            <h4>CONTACT INFO</h4>
            <div
              style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}
            >
              <MdOutlineMail size={25} />
              <p>jatin.sethi09@gmail.com</p>
            </div>

            <div
              style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}
            >
              <CiLinkedin size={25} />
              <a href="https://www.linkedin.com/in/sethijatin/" target="_blank">
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
