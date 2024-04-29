import Intro from "./components/Intro";
import Service from "./components/Service";
import Tools from "./components/Tools";

export default function About() {
  return (
    <div className="space-y-20">
      <Intro />
      <Service />
      <Tools />
    </div>
  );
}
