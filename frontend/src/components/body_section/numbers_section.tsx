import "../../styles/numbers_section/HeroSection.css";
import { GrCertificate } from "react-icons/gr";


export default function Numbers_section() {
  return (
    <section className="flex justify-center items-center bg-[url('/numbers_section/funfact-shape.png')] bg-[#2B2B5E] border border-transparent">
      <div className="flex justify-center items-center w-292 h-70">
        <div className="relative w-full h-45 mb-6 pt-19">
          <GrCertificate className="flex justify-center items absolute top-0 left-[-2] w-15 h-15 text-[#00CDE5]" />
          <div className="flex font-[950] text-white text-[36px] leading-[36px] tracking-tight mb-3">
            <h3 className="funfact-one__count count-text">3.6</h3>
            <h3 className="funfact-one__count count-before">k</h3>
          </div>
          <p className="relative z-[1] flex justify-center items-center text-[#2B2B5E] bg-white w-47 h-10 triangle-up">
            Gave insurances
          </p>
        </div>
        <div className="w-full h-40 mb-6 border border-blue-400">
          <div>
            <h3
              className="funfact-one__count count-text"
              data-stop="3.6"
              data-speed="1500"
            >
              3.6
            </h3>
            <h3 className="funfact-one__count count-before">k</h3>
          </div>
          <p className="funfact-one__text">Gave insurances</p>
        </div>
        <div className="w-full h-40 mb-6 border border-blue-400">
          <div>
            <h3
              className="funfact-one__count count-text"
              data-stop="3.6"
              data-speed="1500"
            >
              3.6
            </h3>
            <h3 className="funfact-one__count count-before">k</h3>
          </div>
          <p className="funfact-one__text">Gave insurances</p>
        </div>
        <div className="w-full h-40 mb-6 border border-blue-400">
          <div>
            <h3
              className="funfact-one__count count-text"
              data-stop="3.6"
              data-speed="1500"
            >
              3.6
            </h3>
            <h3 className="funfact-one__count count-before">k</h3>
          </div>
          <p className="funfact-one__text">Gave insurances</p>
        </div>
      </div>
    </section>
  );
}
