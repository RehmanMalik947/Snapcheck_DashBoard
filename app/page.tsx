"use client";

import DashboardSidebar from "./components/DashboardSidebar";
import RightPanel from "./components/RightPanel";
import UsageChart from "./components/UsageChart";
import TopContactsCharts from "./components/TopContactsCharts";
import ParentalControlCard from "./components/ParentalControlCard";
import DeviceActivityChart from "./components/DeviceActivityChart";

export default function Page() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-[260px] border-r">
        <DashboardSidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 space-y-6">
        <RightPanel />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UsageChart />
          <TopContactsCharts />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ParentalControlCard />
          <DeviceActivityChart />
        </div>
      </div>
    </div>
  );
}

// export default function Page() {
//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         Tailwind is Working!
//       </button>
//     </div>
//   );
// }
