import { VscFolderOpened } from "react-icons/vsc";

export default function Recent_news_feed_section() {
  return (
    <section className="flex flex-col relative justify-center items-center border border-green-600">
      <div className="w-full h-200 border border-blue-600">
        <p>Recent_news_feed_section Block</p>
      </div>
      <i className="relative before:bg-[#00CDE5] before:absolute before:content-[''] before:top-[-145] before:left-[-560] before:z-[1] before:w-280 before:h-50 "></i>
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
