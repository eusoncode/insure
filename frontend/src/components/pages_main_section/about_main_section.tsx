import Envato_section from "@/components/body_section/home_page/envato_section";

export default function About_main_section() {
  return (
    <section className="flex flex-col">
      <div className="flex justify-center items-center w-full h-108 bg-[url('/about_page/page-header-bg-1-1.jpg')] bg-cover bg-center">
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-[45px] text-white leading-1.2 mb-[0.5rem]">
            About us
          </p>
          <p className="text-[#A0A0C0] mb-[1rem] text-[16px]">
            <span className="transition-all duration-400 ease-in-out hover:text-white pr-1.5">
              Home
            </span>
            / About
          </p>
        </div>
      </div>
      <div className="w-full h-150 border border-blue-500"></div>
      <Envato_section />
    </section>
  ); 
}
