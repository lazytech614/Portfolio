import mongo from "/mongodb.png";
import exp from "/express.webp";
import react from "/react.png";
import node from "/node.png";
import html from "/html.png";
import css from "/css.png";
import js from "/js.jpg";
import tail from "/tailwind.png";
import boot from "/bootstrap.png";
import typescript from "/typescript.png";
import nextJs from "/nextJs.png";
import { Link } from "react-router-dom";

export const resumeFeatures = [
  {
    id: 1,
    feat: "Education",
    description:
      "Completed high school education from Netaji Subhas Vidyaniketan with a strong foundation in science and mathematics. Currently pursuing a Bachelor's degree in Chemical engineering at IIT Roorkee, focusing on building technical skills and knowledge in the field.",
    details: [
      {
        id: 1,
        type: "School",
        name: "Netaji Subbhas Vidyaniketan",
        branch: "Science",
      },
      {
        id: 2,
        type: "College",
        name: "Indian Institute of Technology, Roorkee",
        branch: "Chemical Engineering",
      },
    ],
  },
  {
    id: 2,
    feat: "Experience",
    description:
      "Fresher with a foundational understanding of web development technologies such as JavaScript, React, Node.js, and PostgreSQL. Have completed basic projects and am eager to contribute to development teams while continuing to learn and grow my skills in building modern web applications.",
  },
  {
    id: 3,
    feat: "Skills",
    description:
      "Proficient in MERN stack development (MongoDB, Express, React, Node.js). Basic understanding of building responsive web applications, API integration, and database management. Continuously learning and improving my skills in modern web development practices.",
    details: [
      {
        id: 1,
        type: "Mongodb",
        image: mongo,
      },
      {
        id: 2,
        type: "Express JS",
        image: exp,
      },
      {
        id: 3,
        type: "React JS",
        image: react,
      },
      {
        id: 4,
        type: "Node JS",
        image: node,
      },
      {
        id: 5,
        type: "Javascript",
        image: js,
      },
      {
        id: 6,
        type: "HTML",
        image: html,
      },
      {
        id: 7,
        type: "CSS",
        image: css,
      },
      {
        id: 8,
        type: "Tailwind CSS",
        image: tail,
      },
      {
        id: 9,
        type: "Bootstrap",
        image: boot,
      },
      {
        id: 10,
        type: "Typescript",
        image: typescript,
      },
      {
        id: 11,
        type: "NextJs",
        image: nextJs,
      },
    ],
  },
  {
    id: 4,
    feat: "Hobbies",
    description:
      "Enjoy coding and working on small projects in my free time. Like to stay updated with the latest in tech and web development. Also enjoy playing video games, watching movies, and spending time with friends.",
    details: [
      {
        id: 1,
        type: "Sports",
        name: "Badminton, Table tanis & Cricket",
      },
      {
        id: 2,
        type: "Fun",
        name: "Binge watching online web-series and movies, spending time with friends",
      },
      {
        id: 3,
        type: "Refresh",
        name: "I like travelling and meeting new people.",
      },
    ],
  },
  {
    id: 5,
    feat: "Contact",
    description:
      "Feel free to reach out! I'm open to connecting and excited to discuss opportunities or projects. Looking forward to hearing from you!",
    details: [
      {
        id: 1,
        type: "E-mail",
        branch: "derupanjan2021@gmail.com",
      },
      {
        id: 2,
        type: "Phone",
        branch: "+91 9362029992",
      },
      {
        id: 3,
        type: "Instagram",
        linkName: "rupan_jan48",
        link: "https://www.instagram.com/rupan_jan48/",
      },
      {
        id: 4,
        type: "Linked In",
        linkName: "Rupanjan De",
        link: "https://www.linkedin.com/in/rupanjan-de-15126527a/",
      },
      {
        id: 5,
        type: "Github",
        linkName: "lazytech614",
        link: "https://github.com/lazytech614",
      },
      {
        id: 6,
        type: "Twitter",
        linkName: "rupanjan_614",
        link: "https://x.com/rupanjan_614",
      },
    ],
  },
];
