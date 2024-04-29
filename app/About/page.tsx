import Education from "./components/Education";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import Service from "./components/Service";
import Tools from "./components/Tools";

export default function About() {
  return (
    <div className="space-y-20">
      <Intro />
      <Service />
      <Tools />
      {/* <Experience />
      <Education /> */}
    </div>
  );
}
