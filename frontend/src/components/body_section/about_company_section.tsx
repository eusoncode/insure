import "../../styles/About-company/HeroSection.css";
import Image from "next/image";
import about_shape_1 from "@/assets/about-shape-1.png";
import about_shape_1_1 from "@/assets/about-shape-1_1.png";
import about_shape_1_2 from "@/assets/about-shape-1_2.png";
import about_shape_1_3 from "@/assets/about-shape-1_3.png";

export default function About_company_section() {
  return (
    <section className="about-one-home" style={{}}>
      
      <div className="about-one-home__shape">
        <Image src={about_shape_1_3} alt="modins" className={""} />
      </div>

      {/* <!-- Feature --> */}
      <section className="feature-one" style={{}}>
        <div className="container-fluid ">
          <div className="row gutter-y-30" style={{}}>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp animated"
              data-wow-delay="100ms"
              style={{
                visibility: "visible",
                animationDelay: "100ms",
                animationName: "fadeInUp",
              }}
            >
              <div className="feature-one__item" style={{}}>
                <div className="feature-one__item__icon" style={{}}>
                  <span className="icon-save-money"></span>
                </div>
                <div className="feature-one__item__content" style={{}}>
                  <h3 className="feature-one__item__title" style={{}}>
                    Safe your money
                  </h3>
                  <p className="feature-one__item__text" style={{}}>
                    Lorem ipsum dolor amet consectetur adipiscing elit do
                    eiusmod tempor <br /> incid idunt ut labore.
                  </p>
                </div>
              </div>
              {/* <!-- feature-item --> */}
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp animated"
              data-wow-delay="100ms"
              style={{
                visibility: "visible",
                animationDelay: "100ms",
                animationName: "fadeInUp",
              }}
            >
              <div className="feature-one__item" style={{}}>
                <div className="feature-one__item__icon" style={{}}>
                  <span className="icon-online-registration" style={{}}></span>
                </div>
                <div className="feature-one__item__content" style={{}}>
                  <h3 className="feature-one__item__title" style={{}}>
                    Get a free quote
                  </h3>
                  <p className="feature-one__item__text" style={{}}>
                    Lorem ipsum dolor amet consectetur adipiscing elit do
                    eiusmod tempor <br /> incid idunt ut labore.
                  </p>
                </div>
              </div>
              {/* <!-- feature-item --> */}
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp animated"
              data-wow-delay="100ms"
              style={{
                visibility: "visible",
                animationDelay: "100ms",
                animationName: "fadeInUp",
              }}
            >
              <div className="feature-one__item" style={{}}>
                <div className="feature-one__item__icon">
                  <span className="icon-guarantee" style={{}}></span>
                </div>
                <div className="feature-one__item__content" style={{}}>
                  <h3 className="feature-one__item__title" style={{}}>
                    Fast &amp; reliable
                  </h3>
                  <p className="feature-one__item__text">
                    Lorem ipsum dolor amet consectetur adipiscing elit do
                    eiusmod tempor <br /> incid idunt ut labore.
                  </p>
                </div>
              </div>
              {/* <!-- feature-item --> */}
            </div>
          </div>
        </div>
      </section>

      {/*<!-- /.container --> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6" style={{}}>
            <div
              className="about-one-home__image wow fadeInLeft animated"
              data-wow-delay="300ms"
              style={{
                visibility: "visible",
                animationDelay: "300ms",
                animationName: "fadeInLeft",
              }}
            >
              <div className="about-one-home__double-image" style={{}}>
                <div className="img-1">
                  <Image src={about_shape_1_1} alt="modins" className={""} />
                </div>
                <div className="img-2">
                  <Image src={about_shape_1_2} alt="modins" className={""} />
                </div>
                <div className="about-one-home__image__arrow">
                  <Image src={about_shape_1_3} alt="modins" className={""} />
                </div>
                <div
                  className="about-one-home__image__counter count-box counted"
                  style={{}}
                >
                  <h3
                    className="about-one-home__image__count count-text"
                    data-stop="30"
                    data-speed="1500"
                    style={{}}
                  >
                    30
                  </h3>
                  <p className="about-one-home__image__text" style={{}}>
                    Years <br />
                    of experience
                  </p>
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
            <div className="about-one-home__content" style={{}}>
              <div className="sec-title" style={{}}>
                <h6 className="sec-title__tagline" style={{}}>
                  About company
                </h6>
                {/*<!-- /.sec-title__tagline --> */}

                <h3 className="sec-title__title" style={{}}>
                  Providing the best insurance policy to customers
                </h3>
                {/*<!-- /.sec-title__title --> */}
              </div>
              {/*<!-- /.sec-title --> */}
              <p className="about-one-home__content__text-two" style={{}}>
                Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod
                tempor incididunt labore dolore magna aliquaenim ad minim. Sed
                risus commodo ornare felis non, eleifend molestie metus pharetra
                eleifend.
              </p>
              <div className="about-one-home__content__wrapper" style={{}}>
                <div style={{}}>
                  <ul className="about-one-home__content__list">
                    <li style={{}}>
                      <span className="fas fa-check-circle"></span>Large number
                      of insurance policies
                    </li>
                    <li style={{}}>
                      <span className="fas fa-check-circle"></span>Experience
                      &amp; qualified agents
                    </li>
                    <li style={{}}>
                      <span className="fas fa-check-circle"></span>Free
                      insurance quotes
                    </li>
                  </ul>
                  <a
                    href="about.html"
                    className="modins-btn modins-btn--base"
                    style={{}}
                  >
                    <span style={{}}>Discover more</span>
                    <em style={{ top: "42.2031px", left: "104.5px" }}></em>
                  </a>
                </div>
                <div className="about-one-home__content__counter-wrapper">
                  <div className="about-one-home__content__counter" style={{}}>
                    <div className="shape-1">
                      <Image src={about_shape_1} alt="modins" className={""} />
                    </div>
                    <div className="about-one-home__content__icon count-box counted">
                      <i className="icon-guarantee"></i>
                      <div className="about-one-home__content__couter__head">
                        <span>+</span>
                        <span
                          className="about-one-home__content__count count-text"
                          data-stop="38"
                          data-speed="1500"
                        >
                          38
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
