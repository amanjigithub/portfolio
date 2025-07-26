import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  crmnext,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptifrutevegclassification,
  aptihouseprice,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
  python,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Cloud Computing",
    icon: mobile,
  },
  {
    title: "AI/ML Engineer",
    icon: backend,
  },
  {
    title: "DevOps Enthusiast",
    icon: creator,
  },
];

// ball 
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "java",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: typescript,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

export const skills = {
  languages: [
    { name: "Java", icon: "SiJava" },
    { name: "Python", icon: "SiPython" },
    { name: "HTML/CSS", icon: "SiHtml5" },
    { name: "C#", icon: "SiCsharp" },
    { name: "SQL", icon: "SiMysql" },
    { name: "Linux", icon: "SiLinux" }
  ],
  technologies: [
    { name: "Cloud Computing", icon: "Cloud" },
    { name: "TensorFlow", icon: "SiTensorflow" },
    { name: "Keras", icon: "Brain" },
    { name: "NumPy", icon: "Calculator" },
    { name: "OpenCV", icon: "Eye" },
    { name: "Scikit-learn", icon: "BarChart3" },
    { name: "Matplotlib", icon: "TrendingUp" },
    { name: "Jupyter Notebook", icon: "BookOpen" }
  ],
  softSkills: [
    { name: "Problem Solving", icon: "Lightbulb" },
    { name: "Deadline Management", icon: "Clock" },
    { name: "Teamwork", icon: "Users" },
    { name: "Communication", icon: "MessageCircle" }
  ]
};


// experiences data 
const experiences = [
  {
    title: "DevOps-Cloud Computing",
    company_name: "GLA University",
    company_website: "https://glauniversity.in:8085/Main/Index",
    icon: crmnext,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Jul 2024",
    points: [
      "Value Added Course",
      "Collaborated with developers in order to troubleshoot application related issues quickly.",
      "Combined root-level authentication and authorization technologies with ongoing system design to harden finished solutions.",
    ],
  },

  // {
  //   title: "Software Developer",
  //   company_name: "Newgen Software",
  //   company_website: "https://newgensoft.com/home-india/",
  //   icon: newgen,
  //   iconBg: "#E6DEDD",
  //   date: "Mar 2021 - Dec 2021",
  //   points: [
  //     "Developed a groundbreaking banking product for a Singapore-based firm, improved transaction management.",
  //     "Developed a dynamic dashboard for efficient transaction management, resulting in a 30% increase in productivity.",
  //     "Optimized frontend performance by achieving 20% reduction in page loading time and make it responsive.",
  //     "Created a transaction report generator, reducing report generation time by 50% and enhancing data analysis.",
  //   ],
  // },
  // {
  //   title: "Software Engineer Intern",
  //   company_name: "Skillrisers",
  //   company_website: "https://www.skillrisers.com/",
  //   icon: skillrisers,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2020 - Jul 2020",
  //   points: [
  //     "Contributed to the development of a Test Engine Application, empowering users to create and conduct tests seamlessly.",
  //     "Built three essential modules: Teacher, Student, and Admin, ensuring comprehensive functionality for all user roles.",
  //     "Collaborated effectively with the development team, actively participating in code reviews and resolving technical challenges.",
  //     "Demonstrated strong problem-solving skills, consistently delivering high-quality code and meeting project deadlines.",
  //   ],
  // },
  // {
  //   title: "Frontend Developer",
  //   company_name: "Self-employed",
  //   company_website: "https://proximus.surge.sh/index.html",
  //   icon: proximus,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2018 - Jan 2021",
  //   points: [
  //     "Spearheaded the development of a fully responsive website for the college coding society.",
  //     "Led coding sessions, actively sharing knowledge and insights to enrich members' programming skills and understanding.",
  //     "Organized informative sessions on cutting-edge technologies, including JavaScript and ReactJs.",
  //     "Curated and designed challenging coding problems for college competitions.",
  //   ],
  // },
];

