import "../../styles/About-company/HeroSection.css";
import Image from "next/image";
import about_shape_1 from "@/assets/about_shape_1.png";
import about_shape_1_1 from "@/assets/about_shape_1_1.png";
import about_shape_1_2 from "@/assets/about_shape_1_2.png";
import about_shape_1_3 from "@/assets/about_shape_1_3.png";
import about_shape_1_4 from "@/assets/about_shape_1_4.png";
import { FileText, HandCoins, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

const iconSize = 50;

const data = [
  {
    icon: <HandCoins size={iconSize} />,
    title: "Safe Money",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus omnis optio neque"
  },
  {
    icon: <FileText size={iconSize} />,
    title: "Get a free quote",
    description:
      "Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod tempor incid idunt ut labore",
  },
  {
    icon: <ShieldCheck size={iconSize} />,
    title: "Fast & Reliable",
    description:
      "Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod tempor incid idunt ut labore",
  },
];

export default function About_company_section() {
  const [awardCount, setAwardCount] = useState(0); // for 38
  const [experienceCount, setExperienceCount] = useState(0); // for 30

  useEffect(() => {
    // Award Counter: 0 → 38
    let awardStart = 0;
    const awardTarget = 38;
    const awardDuration = 3500;
    const awardStep = Math.floor(awardDuration / awardTarget);

    const awardInterval = setInterval(() => {
      awardStart += 1;
      setAwardCount(awardStart);
      if (awardStart >= awardTarget) clearInterval(awardInterval);
    }, awardStep);

    // Experience Counter: 0 → 30
    let expStart = 0;
    const expTarget = 30;
    const expDuration = 4500;
    const expStep = Math.floor(expDuration / expTarget);

    const expInterval = setInterval(() => {
      expStart += 1;
      setExperienceCount(expStart);
      if (expStart >= expTarget) clearInterval(expInterval);
    }, expStep);

    // Cleanup both intervals
    return () => {
      clearInterval(awardInterval);
      clearInterval(expInterval);
    };
  }, []);

  return (
    <section className="about-one-home">
      <div className="about-one-home__shape absolute right-0 top-0">
        <Image src={about_shape_1_4} alt="modins" className="img" />
      </div>

      {/* <!-- Feature --> */}
      <section className="feature-one">
        <div className="container-fluid ">
          <div className="flex flex-row gap-8">
            {data.map((item) => (
              <div className="flex shadow-md">
                <div className="bg-gradient-to-t from-[#00cde5] to-[#252554] text-white flex items-center justify-center p-8">
                  {item.icon}
                </div>
                <div className="flex flex-col space-y-3 bg-white p-5">
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*<!-- /.container --> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="about-one-home__image wow fadeInLeft animated"
              data-wow-delay="300ms"
              style={{
                visibility: "visible",
                animationDelay: "300ms",
                animationName: "fadeInLeft",
              }}
            >
              <div className="about-one-home__double-image">
                <div className="img-1 left-30">
                  <Image src={about_shape_1_1} alt="modins" className={""} />
                </div>
                <div className="img-2 top-72">
                  <Image src={about_shape_1_2} alt="modins" className={""} />
                </div>
                <div className="about-one-home__image__arrow">
                  <Image src={about_shape_1_3} alt="modins" className={""} />
                </div>
                <div className="about-one-home__image__counter count-box counted">
                  {/* <h3
                    className="about-one-home__image__count count-text"
                    data-stop="30"
                    data-speed="1500"
                  >
                    30
                  </h3> */}
                  <h3 className="about-one-home__image__count count-text">
                    {experienceCount}
                  </h3>
                  <span className="about-one-home__image__text">
                    Years <br /> of experience
                  </span>
                </div>
              </div>
            </div>
            {/*<!-- /.why-choose-two__image --> */}
          </div>
          {/* <!-- /.col-lg-6 --> */}
          <div
            className="col-lg-6 wow fadeInRight animated"
            data-wow-delay="300ms"
            style={{
              visibility: "visible",
              animationDelay: "300ms",
              animationName: "fadeInRight",
            }}
          >
            <div className="about-one-home__content max-w-xl">
              <div className="sec-title">
                <h6 className="sec-title__tagline">About company</h6>
                {/*<!-- /.sec-title__tagline --> */}

                <h3 className="sec-title__title">
                  Providing the best insurance <br /> policy to customers
                </h3>
                {/*<!-- /.sec-title__title --> */}
              </div>
              {/*<!-- /.sec-title --> */}
              <p className="about-one-home__content__text-two">
                Lorem ipsum dolor sit amet consectur adipiscing <br /> elit sed
                eiusmod tempor incididunt labore dolore magna aliquaenim ad
                minim. Sed risus commodo ornare felis non, eleifend molestie
                metus pharetra eleifend.
              </p>
              <div className="about-one-home__content__wrapper">
                <div>
                  <ul className="about-one-home__content__list">
                    <li>
                      <span className="fas fa-check-circle"></span>Large number
                      of insurance policies
                    </li>
                    <li>
                      <span className="fas fa-check-circle"></span>Experience
                      &amp; qualified agents
                    </li>
                    <li>
                      <span className="fas fa-check-circle"></span>Free
                      insurance quotes
                    </li>
                  </ul>
                  <a href="about.html" className="modins-btn modins-btn--base">
                    <span>Discover more</span>
                    <em style={{ top: "42.2031px", left: "104.5px" }}></em>
                  </a>
                </div>
                <div className="w-3xs absolute bottom-0.5 left-78">
                  <div className="about-one-home__content__counter">
                    <div className="shape-1">
                      <Image src={about_shape_1} alt="modins" />
                    </div>
                    <div className="about-one-home__content__icon count-box counted">
                      <ShieldCheck size={iconSize} />
                      {/* <div className="about-one-home__content__couter__head">
                        <span>+</span>
                        <span
                          className="about-one-home__content__count count-text"
                          data-stop="38"
                          data-speed="1500"
                        >
                          38
                        </span>
                      </div> */}
                      <div className="about-one-home__content__couter__head">
                        <span>+</span>
                        <span className="about-one-home__content__count count-text">
                          {awardCount}
                        </span>
                      </div>
                    </div>
                    <p className="about-one-home__content__text">
                      Wonderful awards
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /.why-choose-two__content --> */}
          </div>
          {/* <!-- /.col-lg-6 --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
    </section>
  );
}
