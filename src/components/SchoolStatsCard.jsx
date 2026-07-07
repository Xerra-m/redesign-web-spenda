import { Award, Users, UserCheck, Contact } from "lucide-react";
import { schoolStats } from "../data/schoolProfileData";

const iconMap = {
  Award: Award,
  Users: Users,
  UserCheck: UserCheck,
  Contact: Contact,
};

function SchoolStatsCard() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-fit mx-auto px-4">
      {schoolStats.map((stat) => {
        const Icon = iconMap[stat.icon];
        return (
          <div
            key={stat.id}
            className="flex flex-col items-center justify-center gap-2 w-full bg-white border border-gray-200 p-4 rounded-md shadow-md"
          >
            <div className="flex items-center justify-center gap-4">
              <Icon size={28} strokeWidth={2.5} />
              <p className="text-sm font-semibold">{stat.label}</p>
            </div>
            <span className="text-amber-400 font-bold">{stat.count}</span>
          </div>
        );
      })}
    </div>
  );
}

export default SchoolStatsCard;
