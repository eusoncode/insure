import CustomLink from "@/lib/Helper_function/links";
import Image from "next/image";
import logo from "@/assets/logo-light.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Navigation() {
  return (
    <section className="flex flex-col">
      {/* First Navigation bar*/}
      <div className="flex flex-col md:flex-row justify-between items-center py-1 px-6 bg-base-didi w-full bg-header-pattern">
        {/* Left Info Section */}
        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8 pl-8">
          <li className="flex items-center text-[15px] space-x-2 font-medium text-white transition-colors duration-500 hover:text-[#2b2b5e]">
            <i className="fas fa-map-marker-alt text-white text-[15px] mr-2"></i>
            <a href="#" className="font-bold no-underline hover:underline">
              30 Commercial Road Fratton, Australia
            </a>
          </li>
          <li className="flex items-center text-[15px] space-x-2 font-medium text-white transition-colors duration-500 hover:text-[#2b2b5e]">
            <i className="fas fa-envelope text-white text-[15px] mr-2"></i>
            <a
              href="mailto:needhelp@company.com"
              className="font-bold no-underline hover:underline"
            >
              needhelp@company.com
            </a>
          </li>
        </ul>

        {/* Right Menu and Social Icons */}
        <div className="flex flex-col md:flex-row items-center gap-6 mt-4 md:mt-0">
          {/* Menu */}
          <ul className="flex items-center list-none space-x-[35px]">
            <li>
              <a
                href="#"
                className="text-[15px] font-bold text-white no-underline transition-colors duration-500 hover:text-[#2b2b5e] hover:underline"
              >
                Make a Claim
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[15px] font-bold text-white no-underline transition-colors duration-500 hover:text-[#2b2b5e] hover:underline"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[15px] font-bold text-white no-underline transition-colors duration-500 hover:text-[#2b2b5e] hover:underline"
              >
                About
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center px-[60px] py-[10px] bg-cyan-400/50">
            <a
              href="https://twitter.com"
              className="text-white text-[14px] transition-colors duration-500 hover:text-black"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://facebook.com"
              className="ml-5 text-white text-[14px] transition-colors duration-500 hover:text-black"
            >
              <i className="fab fa-facebook" aria-hidden="true"></i>
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://pinterest.com"
              className="ml-5 text-white text-[14px] transition-colors duration-500 hover:text-black"
            >
              <i className="fab fa-pinterest-p" aria-hidden="true"></i>
              <span className="sr-only">Pinterest</span>
            </a>
            <a
              href="https://instagram.com"
              className="ml-5 text-white text-[14px] transition-colors duration-500 hover:text-black"
            >
              <i className="fab fa-instagram" aria-hidden="true"></i>
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Second Navigation bar*/}
      <div className="flex flex-row justify-between items-center pr-6 border-2 border-green-600">
        {/* Logo */}
        <div>
          <CustomLink
            href="/home"
            className="flex max-w-3xs p-8 max-h-screen bg-custom-blue border-2 border-green-600"
          >
            <Image src={logo} alt="logo" priority width={700} />
          </CustomLink>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 border-2 border-green-600">
          <nav className="flex items-center gap-8">
            <CustomLink href="/home">Home</CustomLink>
            <CustomLink href="/about">About</CustomLink>
            <CustomLink href="/pages">Pages</CustomLink>
            <CustomLink href="/insurance">Insurance</CustomLink>
            <CustomLink href="/portfolio">Portfolio</CustomLink>
            <CustomLink href="/news">News</CustomLink>
            <CustomLink href="/contact">Contact</CustomLink>
          </nav>
        </div>

        <div className="flex flex-row justify-between items-center gap-20 border-2 border-green-600">
          {/* Search button */}
          <div className="border-2 border-green-600">
            <button className="px-4 py-1 text-sm">
              |<span className="px-2">Search</span>
            </button>
          </div>

          {/* Quote */}
          <div className="border-2 border-green-600">
            <button className="px-4 py-1 text-sm">Get a Quote</button>
          </div>
        </div>

        {/* Search button */}
        <div className="border-2 border-green-600">
          <div className="flex flex-row gap-2 py-1 px-2 text-sm">
            <button>Call Image</button>
            <div className="flex flex-col items-center">
              <p>Call experts</p>
              <span>+92(003)68-0900</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
