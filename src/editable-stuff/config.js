// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "NACIB",
  middleName: "",
  lastName: "Mariem",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/nacibmariem",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/mariem.nacib",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/mariem_nacib/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/mariem-nacib/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/MariemNacib/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/nacibme.jpg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/me.jpg"),
  imageSize: 375,
  message:
    "I'm fueled by a relentless passion for advancing my skills, which I diligently cultivate through immersive hands-on learning experiences and dynamic development projects. My expertise becomes evident in the sophisticated yet user-friendly systems I create. I thrive on the challenges that come my way, constantly seeking opportunities to push my boundaries and broaden my horizons in the realm of software engineering. Every line of code I write is infused with a commitment to excellence and an insatiable curiosity to explore the uncharted territories of technology. As I continue to evolve and learn, I look forward to embracing fresh challenges and seizing every chance to elevate my skills to greater heights.",

  resume: require("../editable-stuff/mycv.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "NacibMariem", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [
    "ProjetCppA23G2",
    "Jeu-video2D-SDL",
    "EspritProjet",
    "django",
    "ReactWork",
    "Projet-Web",
  ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/me.jpg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/me.jpg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Angular", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript / TypeScript", value: 70 },
    { name: "React", value: 85 },
    { name: "HTML/CSS", value: 75 },
    { name: "C#", value: 55 },
    { name: "php", value: 90 },
    { name: "Java", value: 60 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I am passionate about enhancing my skills through hands-on learning and development projects. My expertise lies in web and desktop application development.I am dedicated to delivering high-quality work and am always looking for new challenges to expand my knowledge and expertise",
  email: "mariem.nacib@esprit.tn",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    // {
    //   role: 'Software Engineer',// Here Add Company Name
    //   companylogo: require('../assets/img/dell.png'),
    //   date: 'June 2018 – Present',
    // },
    // {
    //   role: 'Front-End Developer',
    //   companylogo: require('../assets/img/boeing.png'),
    //   date: 'May 2017 – May 2018',
    // },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
