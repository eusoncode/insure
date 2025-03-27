import CustomLink from "@/lib/Helper_function/links";
import Image from "next/image";
import logo from "@/assets/logo-light.png"

export default function Navigation() {
  return (
    <section className="flex flex-col min-h-screen">
      {/* First Navigation bar*/}
      <div className="flex flex-row flex-grow justify-between align-center max-h-9 border-1">
        <div className="w-full px-4 border-1">
          <p>Location</p>
          <p>Email</p>
        </div>
        <div className="w-sm text-center px-4 border-1">
          <p>Make a Claim</p>
          <p>FAQs</p>
          <p>About</p>
        </div>
        <div className="w-sm text-center px-4 border-1">
          <p>Twitter</p>
          <p>Facebook</p>
          <p>Pintrest</p>
          <p>Instagram</p>
        </div>
      </div>
      {/* Second Navigation bar*/}
      <div className="flex flex-row justify-between items-center pr-20">
        {/* Logo */}
        <div>
          <CustomLink
            href="/home"
            className="flex p-6 max-h-screen bg-custom-blue"
          >
            <Image src={logo} alt="logo" priority width={142} />
          </CustomLink>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
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

        {/* Search button */}
        <div className="ml-8">
          <button className="px-4 py-1 text-sm">
            |<span className="ml-6">Search</span>
          </button>
        </div>

        {/* Quote */}
        <div className="ml-8">
          <button className="px-4 py-1 text-sm">Get a Quote</button>
        </div>

        {/* Search button */}
        <div className="ml-8">
          <div className="px-4 py-1 text-sm">
            <button>Call Image</button>
            <p>Call experts</p>
            <span>+92(003)68-0900</span>
          </div>
        </div>
      </div>
    </section>
  );
}
