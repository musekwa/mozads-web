import { HomeIcon, LibrarySquare, PiIcon, Users2 } from "lucide-react";
import UserAvatar from "./user-avatar";
import SidebarMenu from "./sidebar-menu";

function Sidebar() {
  return (
    <div className="sticky top-0 left-0 p-6 w-[300px] min-w-[300px] border-r min-h-[90vh] py-6 ">
      <div className="min-h-[80px] border shadow-sm flex justify-center items-center">
        <div className="flex gap-2">
          <PiIcon />
          Logo
        </div>
      </div>
      <div className="w-full h-[60vh] ">
        <SidebarMenu />
      </div>
      <div className="h-full ">

      <UserAvatar />
      </div>

    </div>
  );
}

export default Sidebar;
