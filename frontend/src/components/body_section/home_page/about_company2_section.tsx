import { LuQuote } from "react-icons/lu";
import "../../../styles/About-company2/HeroSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About_company2_section() {
  // Initialize AOS (Animate On Scroll) when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  // Avatars floating in the background
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
        {/* Background section layout */}
        <div className="flex w-full h-full">
          {/* Left background image panel */}
          <div className="w-[39%] h-165 bg-[url('/about_company2/testimonai_one_bg.png')] bg-cover border border-transparent opacity-r" />

          {/* Right floating avatars */}
          <div className="relative w-full h-[660px] flex">
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className={`absolute flex justify-center items-center rounded-full bg-cover opacity-40 border-transparent ${avatar.top} ${avatar.left} ${avatar.class}`}
                style={{
                  width: avatar.size,
                  height: avatar.size,
                  backgroundImage: `url('${avatar.image}')`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Main testimonial modal */}
        <div
          data-aos="fade-up"
          className="absolute top-35 mx-60 z-10 flex flex-row justify-center items-center gap-16 p-4"
        >
          {/* Text content block */}
          <div className="w-130 p-8">
            {/* Heading */}
            <div className="mb-3">
              <div className="flex items-center gap-4 mb-2">
                <p className="text-xs font-bold uppercase text-gray-400 tracking-wider">
                  About company
                </p>
                <span className="w-4 h-1 mt-1.5 bg-[#00CDE5] rounded"></span>
              </div>
              <p className="text-4xl font-bold text-[#2B2B5E] tracking-wider">
                What they’re talking <br /> about us?
              </p>
            </div>

            {/* Description */}
            <p className="pt-2 leading-8 text-gray-400">
              There are many variations of passages the majority have <br />
              suffered alteration in some fo injected humour, or <br />
              randomised words believable.
            </p>

            {/* Navigation dots (static style) */}
            <div className="flex gap-4 mt-4 w-50">
              <button className="w-8 h-1 mt-3 rounded bg-[#00CDE5]" />
              <button className="w-8 h-1 mt-3 rounded bg-[#F0F0F0]" />
              <button className="w-8 h-1 mt-3 rounded bg-[#F0F0F0]" />
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="relative flex flex-col w-165">
            {/* Floating quote icon */}
            <div className="absolute top-[-1] left-[555px] w-26 h-24 z-15 rounded-bl-[60px] bg-gradient-to-br from-[#1B648D] to-[#00cde5] flex items-center justify-center">
              <span className="text-white text-4xl">
                <LuQuote />
              </span>
            </div>

            {/* Main testimonial block with triangle shape using before clip-path */}
            <div className="w-full h-58 px-12 py-6 bg-[#2B2B5E] before-custom-clip">
              <div className="flex gap-1 mt-6 py-2">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa fa-star text-[#00cde5]"></i>
                ))}
              </div>
              <p className="text-white font-medium leading-8">
                Leverage agile frameworks to provide a robust synopsis for high
                level <br /> overviews. Iterative approaches to corporate
                strategy data foster to <br />
                collaborative thinking.
              </p>
            </div>

            {/* Triangle design below the card */}
            <div className="absolute z-5 top-57 left-15 w-39 h-15 bg-[url('/about_company2/testi-shape-1-1.png')] bg-center bg-no-repeat"></div>

            {/* Author section */}
            <div className="flex items-center ml-40 mt-3 gap-2">
              <div
                className="rounded-full bg-cover"
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundImage:
                    "url('/about_company2/testimonai_one_1.png')",
                }}
              ></div>
              <div className="flex flex-col gap-2 leading-[1.375rem]">
                <p className="font-bold">Kevin Martin</p>
                <p className="text-sm">Co Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
