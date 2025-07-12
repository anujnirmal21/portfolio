import type { OtherProject, Project } from "../../types/types";

const projectContent: Project[] = [
  {
    title: "EpheChat",
    subTitle: "Real-Time Private & Temporary Chat App",
    github: "https://github.com/anujnirmal21/Chat-App",
    live: "https://youchat-app.up.railway.app/login",
    description: (
      <ul className=" text-xl list-disc pl-5 space-y-2 text-primary">
        <li>
          Real-time messaging app with private chats and temporary group rooms,
          powered by Socket.IO for instant communication.
        </li>
        <li>
          Dynamic room creation with unique IDs, host privileges, and automatic
          expiry when the host exits.
        </li>
        <li>
          Responsive UI built with Tailwind CSS, supporting multiple themes and
          accessibility for seamless user experience.
        </li>
        <li>
          Integrated JWT authentication, Zustand for global state, and
          Cloudinary for secure media uploads.
        </li>
      </ul>
    ),
    badge: "Full-Stack",
    image: "/assets/project/chat1.png",
  },
  {
    title: "Moviefy",
    subTitle: "Movie Explorer Web App",
    github: "https://github.com/anujnirmal21/MovieFy---movie-listing-website",
    live: "https://moviefy-react.netlify.app/",
    description: (
      <ul className=" text-xl list-disc pl-5 space-y-2 text-primary">
        <li>
          Movie discovery platform featuring live search, trending movies, and
          genre filtering via the MovieDB API.
        </li>
        <li>
          Persistent wishlist system enabling users to save and revisit favorite
          movies across sessions.
        </li>
        <li>
          Optimized UI with lazy loading, responsive images, and minimized API
          calls for faster performance.
        </li>
      </ul>
    ),
    badge: "Front-End",
    image: "/assets/project/movie1.png",
  },
  {
    title: "ThreadSphere",
    subTitle: "MERN Social Media Platform",
    github: "https://github.com/anujnirmal21/threads-social-media-clone",
    live: "https://threads-social-media-clone-9d6w.onrender.com/auth",
    description: (
      <ul className=" text-xl list-disc pl-5 space-y-2 text-primary">
        <li>
          Full-stack social platform with post creation, likes, comments, and
          dynamic user profiles.
        </li>
        <li>
          JWT-based authentication and protected routes ensure secure, private
          user access.
        </li>
        <li>
          Responsive and accessible UI built with Chakra UI for consistent
          experience across all devices.
        </li>
      </ul>
    ),
    badge: "Full-Stack",
    image: "/assets/project/thread1.png",
  },
];

const moreProjectContent: OtherProject[] = [
  {
    name: "Nike Landing Page",
    url: "https://nike-landing-page-sigma-three.vercel.app/",
  },
  {
    name: "Finance Landing Page",
    url: "https://finance-landing-page.vercel.app/",
  },
];

export { projectContent, moreProjectContent };
