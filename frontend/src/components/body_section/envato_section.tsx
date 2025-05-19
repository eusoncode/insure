import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Envato_section() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 4000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 992, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 575, settings: { slidesToShow: 2 } },
      { breakpoint: 360, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="relative flex flex-col items-center justify-center py-16 border-t border-[#E0DDEA] overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-105 h-30">
        <Image
          src="/envato/line-shape-1.png"
          alt="envato-bg-1"
          width={500}
          height={500}
        />
      </div>
      <div className="absolute right-0 w-110 h-70">
        <Image
          src="/envato/line-shape-2.png"
          alt="envato-bg-1"
          width={500}
          height={500}
        />
      </div>

      {/* Carousel */}
      <div className="w-full max-w-[1400px] px-4">
        <Slider {...settings}>
          {[...Array(10)].map((_, index) => (
            <div key={index} className="px-3">
              <div className="group w-[230px] h-[70px] rounded-[10px] overflow-hidden flex justify-center items-center hover:bg-gray-100 transition-all duration-500 ease-in-out mx-auto">
                <Image
                  src="/envato/brand-1-1.png"
                  alt={`envato-${index}`}
                  width={120}
                  height={120}
                  className="opacity-25 group-hover:opacity-70 transition-all duration-500 ease-in-out"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import Image from "next/image";

// const brandLogos = [
//   "/envato/brand-1-1.png",
//   "/envato/brand-1-1.png",
//   "/envato/brand-1-1.png",
//   "/envato/brand-1-1.png",
//   "/envato/brand-1-1.png",
// ];

// export default function Envato_section() {
//   const settings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     autoplay: true,
//     speed: 200,
//     autoplaySpeed: 6000,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 1200, settings: { slidesToShow: 5 } },
//       { breakpoint: 992, settings: { slidesToShow: 4 } },
//       { breakpoint: 768, settings: { slidesToShow: 3 } },
//       { breakpoint: 575, settings: { slidesToShow: 3 } },
//       { breakpoint: 360, settings: { slidesToShow: 2 } },
//       { breakpoint: 0, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <section className="relative flex flex-col items-center justify-center py-10 border-t border-[#E0DDEA]">
//       {/* Background shapes */}
//       <div className="absolute top-0 left-0 w-[420px] h-[120px]">
//         <Image
//           src="/envato/line-shape-1.png"
//           alt="shape-1"
//           fill
//           className="object-contain"
//         />
//       </div>
//       <div className="absolute right-0 w-[420px] h-[120px]">
//         <Image
//           src="/envato/line-shape-2.png"
//           alt="shape-2"
//           fill
//           className="object-contain"
//         />
//       </div>

//       {/* Carousel */}
//       <div className="w-full px-10">
//         <Slider {...settings}>
//           {brandLogos.map((logo, index) => (
//             <div key={index} className="flex justify-center items-center px-2">
//               <div className="group w-[230px] h-[70px] rounded-[10px] overflow-hidden flex justify-center items-center hover:bg-gray-100 transition-all duration-500 ease-in-out">
//                 <Image
//                   src={logo}
//                   alt={`envato-${index}`}
//                   width={120}
//                   height={120}
//                   className="opacity-25 group-hover:opacity-70 transition-all duration-500 ease-in-out"
//                 />
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// }
