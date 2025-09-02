import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

// Project data array
const projects = [
  {
    image: "/Images/snapkors.png",
    title: "Snapkors - Student Notes & Quiz Platform",
    description:
      "A web and mobile app platform designed for university students to purchase study notes and take quizzes. Features include a digital marketplace for notes, interactive quizzes, user authentication, and mobile-friendly design for seamless learning on any device.",
    links: [
      {
        href: "https://snapkors.com",
        icon: externalLink,
        alt: "Visit site",
      },
    ],
    tech: ["React", "Flutter", "Node.js", "Express", "PostgreSQL"],
  },
  {
    image: "/Images/tina.png",
    title: "Tinamart - Admin Dashboard Developer",
    description:
      "Served as an admin web developer for Tinamart Business PLC. Built robust front-end systems for the admin dashboard, enabling efficient management of business operations, analytics, and user roles.",
    links: [
      {
        href: "https://tinamart.com",
        icon: externalLink,
        alt: "Visit site",
      },
    ],
    tech: ["React", "Laravel", "TypeScript", "REST API"],
  },
  {
    image: "/Images/bktour.png",
    title: "BK Tour - Full Stack Tour Booking App",
    description:
      "Developed a comprehensive full stack web application for touring Ethiopia. Features include tour listings, user authentication, real-time booking, payment integration, admin dashboard, and customer reviews. Enables users to explore, book, and manage tours seamlessly.",
    links: [
      {
        href: "https://github.com/yourusername/bk-tour",
        icon: githubIcon,
        alt: "GitHub",
      },
      {
        href: "https://tour-beki.netlify.app",
        icon: externalLink,
        alt: "Visit site",
      },
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    image: "/Images/moseb.png",
    title: "Moseb - Restaurant Aggregator App",
    description:
      "A modern web application that connects all restaurants in one place. Users can browse restaurants, view menus, make reservations, and order food online. Features include real-time search, user reviews, and admin management for restaurant owners.",
    links: [
      {
        href: "https://github.com/yourusername/moseb",
        icon: githubIcon,
        alt: "GitHub",
      },
      {
        href: "https://moseb.netlify.app",
        icon: externalLink,
        alt: "Visit site",
      },
    ],
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
  },

  {
    image: "/Images/awura.png",
    title: "Awura Tech Website",
    description:
      "A modern company website for Awura Tech, showcasing services, portfolio, and team. Features include a responsive design, service listings, contact forms, and dynamic content management for easy updates.",
    links: [
      {
        href: "https://github.com/yourusername/awura-tech-website",
        icon: githubIcon,
        alt: "GitHub",
      },
      {
        href: "https://awura-web-mooe.vercel.app/",
        icon: externalLink,
        alt: "Visit site",
      },
    ],
    tech: ["React", "TypeScript", "Styled Components", "Netlify"],
  },
  {
    image: "/Images/rick.png",
    title: "Rick and Morty Movie Website",
    description:
      "A fan-made movie website for Rick and Morty. Features include movie and episode listings, character bios, search functionality, and a responsive UI. Built for fans to explore and enjoy Rick and Morty content in one place.",
    links: [
      {
        href: "https://github.com/yourusername/rick-morty-movie-site",
        icon: githubIcon,
        alt: "GitHub",
      },
      {
        href: "https://rick-and-morty-movie-website.netlify.app/",
        icon: externalLink,
        alt: "Visit site",
      },
    ],
    tech: ["React", "Redux", "REST API", "Styled Components"],
  },

  // Add more projects as needed
];

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project, idx) => (
          <ScrollAnimation animateIn="flipInX" key={idx}>
            <div className="project">
              <img
                className="project-image"
                src={project.image}
                alt="Project preview"
              />
              <header>
                <svg
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="project-links">
                  {project.links.map((link, lidx) => (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      key={lidx}
                    >
                      <img src={link.icon} alt={link.alt} />
                    </a>
                  ))}
                </div>
              </header>
              <div className="body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.tech.map((tech, tidx) => (
                    <li key={tidx}>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
