import { FaArrowRightLong } from "react-icons/fa6";

export default function Recent_portfolio_section() {
  // List of portfolio items, each with its image path and title
  const portfolioItems = [
    {
      image: "/recent_portfolio/portfolio-1.jpg",
      title: "Insurance application",
    },
    {
      image: "/recent_portfolio/portfolio-2.jpg",
      title: "Life protection",
    },
    {
      image: "/recent_portfolio/portfolio-3.jpg",
      title: "Auto insurance",
    },
    {
      image: "/recent_portfolio/portfolio-4.jpg",
      title: "Insurance policy",
    },
  ];

  return (
    <section className="flex flex-col relative justify-center items-center">
      {/* Section wrapper for the Recent Portfolio section */}
      <div className="w-full h-220 pt-8">
        {/* Caption block */}
        <div className="flex flex-col justify-center items-center pt-4 mx-85 mb-4">
          {/* Subheading title */}
          <div className="relative">
            <p className="uppercase font-semibold leading-[1.2em] text-[14px] tracking-widest text-[#82828a]">
              recent portfolio
            </p>
            {/* Decorative horizontal line beside the title */}
            <span className="absolute top-1/2 left-[110%] w-[17px] h-[3px] inline-block translate-y-[-50%] rounded-[1.5px] bg-[#00CDE5]"></span>
          </div>

          {/* Main headline */}
          <span className="block w-full text-center text-[#2B2B5E] text-[45px] font-bold tracking-[-0.04em] leading-[1.1em] mt-2">
            Checkout our recently <br /> completed work
          </span>
        </div>

        {/* Portfolio image cards */}
        <div className="flex justify-center items-start gap-4 pt-12 mt-6">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative">
              {/* Background image block with overlay animation */}
              <div
                className={`relative bg-center bg-cover z-0 w-[370px] h-[500px] 
                  border border-blue-100 after overflow-hidden
                  after:absolute after:bg-[#2B2B5E] after:transition-all after:duration-500 after:ease-in-out after:opacity-0 
                  after:inset-0 after:translate-y-[-100%] hover:after:opacity-40 group-hover:after:translate-y-0 after:bg-center 
                  after:bg-cover after:w-full after:h-full after:content-[''] after:z-[-1]`}
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

              {/* Text box below the image with hover animations */}
              <div
                className="absolute flex justify-center items-center bottom-[-62px] left-[-2px] w-[332px] h-[97px] bg-white z-[1] shadow-md group-hover:translate-y-[-10%] transition-all duration-300 ease-in-out
                  before:absolute before:top-0 before:right-0 before:h-full before:w-1/4 before:bg-[#2B2B5E] before:z-[3]
                  before:content-['➔'] before:flex before:items-center before:justify-center before:text-white before:text-lg
                  hover:before:bg-[#00CDE5] before:transition-all before:duration-500 before:ease-in-out before:cursor-pointer before:[clip-path:polygon(30%_0%,100%_0,100%_100%,0_100%,30%_0)]"
              >
                {/* Text content inside box */}
                <div className="w-[80%] h-15">
                  {/* Subtext */}
                  <p className="font-medium text-[14px] text-[#82828a]">
                    Strategy
                  </p>

                  {/* Main title with animated underline on hover */}
                  <p
                    className="font-semibold text-[20px] leading-[1.2em] tracking-[-0.01em] text-[#2B2B5E]
                      relative transition-all duration-600 bg-no-repeat bg-[length:0_1px] bg-[0_calc(100%-1px)] 
                      bg-[linear-gradient(to_right,currentColor_0%,currentColor_100%)] before:cursor-pointer 
                      hover:bg-[length:52%_1px] hover:text-[#00CDE5]"
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
