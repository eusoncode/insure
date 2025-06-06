import { FaArrowRightLong } from "react-icons/fa6";

export default function Recent_portfolio_section() {
  return (
    <section className="flex flex-col relative justify-center items-center border border-green-600">
      {/** Recent news feed section **/}
      <div className="w-full h-250 pt-8">
        {/** Caption **/}
        <div className="flex flex-col justify-center items-center pt-4 mx-85 mb-4">
          {/** heading **/}
          <div className="relative">
            <p className="uppercase font-semibold leading-[1.2em] text-[14px] tracking-widest text-[#82828a]">
              recent portfolio
            </p>
            <span className="absolute top-1/2 left-[110%] w-[17px] h-[3px] inline-block translate-y-[-50%] rounded-[1.5px] bg-[#00CDE5]"></span>
          </div>
          {/** main caption **/}
          <span className="block w-full text-center text-[#2B2B5E] text-[45px] font-bold tracking-[-0.04em] leading-[1.1em] mt-2">
            Checkout our recently <br /> completed work
          </span>
        </div>

        {/** Image section **/}
        <div className="gap-4 mx-34 h-[70%] pt-12 mt-6 mb-4 border border-green-500">
          {/* Block 1 */}
          <div className="relative ">
            <div
              className="relative bg-[url('/recent_portfolio/portfolio-1.jpg')] bg-center bg-cover z-0 w-[370px] h-[500px] 
                border border-blue-100 after overflow-hidden
                after:absolute after:bg-[#2B2B5E] after:transition-all after:duration-700 after:ease-in-out after:opacity-0 
                after:inset-0 after:translate-y-[-100%] hover:after:opacity-60 hover:after:translate-y-0 after:bg-center 
                after:bg-cover after:w-full after:h-full after:content-[''] after:z-[-1]"
            ></div>
            <div
              className="absolute flex justify-center items-center bottom-[-62px] left-[-2px] w-[332px] h-[97px] bg-white z-[1] shadow-md
                before:absolute before:top-0 before:right-0 before:h-full before:w-1/4 before:bg-[#2B2B5E] before:z-[3]
                before:content-['➔'] before:flex before:items-center before:justify-center before:text-white before:text-lg
                hover:before:bg-[#00CDE5] before:[clip-path:polygon(30%_0%,100%_0,100%_100%,0_100%,30%_0)]"
            >
              <div className="w-[80%] h-15">
                <p className="font-medium text-[14px] text-[#82828a]">
                  Strategy
                </p>
                <p
                  className="font-semibold text-[20px] leading-[1.2em] tracking-[-0.01em] text-[#2B2B5E]
                  relative transition-all duration-600 bg-no-repeat bg-[length:0_1px] bg-[0_calc(100%-1px)] 
                  bg-[linear-gradient(to_right,currentColor_0%,currentColor_100%)] hover:bg-[length:52%_1px] hover:text-[#00CDE5]"
                >
                  Insurance policy
                </p>
              </div>
            </div>
          </div>
          {/** Block 2 **/}
          {/** Block 3 **/}
          {/** Block 4 **/}
        </div>
      </div>
    </section>
  );
}
