import Image from "next/image";


export default function About_company2_section() {
  return (
    <section className="border-2 border-blue-600">
      <div className="relative block border border-b-pink-500">
        <div className="flex flex-row  w-full h-full border border-purple-600">
          <div className="w-[39%] h-165 opacity-r bg-[url('/about_company2/testimonai_one_bg.png')] bg-cover border border-transparent"></div>
          <div className="relative w-full h-[660px] flex flex-row border border-green-600">
            <div
              className="absolute flex justify-center items-center top-18 left-135 rounded-full border-transparent bg-cover"
              style={{
                width: "40px",
                height: "40px",
                backgroundImage: "url('/about_company2/testimonai_one_1.png')",
              }}
            ></div>

            <div
              className="absolute flex justify-center items-center top-18 left-250 rounded-full border-transparent bg-cover"
              style={{
                width: "108px",
                height: "108px",
                backgroundImage: "url('/about_company2/testimonai_one_1.png')",
              }}
            ></div>

            <div
              className="absolute flex justify-center items-center top-120 left-270 rounded-full border-transparent bg-cover"
              style={{
                width: "97px",
                height: "97px",
                backgroundImage: "url('/about_company2/testimonai_one_1.png')",
              }}
            ></div>

            <div
              className="absolute flex justify-center items-center top-129 left-70 rounded-full border-transparent bg-cover"
              style={{
                width: "70px",
                height: "70px",
                backgroundImage: "url('/about_company2/testimonai_one_1.png')",
              }}
            ></div>

            <div
              className="absolute flex justify-center items-center top-19 left-40 rounded-full border-transparent bg-cover"
              style={{
                width: "130px",
                height: "130px",
                backgroundImage: "url('/about_company2/testimonai_one_1.png')",
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
                className="w-8 h-1 mt-3 rounded bg-[#00CDE5]"
                role="button"
              ></button>
              <button
                className="w-8 h-1 mt-3 rounded bg-[#00CDE5]"
                role="button"
              ></button>
            </div>
          </div>

          <div className="relative flex flex-col w-170 border border-b-blue-800">
            <div className="border border-red-600 absolute left-150 z-15 shape-one">
              <Image src={""} alt="double-quote-image" />
            </div>
            <div className="w-full px-12 py-12 bg-[#2B2B5E]">
              <div>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className=" decoration-white">
                Leverage agile frameworks to provide a robust synopsis for high
                level <br /> overviews. Iterative approaches to corporate
                strategy data foster to <br />
                collaborative thinking.
              </div>
            </div>
            <div
              className="absolute z-[-5] top-45 left-15 w-40 h-15 border border-b-blue-800 bg-[#2B2B5E]"
              style={{
                clipPath: "polygon(0px 0px, 100% 0px, 0% 81%)",
              }}
            ></div>
            <div className="flex flex-row ml-35 items-center mt-2 gap-2">
              {/* <div className="w-20 h-20 rounded-full overflow-hidden flex justify-center items-center border border-blue-700">
                <Image
                  src={""}
                  width={40}
                  height={40}
                  alt="profile_image"
                  className="mt-auto inset-0 object-cover"
                />
              </div> */}
              <div
                className="flex justify-center items-center top-18 left-135 rounded-full border-transparent bg-cover"
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundImage:
                    "url('/about_company2/testimonai_one_1.png')",
                }}
              ></div>
              <div className="flex flex-col gap-1 leading-3.5">
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
