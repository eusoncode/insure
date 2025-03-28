import CustomLink from "@/lib/Helper_function/links";
import Image from "next/image";
import logo from "@/assets/logo-light.png"

export default function Navigation() {
  return (
    <section className="flex flex-col">
      {/* First Navigation bar*/}
      <div className="flex flex-row justify-between align-center space-x-8 py-2 px-6 bg-base-didi border-2 border-red-600">
        <ul className="flex flex-row pl-14 border-2 border-red-600">
          <li className="flex items-center font-bold text-white">
            <a href="#">30 Commercial Road Fratton, Australia</a>
          </li>
          <li className="flex items-center font-bold text-white pl-16">
            <a href="mailto:needhelp@company.com">needhelp@company.com</a>
          </li>
        </ul>
        <div className="flex flex-row pr-8 gap-25 border-2 border-red-600">
          <ul className="flex flex-row justify-evenly items-center px-2 text-white font-bold space-x-10 border-2 border-red-600">
            <li>
              <a href="#">Make a Claim</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <div className="flex flex-row justify-center items-center space-x-4 border-2 border-red-600">
            <div className="flex justify-center font-bold items-center text-xs text-socials-gray border-1 rounded-4xl w-4 h-4 bg-white border-transparent">
              t
            </div>
            <div className="flex justify-center font-bold items-center text-xs text-socials-gray border-1 rounded-4xl w-4 h-4 bg-white border-transparent">
              f
            </div>
            <div className="flex justify-center font-bold items-center text-xs text-socials-gray border-1 rounded-4xl w-4 h-4 bg-white border-transparent">
              p
            </div>
            <div className="flex justify-center font-bold items-center text-xs text-socials-gray border-1 rounded-4xl w-4 h-4 bg-white border-transparent">
              @
            </div>
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
          <nav className="flex items-center gap-10">
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
