


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
        <div className="flex justify-center items-center gap-4 mx-34 h-[70%] pt-12 mt-6 mb-4 border border-green-500"></div>
      </div>
    </section>
  );
}
