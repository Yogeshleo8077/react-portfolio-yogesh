import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";


export const HERO_CONTENT = `I am a passionate Web Developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React, Tailwind CSS and Bootstrap, as well as back-end technologies like Node.js, Express.js and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Web Developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Node.js, Express.js, Tailwind CSS, Bootstrap and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [

  {
    title: "E-Commerce Platform",
    image: project2,
    description:
      "A fully functional E Commerce Website with features like add items into cart, user cart, multiple payment gateway and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Express"],
    url: "https://e-commerce-frontend-three-nu.vercel.app/",
  },
  {
    title: "Food Delivery Website",
    image: project1,
    description:
      "A fully functional food delivery website with features like add food items, food cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Express"],
    url: "https://food-delivery-website-frontend-bpno.onrender.com/",
  },
];

export const CONTACT = {
  address: "Quarsi RamGhat Road, Aligarh",
  phoneNo: "+91 8077576904",
  email: "yogeshleo420@gmail.com",
};
