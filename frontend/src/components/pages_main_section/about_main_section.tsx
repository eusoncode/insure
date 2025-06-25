import Envato_section from "@/components/body_section/home_page/envato_section";
import { HiShare } from "react-icons/hi";

export default function About_main_section() {
  return (
    <section className="flex flex-col">
      {/** About us section **/}
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

      {/** About company section **/}
      <div className=" w-full h-120 bg-white"></div>

      {/** Our Testimonials section **/}
      <div className=" w-full h-155 bg-[url('/about_page/testimonail-one-bg.jpg')] bg-cover z-0 flex items-center justify-center overflow-hidden">
        <div className="relative z-[1] flex w-full overflow-hidden">
          {/** Caption**/}
          <div className="w-130 h-100 z-[3] bg-white ml-97 border border-blue-500"></div>

          {/** Testimonials **/}
          <div className="absolute top-20 z-[2] overflow-hidden flex items-center justify-end gap-10 w-full h-60 bg-transparent">
            <div className="relative right-[-460] w-150 h-60 bg-white border border-blue-500"></div>
            <div className="relative right-[-450]  w-150 h-60 bg-white border border-blue-500"></div>
          </div>
        </div>
      </div>

      {/** Team members section **/}
      <div className="flex flex-col items-center w-full h-236">
        {/* Title section */}
        <div className="flex flex-col justify-center items-center mx-85 pt-30 mb-4">
          <div className="relative">
            <p className="uppercase font-semibold text-[14px] tracking-widest text-[#82828a]">
              team members
            </p>
            {/* Decorative line next to heading */}
            <span className="absolute top-1/2 left-[110%] w-[17px] h-[3px] inline-block translate-y-[-50%] rounded-[1.5px] bg-[#00CDE5]"></span>
          </div>
          <span className="block w-full text-center text-[#2B2B5E] text-[45px] font-bold tracking-[-0.04em] leading-[1.2em] mt-2">
            Meet our best professional <br /> insurance agents
          </span>
        </div>

        {/* Members section */}
        <ul className="grid grid-cols-3 gap-x-10 mt-12 w-300 h-125">
          <li className="relative h-[95%]">
            <div className="relative w-80 h-[80%] bg-[url('/about_page/team-1-1.jpg')] bg-center  z-[2]">
              <i className="absolute content-[''] bottom-0 right-[-8%] w-14 h-13 z-[3] cursor-pointer bg-[#00CDE5] text-white text-[18px] flex justify-center items-center">
                <HiShare />
              </i>
            </div>
            <div
              className="absolute flex flex-col justify-end items-start pl-10 pb-6 leading-[1.5rem] bottom-[-10] z-[1]
             w-full h-[55%] cursor-pointer shadow-sm border-r-gray-300 border-r-2 border-t-gray-300 border-t-2 
             hover:border-r-2 hover:border-t-2 hover:border-r-black hover:border-t-black bg-white"
            >
              <p className="font-bold text-[20px] text-[#2B2B5E]">
                Mike hardson
              </p>
              <p className="">Manager</p>
            </div>
          </li>

          <li className="relative h-[95%]">
            <div className="relative w-80 h-[80%] bg-[url('/about_page/team-1-2.jpg')] bg-center  z-[2]">
              <i className="absolute content-[''] bottom-0 right-[-8%] w-14 h-13 z-[3] cursor-pointer bg-[#00CDE5] text-white text-[18px] flex justify-center items-center">
                <HiShare />
              </i>
            </div>
            <div
              className="absolute flex flex-col justify-end items-start pl-10 pb-6 leading-[1.5rem] bottom-[-10] z-[1]
             w-full h-[55%] cursor-pointer shadow-sm border-r-gray-300 border-r-2 border-t-gray-300 border-t-2 
             hover:border-r-2 hover:border-t-2 hover:border-r-black hover:border-t-black bg-white"
            >
              <p className="font-bold text-[20px] text-[#2B2B5E]">
                Mike hardson
              </p>
              <p className="">Manager</p>
            </div>
          </li>

          <li className="relative h-[95%]">
            <div className="relative w-80 h-[80%] bg-[url('/about_page/team-1-3.jpg')] bg-center  z-[2]">
              <i className="absolute content-[''] bottom-0 right-[-8%] w-14 h-13 z-[3] cursor-pointer bg-[#00CDE5] text-white text-[18px] flex justify-center items-center">
                <HiShare />
              </i>
            </div>
            <div
              className="absolute flex flex-col justify-end items-start pl-10 pb-6 leading-[1.5rem] bottom-[-10] z-[1]
             w-full h-[55%] cursor-pointer shadow-sm border-r-gray-300 border-r-2 border-t-gray-300 border-t-2 
             hover:border-r-2 hover:border-t-2 hover:border-r-black hover:border-t-black bg-white"
            >
              <p className="font-bold text-[20px] text-[#2B2B5E]">
                Mike hardson
              </p>
              <p className="">Manager</p>
            </div>
          </li>
        </ul>
      </div>

      {/** Envato section **/}
      <Envato_section />
    </section>
  );
}
