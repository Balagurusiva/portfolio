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
    redux,
    tailwind,
    nodejs,
    mongodb,
    carrent,
    jobit,
    tripguide,
    github,
    vtube,
    amazonsite,
    githubpic
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    }

];

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
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux ",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
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
        name: "github",
        icon: github,
    }, 
     {
        name:"java",
        icon:"https://cdn.freebiesupply.com/logos/large/2x/java-logo-png-transparent.png"
        
    }
];

const experiences = [
    { 
        title: "Restaurant Site",
        site_link: "https://6530be1469118d6f26688eb2--ephemeral-mochi-76f31c.netlify.app/",
        iconBg: "#383E56",
        date: "HTML & CSS",
        points: [
            "I've become quite skilled with essential basic HTML tags, forms, semantic tags.",
            "My CSS skills have come a long way, allowing me to bring creativity to web content styling with a deep understanding of CSS properties.",
            "I've incorporated advanced layout concepts such as flexbox and CSS grid.",

        ],
    },
    {
        title: "TO DO Site",
        site_link: "https://balagurusiva.github.io/simple-To-Do-website/", 
        iconBg: "#E6DEDD",
        date: "HTML, CSS & JS",
        points: [
            "I acquired proficiency in responsive web design, ensuring an optimal user experience across various devices..",
            "Bootstrap integration enhanced the site's aesthetics and user interface, simplifying the design process.",
            "I used JavaScript to create task management features, like adding, editing, and deleting tasks, ensuring an interactive user experience.",
            "I learned DOM manipulation, employing methods like appendChild and removeChild for dynamic updates and real-time user interaction."]
    },

    {
        title: "Amazon UI clone app",
        site_link: "https://amazon-frontend-ui-clone.netlify.app/", 
        iconBg: "#383E56",
        date: "HTML, CSS , React, React-Router and JSX",
        points: [
            " I dove deep into concepts like hooks (useContext, useReducer, useState), state management and integrated Firebase for authentication.",
            "I had used leveraging the power of React Router for seamless page navigation and using the elegant useContext for efficient data sharing.",
            "Firebase powers the database and handles authentication for a seamless sign-in and sign-up process.",
        ],
    },
    {
        title: "vTube app",
        site_link: "https://v-tubes.netlify.app/", 
        iconBg: "#E6DEDD",
        date: "React application with material UI and rapdiAPIs",
        points: [
            "I delved deep into React concepts like API handling with the useEffect hook and React Router for page navigation.",
            "I learned and utilized Material-UI components to expedite the development process.",
            "Material-UI components and styling promote excellent code reusability.",
           "I gained experience in API handling with Axios and used RapidAPI for the API endpoints.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "vTube",
        description:
            "A single page web application for video playback  using React, React Router, Axios, and RapidAPI for backend data, along with a sleek Material-UI interface design.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "react-router",
                color: "green-text-gradient",
            },
            {
                name: "SPA",
                color: "pink-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            
        ],
        image: vtube,
        site_link: "https://v-tubes.netlify.app/", 
        source_code_link: "https://github.com/Balagurusiva/vtube",
    },
    {
        name: "Amazon UI clone",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "react-router",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: amazonsite,
        site_link: "https://amazon-frontend-ui-clone.netlify.app/", 
        source_code_link: "https://github.com/Balagurusiva/amazon-frontend-ui-clone",
    },
    {
        name: "Mini projects",
        description:
            "I learn best through project-based learning, which led me to undertake a variety of projects for mastering HTML, CSS, JavaScript, React, Node, and other concepts. You can find these projects in my GitHub repository.",
        tags: [
                {
                name: "HTML",
                color: "pink-text-gradient",
            },
            {
                name: "CSS",
                color: "blue-text-gradient",
            },
            {
                name: "js",
                color: "green-text-gradient",
            },
            {
                name: "react",
                color: "pink-text-gradient",
            },
            {
                name: "nodejs",
                color: "blue-text-gradient",
            },
        ],
        image: githubpic,
        site_link:"https://github.com/Balagurusiva",
        source_code_link: "https://github.com/Balagurusiva",
    },
];

export { services, technologies, experiences, testimonials, projects };