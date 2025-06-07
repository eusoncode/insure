import "../../styles/offering/HeroSection.css";
import Image from "next/image";
import insurance_bg_1 from "@/assets/offering/insurace-bg-1.jpg";
import service_1 from "@/assets/offering/service-1.png";
import service_2 from "@/assets/offering/service-2.png";
import service_3 from "@/assets/offering/service-3.png";
import service_4 from "@/assets/offering/service-4.png";
import service_5 from "@/assets/offering/service-5.png";
import service_6 from "@/assets/offering/service-6.png";
import service_7 from "@/assets/offering/service-7.png";
import service_8 from "@/assets/offering/service-8.png";
import { CarFront } from "lucide-react";

export default function Offering_section() {
  const iconSize = 35;

  // Data for each insurance service
  const data = [
    {
      image: <Image src={service_1} alt="Car insurance" />,
      icon: <CarFront size={iconSize} className="m-auto" />,
      link: <a href="car-insurance.html">Car insurance</a>,
      description:
        "Lorem ipsum dolor sit amet, sed consectetur adipiscing elit.",
    },
    {
      image: <Image src={service_2} alt="Life insurance" />,
      icon: <CarFront size={iconSize} className="m-auto" />,
      link: <a href="life-insurance.html">Life insurance</a>,
      description:
        "Lorem ipsum dolor sit amet, sed consectetur adipiscing elit.",
    },
    {
      image: <Image src={service_3} alt="Home insurance" />,
      icon: <CarFront size={iconSize} className="m-auto" />,
      link: <a href="home-insurance.html">Home insurance</a>,
      description:
        "Lorem ipsum dolor sit amet, sed consectetur adipiscing elit.",
    },
    {
      image: <Image src={service_4} alt="Health insurance" />,
      icon: <CarFront size={iconSize} className="m-auto" />,
      link: <a href="health-insurance.html">Health insurance</a>,
      description:
        "Lorem ipsum dolor sit amet, sed consectetur adipiscing elit.",
    },
    {
      image: <Image src={service_5} alt="Business insurance" />,
      icon: <CarFront size={iconSize} className="m-auto" />,
      link: <a href="business-insurance.html">Business insurance</a>,
      description:
        "Lorem ipsum dolor sit amet, sed consectetur adipiscing elit.",
    },
    {
      image: <Image src={service_6} alt="Fire insurance" />,
      icon: <CarFront size={iconSize} className="m-auto" />,
      link: <a href="fire-insurance.html">Fire insurance</a>,
      description:
        "Lorem ipsum dolor sit amet, sed consectetur adipiscing elit.",
    },
    {
      image: <Image src={service_7} alt="Marriage insurance" />,
      icon: <CarFront size={iconSize} className="m-auto" />,
      link: <a href="marriage-insurance.html">Marriage insurance</a>,
      description:
        "Lorem ipsum dolor sit amet, sed consectetur adipiscing elit.",
    },
  ];

  return (
    <section
      className="service-one service-home-one pt-120 pb-120"
      style={{ backgroundImage: `url(${insurance_bg_1.src})` }}
    >
      <div className="container">
        {/* Section title */}
        <div className="sec-title">
          <div className="flex flex-row gap-4 justify-center items-center">
            <h6 className="sec-title__tagline">what we’re offering</h6>
            <div className="border-2 border-base-didi w-5 rounded-2xl"></div>
          </div>
          <h3 className="sec-title__title">
            We’re giving all the insurance <br /> services to you
          </h3>
        </div>

        {/* Insurance service cards */}
        <div className="row gutter-y-30">
          {data.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-3 group">
              <div
                className="service-card fadeInUp animated"
                style={{
                  visibility: "visible",
                  animationDuration: "1500ms",
                  animationDelay: `${index}ms`,
                  animationName: "fadeInUp",
                }}
              >
                <div className="service-card__image">
                  {item.image}
                  <div className="service-card__icon">{item.icon}</div>
                </div>
                <div className="service-card__content">
                  <h3 className="service-card__title">{item.link}</h3>
                  <p className="service-card__info">{item.description}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Last card: Special featured service */}
          <div className="col-md-6 col-lg-3">
            <div
              className="service-card service-featured wow fadeInUp animated"
              style={{
                visibility: "visible",
                animationDuration: "1500ms",
                animationDelay: "8ms",
                animationName: "fadeInUp",
              }}
            >
              <div
                className="service-card__bg"
                style={{ backgroundImage: `url(${service_8.src})` }}
              ></div>
              <div className="service-card__content">
                <h3 className="service-card__title">
                  Compare &amp; get <br /> your insuracne in <br /> right way
                </h3>
                <p className="service-card__info">
                  Lorem ipsum dolor sit amet, sed consectetur adipiscing elit.
                </p>
                <a href="contact.html" className="modins-btn">
                  Get a Quote
                  <em style={{ top: "-3.1875px", left: "27px" }}></em>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
