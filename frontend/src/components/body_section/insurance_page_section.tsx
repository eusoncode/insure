import Image from "next/image";

// Image assets
import background_image from "@/assets/main-slder-shape-1e.png";
import family_image from "@/assets/main-slder-shape-2e.png";
import arrow_shape from "@/assets/arrow-shape.png";

// Component-specific styles
import "../../styles/HeroSection.css";
import "../../styles/car.css";
import "../../styles/house.css";
import "../../styles/family.css";
import "../../styles/right-arrow.css";
import "../../styles/left-arrow.css";

import { CarFront } from "lucide-react";

// Main Hero Section Component
export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background image applied using inline style */}
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${background_image.src})` }}
      >
        <div className="slider-wrap">
          {/* Top-left navigation arrows */}
          <div className="social-icons">
            <span className="icon-box_2">
              <i className="icon-arrow-left2"></i>
            </span>
            <span className="icon-box_2">
              <i className="icon-arrow-right2"></i>
            </span>
          </div>

          {/* Central slider content: title, subtitle, and button */}
          <div className="slider-content">
            {/* Decorative arrow shape next to the title */}
            <div className="shape-icon">
              <Image src={arrow_shape} alt="arrow shape" />
            </div>

            {/* Hero heading */}
            <h2 className="slider-title">
              Insurance for <br /> the better <br /> family life.
            </h2>

            {/* Supporting paragraph */}
            <p className="slider-info">
              Phasellus condimentum laoreet turpis, ut tincid sodales <br />
              in. Integer leo arcu, mollis sit amet tempor.
            </p>

            {/* CTA Button */}
            <div className="slider-button">
              <a href="services.html" className="primary-btn">
                <span>Let’s Get Started</span>
              </a>
            </div>
          </div>

          {/* Bottom-right social-style icons: family, car, home */}
          <div className="social-icons">
            <span className="icon-box">
              <i className="icon-family_restroom"></i>
            </span>
            <span className="icon-box">
              <CarFront />
            </span>
            <span className="icon-box">
              <i className="icon-home-outline"></i>
            </span>
          </div>
        </div>
      </div>

      {/* Right-side decorative image of a family */}
      <div>
        <Image src={family_image} alt="family" width={1050} height={1050} />
      </div>
    </section>
  );
}
