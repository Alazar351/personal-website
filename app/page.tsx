import About from "./components/About";

export default function Home() {
  return (
    <main className="m-2 rounded-lg bg-white px-6 py-16 shadow-main-shadow dark:bg-[rgb(20,20,20)] md:ml-[88px] md:px-20 md:py-[120px] 2xl:ml-[288px]">
      <div className=" flex flex-col gap-20">
        <About />
      </div>
    </main>
  );
}
