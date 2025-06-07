import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Envato_section() {
  // Slider/carousel configuration
  const settings = {
    dots: false, // Hide navigation dots
    arrows: false, // Hide prev/next arrows
    infinite: true, // Loop through slides continuously
    autoplay: true, // Enable automatic sliding
    speed: 700, // Animation speed for transitions (in ms)
    autoplaySpeed: 4000, // Delay between each auto-slide (in ms)
    slidesToShow: 5, // Number of logos shown per slide on large screens
    slidesToScroll: 1, // Scroll one slide at a time
    responsive: [
      // Adjust number of visible slides per screen size
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 992, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 575, settings: { slidesToShow: 2 } },
      { breakpoint: 360, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="relative flex flex-col items-center justify-center py-18 border-t border-[#E0DDEA] overflow-hidden">
      {/* Decorative background shape (top-left corner) */}
      <div className="absolute top-0 left-0 w-105 h-30">
        <Image
          src="/envato/line-shape-1.png"
          alt="envato-bg-1"
          width={500}
          height={500}
        />
      </div>

      {/* Decorative background shape (top-right corner) */}
      <div className="absolute right-0 w-110 h-70">
        <Image
          src="/envato/line-shape-2.png"
          alt="envato-bg-2"
          width={500}
          height={500}
        />
      </div>

      {/* Slider container */}
      <div className="w-full max-w-[1400px] px-4">
        <Slider {...settings}>
          {/* Loop through and render 10 logo placeholders */}
          {[...Array(10)].map((_, index) => (
            <div key={index} className="px-3">
              {/* Logo card with hover effect */}
              <div className="group w-[230px] h-[70px] rounded-[10px] overflow-hidden flex justify-center items-center hover:bg-gray-100 transition-all duration-500 ease-in-out mx-auto">
                <Image
                  src="/envato/brand-1-1.png" // Static image for all items; replace with dynamic path if needed
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
