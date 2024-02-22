import Image from "next/image";
export default function Nav() {
  return (
    <div className="flex justify-between items-center px-6 py-4">
      <div className="flex gap-4">
        <Image
          className="rounded"
          src="/pic.jpg"
          width={48}
          height={48}
          alt="Profile Picture"
        />
        <div>
          <p className="font-bold">Alazar Lema</p>
          <p className="">Web Developer</p>
        </div>
      </div>
      <div className="flex">
        <button>Button</button>
        <nav>
          <ul>
            <li>Menu</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
