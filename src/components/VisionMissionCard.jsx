import { useState } from "react";
import { schoolVisionMission } from "../data/schoolProfileData";

function VisionMissionCard() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      {/* visi */}
      <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-2xl shadow-md flex flex-col items-left justify-center w-full">
        <h1 className="text-slate-800 text-lg md:text-xl font-semibold underline decoration-blue-800 decoration-2 underline-offset-6 mb-6">
          Visi
        </h1>
        <p className="text-sm md:text-md text-gray-600 leading-relaxed text-justify w-full">
          {schoolVisionMission.vision}
        </p>
      </div>
      {/* misi */}
      <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-2xl shadow-md flex flex-col items-left justify-center w-full gap-2">
        <h1 className="text-slate-800 text-lg md:text-xl font-semibold underline decoration-blue-800 decoration-2 underline-offset-6 mb-6">
          Misi
        </h1>
        {schoolVisionMission.mission.map((misi, index) => (
          <div className="flex items-center justify-center gap-2">
            <div
              className="w-2 h-2 rounded-full bg-gray-400"
            ></div>
            <p
              className="text-sm md:text-md text-gray-600 leading-relaxed text-justify w-full"
            >
              {misi}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VisionMissionCard;
