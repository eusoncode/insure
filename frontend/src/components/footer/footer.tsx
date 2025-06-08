import CustomLink from "@/lib/Helper_function/links";
import Image from "next/image";
import logo from "@/assets/logo-light.png";
import { CgInstagram } from "react-icons/cg";

export default function Footer() {

  // Instagram images
  const instaImage = [
    {
      id: 1,
      image: "/footer/instagram_images/footer-gl-1.jpg",
    },
    {
      id: 2,
      image: "/footer/instagram_images/footer-gl-2.jpg",
    },
    {
      id: 3,
      image: "/footer/instagram_images/footer-gl-3.jpg",
    },
    {
      id: 4,
      image: "/footer/instagram_images/footer-gl-4.jpg",
    },
    {
      id: 5,
      image: "/footer/instagram_images/footer-gl-5.jpg",
    },
    {
      id: 6,
      image: "/footer/instagram_images/footer-gl-6.jpg",
    },
  ];

  return (
    <footer className="flex justify-center align-center min-h-140 bg-custom-blue text-white">
      <div className="flex flex-col justify-between mt-24  mx-90">
        {/* Footer box for further inqury */}
        <div className="flex flex-row mt-16 space-x-8 justify-between items-start">
          {/* Logo and socials */}
          <div className="flex flex-col max-w justify-start items-start">
            {/* Logo */}
            <div>
              <CustomLink href="/home" className="flex mb-4">
                <Image src={logo} alt="logo" priority width={155} />
              </CustomLink>
            </div>
            <h3 className="flex flex-wrap font-sans font-semibold text-lg">
              Insurance that reflects the way <br /> you live your life.
            </h3>
            {/* Social Icons */}
            <div className="flex items-center mt-4 space-x-4">
              <a
                href="https://twitter.com"
                className="flex justify-center items-center text-[14px] w-[40px] h-[40px] text-white bg-custom-dark-dol-blue rounded-full transition duration-300 hover:bg-base-didi hover:text-white no-underline"
              >
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </a>
              <a
                href="https://facebook.com"
                className="flex justify-center items-center text-[14px] w-[40px] h-[40px] text-white bg-custom-dark-dol-blue rounded-full transition duration-300 hover:bg-base-didi hover:text-white no-underline"
              >
                <i className="fab fa-facebook" aria-hidden="true"></i>
              </a>
              <a
                href="https://pinterest.com"
                className="flex justify-center items-center text-[14px] w-[40px] h-[40px] text-white bg-custom-dark-dol-blue rounded-full transition duration-300 hover:bg-base-didi hover:text-white no-underline"
              >
                <i className="fab fa-pinterest-p" aria-hidden="true"></i>
              </a>
              <a
                href="https://instagram.com"
                className="flex justify-center items-center text-[14px] w-[40px] h-[40px] text-white bg-custom-dark-dol-blue rounded-full transition duration-300 hover:bg-base-didi hover:text-white no-underline"
              >
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col justify-start items-start space-y-6">
            <h2 className="flex flex-row space-x-4 justify-center items-center font-bold text-[20px] leading-[24px]">
              <p>Contact</p>
              <div className="border-2 border-base-didi w-6 rounded-2xl"></div>
            </h2>
            <p className="font-sans text-insure-text-dark">
              88 Broklyn Golden Road Street, <br /> New York. USA
            </p>
            <div className="flex flex-col mt-6 justify-center items-start space-y-2">
              <div className="flex flex-row items-center space-x-4">
                <i className="fas fa-phone text-base-didi"></i>
                <i>+ 92 ( 8800 ) - 6930</i>
              </div>
              <div className="flex flex-row items-center space-x-4">
                <i className="fas fa-envelope text-base-didi"></i>
                <i>needhelp@company.com</i>
              </div>
            </div>
          </div>

          {/* Instagram */}
          <div className="flex flex-col justify-start items-start space-y-6 max-w-100 pr-8">
            <h2 className="flex flex-row space-x-4 justify-center items-center font-bold text-[20px] leading-[24px]">
              <p>Instagram</p>
              <div className="border-2 border-base-didi w-6 rounded-2xl"></div>
            </h2>
            <ul className="grid grid-cols-3 gap-x-8 w-full space-x-2 mt-2 space-y-2">
              {instaImage.map((item) => (
                <li
                  key={item.id}
                  className="
                  group relative h-20 w-20 overflow-clip rounded-sm bg-cover bg-center cursor-pointer
                  before:absolute before:content-[''] before:inset-0 before:bg-[#00CDE5] before:opacity-0 
                  before:translate-y-[-100%] before:transition-all before:duration-500 before:ease-in-out before:z-10
                  hover:before:opacity-50 hover:before:translate-y-0"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <span
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform 
                    scale-0 opacity-0 transition-all duration-500 ease-in-out z-20 font-bold text-xl text-white
                    group-hover:opacity-100 group-hover:scale-100"
                  >
                    <CgInstagram />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col justify-start items-start space-y-6">
            <h2 className="flex flex-row space-x-4 justify-center items-center font-bold text-[20px] leading-[24px]">
              <p>Newletter</p>
              <div className="border-2 border-base-didi w-6 rounded-2xl"></div>
            </h2>
            <p className="font-sans text-insure-text-dark">
              Subscribe our newsletter to get <br /> our latest update & news.
            </p>
            <form action="#" method="POST" className="mt-6 flex">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="flex justify-center items-center pl-4 pr-2 bg-white font-bold text-black"
              />
              <button type="submit" className="px-1 py-3 bg-base-didi">
                <span className="px-4 fas fa-paper-plane"></span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer sticks to bottom */}
        <div className="border-2 border-transparent bg-custom-darker-blue py-10 mb-10 mt-22">
          <p className="font-sans font-medium text-[15px] leading-[23px] text-insure-text-dark text-center">
            &copy; Copyright 2025 by Insure. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
