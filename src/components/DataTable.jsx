import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import UserModal from "./UserModal";

const initialData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive" },
];

export default function DataTable() {
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // ✅ NEW: delete modal state
  const [deleteId, setDeleteId] = useState(null);

  // 🔍 Filter
  const filtered = data.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  // 🔃 Sort
  const sorted = [...filtered].sort((a, b) =>
    sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );

  // ➕ Add / Edit
  const handleSave = (user) => {
    if (editingUser) {
      setData(data.map((u) => (u.id === user.id ? user : u)));
    } else {
      setData([...data, user]);
    }
    setEditingUser(null);
  };

  // ❌ removed confirm()
  // ✅ NEW delete confirm handler
  const handleDeleteConfirm = () => {
    setData(data.filter((u) => u.id !== deleteId));
    setDeleteId(null);
  };

  return (
    <div className="bg-white mt-6 p-5 rounded-2xl shadow-sm border overflow-x-auto">

      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">Users</h2>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search..."
            className="border px-3 py-2 rounded-lg text-sm"
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            onClick={() => {
              setEditingUser(null);
              setIsOpen(true);
            }}
            className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm"
          >
            <Plus size={16} />
            Add User
          </button>
        </div>
      </div>

      {/* Table */}
     <div className="overflow-x-auto">
         <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="py-3 cursor-pointer" onClick={() => setSortAsc(!sortAsc)}>
              Name ⬍
            </th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {sorted.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50">

              <td className="py-3 font-medium">{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>

              <td>
                <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-600">
                  {user.status}
                </span>
              </td>

              <td className="text-right flex justify-end gap-3 py-3">
                
                <Pencil
                  size={16}
                  className="cursor-pointer text-blue-500"
                  onClick={() => {
                    setEditingUser(user);
                    setIsOpen(true);
                  }}
                />

                <Trash2
                  size={16}
                  className="cursor-pointer text-red-500"
                  // ✅ open modal instead of confirm()
                  onClick={() => setDeleteId(user.id)}
                />

              </td>

            </tr>
          ))}
          {sorted.length === 0 && (
  <tr>
    <td colSpan="5" className="text-center py-6 text-gray-400">
      No users found
    </td>
  </tr>
)}
        </tbody>
      </table>
     </div>

      {/* Modal */}
      <UserModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSave={handleSave}
        initialData={editingUser}
      />

      {/* ✅ Inline Delete Modal (no new file) */}
      {deleteId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30">
          <div className="bg-white p-6 rounded-xl w-87.5 space-y-4">
            <h2 className="text-lg font-medium">Delete User</h2>
            <p className="text-sm text-gray-500">
              Are you sure you want to delete this user?
            </p>

            <div className="flex justify-end gap-2 pt-3">
              <button
                onClick={() => setDeleteId(null)}
                className="px-3 py-2 border rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleDeleteConfirm}
                className="px-3 py-2 bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}