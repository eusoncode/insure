import { VscFolderOpened } from "react-icons/vsc";
import { FaArrowRightLong } from "react-icons/fa6";

// Sample blog data array
const blogData = [
  {
    id: 1,
    date: "28",
    month: "nov",
    image: "/recent_news_feed/blog-1-1.jpg",
    title: "The quality role of the life insurance new policies in, company",
  },
  {
    id: 2,
    date: "28",
    month: "nov",
    image: "/recent_news_feed/blog-1-2.jpg",
    title: "In this space gain offline, but can we take this, online",
  },
  {
    id: 3,
    date: "28",
    month: "nov",
    image: "/recent_news_feed/blog-1-3.jpg",
    title: "Flesh that out locked and, loaded closing these, latest",
  },
];

export default function Recent_news_feed_section() {
  return (
    <section className="flex flex-col relative justify-center items-center">
      {/* === Header Section === */}
      <div className="w-full h-250 pt-8">
        {/* Section title and subtitle */}
        <div className="flex flex-col justify-center items-center pt-4 mx-85 mb-4">
          <div className="relative">
            <p className="uppercase font-semibold text-[14px] tracking-widest text-[#82828a]">
              recent news feed
            </p>
            {/* Decorative line next to heading */}
            <span className="absolute top-1/2 left-[110%] w-[17px] h-[3px] inline-block translate-y-[-50%] rounded-[1.5px] bg-[#00CDE5]"></span>
          </div>
          <span className="block w-full text-center text-[#2B2B5E] text-[45px] font-bold tracking-[-0.04em] leading-[1.1em] mt-2">
            Latest news & articles <br /> from the blog
          </span>
        </div>

        {/* === Blog Cards Section === */}
        <div className="flex justify-center items-center gap-4 mx-85 pt-12 mt-6 mb-4">
          {blogData.map(({ id, date, month, image, title }) => (
            <div key={id} className="relative w-[31%] h-125">
              {/* Date badge at top-right corner */}
              <div className="absolute z-[10] top-[-10px] right-[30px] flex flex-col justify-center items-center text-[10px] py-[20px] font-medium text-white uppercase w-[50px] h-[58px] bg-[#00CDE5]">
                <span className="text-[18px] mb-[5px]">{date}</span>
                {month}
              </div>

              {/* === Hover Image with transition layers === */}
              <div className="group relative w-full h-[64%] overflow-hidden cursor-pointer">
                {/* Dark overlay that fades in from top */}
                <div className="absolute inset-0 bg-[#2B2B5E] opacity-0 translate-y-[-100%] transition-all duration-200 ease-in-out z-10 group-hover:opacity-50 group-hover:translate-y-0"></div>

                {/* Original image fades out left */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out z-0 group-hover:opacity-0 group-hover:-translate-x-1/3"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>

                {/* New image fades in from right */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 translate-x-1/3 transition-all duration-700 ease-in-out z-0 group-hover:opacity-100 group-hover:translate-x-0"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>

                {/* Plus icon animates into view */}
                <span className="absolute text-white text-[48px] font-serif top-[30%] left-1/2 -translate-x-1/2 opacity-0 transition-all duration-700 ease-in-out z-20 group-hover:opacity-100 group-hover:top-[43%]">
                  +
                </span>
              </div>

              {/* === Blog Content Area === */}
              <div className="flex flex-col z-15 gap-4 absolute bottom-[8] left-[20] bg-white w-83 h-55 shadow-sm">
                {/* Metadata: Admin and Comment count */}
                <div className="flex items-center mt-6 text-sm pl-8">
                  <a href="#" className="flex items-center">
                    <i className="fas fa-user-circle text-[#00CDE5] pr-1"></i>
                    <p className="transition-all duration-500 hover:text-[#00CDE5] pr-4">
                      by Admin
                    </p>
                  </a>
                  <p className="pr-4">|</p>
                  <a href="#" className="group flex items-center">
                    <i className="fa fa-comments text-[#00CDE5] pr-1"></i>
                    <p className="transition-all duration-500 hover:text-[#00CDE5]">
                      2 Comments
                    </p>
                  </a>
                </div>

                {/* Blog title with animated underline */}
                <span className="font-semibold text-[23px] pl-8 leading-[1.2em] tracking-[-0.04em] py-2 text-[#2B2B5E]">
                  <a
                    href="#"
                    className="relative text-inherit transition-all duration-900 bg-no-repeat bg-[length:0_1px] bg-[0_calc(100%-1px)] bg-[linear-gradient(to_right,currentColor_0%,currentColor_100%)] hover:bg-[length:100%_1px]"
                  >
                    {title.split(", ").map((line, i) => (
                      <>
                        {line}
                        <br key={i} />
                      </>
                    ))}
                  </a>
                </span>

                {/* Read more footer link */}
                <div className="group flex justify-between items-center pl-8 pt-2 border-t border-[#e0ddea] cursor-pointer">
                  <p className="transition-all duration-500 group-hover:text-[#00CDE5]">
                    Read More
                  </p>
                  <i className="mt-1 mr-10 transition-all duration-500 group-hover:text-[#00CDE5]">
                    <FaArrowRightLong />
                  </i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative background bar using before pseudo */}
      <i className="relative before:bg-[#00CDE5] before:absolute before:content-[''] before:top-[-145] before:left-[-592] before:z-[1] before:w-296 before:h-50"></i>

      {/* === Call-to-action Section === */}
      <div className="absolute z-[1] bottom-[-60] bg-gradient-to-r from-[#2B2B5E] to-[#00CDE5] h-49 w-296 flex justify-between items-center px-14">
        {/* Left: Folder icon + CTA text */}
        <div className="flex items-center z-[1] w-[70%] gap-8">
          <div className="flex items-center">
            <VscFolderOpened className="text-[#00CDE5] w-22 h-full" />
          </div>
          <div className="flex flex-col gap-1 w-full h-full">
            <p className="uppercase text-[14px] tracking-[0.1rem] text-white">
              quisque vel ortor
            </p>
            <p className="text-[2rem] font-semibold leading-[1.2] tracking-[-0.04em] text-white">
              Start reporting or tracking your claims
            </p>
          </div>
        </div>

        {/* Right: CTA Button */}
        <button
          className="flex justify-center items-center relative w-[18%] h-12 cursor-pointer bg-white z-0 overflow-hidden 
            after:absolute after:inset-0 after:z-[-1] after:bg-[#2B2B5E] after:opacity-0 
            after:transition-opacity after:duration-500 hover:after:opacity-100 hover:text-white 
            transition-colors duration-500 ease-in-out"
        >
          <p className="font-bold z-[1]">Track your Claim</p>
        </button>
      </div>
    </section>
  );
}
