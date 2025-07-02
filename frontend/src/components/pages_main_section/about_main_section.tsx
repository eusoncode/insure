import Envato_section from "@/components/body_section/home_page/envato_section";
import { HiShare } from "react-icons/hi";
import { PiPhoneCallLight } from "react-icons/pi";

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
      <div className=" w-full min-h-screen bg-white">
        <div className="flex flex-col gap-6 justify-center items-center w-full h-full">
          {/** About Company **/}
          <div className="flex justify-between mt-32 mb-25 w-[70%] h-140 relative">
            <div>
              {/* SHAPE BEHIND THE IMAGE — outside the image div */}
              <div className="absolute top-0 left-0 w-[42%] h-full bg-[url('/about_page/about-one-shape.png')] bg-cover bg-no-repeat z-0"></div>

              {/* IMAGE IN FRONT */}
              <div className="absolute top-0 left-[40px] w-[42%] h-full z-2 bg-[url('/about_page/about-1-1.png')] bg-center bg-cover"></div>

              {/* ICON IN FRONT */}
              <div
                className="absolute top-0 left-0 w-22 h-22 z-3 flex justify-center items-center bg-center bg-no-repeat bg-[#00CDE5]"
                style={{ backgroundImage: "url('/about_page/logo-icon.png')" }}
              ></div>
            </div>

            {/* TEXT BOX */}
            <div className="w-[50%] h-full pt-4">
              {/** Caption**/}
              <div className="mb-3">
                <div className="flex items-center gap-4 mb-4">
                  <p className="text-sm font-bold uppercase text-gray-400 tracking-widest">
                    about company
                  </p>
                  <span className="w-4 h-1 mt-1.5 bg-[#00CDE5] rounded"></span>
                </div>
                <p className="text-[45px] font-bold tracking-[-0.04em] leading-[1.2em] mb-[0.5em] text-[#2B2B5E] ">
                  Providing the best insurance <br /> policy to customers
                </p>
              </div>

              {/* Description */}
              <p className="leading-8 text-[#82828A]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
                et quia magni. <br />
                Laborum saepe corrupti neque quo,recusandae dolorum fugit eius
                incidunt, <br /> repudiandae beatae facilis tempore temporibus
                atque labore doloribus!
              </p>

              {/* Protect your life */}
              <div className="flex justify-start items-center gap-4 mt-6">
                <div
                  className="w-18 h-18 flex justify-center items-center bg-center bg-no-repeat bg-transparent"
                  style={{
                    backgroundImage: "url('/about_page/icon-employees-1.png')",
                    backgroundSize: "70px 70px",
                  }}
                ></div>

                <div>
                  <p className="text-[#2B2B5E] font-bold text-lg">
                    Protect your life
                  </p>
                  <p className="text-[#82828A]">
                    We're here for look even you from start to finish.
                  </p>
                </div>
              </div>

              {/* Discover More */}
              <div className="flex justify-start items-center gap-4 mt-10">
                <div className="pr-2">
                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-42 hover:bg-[#00cde5] text-white py-4 px-6 bg-[#2b2b5e] transition duration-300 ease-in-out"
                  >
                    Discover More
                  </button>
                </div>
                <div className="group flex justify-start items-center gap-2 w-60 h-15">
                  <span className="flex justify-center items-center text-3xl w-14 h-14 rounded-full bg-center bg-no-repeat transition-all duration-500 ease-in-out group-hover:text-white group-hover:bg-[#2b2b5e] border border-gray-300">
                    <PiPhoneCallLight />
                  </span>
                  <span className="text-sm font-medium text-gray-500 leading-tight">
                    <p className="text-[#82828A]">Call experts</p>
                    <p
                      className="text-[16px] font-bold text-custom-blue mt-1 transition-all duration-500 ease-in-out
                      bg-no-repeat bg-[length:0_1px] bg-[0_calc(100%-1px)] bg-[linear-gradient(to_right,currentColor_0%,currentColor_100%)] 
                      group-hover:bg-[length:100%_1px] group-hover:text-[#00CDE5]"
                    >
                      +92 (003) 68-0900
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/** Contact us **/}
          <div className="relative w-[63%] h-45 mb-32 bg-[url('/about_page/banner-one-bg.jpg')] bg-center flex justify-between items-center">
            <span className="absolute top-0 left-0 w-40 h-full bg-[url('/about_page/banner-one-shape.png')] bg-center bg-cover"></span>
            <div className="">
              <p className="text-4xl font-bold text-white pl-18">
                Find a local insurance agent
              </p>
            </div>
            <div className="pr-16">
              {/* Submit button */}
              <button
                type="submit"
                className="w-38 bg-[#00cde5] text-white py-3 px-6 hover:bg-white hover:text-[#2b2b5e] transition duration-500 ease-in-out"
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/** Our Testimonials section **/}
      <div className=" w-full h-155 bg-[url('/about_page/testimonail-one-bg.jpg')] bg-cover z-0 flex items-center justify-center overflow-hidden">
        <div className="relative z-[1] flex w-full overflow-hidden">
          {/** Caption**/}
          <div className="w-130 h-80 pt-4 px-8 z-[3] ml-90">
            {/* Heading */}
            <div className="mb-3">
              <div className="flex items-center gap-4 mb-4">
                <p className="text-sm font-bold uppercase text-gray-400 tracking-wider">
                  our testimonial
                </p>
                <span className="w-4 h-1 mt-1.5 bg-[#00CDE5] rounded"></span>
              </div>
              <p className="text-4xl font-bold text-white tracking-wider">
                What they’re talking <br /> about us our policy
              </p>
            </div>

            {/* Description */}
            <p className="pt-6 leading-8 text-gray-400">
              Lorem Ipsum is simply dummy text of free available in <br />
              market the printing and typesetting industry has been the <br />
              industry's standard dummy text ever.
            </p>

            {/* Navigation dots (static style) */}
            <div className="flex gap-4 mt-4 w-50">
              <button className="w-8 h-1 mt-3 rounded bg-[#00CDE5]" />
              <button className="w-8 h-1 mt-3 rounded bg-[#F0F0F0]" />
              <button className="w-8 h-1 mt-3 rounded bg-[#F0F0F0]" />
            </div>
          </div>

          {/** Testimonials **/}
          <div className="absolute overflow-hidden flex items-center justify-end w-full h-72 bg-transparent">
            <div className="relative group -right-[150px] w-[560px] h-75 p-8 bg-white">
              <div className="flex gap-6 justify-start items-center relative">
                {/* Before pseudo */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-[#00cde5] group-hover:bg-[#2B2B5E] transition-all duration-300 ease-in-out z-[1] translate-x-[10px]"></div>

                {/* Profile image in front */}
                <div className="relative w-24 h-24 bg-[url('/about_page/testi-1-1.jpg')] bg-cover z-[10]"></div>

                {/* Text info */}
                <div className="">
                  <div className="flex gap-1 py-1 mt-1 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fa fa-star text-[#00cde5]"></i>
                    ))}
                  </div>
                  <p className="">Kevin martin</p>
                  <p className="">Co Founder</p>
                </div>
              </div>

              {/* Quote text */}
              <p className="text-md pt-6 leading-8 text-gray-500">
                Leverage agile frameworks to provide a robust synopsis for high{" "}
                <br />
                level overviews. Iterative approaches to corporate strategy data{" "}
                <br />
                foster to collaborative thinking
              </p>

              {/* Decorative shape */}
              <div className="absolute right-0 top-0 z-[5] w-[132px] h-[160px] bg-[url('/about_page/testi-shape-one.png')] bg-cover"></div>
            </div>

            <div className="relative group -right-[180px] w-[560px] h-75 p-8 bg-white">
              <div className="flex gap-6 justify-start items-center relative">
                {/* Before pseudo */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-[#00cde5] group-hover:bg-[#2B2B5E] transition-all duration-300 ease-in-out z-[1] translate-x-[10px]"></div>

                {/* Profile image in front */}
                <div className="relative w-24 h-24 bg-[url('/about_page/testi-1-2.jpg')] bg-cover z-[10]"></div>

                {/* Text info */}
                <div className="">
                  <div className="flex gap-1 py-1 mt-1 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fa fa-star text-[#00cde5]"></i>
                    ))}
                  </div>
                  <p className="">Kevin martin</p>
                  <p className="">Co Founder</p>
                </div>
              </div>

              {/* Quote text */}
              <p className="text-md pt-6 leading-8 text-gray-500">
                Leverage agile frameworks to provide a robust synopsis for high{" "}
                <br />
                level overviews. Iterative approaches to corporate strategy data{" "}
                <br />
                foster to collaborative thinking
              </p>

              {/* Decorative shape */}
              <div className="absolute right-0 top-0 z-[5] w-[132px] h-[160px] bg-[url('/about_page/testi-shape-one.png')] bg-cover"></div>
            </div>
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
