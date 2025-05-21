import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Free_quote_page_section() {
  const tabs = [
    { label: "Home", tab: "#home2", active: true },
    { label: "Vehicles", tab: "#vehicles" },
    { label: "Life", tab: "#life" },
    { label: "Business", tab: "#business" },
  ];

  const [balance, setBalance] = useState(35000);
  const sliderRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 10000, // how long animation lasts (in ms)
      once: false, // false = animate every time you scroll into view
      mirror: true, // true = animate on scroll up as well
    });
  }, []);

  useEffect(() => {
    const percentage = (balance / 90000) * 100;
    if (sliderRef.current) {
      sliderRef.current.style.background = `
        linear-gradient(to right, #2B2B5E 0%, #00CDE5 ${percentage}%, #ffffff ${percentage}%)`;
    }
  }, [balance]);
  return (
    <section
      className="relative flex justify-end h-[797px]"
      style={{
        backgroundImage: "url('/free_quote/contact-one-bg.jpg')",
      }}
    >
      {/* Left-right form */}
      <div
        data-aos="fade-left"      
        className="absolute top-0 left-92 w-126 h-full bg-transparent flex flex-col"
      >
        {/* Heading */}
        <div className="flex flex-col mt-32 gap-2 leading-[1.2] mb-2">
          <p className="relative m-0 text-[#82828a] leading-[1.2] text-[14px] font-semibold uppercase inline-block tracking-[0.1rem]">
            free quote
            <span className="absolute top-1/2 left-[26%] w-[17px] h-[3px] inline-block translate-y-[-50%] rounded-[1.5px] bg-[#00CDE5]"></span>
          </p>
          <p className="m-0 font-bold text-[45px] text-[#2b2b5e] tracking-[0.04rem] font-Cormorant">
            Get an insurance quote <br /> to get started
          </p>
        </div>
        <div className="ml-0 mt-8">
          {/* Caption */}
          <ul className="flex flex-wrap items-center gap-x-[10px] mb-5 list-none">
            {tabs.map(({ label, tab, active }) => (
              <li key={tab} className="relative mb-[10px]">
                <span
                  className={`
                    relative z-[1] inline-block text-[14px] font-bold px-[25px] py-[12px] text-center cursor-pointer 
                    transition-all duration-700 ease-in-out 
                    after:content-[''] after:absolute after:inset-0 after:z-[-1] after:bg-[#2b2b5e] 
                    after:transition-all after:duration-700 after:ease-in-out

                    ${
                      active
                        ? "text-white border border-transparent"
                        : "text-[#2b2b5e] border border-[#e0ddea] bg-transparent after:h-0 hover:after:h-full hover:text-white hover:border-transparent"
                    }
                  `}
                >
                  {label}
                </span>
              </li>
            ))}
          </ul>
          {/* Form */}
          <form className="flex flex-col gap-5 w-full max-w-xl">
            {/* Full name */}
            <input
              type="text"
              placeholder="Full name"
              className="w-full h-14 px-4 bg-white border border-gray-300 focus:outline-none"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email address"
              className="w-full h-14 px-4 bg-white border border-gray-300 focus:outline-none"
            />

            {/* Select Service */}
            <div className="relative">
              <select className="appearance-none rounded-none w-full h-14 px-4 text-[16px] text-[#82828a] font-normal bg-white border border-gray-300 focus:outline-none pr-10">
                <option>Select service</option>
                <option value="1">Service One</option>
                <option value="2">Service Two</option>
                <option value="3">Service Three</option>
              </select>
              <div className="pointer-events-none absolute top-1/2 right-6 -translate-y-1/2 text-[#82828a] text-sm">
                <IoIosArrowDown />
              </div>
            </div>

            {/* Range Slider */}
            <div className="w-full">
              <label className="flex justify-between font-semibold text-sm text-[#2b2b5e]">
                Limits of Balance:{" "}
                <span className="text-[#32328a] text-[16px]">
                  ${balance.toLocaleString()}
                </span>
              </label>
              <input
                ref={sliderRef}
                type="range"
                min={0}
                max={90000}
                step={100}
                value={balance}
                onChange={(e) => setBalance(Number(e.target.value))}
                className="w-full h-[12px] appearance-none outline-none transition-[background] duration-150 ease-in-out"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-38 bg-[#00cde5] text-white py-3 px-6 rounded hover:bg-[#1f1f45] transition duration-300"
            >
              Get a Quote
            </button>
          </form>
        </div>
      </div>
      {/* Left-side Image */}
      <div
        className="w-[51.15%] h-full bg-[#F3F3F5] bg-center"
        style={{
          backgroundImage: "url('/free_quote/contact-left-img.png')",
        }}
      ></div>
    </section>
  );
}
