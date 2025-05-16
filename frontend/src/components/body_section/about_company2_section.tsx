import { LuQuote } from "react-icons/lu";
import "../../styles/About-company2/HeroSection.css";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About_company2_section() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // how long animation lasts (in ms)
      once: false, // false = animate every time you scroll into view
      mirror: true, // true = animate on scroll up as well
    });
  }, []);

  const avatars = [
    {
      top: "top-22",
      left: "left-53",
      size: "140px",
      image: "/about_company2/avatar/avata-autor-shape-1.png",
      class: "avatar-bend-1",
    },
    {
      top: "top-25",
      left: "left-200",
      size: "95px",
      image: "/about_company2/avatar/avata-autor-shape-3.png",
      class: "avatar-bend-2",
    },
    {
      top: "top-60",
      left: "left-270",
      size: "85px",
      image: "/about_company2/avatar/avata-autor-shape-4.png",
      class: "avatar-bend-3",
    },
    {
      top: "top-90",
      left: "left-242",
      size: "120px",
      image: "/about_company2/avatar/avata-autor-shape-2.png",
      class: "avatar-bend-4",
    },
    {
      top: "top-105",
      left: "left-58",
      size: "80px",
      image: "/about_company2/avatar/avata-autor-shape-5.png",
      class: "avatar-bend-5",
    },
  ];


  return (
    <section>
      <div className="relative block">
        {/* section behind the modal*/}
        <div className="flex flex-row  w-full h-full">
          <div className="w-[39%] h-165 opacity-r bg-[url('/about_company2/testimonai_one_bg.png')] bg-cover border border-transparent"></div>
          <div className="relative w-full h-[660px] flex flex-row">
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className={`absolute opacity-40 flex justify-center items-center rounded-full border-transparent bg-cover ${avatar.top} ${avatar.left} ${avatar.class}`}
                style={{
                  width: avatar.size,
                  height: avatar.size,
                  backgroundImage: `url('${avatar.image}')`,
                }}
              ></div>
            ))}
          </div>
        </div>
        {/* modal section */}
        <div
          data-aos="fade-up"
          className="absolute top-35 mx-60 z-10 flex flex-row justify-center items-center gap-16 bg-transparent p-4"
        >
          <div className="w-130 p-8">
            <div className="mb-3">
              <div className="flex flex-row gap-4 mb-2">
                <p className="font-bold text-xs text-gray-400 uppercase tracking-wider">
                  About company
                </p>
                <span className="w-4 h-1 mt-1.5 rounded bg-[#00CDE5]"></span>
              </div>
              <p className="font-bold text-4xl tracking-wider text-[#2B2B5E]">
                What they’re talking <br /> about us?
              </p>
            </div>
            <p className="pt-2 leading-8 text-gray-400 ">
              There are many variations of passages the majority have <br />
              suffered alteration in some fo injected humour, or <br />
              randomised words believable.
            </p>
            <div className="flex flex-row items-center gap-4 w-50">
              <button
                className="w-8 h-1 mt-3 rounded bg-[#00CDE5]"
                role="button"
              ></button>
              <button
                className="w-8 h-1 mt-3 rounded bg-[#F0F0F0]"
                role="button"
              ></button>
              <button
                className="w-8 h-1 mt-3 rounded bg-[#F0F0F0]"
                role="button"
              ></button>
            </div>
          </div>

          <div className="relative flex flex-col w-165">
            <div className="flex items-center justify-center bg-gradient-to-br from-[#1B648D] to-[#00cde5] rounded-bl-[60px] absolute w-26 h-24 top-[-1] left-[555px] z-15 bg-[#00CDE5]">
              <span className="text-white text-4xl">
                <LuQuote />
              </span>
            </div>

            <div className="w-full h-58 px-12 py-6 bg-[#2B2B5E] before-custom-clip">
              <div className="mt-6 py-2 flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <i key={index} className="fa fa-star text-[#00cde5]"></i>
                ))}
              </div>
              <div className="text-white font-medium leading-8">
                Leverage agile frameworks to provide a robust synopsis for high
                level <br /> overviews. Iterative approaches to corporate
                strategy data foster to <br />
                collaborative thinking.
              </div>
            </div>

            <div
              className="absolute z-5 top-58 left-15 w-39 h-15 before-custom-clip-path bg-[#00CDE5]"
              style={{
                clipPath: "polygon(0px 0px, 100% 0px, 0% 92%)",
              }}
            ></div>
            <div className="flex flex-row ml-40 items-center mt-3 gap-2">
              <div
                className="flex justify-center items-center left-135 rounded-full border-transparent bg-cover"
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundImage:
                    "url('/about_company2/testimonai_one_1.png')",
                }}
              ></div>
              <div className="flex flex-col gap-2 leading-3.5">
                <p className="font-bold">Kevin martin</p>
                <p className="text-sm">Co Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
