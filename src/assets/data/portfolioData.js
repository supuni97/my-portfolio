import portfolioImg01 from "../images/portfolio-01.png";
import portfolioImg02 from "../images/portfolio-02.jpg";
import portfolioImg03 from "../images/portfolio-03.jpg";
import portfolioImg04 from "../images/portfolio-04.jpg";
import portfolioImg05 from "../images/portfolio-05.jpg";
import portfolioImg06 from "../images/portfolio-06.jpg";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg03,
    category: "Web",
    title: "Tour & Travel Management Website",
    description:
      "A web application which aims to help users explore, discover, and book a wide range of tours and travel experiences. The platform offers a user-friendly interface to search for tours based on preferences. It includes features like tour details, booking options, and user reviews, making it easy for travelers to plan and manage their trips. The project is built using MERN stack to ensure a smooth and responsive user experience for various devices.",
    technologies: ["React js", "Express js", "Mongo DB", "Node js"],
    githubUrl: "https://github.com/supuni97/Tour-Management-Website",
  },
  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "Web",
    title: "Gym Application",
    description:
      "A web application provides various types of exercise tutorials need for a successful fitness journey. ",
    technologies: ["React js"],
    githubUrl: "https://github.com/supuni97/Gym-App",
  },
  {
    id: "03",
    imgUrl: portfolioImg01,
    category: "Web",
    title: "Physics Educational Gaming Platform",
    description:
      "Fun Physics is an innovative educational gaming platform aimed at revolutionizing physics learning for Sri Lankan students which  offers an engaging, interactive, and effective learning experience for students, blending educational content with gamification to foster interest and improve academic performance in physics.",
    technologies: ["React js", "Node js", "Mongo DB", "Unity"],
    githubUrl: "https://github.com/supuni97/Fun-Physics-WebGL",
  },
  {
    id: "04",
    imgUrl: portfolioImg04,
    category: "Mobile",
    title: "Real State App",
    description:
      "A mobile real estate app built with React Native, featuring Google authentication and dynamic routing for a personalized, seamless user experience. It allows users to browse property listings efficiently, view detailed information, and securely manage their profiles on the go.",
    technologies: ["React Native"],
    githubUrl: "https://github.com/supuni97/React-native-real-state-app",
  },
  {
    id: "05",
    imgUrl: portfolioImg05,
    category: "Web",
    title: "Online Coffee Shop Website",
    description:
      "A user-friendly online platform for purchasing premium coffee blends, enhancing customer experience and boosting sales.",
    technologies: ["Java Script", "PHP"],
    githubUrl:
      "https://github.com/supuni97/perfectcup--php-coffee-shop-website",
  },
  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "Ds",
    title: "Superstore Dashboard",
    description:
      "A simple business dashboard and a report for a super store that is created using power BI.",
    technologies: ["Power BI"],
    githubUrl: "https://github.com/supuni97/Superstore-Dashboard",
  },
];

export default portfolios;
