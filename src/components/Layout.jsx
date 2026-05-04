import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">

      {/* Sidebar */}
      <div className={`${open ? "block" : "hidden"} md:block`}>
        <Sidebar />
      </div>

      {/* Content */}
      <div className="md:ml-64 w-full">
        <Navbar toggleSidebar={() => setOpen(!open)} />

        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>

    </div>
  );
}