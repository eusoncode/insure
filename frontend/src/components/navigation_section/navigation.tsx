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
      <div className="flex flex-row justify-between items-center relative pr-6 border-2 border-green-600">
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
          <nav className="ml-0 mr-0 hidden md:flex">
            <ul className="flex items-center list-none m-0 p-0">
              {/* <!-- Home with Mega Menu --> */}
              <li className="relative pt-9 pb-9">
                <a
                  href="index.html"
                  className="flex items-center text-gray-500 font-medium text-[16px] transition-all hover:text-base-didi"
                >
                  Home
                </a>
                <ul className="absolute top-full left-0 right-0 z-[99] opacity-0 invisible transform scale-y-0 transition-all duration-500 bg-white p-4 shadow-xl">
                  <li className="p-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="bg-white text-center shadow-md transition-transform hover:-translate-y-2">
                        <div className="relative overflow-hidden">
                          <img
                            src="/assets/images/home-showcase/home-showcase-1.jpg"
                            alt=""
                            className="w-full transition duration-500 hover:blur-sm"
                          />
                          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-2 opacity-0 transform scale-y-0 transition-all">
                            <a href="index.html" className="bg-base-didi text-white text-sm font-bold px-6 py-2">Multi Page</a>
                            <a href="index-one-page.html" className="bg-base-didi text-white text-sm font-bold px-6 py-2">One Page</a>
                          </div>
                        </div>
                        <h3 className="text-custom-blue text-sm font-medium mt-4 pb-4">
                          <a href="index.html" className="transition-all hover:underline">Home Page 01</a>
                        </h3>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>

              {/* <!-- About --> */}
              <li className="ml-[61px] pt-9 pb-9 relative">
                <a
                  href="about.html"
                  className="flex items-center text-gray-500 font-medium text-[16px] transition-all hover:text-base-didi"
                >
                  About
                </a>
              </li>

              {/* <!-- Pages Dropdown --> */}
              <li className="ml-[61px] pt-9 pb-9 relative">
                <a href="#" className="flex items-center text-gray-500 font-medium text-[16px] transition-all hover:text-base-didi">Pages</a>
                <ul className="absolute top-full left-[-25px] z-50 bg-white shadow-xl p-4 w-[270px] flex flex-col opacity-0 invisible transform scale-y-0 transition-all">
                  <li><a href="team.html" className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all">Team</a></li>
                  <li><a href="faq.html" className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all">FAQs</a></li>
                  <li><a href="login.html" className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all">Login</a></li>
                </ul>
              </li>

              {/* <!-- Insurance Dropdown --> */}
              <li className="ml-[61px] pt-9 pb-9 relative">
                <a href="#" className="flex items-center text-gray-500 font-medium text-[16px] transition-all hover:text-base-didi">Insurance</a>
                <ul className="absolute top-full left-[-25px] z-50 bg-white shadow-xl p-4 w-[270px] flex flex-col opacity-0 invisible transform scale-y-0 transition-all">
                  <li><a href="insurance.html" className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all">Insurance</a></li>
                  <li><a href="car-insurance.html" className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all">Car insurance</a></li>
                  <li><a href="life-insurance.html" className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all">Life insurance</a></li>
                  <li><a href="health-insurance.html" className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all">Health insurance</a></li>
                </ul>
              </li>

              {/* <!-- Portfolio Dropdown --> */}
              <li className="ml-[61px] pt-9 pb-9 relative">
                <a href="#" className="flex items-center text-gray-500 font-medium text-[16px] transition-all hover:text-base-didi">Portfolio</a>
                <ul className="absolute top-full left-[-25px] z-50 bg-white shadow-xl p-4 w-[270px] flex flex-col opacity-0 invisible transform scale-y-0 transition-all">
                  <li><a href="portfolio.html" className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all">Portfolio</a></li>
                  <li><a href="portfolio-carousel.html" className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all">Portfolio Carousel</a></li>
                  <li><a href="portfolio-details.html" className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all">Portfolio Details</a></li>
                </ul>
              </li>

              {/* <!-- News Dropdown --> */}
              <li className="ml-[61px] pt-9 pb-9 relative">
                <a href="#" className="flex items-center text-gray-500 font-medium text-[16px] transition-all hover:text-base-didi">News</a>
                <ul className="absolute top-full left-[-25px] z-50 bg-white shadow-xl p-4 w-[270px] flex flex-col opacity-0 invisible transform scale-y-0 transition-all">
                  <li><a href="blog-grid.html" className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all">News Grid</a></li>
                  <li><a href="blog-carousel.html" className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all">News Carousel</a></li>
                  <li><a href="blog-details.html" className="block px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all">News Details</a></li>
                </ul>
              </li>

              {/* <!-- Contact --> */}
              <li className="ml-[61px] pt-9 pb-9 relative">
                <a href="contact.html" className="flex items-center text-gray-500 font-medium text-[16px] transition-all hover:text-base-didi">Contact</a>
              </li>
            </ul>
          </nav>

        </div>

        <div className="flex flex-row justify-between items-center gap-20 border-2 border-green-600">
          {/* Search button */}
          <a
            href="#"
            className="hidden md:flex items-center text-[24px] text-custom-blue px-5 ml-10 mr-7 border-l border-gray-300"
          >
            <i className="icon-magnifying-glass"></i>
            <span className="sr-only">Search</span>
          </a>

          {/* Quote */}
          <a
            href="contact.html"
            className="hidden md:inline-block bg-custom-blue text-white font-bold px-6 py-4 relative"
          >
            Get a Quote
            <em
              className="absolute w-0 h-0 bg-base-didi rounded-full transition-all z-[-1]"
              style={{ top: "12px", left: "34px" }}
            ></em>
          </a>
        </div>

        {/* Search button */}
        <a
          href="tel:+92(003)68-0900"
          className="hidden md:flex items-center  border-2 border-green-600"
        >
          <i className="icon-calling w-[50px] h-[50px] text-[25px] flex items-center justify-center border border-gray-300 rounded-full text-custom-blue mr-2 transition-all"></i>
          <span className="text-sm font-medium text-gray-500 leading-tight">
            Call experts
            <br />
            <b className="text-[16px] text-custom-blue inline-block mt-1 hover:underline transition-all">
              +92 (003) 68-0900
            </b>
          </span>
        </a>
      </div>
    </section>
  );
}
