const base = import.meta.env.BASE_URL;

export const myProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A comprehensive e-commerce platform built with NextJS, ReactJS, NodeJS, Vite, Docker, and various cloud services.",
    subDescription: [
      "Designed and implemented end-to-end functionalities—including SEO, CMS, CRM, and a role-based admin control system—to streamline operations and enhance both frontend responsiveness and backend reliability.",
      "Optimized open-source Admin and CMS frameworks through API and database customizations; integrated additional tools such as Meilisearch, Google Analytics, and SendGrid.",
      "Built a responsive, custom web page from scratch with full internationalization support (Simplified/Traditional Chinese, English, Japanese, Korean)",
    ],
    href: "",
    logo: "",
    image: `${base}assets/projects/Snapshot.png`,
    tags: [
      {
        id: 1,
        name: "vitejs",
        path: `${base}assets/logos/vitejs.svg`,
      },
      {
        id: 2,
        name: "react",
        path: `${base}assets/logos/react.svg`,
      },
      {
        id: 3,
        name: "nodejs",
        path: `${base}assets/logos/nodejs.svg`,
      },
      {
        id: 4,
        name: "stripe",
        path: `${base}assets/logos/stripe.svg`,
      },
    ],
  },
];

export const experiences = [
  {
    title: "Bachelor of Computer Science",
    job: "University of Melbourne",
    date: "2021-2023",
    contents: [
      "Major in Computing and Software Systems",
      "Graduation in December 2023",
      "Coursework: Calculus, Linear Algebra, Probability, Statistics, Algorithms & Data Structures, Database Systems, Object-Oriented Software Design, Information Security & Privacy, Data Processing, Artificial Intelligence",
      "Concrete experience in software development, data analysis, and machine learning through various course projects and internships.",
    ],
  },
  {
    title: "Game Developer & Code Quality Assurance",
    job: "Undergraduate Intern Project",
    date: "August 2023 - November 2023",
    contents: [
      "Worked on a project to develop a game for autistic children, focusing on emotional learning and regulation.",
      "Collaborated with a team to design and implement the game, ensuring it met the needs of the target audience.",
      "Conducted code quality assurance to ensure the game was bug-free and met performance standards.",
      "Employed Agile Scrum methodologies to create an interactive game based on a novel scientific theory of emotions, aimed at helping autistic children learn and regulate feelings.",
      "Achieved cross-platform compatibility (Linux, Windows, iOS, Android, and web) with high user satisfaction, and integrated the final product into an iOS application built with React Native.",
    ],
  },
  {
    title: "Master of Information Technology",
    job: "University of Melbourne",
    date: "Februaray 2024- July 2025",
    contents: [
      "Specialized in Distributed Computing",
      "Graduation in July 2025",
      "Coursework: Cluster & Cloud Computing, Machine Learning, Natural Language Processing, Computer Vision, Software Management, Distributed Systems & Algorithms, Advanced Database Systems & Algorithms",
      "Projects: Big Data Visualization and Analytics on the Cloud, Auto Evidence-Retrieval and Claim Labelling, 3D Collision Predictions Based on 2D Images, Parallel Processing of Big Data on High Performance Computers",

    ],
  },
  {
    title: "Research Software Engineer",
    job: "Walter & Eliza Hall Institute of Medical Research (WEHI)",
    date: "July 2024 - December 2024",
    contents: [
      "Worked on a project to develop a web-based platform for data integration and analysis of medical research databases.",
      "Collaborated with a team to design and implement the platform, ensuring it met the needs of the research community.",
      "Established 90% of coding work (front/backend) at early start of tasks; led and mentored two undergraduate colleagues to develop an integration platform for medical research databases",
      "Engineered solutions with ReactJS and Python frameworks; deployed on Nectar Research Cloud to establish a scalable testing environment and support future collaborative developments",

    ],
  },
  {
    title: "Full-Stack Developer",
    job: "E-Commerce Web Platform",
    date: "December 2024 - March 2025",
    contents: [
      "Developed a comprehensive e-commerce platform using NextJS, ReactJS, NodeJS, Vite, Docker, and various cloud services; contributed over 90% of frontend coding and provided deep expertise for API integration.",
      "Designed and implemented end-to-end functionalities—including SEO, CMS, CRM, and a role-based admin control system—to streamline operations and enhance both frontend responsiveness and backend reliability.",
      "Optimized open-source Admin and CMS frameworks through API and database customizations, leading to a 20% boost in query performance; integrated additional tools such as Meilisearch, Google Analytics, and SendGrid.",
      "Built a responsive, custom web page from scratch with full internationalization support (Simplified/Traditional Chinese, English, Japanese, Korean); enhanced client and user accessibility and satisfaction by 40%.",
      "Spearheaded a multicultural developer team, coordinating regular client meetings and agile planning sessions, accelerating project delivery by 30%.",
    ],
  },
  {
    title: "Full Stack Developer/Product Owner",
    job: "Fintech/Financial Forecasting App",
    date: "February 2025-Present",
    contents: [
      "Developed a cross-platform mobile application using Flutter for smooth and responsive UI.",
      "Backend using Java Springboot to ensure robust and scalable backend services.",
      "Followed modular architecture with MVVM (Model-View-ViewModel) separation using the Stacked package.",
      "Integrated secure Open Banking APIs to process real-time financial data and deliver personalized insights.",
      "Implemented features include user authentication, goal management, expense tracking, and financial profile management.",
      "Designed and developed interactive and animated expense charts for visualizing user expenses.",,
    ],
  },
];
export const reviews = [
  {
    name: "No Clients Yet",
    username: "@no_clients_yet",
    body: "Hope to get some soon! No Feedback yet.",
    img: "https://robohash.org/jack",
  },
  {
    name: "No Clients Yet",
    username: "@no_clients_yet",
    body: "Hope to get some soon! No Feedback yet.",
    img: "https://robohash.org/jack",
  },
  {
    name: "No Clients Yet",
    username: "@no_clients_yet",
    body: "Hope to get some soon! No Feedback yet.",
    img: "https://robohash.org/jack",
  },
  {
    name: "No Clients Yet",
    username: "@no_clients_yet",
    body: "Hope to get some soon! No Feedback yet.",
    img: "https://robohash.org/jack",
  },
];
