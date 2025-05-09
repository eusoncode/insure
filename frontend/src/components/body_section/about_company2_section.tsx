import Image from "next/image";


export default function About_company2_section() {
  return (
    <section className="border-2 border-blue-600">
      <div className="relative border border-b-pink-500">
        <div className="flex flex-row w-full h-full border border-purple-600">
          <div className="w-[39%] h-165 opacity-r bg-[url('/about_company2/testimonai_one_bg.png')] bg-cover border border-transparent"></div>
          <div className="relative w-full h-[660px] flex flex-row border border-green-600">
            <div
              className="absolute flex justify-center items-center top-108 left-250 rounded-full border-transparent bg-cover"
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
              className="absolute flex justify-center items-center top-108 left-50 rounded-full border-transparent bg-cover"
              style={{
                width: "97px",
                height: "97px",
                backgroundImage: "url('/about_company2/testimonai_one_1.png')",
              }}
            ></div>

            <div
              className="absolute flex justify-center items-center top-39 left-70 rounded-full border-transparent bg-cover"
              style={{
                width: "70px",
                height: "70px",
                backgroundImage: "url('/about_company2/testimonai_one_1.png')",
              }}
            ></div>

            <div
              className="absolute flex justify-center items-center top-59 left-140 rounded-full border-transparent bg-cover"
              style={{
                width: "130px",
                height: "130px",
                backgroundImage: "url('/about_company2/testimonai_one_1.png')",
              }}
            ></div>
          </div>
        </div>
        {/* <div className="border border-yellow-600">
          <div className="">
            <div className="">
              <h6 className="">About company</h6>
              <h3 className="">
                What they’re talking <br /> about us?
              </h3>
            </div>
            <p>
              There are many variations of passages the majority have <br />{" "}
              suffered alteration in some fo injected humour, or <br />{" "}
              randomised words believable.
            </p>
            <div className="">
              <button role="button" className="">
                <span></span>
              </button>
              <button role="button" className="">
                <span></span>
              </button>
              <button role="button" className="">
                <span></span>
              </button>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="shape-one">
                <Image src={""} alt="double-quote-image" />
              </div>
              <div className="">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy data
                foster to collaborative thinking.
              </div>
            </div>
            <div className=""></div>
            <div className="">
              <div className="">
                <Image src={""} alt="profile_image" />
              </div>
              <div className="">
                <h3 className="">Sarah albert</h3>
                <p className="">Co Founder</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
