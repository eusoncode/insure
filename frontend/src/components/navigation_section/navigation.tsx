import CustomLink from "@/lib/Helper_function/links";
import Image from "next/image";
import logo from "@/assets/logo-light.png"

export default function Navigation() {
  return (
    <section className="flex flex-col">
      {/* First Navigation bar*/}
      <div className="flex flex-row justify-between align-center py-2 px-6 bg-base-didi border-2 border-red-600">
        <ul className="flex flex-row border-2 border-red-600">
          <li className="">
            <a href="#">30 Commercial Road Fratton, Australia</a>
          </li>
          <li className="pl-8">
            <a href="mailto:needhelp@company.com">needhelp@company.com</a>
          </li>
        </ul>
        <div className="flex flex-row border-2 border-red-600 gap-4">
          <ul className="flex flex-row px-2 space-x-4 border-2 border-red-600">
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
          <div className="flex flex-row space-x-2 border-2 border-red-600">
            <a href="https://twitter.com">
              <span className="text-xs">Twitter</span>
            </a>
            <a href="https://facebook.com">
              <span className="">Facebook</span>
            </a>
            <a href="https://pinterest.com">
              <span className="">Pinterest</span>
            </a>
            <a href="https://instagram.com">
              <span className="">Instagram</span>
            </a>
          </div>

          <div className="flex flex-row space-x-2 border-2 border-red-600">
            <div className="flex justify-center items-center text-lg text-white border-1 rounded-4xl w-8 h-8 bg-socials-gray border-transparent">
              t
            </div>
            <div className="flex justify-center items-center text-lg text-white border-1 rounded-4xl w-8 h-8 bg-socials-gray border-transparent">
              f
            </div>
            <div className="flex justify-center items-center text-lg text-white border-1 rounded-4xl w-8 h-8 bg-socials-gray border-transparent">
              p
            </div>
            <div className="flex justify-center items-center text-lg text-white border-1 rounded-4xl w-8 h-8 bg-socials-gray border-transparent">
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
            className="flex max-w-3xs p-6 max-h-screen bg-custom-blue border-2 border-green-600"
          >
            <Image src={logo} alt="logo" priority width={100} />
          </CustomLink>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 border-2 border-green-600">
          <nav className="flex items-center gap-6">
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
