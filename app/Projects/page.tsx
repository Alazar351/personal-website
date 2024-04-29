import Portfolio from "../components/Portfolio";

export default function Projects() {
  return (
    <div>
      <p className="text-[40px] font-semibold">Projects</p>
      <p className="mb-[120px] mt-2 text-lg text-muted-foreground">
        Showcase of projects
      </p>
      <Portfolio />
    </div>
  );
}
