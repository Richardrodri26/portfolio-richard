import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaPhoneAlt, FaUser, FaPaperPlane, FaLinkedin } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <AiFillGithub />,
  <FaLinkedin />,
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Richard"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+573003058578"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "richardmanuel811@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <FaReact />, <SiTailwindcss/>, <FaNodeJs />, <FaSass />, <AiFillGithub/>]

export const experiences = [
  {
    id: 1,
    position: "Fundamentos de Programación y Tecnologias Digitales",
    company: "Universidad Tecnologica de Pereira (Misión TIC 2022)"
  },
  {
    id: 2,
    position: "Desarrollador Front-end",
    company: "Capacitate para el empleo / Fundacion Carlos Slim"
  },
  {
    id: 3,
    position: "Desarrollador Front-end (React)",
    company: "Capacitate para el empleo / Fundacion Carlos Slim"
  },
  {
    id: 4,
    position: "Curso de Html y Css",
    company: "DevCode"
  },
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web",
    github: "https://github.com/Richardrodri26",
    deploy: "https://richardrodri26.github.io/To-do-app/"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web",
    github: "https://github.com/Richardrodri26",
    deploy: "https://richardrodri26.github.io/prueba-viajes/"
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web",
    github: "https://github.com/Richardrodri26",
    deploy: "https://richardrodri26.github.io/rick-and-morty/"
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "web",
    github: "https://github.com/Richardrodri26",
    deploy: "https://richardrodri26.github.io/Black-project/"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: "web",
    github: "https://github.com/Richardrodri26",
    deploy: "https://richardrodri26.github.io/Star-Hub/"
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "web",
    github: "https://github.com/Richardrodri26",
    deploy: "https://richardrodri26.github.io/Galeria-de-arte/"
  }
]


export const workNavs = ["Web"]
