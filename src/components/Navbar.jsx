import { Bell, Search, Menu } from "lucide-react";

export default function Navbar({ toggleSidebar }) {
  return (
    <div className="h-16 bg-white flex items-center justify-between px-4 md:px-6 border-b">

      {/* Left */}
      <div className="flex items-center gap-3">
        <Menu
          className="md:hidden cursor-pointer z-10"
          onClick={toggleSidebar}
        />
        

        <div className="hidden md:flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg w-80">
          <Search size={16} />
          <input className="bg-transparent outline-none text-sm w-full" placeholder="Search" />
        </div>
      </div>
      

      {/* Right */}
      <div className="flex items-center gap-4">
        <Bell size={18} />
        <img src="https://i.pravatar.cc/40" className="w-8 h-8 rounded-full" />
      </div>

    </div>
  );
}