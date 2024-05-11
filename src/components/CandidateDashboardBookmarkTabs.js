
import React, { useEffect, useState } from "react";
import { Tabs } from "flowbite-react";
import { HiPencil ,HiBookmark } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

function CandidateDashboardBookmarkTabs(children1,children2) {
  return (
    <Tabs aria-label="Tabs with icons" style="underline" className="text-secondary ">
      <Tabs.Item active title="Bookmarked" icon={HiBookmark} className="group-active::text-[#9445FF]">
        {/* {children1} */}
      </Tabs.Item>
      <Tabs.Item title="Applied" icon={HiPencil}>
        {/* {children2} */}
      </Tabs.Item>
    </Tabs>
  );
}

export default CandidateDashboardBookmarkTabs;