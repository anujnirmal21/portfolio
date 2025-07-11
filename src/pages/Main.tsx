import Bottom from "../components/Bottom";
import Transition from "../components/Transition";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

const Main = () => {
  return (
    <div className=" w-screen flex flex-col justify-center items-center ">
      <About />
      <Projects />
      <Bottom />
      <Contact />
    </div>
  );
};

export default Transition(Main);
