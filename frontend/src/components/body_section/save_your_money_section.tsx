import Image from "next/image";
import background_image from "@/assets/main-slder-shape-1e.png";

export default function Save_money_section() {
  return (
    <section className="border border-green-600 p-0">
      <div className="flex flex-row items-center">
        <div className="">
          <Image src={background_image} alt="" width={1030} />
        </div>
      </div>
    </section>
  );
}
