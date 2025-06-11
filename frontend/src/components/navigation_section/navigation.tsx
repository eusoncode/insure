import CustomLink from "@/lib/Helper_function/links";
import Image from "next/image";
import logo from "@/assets/logo-light.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import phone_wave2 from "@/assets/phone-wave2.png";
import search_icon from "@/assets/search_icon.png";
import homeshow_1 from '@/assets/home-showcase-1.jpg';
import homeshow_2 from "@/assets/home-showcase-2.jpg";
import homeshow_3 from "@/assets/home-showcase-2.jpg";
import homeshow_4 from "@/assets/home-showcase-4.jpg";


export default function Navigation() {
  const topInfoLinks = [
    {
      iconClass: "fas fa-map-marker-alt",
      text: "30 Commercial Road Fratton, Australia",
      href: "#",
    },
    {
      iconClass: "fas fa-envelope",
      text: "needhelp@company.com",
      href: "mailto:needhelp@company.com",
    },
  ];

  const socialIcons = [
    {
      icon: "fab fa-twitter transition-all duration-500 hover:text-[#2B2B5E]",
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: "fab fa-facebook transition-all duration-500 hover:text-[#2B2B5E]",
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: "fab fa-pinterest-p transition-all duration-500 hover:text-[#2B2B5E]",
      href: "https://pinterest.com",
      label: "Pinterest",
    },
    {
      icon: "fab fa-instagram transition-all duration-500 hover:text-[#2B2B5E]",
      href: "https://instagram.com",
      label: "Instagram",
    },
  ];

  const homeCards = [
    {
      img: homeshow_1,
      title: "Home Page 01",
      links: [
        { text: "Multi Page", href: "index.html" },
        { text: "One Page", href: "index-one-page.html" },
      ],
    },
    {
      img: homeshow_2,
      title: "Home Page 02",
      links: [
        { text: "Multi Page", href: "index.html" },
        { text: "One Page", href: "index-one-page.html" },
      ],
    },
    {
      img: homeshow_3,
      title: "Home Page 03",
      links: [
        { text: "Multi Page", href: "index.html" },
        { text: "One Page", href: "index-one-page.html" },
      ],
    },
    {
      img: homeshow_4,
      title: "Home Box",
      links: [{ text: "View Page", href: "index-boxed.html" }],
    },
  ];

  const navBarLinks = [
    { label: "Make a Claim", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "About", href: "#" },
  ];
  


  return (
    <section className="flex flex-col">
      {/* First Navigation bar*/}
      <div className="flex flex-col md:flex-row justify-between items-center py-1 px-6 bg-base-didi w-full bg-header-pattern">
        {/* Left Info Section */}
        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8 pl-8">
          {topInfoLinks.map((item, index) => (
            <li
              key={index}
              className="flex items-center text-[15px] space-x-2 font-medium text-white transition-colors duration-500 hover:text-[#2b2b5e]"
            >
              <i className={`${item.iconClass} text-white text-[15px] mr-2`} />
              <a href={item.href}>
                <p
                  className="relative text-white transition-all duration-500 text-[15px] font-bold
                    bg-no-repeat bg-[length:0_1px] bg-[0_calc(100%-1px)] bg-[linear-gradient(to_right,currentColor_0%,currentColor_100%)] 
                    hover:bg-[length:100%_1px] hover:text-[#2B2B5E]"
                >
                  {item.text}
                </p>
              </a>
            </li>
          ))}
        </ul>

        {/* Right Menu and Social Icons */}
        <div className="flex flex-col md:flex-row items-center gap-6 mt-4 md:mt-0">
          {/* Menu */}
          <ul className="flex items-center list-none space-x-[35px]">
            {navBarLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>
                  <p
                    className="relative text-white transition-all duration-500 text-[15px] font-bold
                    bg-no-repeat bg-[length:0_1px] bg-[0_calc(100%-1px)] bg-[linear-gradient(to_right,currentColor_0%,currentColor_100%)] 
                    hover:bg-[length:100%_1px] hover:text-[#2B2B5E]"
                  >
                    {link.label}
                  </p>
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4 px-[40px] py-[10px] bg-[#00CDE5] bg-header-pattern text-white">
            {socialIcons.map((social, index) => (
              <a key={index} href={social.href}>
                <i className={social.icon} aria-hidden="true"></i>
                <p className="sr-only">{social.label}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Second Navigation bar*/}
      <div className="flex flex-row justify-between items-center relative pr-6">
        {/* Logo */}
        <div className="flex justify-center items-center w-65 h-28 bg-custom-blue">
          <CustomLink href="#">
            <Image src={logo} alt="logo" priority width={140} />
          </CustomLink>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 ml-60">
          <nav className="ml-0 mr-0 hidden md:flex">
            {/**------- refactor**/}
            <ul className="flex items-center list-none m-0 p-0">
              {/* <!-- Home with Mega Menu --> */}
              <li className="group relative ml-[61px] pt-9 pb-9">
                <a
                  href="index.html"
                  className="flex items-center text-gray-500 font-medium text-[16px] transition-all duration-500"
                >
                  <p className="group-hover:text-[#00CDE5]">Home</p>
                </a>
                <ul className="flex items-center absolute overflow-hidden top-full left-[-200px] right-auto z-50 bg-white shadow-xl min-w-287 gap-10 opacity-0 invisible scale-y-0 origin-top transition-all duration-800 group-hover:opacity-100 group-hover:visible group-hover:scale-y-100">
                  {homeCards.map((card, index) => (
                    <li
                      key={index}
                      className={`group/card${
                        index + 1
                      } bg-white text-center ml-10 mt-10 mb-4 w-60 h-85 transition-transform hover:-translate-y-2 overflow-hidden`}
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={card.img}
                          alt={card.title}
                          className={`w-full h-full transition duration-500 group-hover/card${
                            index + 1
                          }:blur-[1px]`}
                        />
                        <div
                          className={`absolute inset-0 py-2 bg-black/70 flex flex-col items-center justify-center gap-6 opacity-0 translate-y-0 transition-all duration-[500ms] ease-out group-hover/card${
                            index + 1
                          }:opacity-100 group-hover/card${
                            index + 1
                          }:translate-y-0 group-hover/card${index + 1}:ease-in`}
                        >
                          {card.links.map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={link.href}
                              className="bg-base-didi text-white text-sm font-bold px-6 py-2 rounded"
                            >
                              {link.text}
                            </a>
                          ))}
                        </div>
                      </div>
                      <h3 className="text-custom-blue text-sm font-medium mt-4 pb-4">
                        <a
                          href={card.links[0].href}
                          className="transition-all hover:underline"
                        >
                          {card.title}
                        </a>
                      </h3>
                    </li>
                  ))}
                </ul>
              </li>

              {/* About*/}
              <li className="ml-[61px] pt-9 pb-9 relative">
                <a
                  href="about.html"
                  className="flex items-center text-gray-500 font-medium text-[16px] transition-all duration-500"
                >
                  <p className="hover:text-[#00CDE5]">About</p>
                </a>
              </li>

              {/* Pages Dropdown*/}
              <li className="group ml-[61px] pt-9 pb-9 relative">
                <a
                  href="#"
                  className="flex items-center text-gray-500 font-medium text-[16px] transition-all"
                >
                  <p className="group-hover:text-[#00CDE5]">Pages</p>
                </a>
                <ul className="absolute top-full left-[-25px] space-y-2 z-50 bg-white shadow-xl p-4 w-[270px] flex flex-col opacity-0 invisible scale-y-0 transform origin-top transition-all duration-500 group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:scale-y-100">
                  <li className="relative group/pages">
                    <a
                      href="team.html"
                      className="flex justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all"
                    >
                      Team
                      <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/pages:opacity-100 group-hover/pages:visible group-hover/pages:scale-y-100"></div>
                    </a>
                  </li>
                  <li className="relative group/pages">
                    <a
                      href="login.html"
                      className="flex justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all"
                    >
                      Team Carousel
                      <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/pages:opacity-100 group-hover/pages:visible group-hover/pages:scale-y-100"></div>
                    </a>
                  </li>
                  <li className="relative group/pages">
                    <a
                      href="team.html"
                      className="flex flex-row justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all"
                    >
                      Testimonal
                      <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/pages:opacity-100 group-hover/pages:visible group-hover/pages:scale-y-100"></div>
                    </a>
                  </li>
                  <li className="relative group/pages">
                    <a
                      href="faq.html"
                      className="flex justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all"
                    >
                      Testimonal Two
                      <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/pages:opacity-100 group-hover/pages:visible group-hover/pages:scale-y-100"></div>
                    </a>
                  </li>
                  <li className="relative group/pages">
                    <a
                      href="login.html"
                      className="flex justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all"
                    >
                      Testimonal Carousel
                      <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/pages:opacity-100 group-hover/pages:visible group-hover/pages:scale-y-100"></div>
                    </a>
                  </li>
                  <li className="relative group/pages">
                    <a
                      href="team.html"
                      className="flex flex-row justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all"
                    >
                      Testimonal Two Carousel
                      <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/pages:opacity-100 group-hover/pages:visible group-hover/pages:scale-y-100"></div>
                    </a>
                  </li>
                  <li className="relative group/pages">
                    <a
                      href="faq.html"
                      className="flex justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all"
                    >
                      FAQs
                      <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/pages:opacity-100 group-hover/pages:visible group-hover/pages:scale-y-100"></div>
                    </a>
                  </li>
                  <li className="relative group/pages">
                    <a
                      href="login.html"
                      className="flex justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all"
                    >
                      Login
                      <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/pages:opacity-100 group-hover/pages:visible group-hover/pages:scale-y-100"></div>
                    </a>
                  </li>
                  <li className="relative group/pages">
                    <a
                      href="login.html"
                      className="flex justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all"
                    >
                      404 Error
                      <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/pages:opacity-100 group-hover/pages:visible group-hover/pages:scale-y-100"></div>
                    </a>
                  </li>
                </ul>
              </li>

              {/* <Insurance Dropdown */}
              <li className="group ml-[61px] pt-9 pb-9 relative">
                <a
                  href="#"
                  className="flex items-center text-gray-500 font-medium text-[16px] transition-all duration-500"
                >
                  <p className="group-hover:text-[#00CDE5]">Insurance</p>
                </a>
                <ul className="absolute top-full left-[-25px] space-y-2 z-50 bg-white shadow-xl p-4 w-[270px] flex flex-col opacity-0 invisible scale-y-0 transform origin-top transition-all duration-500 group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:scale-y-100">
                  <li className="relative group/insurance">
                    <a
                      href="insurance.html"
                      className="flex flex-row justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all"
                    >
                      Insurance
                      <div className="flex justify-between items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/insurance:opacity-100 group-hover/insurance:visible group-hover/insurance:scale-y-100"></div>
                    </a>
                  </li>
                  <li className="relative group/insurance">
                    <a
                      href="health-insurance.html"
                      className="flex justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all"
                    >
                      Insurance Two
                      <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/insurance:opacity-100 group-hover/insurance:visible group-hover/insurance:scale-y-100"></div>
                    </a>
                  </li>
                  <li className="relative group/insurance">
                    <a
                      href="health-insurance.html"
                      className="flex justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all"
                    >
                      Insurance Carousel
                      <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/insurance:opacity-100 group-hover/insurance:visible group-hover/insurance:scale-y-100"></div>
                    </a>
                  </li>
                  <li className="relative group/insurance">
                    <a
                      href="health-insurance.html"
                      className="flex justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all"
                    >
                      Insurance Carousel Two
                      <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/insurance:opacity-100 group-hover/insurance:visible group-hover/insurance:scale-y-100"></div>
                    </a>
                  </li>
                  <li className="relative group/insurance">
                    <a
                      href="car-insurance.html"
                      className="flex justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all"
                    >
                      Car insurance
                      <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/insurance:opacity-100 group-hover/insurance:visible group-hover/insurance:scale-y-100"></div>
                    </a>
                  </li>
                  <li className="relative group/insurance">
                    <a
                      href="life-insurance.html"
                      className="flex justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all"
                    >
                      Life insurance
                      <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/insurance:opacity-100 group-hover/insurance:visible group-hover/insurance:scale-y-100"></div>
                    </a>
                  </li>
                  <li className="relative group/insurance">
                    <a
                      href="health-insurance.html"
                      className="flex justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all"
                    >
                      Home insurance
                      <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/insurance:opacity-100 group-hover/insurance:visible group-hover/insurance:scale-y-100"></div>
                    </a>
                  </li>
                  <li className="relative group/insurance">
                    <a
                      href="health-insurance.html"
                      className="flex justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all"
                    >
                      Health insurance
                      <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/insurance:opacity-100 group-hover/insurance:visible group-hover/insurance:scale-y-100"></div>
                    </a>
                  </li>
                  <li className="relative group/insurance">
                    <a
                      href="health-insurance.html"
                      className="flex justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all"
                    >
                      Business insurance
                      <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/insurance:opacity-100 group-hover/insurance:visible group-hover/insurance:scale-y-100"></div>
                    </a>
                  </li>
                  <li className="relative group/insurance">
                    <a
                      href="health-insurance.html"
                      className="flex justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all"
                    >
                      Fire insurance
                      <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/insurance:opacity-100 group-hover/insurance:visible group-hover/insurance:scale-y-100"></div>
                    </a>
                  </li>
                  <li className="relative group/insurance">
                    <a
                      href="health-insurance.html"
                      className="flex justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all"
                    >
                      Marriage insurance
                      <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/insurance:opacity-100 group-hover/insurance:visible group-hover/insurance:scale-y-100"></div>
                    </a>
                  </li>
                  <li className="relative group/insurance">
                    <a
                      href="health-insurance.html"
                      className="flex justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all"
                    >
                      Travel insurance
                      <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/insurance:opacity-100 group-hover/insurance:visible group-hover/insurance:scale-y-100"></div>
                    </a>
                  </li>
                </ul>
              </li>

              {/* <Portfolio Dropdown*/}
              <li className="group relative ml-[61px] pt-9 pb-9">
                <a
                  href="#"
                  className="flex items-center text-gray-500 font-medium text-[16px] transition-all duration-500 group-hover:text-base-didi focus:text-base-didi"
                >
                  <p className="group-hover:text-[#00CDE5]">Portfolio</p>
                </a>

                {/* Dropdown */}
                <ul className="absolute top-full left-[-25px] z-50 w-[270px] bg-white shadow-xl p-4 flex-col space-y-2 opacity-0 invisible scale-y-0 origin-top transition-all duration-500 group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:scale-y-100">
                  {/* Portfolio */}
                  <li className="relative group/details">
                    <a
                      href="#"
                      className="flex flex-row justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 transition-all hover:bg-gray-100 hover:text-black"
                    >
                      Portfolio
                      <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/details:opacity-100 group-hover/details:visible group-hover/details:scale-y-100"></div>
                    </a>
                  </li>

                  {/* Portfolio Carousel */}
                  <li className="relative group/details">
                    <a
                      href="blog-carousel.html"
                      className="flex flex-row justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all"
                    >
                      Portfolio Carousel
                      <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/details:opacity-100 group-hover/details:visible group-hover/details:scale-y-100"></div>
                    </a>
                  </li>

                  {/* Portfolio Details */}
                  <li className="relative group/details">
                    <a
                      href="#"
                      className="flex flex-row justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 transition-all hover:bg-gray-100 hover:text-black"
                    >
                      Portfolio details
                      <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/details:opacity-100 group-hover/details:visible group-hover/details:scale-y-100"></div>
                    </a>
                  </li>
                </ul>
              </li>

              {/* News Dropdown*/}
              <li className="group relative ml-[61px] pt-9 pb-9">
                <a
                  href="#"
                  className="flex items-center text-gray-500 font-medium text-[16px] transition-all duration-500 group-hover:text-base-didi focus:text-base-didi"
                >
                  <p className="group-hover:text-[#00CDE5]">News</p>
                </a>

                {/* Dropdown ------- refactor */}
                <ul className="absolute top-full left-[-25px] z-50 w-[270px] bg-white shadow-xl p-4 flex-col space-y-2 opacity-0 invisible scale-y-0 origin-top transition-all duration-500 group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:scale-y-100">
                  {/* News Grid */}
                  <li className="relative group/news">
                    <a
                      href="#"
                      className="flex flex-row justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 transition-all hover:bg-gray-100 hover:text-black"
                    >
                      News grid
                      <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/news:opacity-100 group-hover/news:visible group-hover/news:scale-y-100"></div>
                    </a>
                    {/**------- refactor**/}
                    <ul className="absolute left-full top-0 mt-0 ml-6 w-[220px] bg-white shadow-lg p-3 space-y-2 opacity-0 invisible scale-y-0 origin-top-left transition-all duration-300 group-hover/news:opacity-100 group-hover/news:visible group-hover/news:scale-y-100">
                      <li className="group/newssub1">
                        <a
                          href="#"
                          className="flex flex-row justify-between items-center px-4 py-1 text-sm text-gray-500 hover:text-black hover:bg-gray-100"
                        >
                          No sidebar
                          <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/newssub1:opacity-100 group-hover/newssub1:visible group-hover/newssub1:scale-y-100"></div>
                        </a>
                      </li>
                      <li className="group/newssub2">
                        <a
                          href="#"
                          className="flex flex-row justify-between items-center px-4 py-1 text-sm text-gray-500 hover:text-black hover:bg-gray-100"
                        >
                          Left sidebar
                          <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/newssub2:opacity-100 group-hover/newssub2:visible group-hover/newssub2:scale-y-100"></div>
                        </a>
                      </li>
                      <li className="group/newssub3">
                        <a
                          href="#"
                          className="flex flex-row justify-between items-center px-4 py-1 text-sm text-gray-500 hover:text-black hover:bg-gray-100"
                        >
                          Right sidebar
                          <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/newssub3:opacity-100 group-hover/newssub3:visible group-hover/newssub3:scale-y-100"></div>
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* News Carousel */}
                  <li className="relative group/news">
                    <a
                      href="blog-carousel.html"
                      className="flex flex-row justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black transition-all"
                    >
                      News Carousel
                      <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/news:opacity-100 group-hover/news:visible group-hover/news:scale-y-100"></div>
                    </a>
                  </li>

                  {/* News Details */}
                  <li className="relative group/details">
                    <a
                      href="#"
                      className="flex flex-row justify-between items-center px-5 py-2 text-sm font-medium text-gray-500 transition-all hover:bg-gray-100 hover:text-black"
                    >
                      News details
                      <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/details:opacity-100 group-hover/details:visible group-hover/details:scale-y-100"></div>
                    </a>
                    {/**------- refactor**/}
                    <ul className="absolute left-full top-0 mt-0 ml-6 w-[220px] bg-white shadow-lg p-3 space-y-2 opacity-0 invisible scale-y-0 origin-top-left transition-all duration-300 group-hover/details:opacity-100 group-hover/details:visible group-hover/details:scale-y-100">
                      <li className="group/detailssub1">
                        <a
                          href="#"
                          className="flex flex-row justify-between items-center px-4 py-1 text-sm text-gray-500 hover:text-black hover:bg-gray-100"
                        >
                          No sidebar
                          <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/detailssub1:opacity-100 group-hover/detailssub1:visible group-hover/detailssub1:scale-y-100"></div>
                        </a>
                      </li>
                      <li className="group/detailssub2">
                        <a
                          href="#"
                          className="flex flex-row justify-between items-center px-4 py-1 text-sm text-gray-500 hover:text-black hover:bg-gray-100"
                        >
                          Left sidebar
                          <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/detailssub2:opacity-100 group-hover/detailssub2:visible group-hover/detailssub2:scale-y-100"></div>
                        </a>
                      </li>
                      <li className="group/detailssub3">
                        <a
                          href="#"
                          className="flex flex-row justify-between items-center px-4 py-1 text-sm text-gray-500 hover:text-black hover:bg-gray-100"
                        >
                          Right sidebar
                          <div className="flex justify-center items-center rounded-full bg-base-didi w-[6px] h-[6px] opacity-0 invisible scale-y-0 transition-all duration-300 group-hover/detailssub3:opacity-100 group-hover/detailssub3:visible group-hover/detailssub3:scale-y-100"></div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* Contact*/}
              <li className="ml-[61px] pt-9 pb-9 relative">
                <a
                  href="contact.html"
                  className="flex items-center text-gray-500 font-medium text-[16px] transition-all duration-500"
                >
                  <p className="hover:text-[#00CDE5]">Contact</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Search and Quote section */}
        <div className="flex flex-row justify-between items-center ml-12">
          {/* Search button */}
          <a
            href="#"
            className="hidden md:flex items-center text-[24px] text-gray-500 px-5 mr-2 border-l border-gray-300"
          >
            <Image src={search_icon} alt="search_icon" width={25} />
          </a>

          {/* Quote */}
          <a
            href="#"
            className="relative inline-block overflow-hidden bg-custom-blue w-full px-8 py-4 transition-all duration-500 hover:bg-[#00CDE5]"
          >
            <p className="text-sm font-semiBold text-white">Get a Quote</p>
            <em className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full bg-base-didi z-[-1] transition-all duration-500  group-hover:w-[500px] group-hover:h-[500px] transform -translate-x-1/2 -translate-y-1/2"></em>
          </a>
        </div>

        {/* Call expert button */}
        <a href="#" className="hidden md:flex items-center ml-6 mr-7">
          <span className=" relative group w-[50px] h-[50px] leading-[50px] text- inline-block rounded-full mr-[10px] border border-[#e0ddea] text-[25px] text-custom-blue transition-all hover:bg-custom-blue hover:text-white hover:border-transparent">
            <Image
              src={phone_wave2}
              alt="phone-wave2"
              width={25}
              className="absolute inset-0 m-auto object-contain pointer-events-none z-0 group-hover:invert group-hover:brightness-0 transition duration-300"
            />
          </span>

          <span className="text-md font-medium text-gray-500 leading-tight">
            Call experts
            <br />
            <b className="text-[16px] text-custom-blue inline-block mt-1 hover:underline hover:text-base-didi transition-all">
              +92 (003) 68-0900
            </b>
          </span>
        </a>
      </div>
    </section>
  );
}
