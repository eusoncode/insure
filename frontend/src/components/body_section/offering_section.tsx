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
// import service_featured from "@/assets/offering/service-featured.png";
import service_featured from "@/assets/offering/service-8.png";
import { CarFront } from "lucide-react";
// import service_8 from "@/assets/offering/service-8.png";

export default function Offering_section() {

  const iconSize = 35;

  return (
    <section
      className="service-one service-home-one pt-120 pb-120  border border-red-500"
      style={{ backgroundImage: `url(${insurance_bg_1.src})` }}
    >
      <div className="container border border-blue-500">
        <div className="sec-title">
          <div className="flex flex-row gap-4 justify-center items-center">
            <h6 className="sec-title__tagline">what we’re offering</h6>
            <div className="border-2 border-base-didi w-5 rounded-2xl"></div>
          </div>
          <h3 className="sec-title__title">
            We’re giving all the insurance <br /> services to you
          </h3>
        </div>
        <div className="row gutter-y-30 border border-green-500">
          <div className="col-md-6 col-lg-3 border-2 border-purple-500">
            <div
              className="service-card wow fadeInUp animated border-2 border-orange-500"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
              style={{
                visibility: "visible",
                animationDuration: "1500ms",
                animationDelay: "0ms",
                animationName: "fadeInUp",
              }}
            >
              <div className="service-card__image border-2 border-b-blue-700">
                <Image src={service_1} alt="Car insurance" />
                <div className="service-card__icon">
                  {/* <i className="icon-car-1"></i> */}
                  <CarFront size={iconSize} className="m-auto" />
                </div>
              </div>
              <div className="service-card__content">
                <h3 className="service-card__title">
                  <a href="car-insurance.html">Car insurance</a>
                </h3>
                <p className="service-card__info">
                  Lorem ipsum dolor sit amet, sed consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div
              className="service-card wow fadeInUp animated"
              data-wow-duration="1500ms"
              data-wow-delay="1ms"
              style={{
                visibility: "visible",
                animationDuration: "1500ms",
                animationDelay: "1ms",
                animationName: "fadeInUp",
              }}
            >
              <div className="service-card__image">
                <Image
                  src={service_2}
                  alt="Life insurance"
                  width={300}
                  height={200}
                />
                <div className="service-card__icon">
                  <i className="icon-cardiogram"></i>
                </div>
              </div>
              <div className="service-card__content">
                <h3 className="service-card__title">
                  <a href="@@link">Life insurance</a>
                </h3>
                <p className="service-card__info">
                  Lorem ipsum dolor sit amet, sed consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div
              className="service-card wow fadeInUp animated"
              data-wow-duration="1500ms"
              data-wow-delay="3ms"
              style={{
                visibility: "visible",
                animationDuration: "1500ms",
                animationDelay: "3ms",
                animationName: "fadeInUp",
              }}
            >
              <div className="service-card__image">
                <Image
                  src={service_3}
                  alt="Home insurance"
                  width={300}
                  height={200}
                />
                <div className="service-card__icon">
                  <i className="icon-home"></i>
                </div>
              </div>
              <div className="service-card__content">
                <h3 className="service-card__title">
                  <a href="@@link">Home insurance</a>
                </h3>
                <p className="service-card__info">
                  Lorem ipsum dolor sit amet, sed consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div
              className="service-card wow fadeInUp animated"
              data-wow-duration="1500ms"
              data-wow-delay="4ms"
              style={{
                visibility: "visible",
                animationDuration: "1500ms",
                animationDelay: "4ms",
                animationName: "fadeInUp",
              }}
            >
              <div className="service-card__image">
                <Image
                  src={service_4}
                  alt="Health insurance"
                  width={300}
                  height={200}
                />
                <div className="service-card__icon">
                  <i className="icon-cross"></i>
                </div>
              </div>
              <div className="service-card__content">
                <h3 className="service-card__title">
                  <a href="@@link">Health insurance</a>
                </h3>
                <p className="service-card__info">
                  Lorem ipsum dolor sit amet, sed consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div
              className="service-card wow fadeInUp animated"
              data-wow-duration="1500ms"
              data-wow-delay="5ms"
              style={{
                visibility: "visible",
                animationDuration: "1500ms",
                animationDelay: "5ms",
                animationName: "fadeInUp",
              }}
            >
              <div className="service-card__image">
                <Image
                  src={service_5}
                  alt="Business insurance"
                  width={300}
                  height={200}
                />
                <div className="service-card__icon">
                  <i className="icon-suitcase"></i>
                </div>
              </div>
              <div className="service-card__content">
                <h3 className="service-card__title">
                  <a href="@@link">Business insurance</a>
                </h3>
                <p className="service-card__info">
                  Lorem ipsum dolor sit amet, sed consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div
              className="service-card wow fadeInUp animated"
              data-wow-duration="1500ms"
              data-wow-delay="6ms"
              style={{
                visibility: "visible",
                animationDuration: "1500ms",
                animationDelay: "6ms",
                animationName: "fadeInUp",
              }}
            >
              <div className="service-card__image">
                <Image
                  src={service_6}
                  alt="Fire insurance"
                  width={300}
                  height={200}
                />
                <div className="service-card__icon">
                  <i className="icon-fire"></i>
                </div>
              </div>
              <div className="service-card__content">
                <h3 className="service-card__title">
                  <a href="@@link">Fire insurance</a>
                </h3>
                <p className="service-card__info">
                  Lorem ipsum dolor sit amet, sed consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div
              className="service-card wow fadeInUp animated"
              data-wow-duration="1500ms"
              data-wow-delay="7ms"
              style={{
                visibility: "visible",
                animationDuration: "1500ms",
                animationDelay: "7ms",
                animationName: "fadeInUp",
              }}
            >
              <div className="service-card__image">
                <Image
                  src={service_7}
                  alt="Marriage insurance"
                  width={300}
                  height={200}
                />
                <div className="service-card__icon">
                  <i className="icon-wedding-rings"></i>
                </div>
              </div>
              <div className="service-card__content">
                <h3 className="service-card__title">
                  <a href="@@link">Marriage insurance</a>
                </h3>
                <p className="service-card__info">
                  Lorem ipsum dolor sit amet, sed consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div
              className="service-card service-featured wow fadeInUp animated"
              data-wow-duration="1500ms"
              data-wow-delay="8ms"
              style={{
                visibility: "visible",
                animationDuration: "1500ms",
                animationDelay: "8ms",
                animationName: "fadeInUp",
              }}
            >
              <div
                className="service-card__bg"
                style={{
                  backgroundImage: `url(${service_featured.src})`,
                }}
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
