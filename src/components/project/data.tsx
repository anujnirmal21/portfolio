import {
  SkeletonOne,
  SkeletonTwo,
  SkeletonThree,
  SkeletonFour,
  SkeletonFive,
  SkeletonSix,
  SkeletonSeven,
  SkeletonEight,
} from "./Cards";

const cards1 = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Second set of cards
const cards2 = [
  {
    id: 5,
    content: <SkeletonFive />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    content: <SkeletonEight />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Third set of cards
const cards3 = [
  {
    id: 9,
    content: <SkeletonThree />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1502780402662-acc01917936e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const dummyContent = [
  {
    title: "EpheChat",
    cards: cards1,
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
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Moviefy",
    cards: cards2,
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
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "ThreadSphere",
    cards: cards3,
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
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default dummyContent;
