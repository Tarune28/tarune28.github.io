import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import washu from "../images/logos/washu1.png";
import mams from "../images/logos/mams.png";
import profile from "../images/logos/headshot.jpeg";
import { DescriptionIcon } from "@/components/icons/DescriptionIcon";

export const RESUME_DATA = {
  name: "Tarun Eswar",
  initials: "TE",
  location: "Massachusetts, USA",
  // locationLink: "https://www.google.com/maps/place/Massachusetts",
  about: "CS + Math at WashU",
  summary:
    "Hi, I’m Tarun, a current student at Washington University in St. Louis studying computer science and mathematics. I work primarily on backend architectures and distributed systems, with recent experience in distributed caching, event-driven services, and agent-orchestrated CI pipelines.",
  tutoringSummary:
    "Hi, I’m Tarun, a current student at Washington University in St. Louis. Throughout my time there, I’ve enjoyed math and computer science, and now I hope to help high school students achieve their full potential in these areas. With a strong background in mathematics, computer science, and engineering, my services range from AP to college-level classes. A more detailed overview of my services can be found below. ",
  tutoringServices: [
    "Algebra",
    "Geometry",
    "AP Pre-Calc",
    "AP Calculus",
    "Calculus III",
    "AP Statistics",
    "AP CSA",
    "Discrete Math",
  ],
  tutoringContact:
    "If you’re interested in learning more, feel free to contact me at e.tarun@wustl.edu. We will start with one free trial session and progress from there. If you require help in a subject related to either math or computer science that is not listed above, feel free to reach out--I'd be happy to let you know if I can help.",
  avatarUrl: "/headshot-1.jpeg",
  tutoringAvatar: "/headshot-1.jpeg",
  personalWebsiteUrl: "https://www.taruneswar.com",
  contact: {
    email: "e.tarun@wustl.edu",
    // tel: "+19784939450",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Tarune28",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/etarun",
        icon: LinkedInIcon,
      },
      {
        name: "Resume",
        url: "/resume.pdf",
        icon: DescriptionIcon,
      },
    ],
    // tutoring: {
    //   name: "Tarun",
    //   url: "/tutoring",
    // },
  },
  education: [
    {
      school: "Washington University in St. Louis",
      image: washu,
      degree: "Bachelor of Science in Computer Science & Mathematics",
      coursework:
        "Data Structures & Algorithms, Analysis of Algorithms, Systems Software, Programming Systems & Languages, Parallel & Concurrent Programming, Cloud Computing & Big Data, Object-Oriented C++ Software Development, Linear Algebra, Discrete Mathematics",
      gpa: "3.94",
      // start: "2024",
      end: "May 2028",
    },
    // {
    //   school: "Worcester Polytechnic Institute",
    //   image: mams,
    //   degree: "Computer Science",
    //   coursework: "Object-Oriented Design, Systems Design, Calculus I-III, Applied Statistics",
    //   gpa: "4.0",
    //   start: "2023",
    //   end: "2024",
    // },
  ],
  additional: [
    {
      company: "Washington University in St. Louis",
      link: "https://cse.wustl.edu/",
      badges: ["St. Louis, MO"],
      title: "Teaching Assistant",
      start: "Aug 2025",
      end: "present",
      description:
        "Teaching assistant for CSE 361 (Introduction to Systems Software), CSE 332 (Object-Oriented Software Development Lab), and CSE 132 (Introduction to Computer Engineering).",
    },
    {
      company: "Staples",
      link: "https://www.staples.com/",
      badges: ["Shrewsbury, MA"],
      title: "Retail Associate",
      start: "Oct 2023",
      end: "Aug 2024",
      description:
        "Trained and worked at the Shrewsbury location as a cashier aimed at improving the customer experience. Served as a janitor, re-stocker for freight, and more in addition to cashiering.",
    },
    // {
    //   company: "365toJapan",
    //   link: "https://365tojapan.com/",
    //   badges: ["Self-Employed"],
    //   title: "Founder, Author, Developer",
    //   start: "Sep 2019",
    //   end: "Jun 2024",
    //   description:
    //     "Created weekly Japanese blogs (cultural, learning, research); worked with Northeastern lecturer Brett Murphy Hunt as an editor; reached 4000+ global reads and created a successful community haiku contest; developed the platform from scratch with a MERN stack.",
    // },
  ],
  work: [
    {
      company: "Rivian",
      link: "https://rivian.com",
      badges: ["Irvine, CA"],
      title: "Software Engineering Intern",
      start: "May 2026",
      end: "Aug 2026",
      description:
        "Agent-Orchestrating CI + Event-Driven Notifications on an Internal Service-Management Platform (React / Fastify / Postgres)",
    },
    {
      company: "Stoke Space",
      link: "https://www.stokespace.com",
      badges: ["Seattle, WA"],
      title: "Software Engineering Intern",
      start: "Jan 2026",
      end: "Apr 2026",
      description:
        "Distributed Caching (ElastiCache / Redis) + Query Optimization on Boltline's GraphQL Services",
    },
    {
      company: "Fresenius Medical Care",
      link: "https://freseniusmedicalcare.com/en-us/",
      badges: ["Lexington, MA"],
      title: "Software Engineering Intern",
      start: "May 2025",
      end: "Aug 2025",
      description:
        "CrowdStrike KPI Automations (Flask + Go CLI), LiteLLM on AWS EKS, and a ServiceNow MCP Server",
    },
    {
      company: "Rakuten 6th Sense",
      link: "https://sixthsense.rakuten.com/",
      badges: ["Remote"],
      title: "Software Engineering Intern",
      start: "Jun 2023",
      end: "Aug 2023",
      description: "LLM-Powered QA Chatbot + B2B AIOps UI Features",
    },
    // {
    //   company: "Rakuten SixthSense",
    //   link: "https://sixthsense.rakuten.com/platform/cognitive-ai",
    //   badges: ["Remote"],
    //   title: "Software Engineering Intern",
    //   start: "Jun 2022",
    //   end: "Aug 2022",
    //   description:
    //     "Worked on the front and backend for 6th sense—a monitoring platform produced as a B2B model for other developers to track the performance vitals of their projects; functioned as a full stack developer using vue.js, node.js, and Elastic Cloud to provide better capabilities to local test acceleration and incident management of applications.",
    // },
  ],
  skills: [
    "Python",
    "Java",
    "C/C++",
    "Go",
    "PHP",
    "JavaScript/TypeScript",
    "Dart",
    "SQL",
    "React.js",
    "Next.js",
    "Vue.js",
    "Node.js",
    "React Native",
    "Flutter",
    "Django",
    "FastAPI",
    "Flask",
    "Express.js",
    "Spring Boot",
    "Electron",
    "GraphQL",
    "REST APIs",
    "Redux",
    "Socket.io",
    "TensorFlow",
    "NumPy",
    "Scikit-learn",
    "Llama Stack",
    "Tailwind CSS / ShadCN",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "ElastiCache",
    "Prisma",
    "Supabase",
    "Firebase Firestore",
    "Docker",
    "Kubernetes",
    "Pulumi (IaC)",
    "Linux",
    "Bash",
    "Git",
    "Jenkins",
    "Postman",
    "Datadog",
    "AWS (EKS / ECR / Aurora / ElastiCache)",
    "Azure DevOps",
    "Google Cloud",
  ],
  projects: [
    {
      title: "SimplTutor",
      techStack: [
        "Supabase",
        "ExpressJS",
        "ReactJS",
        "Redux",
        "NodeJS",
        "Stripe",
        "ShadCN",
        "Socket.io",
        "+more",
      ],
      description:
        "Management platform sold to a tutoring company to automate billing for 15 staff and 150+ students",
      link: {
        label: "simpltutor.com",
        href: "https://simpltutor.com",
      },
      production: true,
    },
    {
      title: "InternX Careers",
      techStack: ["Firebase", "ExpressJS", "ReactJS", "NodeJS", "Ant-Design"],
      description:
        "Kickstarting careers through ai-driven application recommendations",
      link: {
        label: "projx-hbp.web.app",
        href: "https://projx-hbp.web.app/",
      },
      production: false,
    },
    {
      title: "MAMS SISO",
      techStack: [
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MySQL",
        "Raspberry Pi",
        "Firebase",
        "+ more",
      ],
      description:
        "Digital sign-in/out system used by 100+ students; first student-built app adopted by WPI (access restricted)",
      link: {
        label: "mass-academy-sign-in-system.web.app",
        href: "https://mass-academy-sign-in-system.web.app/",
      },
      production: true,
    },
    {
      title: "WPI Roadmap",
      techStack: ["Firebase", "ExpressJS", "ReactJS", "NodeJS", "Ant-Design"],
      description:
        "Academic advising app, 2024 GoatHacks winner (1st of 50+ teams), used by 50+ students",
      link: {
        label: "roadmap-wpi.web.app",
        href: "https://roadmap-wpi.web.app",
      },
      production: false,
    },
    {
      title: "WashU Course Planner",
      techStack: ["ReactJS", "NodeJS", "ExpressJS", "Prisma", "MUI"],
      description: "Helping students plan their WashU academic journey",
      link: {
        label: "github.com/dscwashu",
        href: "https://github.com/dscwashu/washu-course-planner",
      },
      production: false,
    },
    {
      title: "MFLogP - Dynamics Lab",
      techStack: ["Python", "Flask", "OpenCV", "Chemparse"],
      description: "An interactive way to use the Molecular Formula-LogP model",
      link: {
        label: "mflogp.wpi.edu",
        href: "https://mflogp.wpi.edu/",
      },
      production: false,
    },
    // {
    //   title: "Trify",
    //   techStack: ["Flutter", "Dart", "Location Services", "Routing"],
    //   description: "Accelerating electrification of transportation",
    //   link: {
    //     label: "trify.us",
    //     href: "https://trify.us/",
    //   },
    // },

    {
      title: "Modeling TRS MRI",
      techStack: [
        "Python",
        "Tensorflow",
        "ResNet",
        "OpenCV",
        "GradCam",
        "Flask",
      ],
      description: "A deep learning model to predict OCD from fMRI scans",
      link: {
        label: "arXiv",
        href: "https://arxiv.org/abs/2306.12435v2",
      },
      production: true,
    },
    // {
    //   title: "TriggerCalc",
    //   techStack: ["ReactJS", "NodeJS", "Bootstrap", "Git"],
    //   description: "A calculator to help women struggling with infertility/pregnancy process",
    //   link: {
    //     label: "triggercalc.com",
    //     href: "https://triggercalc.com/",
    //   },
    // }
  ],
  honors: [
    {
      title: "WashU Meta x 8VC Hackathon Winner",
      description:
        "Worked with a team of 4 to create intern-x, which helps interns find and apply for job opportunities using ai-driven technology.",
      link: {
        label: "WashU Hackathon",
        href: "https://skandalaris.wustl.edu/event/2025/03/19/llama-stack-challenge-washu-hackathon/",
      },
    },
    {
      title: "WPI GoatHacks Competition Winner",
      description:
        "Collaborated with a team of 4 and won the 2024 WPI GoatHacks Hackathon. Created the WPI Roadmap app to help students plan their academic success at WPI.",
      link: {
        label: "WPI Hackathon",
        href: "https://hack.wpi.edu/index.html",
      },
    },
    {
      title: "Scholastic Arts & Writing Awards",
      description:
        "Placed in the top 0.05% of poetry entries. Published piece and recognized as a national gold medalist / NSPP semifinalist nominee. Invited to the 100th Ceremony at Carnegie Hall.",
      link: {
        label: "award",
        href: "https://www.artandwriting.org/gallery/640423",
      },
    },
    // {
    //   title: "Top 60 Japan News & Blogs for 2023",
    //   // awards: ["USA Finalist (Top 6%)"],
    //   description: "Awarded for the 365toJapan blog as a top 60 blog for Japan news and culture which was based on activity metrics, community engagement, and content quality.",
    //   link: {
    //     label: "ranking",
    //     href: "https://blog.feedspot.com/japan_blogs/",
    //   },
    // },
  ],
  certificates: [
    {
      title: "Japanese Language Proficiency Test N5",
      awardee: ["The Japan Foundation"],
      description: "Basic Japanese Language Proficiency",
    },
    {
      title: "The Seal of Biliteracy in Japanese & English",
      awardee: ["The State of Massachusetts"],
      description: "Awarded for proficiency in Japanese and English",
    },
  ],
} as const;
