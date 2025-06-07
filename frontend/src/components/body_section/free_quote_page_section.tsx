import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Free_quote_page_section() {
  // Tabs for insurance types
  const tabs = [
    { label: "Home", tab: "#home2", active: true },
    { label: "Vehicles", tab: "#vehicles" },
    { label: "Life", tab: "#life" },
    { label: "Business", tab: "#business" },
  ];

  // Slider value state
  const [balance, setBalance] = useState(35000);
  const sliderRef = useRef<HTMLInputElement | null>(null);

  // Initialize AOS animation on scroll
  useEffect(() => {
    AOS.init({
      duration: 10000, // 10 seconds animation duration
      once: false, // Animate every scroll into view
      mirror: true, // Also animate when scrolling back up
    });
  }, []);

  // Dynamic slider background style (fills based on selected balance)
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
      style={{ backgroundImage: "url('/free_quote/contact-one-bg.jpg')" }}
    >
      {/* Right-side form section with animation */}
      <div
        data-aos="fade-left"
        className="absolute top-0 left-92 w-126 h-full bg-transparent flex flex-col"
      >
        {/* Section heading */}
        <div className="flex flex-col mt-32 gap-2 leading-[1.2] mb-2">
          <p className="relative text-[#82828a] text-[14px] font-semibold uppercase tracking-[0.1rem]">
            free quote
            <span className="absolute top-1/2 left-[26%] w-[17px] h-[3px] inline-block translate-y-[-50%] rounded bg-[#00CDE5]"></span>
          </p>
          <p className="font-bold text-[45px] text-[#2b2b5e] font-Cormorant tracking-[0.04rem]">
            Get an insurance quote <br /> to get started
          </p>
        </div>

        {/* Tab filters (e.g., Home, Vehicles, etc.) */}
        <div className="ml-0 mt-8">
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

          {/* Insurance quote form */}
          <form className="flex flex-col gap-5 w-full max-w-xl">
            {/* Full name field */}
            <input
              type="text"
              placeholder="Full name"
              className="w-full h-14 px-4 bg-white border border-gray-300 focus:outline-none"
            />

            {/* Email field */}
            <input
              type="email"
              placeholder="Email address"
              className="w-full h-14 px-4 bg-white border border-gray-300 focus:outline-none"
            />

            {/* Service selection dropdown */}
            <div className="relative">
              <select className="appearance-none w-full h-14 px-4 text-[16px] text-[#82828a] bg-white border border-gray-300 pr-10">
                <option>Select service</option>
                <option value="1">Service One</option>
                <option value="2">Service Two</option>
                <option value="3">Service Three</option>
              </select>
              {/* Dropdown icon */}
              <div className="pointer-events-none absolute top-1/2 right-6 -translate-y-1/2 text-[#82828a] text-sm">
                <IoIosArrowDown />
              </div>
            </div>

            {/* Range slider for balance selection */}
            <div className="w-full">
              <label className="flex justify-between font-semibold text-sm text-[#2b2b5e]">
                Limits of Balance:
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

            {/* Submit button */}
            <button
              type="submit"
              className="w-38 bg-[#00cde5] text-white py-3 px-6 rounded hover:bg-[#1f1f45] transition duration-300"
            >
              Get a Quote
            </button>
          </form>
        </div>
      </div>

      {/* Left-side static background image */}
      <div
        className="w-[51.15%] h-full bg-[#F3F3F5] bg-center"
        style={{
          backgroundImage: "url('/free_quote/contact-left-img.png')",
        }}
      ></div>
    </section>
  );
}
