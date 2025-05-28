import "../../styles/numbers_section/HeroSection.css";
import { useEffect, useState } from "react";
import { GrCertificate } from "react-icons/gr";
import { FaPeopleGroup, FaPeopleRoof, FaHandshake } from "react-icons/fa6";

const iconSize = "60px";

const stats = [
  {
    icon: (
      <GrCertificate
        className="text-[#00CDE5] transition-transform duration-700 ease-in-out group-hover:rotate-y-[180deg]"
        size={iconSize}
      />
    ),
    label: "k",
    title: "Gave insurances",
    target: 36,
    stepTime: 50,
    format: true, // will be shown as 3.6k
  },
  {
    icon: (
      <FaPeopleGroup
        className="text-[#00CDE5] transition-transform duration-700 ease-in-out group-hover:rotate-y-[180deg]"
        size={iconSize}
      />
    ),
    label: "+",
    title: "Gave insurances",
    target: 90,
    stepTime: 40,
    format: false, // will be shown as 90+
  },
  {
    icon: (
      <FaPeopleRoof
        className="text-[#00CDE5] transition-transform duration-700 ease-in-out group-hover:rotate-y-[180deg]"
        size={iconSize}
      />
    ),
    label: "k",
    title: "Gave insurances",
    target: 49,
    stepTime: 50,
    format: true, // will be shown as 4.9k
  },
  {
    icon: (
      <FaHandshake
        className="text-[#00CDE5] transition-transform duration-700 ease-in-out group-hover:rotate-y-[180deg]"
        size={iconSize}
      />
    ),
    label: "%",
    title: "Gave insurances",
    target: 98,
    stepTime: 30,
    format: false, // will be shown as 98%
  },
];

export default function NumbersSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map(({ target, stepTime }, index) => {
      let current = 0;
      const intervalCount = setInterval(() => {
        current++;
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = current;
          return updated;
        });
        if (current >= target) clearInterval(intervalCount);
      }, stepTime);
      return intervalCount;
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="flex justify-center items-center bg-[url('/numbers_section/funfact-shape.png')] bg-[#2B2B5E] border border-transparent">
      <div className="flex justify-center items-center mt-4 mb-6 gap-4 w-322 h-70 pl-16">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative group w-full h-45 mb-6 pt-19 cursor-pointer"
          >
            <i className="absolute top-0 left-[-2]">{stat.icon}</i>
            <div className="flex font-[950] text-white text-[36px] leading-[36px] tracking-tight mb-2">
              <h3 className="funfact-one__count count-text">
                {stat.format ? (counts[index] / 10).toFixed(1) : counts[index]}
              </h3>
              <h3 className="funfact-one__count count-before">{stat.label}</h3>
            </div>
            <p className="relative z-[1] flex justify-center items-center text-white bg-[#363E7E] w-47 h-10 triangle-up blue-shade">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

