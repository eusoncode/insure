import CustomLink from "@/lib/Helper_function/links";
import "@/styles/navigation.css";
import "@/styles/navigation.css";

export default function Navigation() {
  return (
    <section className="flex flex-row justify-between items-center pr-20 border-1 border-white">
      {/* Logo */}
      <CustomLink
        href="/home"
        className="flex p-10 border-r border-black text-lg text-amber-100 bg-custom-blue"
      >
        Logo
      </CustomLink>

      {/* Navigation Links */}
      <nav className="flex items-center gap-6">
        <CustomLink href="/home">Home</CustomLink>
        <CustomLink href="/about">About</CustomLink>
        <CustomLink href="/pages">Pages</CustomLink>
        <CustomLink href="/insurance">Insurance</CustomLink>
        <CustomLink href="/portfolio">Portfolio</CustomLink>
        <CustomLink href="/news">News</CustomLink>
        <CustomLink href="/contact">Contact</CustomLink>

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
          <button className="px-4 py-1 text-sm">Call experts</button>
        </div>
      </nav>
    </section>
  );
}
