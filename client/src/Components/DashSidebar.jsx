import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiUser, HiUsers } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

function DashSidebar() {
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
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === "profile"}
              icon={HiUser}
              label={"user"}
              labelColor="dark"
              className="inline-block mr-10"
            >
              Profile
            </Sidebar.Item>
          </Link>
          <Sidebar.Item active icon={HiArrowRight} className="cursor-pointer ">
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default DashSidebar;
