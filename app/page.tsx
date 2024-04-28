import About from "./components/About";
import Testimony from "./components/Testimony";
import Work from "./components/Work";

export default function Home() {
  return (
    <div className="space-y-20">
      <About />
      <Work />
      <Testimony />
    </div>
  );
}
