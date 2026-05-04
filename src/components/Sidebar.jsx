// src/components/Sidebar.jsx
import { Home, Users, Package, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white fixed left-0 top-0 flex flex-col">
      
      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b border-gray-800 text-xl font-bold">
        DevDash
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <SidebarItem icon={<Home size={18} />} label="Dashboard" />
        <SidebarItem icon={<Users size={18} />} label="Users" />
        <SidebarItem icon={<Package size={18} />} label="Products" />
        <SidebarItem icon={<Settings size={18} />} label="Settings" />
      </nav>

    </div>
  );
}

function SidebarItem({ icon, label }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-800 transition">
      {icon}
      <span className="text-sm">{label}</span>
    </div>

    
    
  );
}