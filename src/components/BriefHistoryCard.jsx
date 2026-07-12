import { sejarahSingkat } from "../data/schoolProfileData";

function BriefHistoryCard() {
  return (
    <div className="bg-white border border-gray-200 p-6 md:p-8 rounded-2xl shadow-md flex flex-col items-left justify-center w-full mb-6">
      <h1 className="text-slate-800 text-lg md:text-xl font-semibold underline decoration-blue-800 decoration-2 underline-offset-6 mb-6">
        Sejarah Singkat
      </h1>
      <div className="flex flex-col items-left justify-center gap-2">
        {sejarahSingkat.map((history, index) => (
          <p className="text-sm md:text-md text-gray-600 leading-relaxed text-justify w-full">
            {history}
          </p>
        ))}
      </div>
    </div>
  );
}

export default BriefHistoryCard;
