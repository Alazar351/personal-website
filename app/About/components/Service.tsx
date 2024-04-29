export default function Service() {
  return (
    <section>
      <h2 className="text-[26px] font-medium">Services</h2>
      <div className="mt-8 grid w-full grid-cols-1 gap-1 md:grid-cols-2">
        <div className="flex items-center justify-start gap-4  rounded-t-xl bg-[#efeff0] p-5 dark:bg-[#282828] md:rounded-tl-xl md:rounded-tr-none">
          <p className="text-lg font-medium">Frontend Development</p>
        </div>
        <div className="flex items-center justify-start gap-4  bg-[#efeff0] p-5  dark:bg-[#282828] md:rounded-tr-xl">
          <p className="text-lg font-medium">E-Commerce Development</p>
        </div>
        {/* Add more services here v */}
        <div className="flex items-center justify-start gap-4  bg-[#efeff0] p-5  dark:bg-[#282828] ">
          <p className="text-lg font-medium">Responsive Design</p>
        </div>
        <div className="flex items-center justify-start gap-4  bg-[#efeff0] p-5  dark:bg-[#282828] ">
          <p className="text-lg font-medium">Maintenance and Support</p>
        </div>
        {/* Add more services here ^ */}
        <div className="flex items-center justify-start gap-4  bg-[#efeff0] p-5  dark:bg-[#282828] md:rounded-bl-xl">
          <p className="text-lg font-medium">API Integration</p>
        </div>
        <div className="flex items-center justify-start gap-4 rounded-b-xl bg-[#efeff0] p-5  dark:bg-[#282828] md:rounded-bl-none  md:rounded-br-xl">
          <p className="text-lg font-medium">Content Management Systems(CMS)</p>
        </div>
      </div>
    </section>
  );
}
