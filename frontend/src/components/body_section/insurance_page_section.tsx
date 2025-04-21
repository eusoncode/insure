import Image from "next/image";
import background_image from "@/assets/main-slder-shape-1e.png";
import family_image from "@/assets/main-slder-shape-2e.png";
import arrow_shape from "@/assets/arrow-shape.png";
import "../../styles/HeroSection.css";
import "../../styles/car.css";
import "../../styles/house.css";
import "../../styles/family.css";
import "../../styles/right-arrow.css";
import "../../styles/left-arrow.css";
import { CarFront } from "lucide-react";

// export default function Insurance_section() {
//   return (
//     <section className={Insurance_page_styles.section}>
//       <div
//         className="flex justify-center items-center w-[1050px] bg-cover bg-center"
//         style={{ backgroundImage: `url(${background_image.src})` }}
//       >
//         <div className="main-slider-one__wrap relative z-10 py-[140px] px-4 flex flex-col gap-6 max-w-5xl mx-auto">
//           <div className="main-slider-one__content relative pr-0">
//             <div className="shape-1 absolute right-0 -top-10 animate-[swing_1s_ease-in-out_1s_infinite_alternate] origin-top-right z-[11]">
//               <Image src={arrow_shape} alt="" />
//             </div>

//             <h2 className="main-slider-one__title text-[60px] font-semibold leading-tight text-[#2b2b5e] mb-4 tracking-tight">
//               Insurance <br /> for the better <br /> family life.
//             </h2>

//             <p className="main-slider-one__info text-[18px] leading-[30px] mb-6">
//               Phasellus condimentum laoreet turpis, ut tincid sodales <br /> in.
//               Integer leo arcu, mollis sit amet tempor.
//             </p>

//             <div className="main-slider-one__btn">
//               <a
//                 href="services.html"
//                 className="modins-btn modins-btn--base bg-[#00cde5] text-white px-[55px] py-[15px] font-bold text-[14px] inline-block"
//               >
//                 <span>Let’s Get Started</span>
//               </a>
//             </div>
//           </div>

//           {/* Social icons */}
//           <div className="main-slider-one__social flex gap-4 mt-10">
//             <span className="w-[76px] h-[76px] text-[32px] leading-[76px] text-center rounded-full text-[#2b2b5e] bg-white hover:bg-[#2b2b5e] hover:text-white transition duration-300">
//               <i className="icon-family-1"></i>
//             </span>
//             <span className="w-[76px] h-[76px] text-[32px] leading-[76px] text-center rounded-full text-[#2b2b5e] bg-white hover:bg-[#2b2b5e] hover:text-white transition duration-300">
//               <i className="icon-car"></i>
//             </span>
//             <span className="w-[76px] h-[76px] text-[32px] leading-[76px] text-center rounded-full text-[#2b2b5e] bg-white hover:bg-[#2b2b5e] hover:text-white transition duration-300">
//               <i className="icon-home-insurance"></i>
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="">
//         <Image src={family_image} alt="" width={850} className="" />
//       </div>
//     </section>
//   );
// }

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div
        className="hero-background "
        style={{ backgroundImage: `url(${background_image.src})` }}
      >
        <div className="slider-wrap">
          <div className="social-icons">
            <span className="icon-box_2">
              <i className="icon-arrow-left2"></i>
            </span>
            <span className="icon-box_2">
              <i className="icon-arrow-right2"></i>
            </span>
          </div>

          <div className="slider-content">
            <div className="shape-icon">
              <Image src={arrow_shape} alt="" />
            </div>

            <h2 className="slider-title">
              Insurance for <br /> the better <br /> family life.
            </h2>

            <p className="slider-info">
              Phasellus condimentum laoreet turpis, ut tincid sodales <br />
              in. Integer leo arcu, mollis sit amet tempor.
            </p>

            <div className="slider-button">
              <a href="services.html" className="primary-btn">
                <span>Let’s Get Started</span>
              </a>
            </div>
          </div>

          <div className="social-icons">
            <span className="icon-box">
              <i className="icon-family_restroom"></i>
            </span>
            <span className="icon-box">
              {/* <i className="icon-local_car_wash"></i> */}
              <CarFront />
            </span>
            <span className="icon-box">
              <i className="icon-home-outline"></i>
            </span>
          </div>
        </div>
      </div>

      <div>
        <Image src={family_image} alt="" width={1050} height={1050} />
      </div>
    </section>
  );
}
