import SchoolStatsCard from "../components/SchoolStatsCard";
import PrincipalCard from "../components/PrincipalWelcomeCard";
import VisionMissionCard from "../components/VisionMissionCard";
import BriefHistoryCard from "../components/BriefHistoryCard";

function SchoolProfile() {
  return (
    <section
      id="profile"
      className="flex flex-col gap-4 items-center justifi-center bg-slate-50 scroll-mt-24 px-4 py-6 md:px-10 md:py-6 border-t border-gray-200"
    >
      <h1 className="text-slate-800 text-xl md:text-2xl font-semibold underline decoration-blue-800 decoration-2 underline-offset-6">
        Profile Sekolah
      </h1>
      <SchoolStatsCard />
      <PrincipalCard />
      <VisionMissionCard />
      <BriefHistoryCard />
    </section>
  );
}

export default SchoolProfile;