// pojects data 
const projects = [
  {
    name: "Fruit and Vegetable Classification",
    description:
      "Developed a CNN model using TensorFlow and OpenCV to classify fruit and vegetable images with high accuracy. Tested on unseen datasets and visualized performance in Jupyter Notebook.",
    tags: [
      {
        name: "TensorFlow",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "CNN",
        color: "pink-text-gradient",
      },
      { 
        name: "Python", 
        color: "orange-text-gradient" 
      },
    ],
    image: aptifrutevegclassification,
    hosted_link: "https://github.com/amanjigithub/Fruit-vagitable_classificaition.git",
  },
  {
    name: "House Price Prediction",
    description:
      "Trained linear regression models using Scikit-learn on the Boston housing dataset after EDA and feature selection. Deployed the model using Joblib and demonstrated predictions in Jupyter Notebook.",
    tags: [
      {
        name: "Scikit-learn",
        color: "blue-text-gradient",
      },
      {
        name: "Linear Regression",
        color: "green-text-gradient",
      },
      {
        name: "EDA",
        color: "pink-text-gradient",
      },
      { 
        name: "Joblib", 
        color: "orange-text-gradient" 
      },
    ],
    image: aptihouseprice,
    hosted_link: "https://github.com/amanjigithub/House_price_prediction.git",
  },
//   {
//     name: "Zeal Web",
//     description:
//       "The Zeal website elevates the experience of enjoying activities with trusted friends, fostering connections and making every interaction exciting.",
//     tags: [
//       {
//         name: "reactjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "typescript",
//         color: "green-text-gradient",
//       },
//       {
//         name: "firebase",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: zealWeb,
//     hosted_link: "https://getzeal.co/",
//   },
//   {
//     name: "Zeal App",
//     description:
//       "Discover a world of activities with friends through Zeal, an engaging platform. Create events, post updates, chat, and enjoy in-person activities hassle-free. Boost your social life with Zeal!",
//     tags: [
//       {
//         name: "react-native",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "sendgrid",
//         color: "green-text-gradient",
//       },
//       {
//         name: "typescript",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: zealApp,
//     hosted_link:
//       "https://apps.apple.com/us/app/zeal-activities-with-friends/id6446917140",
//   },
//   {
//     name: "Roll Web",
//     description:
//       "The Roll website is the gateway to the future of decentralized communities and digital assets. It allows users to seamlessly earn, redeem, send, and trade social tokens.",
//     tags: [
//       {
//         name: "reactjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "green-text-gradient",
//       },
//       {
//         name: "formik",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: rollWeb,
//     hosted_link: "https://app.tryroll.com/",
//   },
//   {
//     name: "Roll App",
//     description:
//       "Join the future of decentralized communities and digital assets with Roll. Earn, redeem, send, and trade social tokens on this innovative platform. Experience transparent transactions and captivating UI design.",
//     tags: [
//       {
//         name: "react-native-web",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "green-text-gradient",
//       },
//       {
//         name: "storybook",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: rollApp,
//     hosted_link:
//       "https://play.google.com/store/apps/details?id=com.roll&hl=en_GB",
//   },
];

const personalInfo = {
  name: "Aman ",
  fullName: "Aman Badhautiya",
  email: "aman93977@gmail.com",
  number: "+91 7579795861",
  whatsapp: "+91 7579795862",
  role: "Aspiring Developer",
  about: `BTech CSE student, highly motivated and detail-oriented, who has hands-on experience with cloud computing, DevOps, and machine learning. Skilled in programming languages like Java, Python, and JavaScript, and familiar with web technologies and SQL. Proven experience in data analysis, project management, system debugging, and process optimization. Advancing my credentials with multiple certifications in data analytics, programming, and cloud technologies. A motivating self-starter with skill sets around communication, problem solving, and continuous learning and improvement.`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/drive/folders/1CPDldlIMyFepQzSsT2NSkFDA6N8zMi82",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/amanbadhautiya-3468a7193",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/amanjigithub",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
