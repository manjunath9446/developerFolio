/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Manjunath",
  title: "Hi all, I'm Manjunath R Karaguppi", // Added last name
  subTitle: emoji(
    "A passionate Full Stack Software Developer 💻 and AI/ML enthusiast 🤖 experienced in building Web applications with JavaScript / React.js / Node.js and leveraging cutting-edge technologies like Deep Learning and Generative AI."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1TuNBeUzVI2mc_vdmq49QwQRd-HLGEapL",  // Keep as-is or replace with a permanent link
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/manjunath9446", // From Resume 
  linkedin: "https://www.linkedin.com/in/manjunathkaraguppi/", // Updated to your LinkedIn handle from Resume 
  gmail: "manju.r.k9446@gmail.com", // From Resume 
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
// **ERROR FIX:** Merged 'skillssection' and 'skillsSection' into one constant: 'skillsSection'
// The structure with 'softwareSkills' is required for the component to map icons.
const skillsSection = {
  title: "What I Do",
  subtitle: "FULL STACK DEVELOPER & AI/ML ENTHUSIAST BUILDING ROBUST APPLICATIONS",
  skills: [
    emoji("⚡ Develop Full Stack Web Applications (MERN Stack) and highly interactive Front-End / User Interfaces using React and JavaScript."),
    emoji("⚡ Design, develop, and deploy AI/Machine Learning Models (NLP, Predictive Modeling) and integrate them into web solutions (e.g., Al-powered Grammar Checker, Network Security API)."),
    emoji("⚡ Work with data, performing Exploratory Data Analysis (EDA), Data Preprocessing, and developing ETL pipelines for data-driven insights."),
    emoji("⚡ Integration of third-party services such as Firebase, AWS, and backend APIs (e.g., Groq API, OpenWeather API) for enhanced functionality.")
  ],
  /* https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript", // Programming Languages [cite: 15]
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs", // Web Development [cite: 16]
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs", // Web Development [cite: 16]
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "python", // Programming Languages [cite: 15]
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database", // Programming Languages [cite: 15]
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB", // MERN Stack [cite: 16]
      fontAwesomeClassname: "fas fa-leaf" // Using 'leaf' for MongoDB
    },
    {
      skillName: "scikit-learn", // Data & ML [cite: 17]
      fontAwesomeClassname: "fas fa-brain" // Using 'brain' for ML
    },
    {
      skillName: "docker", // Tools & Platforms [cite: 20]
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git", // Tools & Platforms [cite: 20]
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "firebase", // Integration [cite: 16]
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Cambridge Institute of Technology, Bangalore", // From Resume 
      logo: require("./assets/images/images.png"), // Placeholder, use your logo path
      subHeader: "Bachelor of Science in Artificial Intelligence and Machine Learning", // From Resume 
      duration: "Graduating: 2026", // From Resume 
      desc: "Strong foundation in Full Stack Development, Artificial Intelligence, and Machine Learning.", // Based on Summary [cite: 7]
      descBullets: [
        "Relevant Coursework includes Data Structures & Algorithms, DBMS, Machine Learning, and Software Engineering. ",
        "Proficient in Python, SQL, and the MERN stack for robust web and AI-driven solutions. "
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "MERN Stack (Full Stack)", // Full Stack proficiency
      progressPercentage: "85%" // Estimated based on your multiple MERN/FastAPI projects
    },
    {
      Stack: "AI/Machine Learning", // ML/Deep Learning focus
      progressPercentage: "80%" // Estimated based on Deep Learning, NLP, and Predictive Modeling skills
    },
    {
      Stack: "Data Analysis & ETL", // Data Analyst Intern & Project experience
      progressPercentage: "75%" // Estimated based on Data Analyst role, EDA, SQL, and Power BI
    },
    // **NEW SKILL 1 ADDED HERE**
    {
      Stack: "Cloud (AWS/Firebase)", // Cloud platforms proficiency
      progressPercentage: "70%" // Example proficiency
    },
    // **NEW SKILL 2 ADDED HERE**
    {
      Stack: "SQL/Database Management", // SQL and Database proficiency
      progressPercentage: "80%" // Example proficiency
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Analyst Intern", // Role [cite: 23]
      company: "Ekshauk", // Company [cite: 23]
      companylogo: require("./assets/images/airbnbLogo.png"), // Placeholder, use your logo path
      date: "Dec 2023 – Apr 2024", // Dates [cite: 23]
      desc: "Conducted exploratory data analysis, data cleaning, and feature engineering to prepare datasets for ML models and analytical reporting.",
      descBullets: [
        "Developed and implemented visual dashboards using Power BI to track key metrics and identify performance trends. ",
        "Contributed to database design and optimized SQL queries for improved data retrieval efficiency."
      ]
    },
    {
        role:"Project Intern",
        company: "Samsung Prism",
        companylogo: require("./assets/images/googleAssistantLogo.webp"),
        date: "Specify Dates Here",
        desc: "Built an automated pipeline using CLIP, FID, and object detection techniques to rigorously evaluate the realism, prompt adherence, and hallucination levels in AI-generated images.",
        descBullets: [ "Developed a ranking system that efficiently processed over 25 images per minute].",
 "The system achieved a correlation of 0.8 or higher."
 ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
 title: "Key Projects", // Changed title to focus on project depth
 subtitle: "FULL-STACK AND AI/ML SOLUTIONS I'VE DEVELOPED",
 projects: [
  {
   image: require("./assets/images/download.jpg"), // Placeholder
      projectName: "AI-powered Grammar and Tense Checker Website", // From Resume [cite: 36]
      projectDesc: "Engineered a full-stack, AI-powered website featuring voice assistant integration, bilingual translation, and real-time grammar coaching using MERN Stack and FastAPI with Groq API (NLP/AI).",
      footerLink: [
        {
          name: "Project Details",
          url: "https://github.com/manjunath9446/grammer_checker" // Replace with project link if available
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"), // Placeholder
      projectName: "Network Security API with Machine Learning", // From Resume [cite: 46]
      projectDesc: "Designed and built a secure, scalable API using FastAPI to predict network intrusions using a Random Forest/Logistic Regression ML model, achieving 86% accuracy.",
      footerLink: [
        {
          name: "Project Details",
          url: "https://github.com/manjunath9446/ML_NetworkSecurity_project_original" // Replace with project link if available
        }
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"), // Placeholder
      projectName: "Full-Stack Commercial Loan Document Processor (Doc AI)", // From Resume [cite: 33]
      projectDesc: "Engineered a scalable, decoupled data pipeline for processing documents, achieving 80% processing resilience",
      footerLink: [
        {
          name: "Project Details",
          url: "https://doc-ai-1-i9ug.onrender.com" // Replace with project link if available
        }
      ]
    },
    {
              image: require("./assets/images/googleAssistantLogo.webp"), // Placeholder
      projectName: "AI Knowledge Base Chatbot (RAG)", // From Resume [cite: 33]
      projectDesc: "Developed a secure Retrieval-Augmented Generation (RAG) system using Python and LangChain to enable context-aware Q&A over custom PDF documents, eliminating LLM hallucinations.",
      footerLink: [
        {
          name: "Project Details",
          url: "https://rag-chatbot-2-xcn5.onrender.com" // Replace with project link if available
        }
      ]

    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Awards & Certifications 🏆 "), // Updated title to cover both
  subtitle:
    "Highlighting key competitive achievements and professional certifications in my tech journey!",

  achievementsCards: [
    // --- ACHIEVEMENTS ---
    {
      title: "National Level Cybersecurity Challenge Winner", 
      subtitle: "MVP Stage Winner", 
      image: require("./assets/images/download (1).jpg"), // Placeholder: Change to a relevant image
      imageAlt: "Cybersecurity Winner Logo",
      footerLink: [
        {
          name: "View Details",
          url: "#" // Replace with actual link to event/certificate if available
        },
      ]
    },
    {
      title: "Data Analysis Competition Award", // Focused title
      subtitle: "Awarded 2nd Prize in 'Insight in Sight' Inter-College Competition", 
      image: require("./assets/images/download (2).jpg"), // Placeholder: Change to a relevant image
      imageAlt: "Data Analysis Award",
      footerLink: [
        {
          name: "Certificate Link",
          url: "#" // Replace with actual link to certificate/details if available
        }
      ]
    },
    // --- CERTIFICATIONS ---
    {
      title: "Python Certificate", 
      subtitle: "SimpliLearn", 
      image: require("./assets/images/codeInLogo.webp"), // Placeholder
      imageAlt: "Python Certificate",
      footerLink: [
        {
          name: "Certification Link",
          url: "#" // Replace with actual link
        },
      ]
    },
    {
      title: "Power BI Certification", 
      subtitle: "SimpliLearn", 
      image: require("./assets/images/googleAssistantLogo.webp"), // Placeholder
      imageAlt: "Power BI Logo",
      footerLink: [
        {
          name: "Certification Link",
          url: "#" // Replace with actual link
        }
      ]
    },
    {
      title: "Full Stack Development Certification", // Clarified title
      subtitle: "Udemy", 
      image: require("./assets/images/pwaLogo.webp"), // Placeholder
      imageAlt: "Full Stack Development",
      footerLink: [
        {name: "Certification Link", url: "#"}, // Replace with actual link
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "False", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    // Add your blogs here
  ],
  display: false // Hiding since no blogs were provided
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET  SPEAKER BADGE 😅"
  ),

  talks: [
    // Add your talks here
  ],
  display: false // Hiding since no talks were provided
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // Add your podcast links here
  ],
  display: false // Hiding since no podcasts were provided
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"), // The emoji should display in the final title
  subtitle:
   "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "9068373423", // ENSURE THIS IS THE VALUE IN YOUR FILE
  email_address: "manju.r.k9446@gmail.com" 
};

// Twitter Section

const twitterDetails = {
  userName: "", // Replace with your twitter username without @
  display: true // Hiding since no Twitter was provided
};

const isHireable = true; // Set to true based on your professional summary 

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection, // **ERROR FIX: Exporting the single, corrected constant**
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};