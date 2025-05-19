export default function Free_quote_page_section() {
  return (
    <section
      className="relative flex justify-end h-[815px]"
      style={{
        backgroundImage: "url('/free_quote/contact-one-bg.jpg')",
      }}
    >
      <div className="absolute top-0 left-92 w-126 h-full bg-transparent flex flex-col justify-center items-center border border-blue-400">
        <div className="flex flex-col gap-2 leading-3.5">
          <div>
            <span></span>
            <p className="text-sm">FREE QUOTE</p>
          </div>
          <p className="font-bold text-2xl">
            Get an insurance quote <br /> to get started
          </p>
        </div>
        <div>
          <form>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </form>
          <form>
            <input />
            <input />
            <input />
            <div>
              <p>Limits of Balance: <span></span></p>
            </div>
            <button>Get a Quote</button>
          </form>
        </div>
      </div>
      <div
        className="w-[51.25%] h-full bg-[#F3F3F5] bg-center"
        style={{
          backgroundImage: "url('/free_quote/contact-left-img.png')",
        }}
      ></div>
    </section>
  );
}
