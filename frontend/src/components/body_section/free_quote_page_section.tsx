export default function Free_quote_page_section() {
  return (
    <section
      className="relative flex justify-end h-[797px]"
      style={{
        backgroundImage: "url('/free_quote/contact-one-bg.jpg')",
      }}
    >
      <div className="absolute top-0 left-92 w-126 h-full bg-transparent flex flex-col items-center border border-blue-400">
        <div className="flex flex-col mt-32 gap-2 leading-[1.2] mb-2">
          <p className="relative m-0 text-[#82828a] leading-[1.2] text-[14px] font-semibold uppercase inline-block tracking-[0.1rem]">
            free quote
            <span className="absolute top-1/2 left-[26%] w-[17px] h-[3px] inline-block translate-y-[-50%] rounded-[1.5px] bg-[#00CDE5]"></span>
          </p>
          <p className="m-0 font-bold text-[45px] text-[#2b2b5e] tracking-[0.04rem] font-Cormorant">
            Get an insurance quote <br /> to get started
          </p>
        </div>
        <div className="mt-8 border border-red-400">
          <div className="">
            {/* <ul className="list-none">
              <li>
                <span>Home</span>
              </li>
              <li>
                <span>Vehicles</span>
              </li>
              <li>
                <span>Life</span>
              </li>
              <li>
                <span>Business</span>
              </li>
            </ul> */}
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
          <form>
            <input />
            <input />
            <input />
            <div>
              <p>
                Limits of Balance: <span></span>
              </p>
            </div>
            <button>Get a Quote</button>
          </form>
        </div>
      </div>
      <div
        className="w-[51.15%] h-full bg-[#F3F3F5] bg-center"
        style={{
          backgroundImage: "url('/free_quote/contact-left-img.png')",
        }}
      ></div>
    </section>
  );
}
