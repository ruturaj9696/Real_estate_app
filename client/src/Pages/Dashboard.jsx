import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../Components/DashSidebar";
import DashProfile from "../Components/DashProfile";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
    setTab(tabFromUrl); // Update the state with the tab value from URL
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
      {/* sidebar */}
      <DashSidebar/>
      </div>
      {/* Profile */}
      {tab==='profile' && <DashProfile/>}
    </div>
  );
}
