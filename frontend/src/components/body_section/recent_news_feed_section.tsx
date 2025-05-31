import { VscFolderOpened } from "react-icons/vsc";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Recent_news_feed_section() {
  return (
    <section className="flex flex-col relative justify-center items-center border border-green-600">
      {/** Recent news feed section **/}
      <div className="w-full h-250 border border-blue-600">
        {/** Caption **/}
        <div className="flex flex-col justify-center items-center pt-4 mx-85 mb-4">
          {/** heading **/}
          <div className="relative">
            <p className="uppercase font-semibold leading-[1.2em] text-[14px] tracking-widest text-[#82828a]">
              recent news feed
            </p>
            <span className="absolute top-1/2 left-[110%] w-[17px] h-[3px] inline-block translate-y-[-50%] rounded-[1.5px] bg-[#00CDE5]"></span>
          </div>
          {/** main caption **/}
          <span className="block w-full text-center text-[#2B2B5E] text-[45px] font-bold tracking-[-0.04em] leading-[1.1em] mt-2">
            Latest news & articles <br /> from the blog
          </span>
        </div>

        {/** Image section **/}
        <div className="flex justify-center items-center gap-4 mx-85 pt-12 mt-10 mb-4 border border-red-600">
          {/** Images 1 **/}
          <div className="relative w-[31%] h-125">
            {/** Date icon **/}
            <div className="absolute z-[10] top-[-10px] right-[30px] flex flex-col justify-center items-center text-center text-[10px] py-[20px] font-medium leading-[1.2em] tracking-widest text-white uppercase w-[50px] h-[58px] bg-[#00CDE5]">
              <span className="text-[18px] mb-[5px]">28</span>
              nov
            </div>

            {/** main image **/}
            <div
              className="w-full h-[64%]"
              style={{
                backgroundImage: "url('/recent_news_feed/blog-1-1.jpg')",
              }}
            ></div>

            {/**  **/}
            <div className="flex flex-col gap-4 absolute bottom-[8] left-[20] bg-white w-83 h-55 shadow-sm">
              {/**  **/}
              <div className="flex justify-baseline items-center mt-6 text-sm pl-8">
                <a href="#" className="flex justify-baseline items-center">
                  <i className="fas fa-user-circle decoration-0 text-[#00CDE5] pr-1"></i>
                  <p className="transition-al duration-500 ease-in-out decoration-0 hover:text-[#00CDE5] hover:text-shadow-lg pr-4">
                    by Admin
                  </p>
                </a>
                <p className="pr-4">|</p>
                <a
                  href="#"
                  className="group flex justify-baseline items-center"
                >
                  <i className="fa fa-comments text-[#00CDE5] pr-1"></i>
                  <p className="transition-al duration-500 ease-in-out decoration-0 hover:text-[#00CDE5] hover:text-shadow-lg">
                    2 Comments
                  </p>
                </a>
              </div>

              {/**  **/}
              <span className="font-semibold text-[20px] pl-8 leading-[1.2em] tracking-[-0.04em] py-2 text-[#2B2B5E]">
                <a
                  href="#"
                  className="relative text-inherit transition-all duration-900 bg-no-repeat bg-[length:0_1px] bg-[0_calc(100%-1px)] bg-[linear-gradient(to_right,currentColor_0%,currentColor_100%)] hover:bg-[length:100%_1px]"
                >
                  The quality role of the life <br /> insurance new policies in
                  <br /> company
                </a>
              </span>

              {/**  **/}
              <div className="group flex justify-between items-center pl-8 pt-2 border-t border-[#e0ddea]">
                <p className="transition-all duration-500 ease-in-out group-hover:text-[#00CDE5]">
                  Read More
                </p>
                <i className="mt-1 mr-10 transition-all duration-500 ease-in-out group-hover:text-[#00CDE5]">
                  <FaArrowRightLong />
                </i>
              </div>
            </div>
          </div>

          {/** Images 2 **/}
          <div className="relative w-[31%] h-125 border border-blue-600"></div>
          {/** Images 3 **/}
          <div className="relative w-[31%] h-125 border border-blue-600"></div>
        </div>
      </div>

      {/** before pseudo element **/}
      <i className="relative before:bg-[#00CDE5] before:absolute before:content-[''] before:top-[-145] before:left-[-560] before:z-[1] before:w-280 before:h-50 "></i>

      {/** Tracking claim section **/}
      <div className="absolute z-[1] bottom-[-60] bg-gradient-to-r from-[#2B2B5E] to-[#00CDE5] bg-cover h-49 w-280 mx-94 flex justify-between items-center px-14 ">
        {/** File on left side */}
        <div className="flex items-center z-[1] w-[70%] gap-8">
          <div className="flex items-center">
            <VscFolderOpened className="text-[#00CDE5] w-22 h-full" />
          </div>
          <div className="flex flex-col gap-1 w-full h-full">
            <p className="z-[1] uppercase text-[14px] tracking-[0.1rem]  text-white">
              quisque vel ortor
            </p>
            <p className="z-[1] text-[2rem] font-semibold leading-[1.2] tracking-[-0.04em] text-white">
              Start reporting or tracking your claims
            </p>
          </div>
        </div>

        {/* Button on right side */}
        <button
          className="flex justify-center items-center relative w-[18%] h-12 cursor-pointer bg-white z-0 overflow-hidden 
             after:absolute after:inset-0 after:z-[-1] after:bg-[#2B2B5E] after:opacity-0 after:transition-opacity after:duration-500 after:ease-in-out
             hover:after:opacity-100 hover:text-white transition-colors duration-500 ease-in-out"
        >
          <p className="font-bold decoration-0 z-[1]">Track your Claim</p>
        </button>
      </div>
    </section>
  );
}
