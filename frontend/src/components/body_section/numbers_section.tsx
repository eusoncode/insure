import "../../styles/numbers_section/HeroSection.css";
import { useEffect, useState } from "react";
import { GrCertificate } from "react-icons/gr";
import { FaPeopleGroup, FaPeopleRoof, FaHandshake } from "react-icons/fa6";

// Standard icon size for all stats
const iconSize = "60px";

// Array of statistic items to display
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
    target: 36, // Represents 3.6k due to format flag
    stepTime: 50, // Controls animation speed
    format: true, // Indicates value should be divided by 10 and shown with "k"
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
    target: 90, // Will display as "90+"
    stepTime: 40,
    format: false,
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
    target: 49, // Will display as 4.9k
    stepTime: 50,
    format: true,
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
    target: 98, // Will display as 98%
    stepTime: 30,
    format: false,
  },
];

export default function NumbersSection() {
  // State to hold animated count values for each stat
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    // Start count animation for each stat
    const intervals = stats.map(({ target, stepTime }, index) => {
      let current = 0;
      const intervalCount = setInterval(() => {
        current++;
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = current;
          return updated;
        });
        if (current >= target) clearInterval(intervalCount); // Stop when target is reached
      }, stepTime);
      return intervalCount;
    });

    // Cleanup intervals when component unmounts
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
            {/* Icon positioned top-left */}
            <i className="absolute top-0 left-[-2]">{stat.icon}</i>

            {/* Count display with animation */}
            <div className="flex font-[950] text-white text-[36px] leading-[36px] tracking-tight mb-2">
              <h3 className="funfact-one__count count-text">
                {/* Format determines whether to display as x.yk or just number */}
                {stat.format ? (counts[index] / 10).toFixed(1) : counts[index]}
              </h3>
              <h3 className="funfact-one__count count-before">{stat.label}</h3>
            </div>

            {/* Title below the number */}
            <p className="relative z-[1] flex justify-center items-center text-white bg-[#363E7E] w-47 h-10 triangle-up blue-shade">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
