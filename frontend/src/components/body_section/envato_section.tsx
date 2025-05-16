export default function Envato_section() {
  return (
    <section className="relative flex justify-center items-center h-70 border border-[#F4F3F8]">
      <div className="absolute top-0 left-0 w-40 h-40 border-2 border-red-700"></div>
      <div className="absolute right-0 w-108 h-70 border-2 border-yellow-700"></div>
      <div className="flex justify-center items-center w-300 h-18 gap-24 border border-purple-700">
        {[...Array(5)].map((_, index) => (
          <i
            key={index}
            className="flex justify-center items-center w-40 h-10 border border-blue-700"
          >
            envato
          </i>
        ))}
      </div>
    </section>
  );
}