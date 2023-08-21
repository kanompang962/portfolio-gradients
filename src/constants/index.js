import { faFacebook, faGithub, faInstagram, faLine, } from "@fortawesome/free-brands-svg-icons";
import {
    people01,
    people02,
    people03,
    facebook,
    instagram,
    linkedin,
    twitter,
    airbnb,
    binance,
    coinbase,
    dropbox,
    send,
    shield,
    star,
    html,
    css,
    js,
    react,
    ex,
    node,
    tailwind,
    bootstrap,
    flutter,
    php,
    mui,
    mg,
    my,
    netflix,
    youtube,
    hulu,
    dash_scss,
    dash_tw,
    mern,
    photo,
    warranty,
    insect,
    game,
    crud,
    xd,
    ps,
    figma,
    github,
    postman
} from "../assets";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "education",
        title: "Education",
    },
    {
        id: "workings",
        title: "Workings",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const features = [
    {
        id: "feature-1",
        icon: star,
        title: "Mahasarakham University",
        content:
            "Computer Science",
    },
    {
        id: "feature-2",
        icon: shield,
        title: "Bantan Wittaya School",
        content:
            "Mathematics-Science Programme",
    },
    {
        id: "feature-3",
        icon: send,
        title: "ChumChon Thaen Prajan School",
        content:
            "study",
    },
];

export const feedback = [
    {
        id: "feedback-1",
        content:
            "Developed a video playback and authentication system.",
        title: "Netflix",
        link: "https://netflix-clone-frontend-cyan.vercel.app",
        github: "https://github.com/kanompang962/netflix-clone-frontend.git",
        img: netflix,
    },
    {
        id: "feedback-2",
        content:
            "Developed a video playback and authentication system.",
        title: "Youtube",
        link: "https://youtube-clone-omega-snowy.vercel.app",
        github: 'https://github.com/kanompang962/youtube-clone.git',
        img: youtube,
    },
    {
        id: "feedback-3",
        content:
            "Developed a user interface movie system.",
        title: "Hulu",
        link: "https://hulu-clone-rho-wine.vercel.app",
        github: "https://github.com/kanompang962/hulu-clone.git",
        img: hulu,
    },
    {
        id: "feedback-4",
        content:
            "Developed an admin dashboard for managing data with the tailwind and material UI",
        title: "Dashboad-Tailwind",
        link: "https://dashboard-tailwind-five.vercel.app",
        github: "https://github.com/kanompang962/dashboard-tailwind.git",
        img: dash_tw,
    },
    {
        id: "feedback-5",
        content:
            "Developed an admin dashboard for managing data with the scss.",
        title: "Dashboad-SCSS",
        link: "https://dashboard-scss-eight.vercel.app",
        github: "https://github.com/kanompang962/dashboard-scss.git",
        img: dash_scss,
    },
    {
        id: "feedback-6",
        content:
            "Developed a user interface game system.",
        title: "Game App",
        link: "https://game-list-clone.vercel.app",
        github: "https://github.com/kanompang962/game-list-clone.git",
        img: game,
    },
    {
        id: "feedback-7",
        content:
            "Design and develop the photography user interface.",
        title: "photography-starter",
        link: "https://photography-starter-two.vercel.app",
        github: "https://github.com/kanompang962/photography-starter.git",
        img: photo,
    },
    {
        id: "feedback-8",
        content:
            "Develop a system for adding, reading, editing, deleting",
        title: "CRUD",
        link: 'https://www.euroxforce.com:20443/warranty/?fbclid=IwAR2x0wyZnMWbyuZFcQ2MSuqIAsG_Nh_5p9vZbEvbGsvyuOmWBexItGIxWLc',
        github: "https://github.com/kanompang962/warranty_v2.git",
        img: crud,
    },
    {
        id: "feedback-9",
        content:
            "Develop an article authoring system with MongoDB Express React Node.",
        title: "MERN Stack",
        link: "https://mern-stack-workshop-frontend.vercel.app",
        github: "https://github.com/kanompang962/mern-stack-workshop-backend.git",
        img: mern,
    },
    {
        id: "feedback-10",
        content:
            "Developed a mobile pest database management system.",
        title: "Pest",
        link: "",
        github: "",
        img: insect,
    },
    {
        id: "feedback-11",
        content:
            "Developed an product warranty registration system.",
        title: "Product Warranty Registration System",
        link: 'https://www.euroxforce.com:20443/warranty/?fbclid=IwAR2x0wyZnMWbyuZFcQ2MSuqIAsG_Nh_5p9vZbEvbGsvyuOmWBexItGIxWLc',
        github: "https://github.com/kanompang962/warranty_v2.git",
        img: warranty,
    },
];

export const stats = [
    {
        id: "stats-1",
        title: "User Active",
        value: "3800+",
    },
    {
        id: "stats-2",
        title: "Trusted by Company",
        value: "230+",
    },
    {
        id: "stats-3",
        title: "Transaction",
        value: "$230M+",
    },
];

export const footerLinks = [
    {
        title: "Commune",
        links: [
            {
                name: "thianchaichamnan@gmail.com",
                link: "",
                icon: faEnvelope
            },
            {
                name: "+66 931177457",
                link: "",
                icon: faPhone
            },

        ],
    },
    {
        title: "Community",
        links: [
            {
                name: "kanompang962",
                icon: faGithub,
                link: "https://github.com/kanompang962",

            },
            {
                name: "Idavee",
                icon: faFacebook,
                link: "https://www.facebook.com/boydef.line.3",

            },
            {
                name: "iddaveee",
                icon: faInstagram,
                link: "https://www.instagram.com/iddaveee/",
            },
            {
                name: "ID: kanompang962",
                icon: faLine,
                link: "",
            },

        ],
    },
    {
        title: "Course",
        links: [
            {
                name: "Mern Stack JavaScript",
                link: "",
            },
            {
                name: "React 15 Workshop",
                link: "",
            },
        ],
    },
];

export const socialMedia = [
    {
        id: "social-media-1",
        icon: faFacebook,
        link: "https://www.facebook.com/boydef.line.3",

    },
    {
        id: "social-media-2",
        icon: faInstagram,
        link: "https://www.instagram.com/iddaveee/",
    },
    {
        id: "social-media-3",
        icon: faGithub,
        link: "https://github.com/kanompang962",
    },
    {
        id: "social-media-4",
        icon: faEnvelope,
        link: "",
    },
];

export const clients = [
    {
        id: "client-8",
        logo: tailwind,
    },
    {
        id: "client-16",
        logo: figma,
    },
    {
        id: "client-9",
        logo: node,
    },
    {
        id: "client-10",
        logo: mg,
    },
    {
        id: "client-11",
        logo: my,
    },
    {
        id: "client-12",
        logo: flutter,
    },
    {
        id: "client-13",
        logo: php,
    },
    {
        id: "client-14",
        logo: bootstrap,
    },
    {
        id: "client-15",
        logo: ex,
    },
    {
        id: "client-18",
        logo: postman,
    },
    {
        id: "client-17",
        logo: github,
    },
    {
        id: "client-1",
        logo: html,
    },
    {
        id: "client-2",
        logo: css,
    },
    {
        id: "client-3",
        logo: js,
    },
    {
        id: "client-4",
        logo: react,
    },
    {
        id: "client-5",
        logo: mui,
    },
    {
        id: "client-6",
        logo: xd,
    },
    {
        id: "client-7",
        logo: ps,
    },

];