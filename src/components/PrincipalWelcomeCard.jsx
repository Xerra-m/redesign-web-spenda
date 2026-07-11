import { useState } from "react";
import { principalWelcome } from "../data/schoolProfileData";

function PrincipalCard() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-2xl shadow-md flex flex-col md:flex-row gap-2 items-center md:items-start w-full">
      {/* kepsek */}
      <div className="flex flex-col items-center text-center shrink-0 w-full md:w-1/3 max-w-[240px]">
        <div className="w-70 h-70 md:w-60 md:h-60 overflow-hidden">
          <img
            src={principalWelcome.image}
            alt={principalWelcome.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <h4 className="text-md font-bold text-gray-800 mt-4 leading-snug">
          {principalWelcome.name}
        </h4>
        <span className="text-xs uppercase tracking-wider mt-1 font-semibold">
          {principalWelcome.role}
        </span>
      </div>

      {/* pesan */}
      <div className="w-full md:w-2/3 flex flex-col items-start text-left mt-4 md:mt-0">
        <div className="space-y-3">
          {principalWelcome.greetings.map((paragraph, index) => {
            const shouldHide = index > 1 && !isExpanded;
            return (
              <p
                className={`text-xs md:text-sm text-gray-600 leading-relaxed text-justify w-full ${shouldHide ? "hidden md:block" : "block"}`}
              >
                {paragraph}
              </p>
            );
          })}
        </div>
        {principalWelcome.greetings.length > 2 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-xs font-bold text-gray-800 active:text-blue-700 transition md:hidden active:outline-none"
          >
            {isExpanded ? "Sembunyikan ↑" : "Baca Selengkapnya ..."}
          </button>
        )}
      </div>
    </div>
  );
}

export default PrincipalCard;
