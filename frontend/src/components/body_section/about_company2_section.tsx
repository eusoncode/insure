import { LuQuote } from "react-icons/lu";

export default function About_company2_section() {
  return (
    <section className="border-2 border-blue-600">
      <div className="relative block border border-b-pink-500">
        <div className="flex flex-row  w-full h-full border border-purple-600">
          <div className="w-[39%] h-165 opacity-r bg-[url('/about_company2/testimonai_one_bg.png')] bg-cover border border-transparent"></div>
          <div className="relative w-full h-[660px] flex flex-row border border-green-600">
            <div
              className="absolute opacity-40 flex justify-center items-center top-22 left-55 rounded-full border-transparent bg-cover"
              style={{
                width: "140px",
                height: "140px",
                backgroundImage:
                  "url('/about_company2/avatar/avata-autor-shape-1.png')",
              }}
            ></div>

            <div
              className="absolute opacity-40 flex justify-center items-center top-25 left-200 rounded-full border-transparent bg-cover"
              style={{
                width: "95px",
                height: "95px",
                backgroundImage:
                  "url('/about_company2/avatar/avata-autor-shape-3.png')",
              }}
            ></div>

            <div
              className="absolute opacity-40 flex justify-center items-center top-78 left-280 rounded-full border-transparent bg-cover"
              style={{
                width: "85px",
                height: "85px",
                backgroundImage:
                  "url('/about_company2/avatar/avata-autor-shape-4.png')",
              }}
            ></div>

            <div
              className="absolute opacity-40 flex justify-center items-center top-116 left-239 rounded-full border-transparent bg-cover"
              style={{
                width: "120px",
                height: "120px",
                backgroundImage:
                  "url('/about_company2/avatar/avata-autor-shape-2.png')",
              }}
            ></div>

            <div
              className="absolute opacity-40 flex justify-center items-center top-127 left-55 rounded-full border-transparent bg-cover"
              style={{
                width: "80px",
                height: "80px",
                backgroundImage:
                  "url('/about_company2/avatar/avata-autor-shape-5.png')",
              }}
            ></div>
          </div>
        </div>
        {/* Yellow border container centered inside relative parent */}
        <div className="absolute top-35 mx-60 z-10 flex flex-row justify-center items-center gap-16 border border-yellow-600 bg-transparent p-4">
          <div className="w-130 p-8 border border-red-400">
            <div className="mb-3">
              <div className="flex flex-row gap-4 border border-amber-400 ">
                <p className="font-bold text-xs text-gray-400 uppercase tracking-wider">
                  About company
                </p>
                <span className="w-4 h-1 mt-1.5 rounded bg-[#00CDE5]"></span>
              </div>
              <p className="font-bold text-4xl tracking-wider text-[#2B2B5E]">
                What they’re talking <br /> about us?
              </p>
            </div>
            <p className="pt-2 leading-8 text-gray-400 ">
              There are many variations of passages the majority have <br />
              suffered alteration in some fo injected humour, or <br />
              randomised words believable.
            </p>
            <div className="flex flex-row items-center gap-4 w-50">
              <button
                className="w-8 h-1 mt-3 rounded bg-[#00CDE5]"
                role="button"
              ></button>
              <button
                className="w-8 h-1 mt-3 rounded bg-[#F0F0F0]"
                role="button"
              ></button>
              <button
                className="w-8 h-1 mt-3 rounded bg-[#F0F0F0]"
                role="button"
              ></button>
            </div>
          </div>

          <div className="relative flex flex-col w-165 border border-b-blue-800">
            <div className="flex items-center justify-center bg-gradient-to-br from-[#1B648D] to-[#00cde5] rounded-bl-[60px] absolute w-26 h-24 top-[-1] left-[555px] z-15 bg-[#00CDE5]">
              <span className="text-white text-4xl">
                <LuQuote />
              </span>
            </div>

            <div className="w-full h-58 px-12 py-6 bg-[#2B2B5E] before-custom-clip">
              <div className="mt-6 py-2">
                <i className="fa fa-star text-[#00cde5]"></i>
                <i className="fa fa-star text-[#00cde5]"></i>
                <i className="fa fa-star text-[#00cde5]"></i>
                <i className="fa fa-star text-[#00cde5]"></i>
                <i className="fa fa-star text-[#00cde5]"></i>
              </div>
              <div className=" text-white font-medium leading-8">
                Leverage agile frameworks to provide a robust synopsis for high
                level <br /> overviews. Iterative approaches to corporate
                strategy data foster to <br />
                collaborative thinking.
              </div>
            </div>
            <div
              className="absolute z-5 top-58 left-15 w-39 h-15 before-custom-clip-path bg-[#00CDE5]"
              style={{
                clipPath: "polygon(0px 0px, 100% 0px, 0% 92%)",
              }}
            ></div>
            <div className="flex flex-row ml-40 items-center mt-3 gap-2">
              <div
                className="flex justify-center items-center left-135 rounded-full border-transparent bg-cover"
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundImage:
                    "url('/about_company2/testimonai_one_1.png')",
                }}
              ></div>
              <div className="flex flex-col gap-2 leading-3.5">
                <p className="font-bold">Kevin martin</p>
                <p className="text-sm">Co Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
