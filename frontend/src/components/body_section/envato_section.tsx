import Image from "next/image";

export default function Envato_section() {
  return (
    <section className="relative flex justify-center items-center h-70 border border-[#E0DDEA]">
      <div className="absolute top-0 left-0 w-105 h-30">
        <Image
          src="/envato/line-shape-1.png"
          alt="envato-bg-1"
          width={500}
          height={500}
        />
      </div>
      <div className="absolute right-0 w-110 h-70">
        <Image
          src="/envato/line-shape-2.png"
          alt="envato-bg-1"
          width={500}
          height={500}
        />
      </div>
      <div className="flex justify-center items-center w-full h-25">
        {[...Array(5)].map((_, index) => (
          <div className="group flex justify-center items-center rounded-[10px] overflow-hidden w-[230px] h-[70px] hover:bg-gray-100 transition-all duration-500 ease-in-out">
            <Image
              src="/envato/brand-1-1.png"
              alt="envato"
              width={120}
              height={120}
              className="opacity-25 max-w-full group-hover:opacity-70 transition-all duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>
    </section>
  );
}