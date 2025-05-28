import { VscFolderOpened } from "react-icons/vsc";

export default function Track_your_claim_section() {
  return (
    <section className="relative z-[1] bg-gradient-to-r from-[#2B2B5E] to-[#00CDE5] bg-cover h-52 mx-94 flex justify-between items-center px-14 border border-green-600 ">
      {/** File on left side */}
      <div className="flex items-center w-[70%] gap-8">
        <div className="flex items-center">
          <VscFolderOpened className="text-[#00CDE5] w-22 h-full" />
        </div>
        <div className="flex flex-col gap-1 w-full h-full">
          <p className="z-[1] uppercase text-[14px] tracking-[0.1rem]  text-white">
            quisque vel ortor
          </p>
          <p className="z-[1] text-[2rem] font-semibold leading-[1.2] tracking-[-0.04em] text-white">
            Start reporting or tracking your claims
          </p>
        </div>
      </div>

      {/** Button on right side */}
      <button className="flex justify-center items-center w-[20%] h-15 font-bold z-[1] bg-white">
        Track your Claim
      </button>
    </section>
  );
}
