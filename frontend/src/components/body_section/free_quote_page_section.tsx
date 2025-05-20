import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Free_quote_page_section() {
  const [balance, setBalance] = useState(35000);
  return (
    <section
      className="relative flex justify-end h-[797px]"
      style={{
        backgroundImage: "url('/free_quote/contact-one-bg.jpg')",
      }}
    >
      {/* Left-right form */}
      <div className="absolute top-0 left-92 w-126 h-full bg-transparent flex flex-col">
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
          <div className="">
            <ul className="flex flex-wrap items-center gap-x-[10px] mb-5 list-none">
              <li data-tab="#home2" className="relative mb-[10px]">
                <span className="inline-block text-[14px] font-bold text-white bg-[#2b2b5e] border border-transparent px-[25px] py-[12px] text-center cursor-pointer transition-all duration-300 relative z-[1] after:absolute after:inset-0 after:bg-[#2b2b5e] after:h-full after:z-[-1] content-[''] hover:text-white hover:after:h-full hover:border-transparent">
                  Home
                </span>
              </li>
              <li data-tab="#vehicles" className="relative mb-[10px]">
                <span className="inline-block text-[14px] font-bold text-[#2b2b5e] border border-[#e0ddea] bg-transparent px-[25px] py-[12px] text-center cursor-pointer transition-all duration-300 relative z-[1] after:absolute after:inset-0 after:bg-[#2b2b5e] after:h-0 after:z-[-1] content-[''] hover:text-white hover:after:h-full hover:border-transparent">
                  Vehicles
                </span>
              </li>
              <li data-tab="#life" className="relative mb-[10px]">
                <span className="inline-block text-[14px] font-bold text-[#2b2b5e] border border-[#e0ddea] bg-transparent px-[25px] py-[12px] text-center cursor-pointer transition-all duration-300 relative z-[1] after:absolute after:inset-0 after:bg-[#2b2b5e] after:h-0 after:z-[-1] content-[''] hover:text-white hover:after:h-full hover:border-transparent">
                  Life
                </span>
              </li>
              <li data-tab="#business" className="relative mb-[10px]">
                <span className="inline-block text-[14px] font-bold text-[#2b2b5e] border border-[#e0ddea] bg-transparent px-[25px] py-[12px] text-center cursor-pointer transition-all duration-300 relative z-[1] after:absolute after:inset-0 after:bg-[#2b2b5e] after:h-0 after:z-[-1] content-[''] hover:text-white hover:after:h-full hover:border-transparent">
                  Business
                </span>
              </li>
            </ul>
          </div>
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
              <select className="appearance-none w-full h-14 px-4 text-[16px] text-[#82828a] font-normal bg-white border border-gray-300 focus:outline-none pr-10">
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
                type="range"
                min={0}
                max={90000}
                step={100}
                value={balance}
                onChange={(e) => setBalance(Number(e.target.value))}
                className="w-full accent-[#2b2b5e]"
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
