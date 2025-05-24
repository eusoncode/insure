import "../../styles/numbers_section/HeroSection.css";
import { GrCertificate } from "react-icons/gr";
import { FaPeopleGroup, FaPeopleRoof, FaHandshake } from "react-icons/fa6";


export default function Numbers_section() {
  return (
    <section className="flex justify-center items-center bg-[url('/numbers_section/funfact-shape.png')] bg-[#2B2B5E] border border-transparent">
      <div className="flex justify-center items-center mt-4 mb-6 gap-4 w-322 h-70 pl-16">
        <div className="relative group w-full h-45 mb-6 pt-19">
          <GrCertificate className="flex justify-center items absolute top-0 left-[-2] w-15 h-15 text-[#00CDE5]" />
          <div className="flex font-[950] text-white text-[36px] leading-[36px] tracking-tight mb-2">
            <h3 className="funfact-one__count count-text">3.6</h3>
            <h3 className="funfact-one__count count-before">k</h3>
          </div>
          <p className="relative z-[1] flex justify-center items-center text-[#2B2B5E] bg-white w-47 h-10 triangle-up blue-shade">
            Gave insurances
          </p>
        </div>
        <div className="relative w-full h-45 mb-6 pt-19">
          <FaPeopleGroup className="flex justify-center items absolute top-0 left-[-2] w-15 h-15 text-[#00CDE5]" />
          <div className="flex font-[950] text-white text-[36px] leading-[36px] tracking-tight mb-3">
            <h3 className="funfact-one__count count-text">3.6</h3>
            <h3 className="funfact-one__count count-before">k</h3>
          </div>
          <p className="relative z-[1] flex justify-center items-center text-[#2B2B5E] bg-white w-47 h-10 triangle-up">
            Gave insurances
          </p>
        </div>
        <div className="relative w-full h-45 mb-6 pt-19">
          <FaPeopleRoof className="flex justify-center items absolute top-0 left-[-2] w-15 h-15 text-[#00CDE5]" />
          <div className="flex font-[950] text-white text-[36px] leading-[36px] tracking-tight mb-3">
            <h3 className="funfact-one__count count-text">3.6</h3>
            <h3 className="funfact-one__count count-before">k</h3>
          </div>
          <p className="relative z-[1] flex justify-center items-center text-[#2B2B5E] bg-white w-47 h-10 triangle-up">
            Gave insurances
          </p>
        </div>
        <div className="relative w-full h-45 mb-6 pt-19">
          <FaHandshake className="flex justify-center items absolute top-0 left-[-2] w-15 h-15 text-[#00CDE5]" />
          <div className="flex font-[950] text-white text-[36px] leading-[36px] tracking-tight mb-3">
            <h3 className="funfact-one__count count-text">3.6</h3>
            <h3 className="funfact-one__count count-before">k</h3>
          </div>
          <p className="relative z-[1] flex justify-center items-center text-[#2B2B5E] bg-white w-47 h-10 triangle-up">
            Gave insurances
          </p>
        </div>
      </div>
    </section>
  );
}
