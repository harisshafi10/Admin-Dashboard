import { useState } from "react";

// src/components/UserModal.jsx
export default function UserModal({ isOpen, onClose, onSave, initialData }) {
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const name = form.get("name")?.trim();
    const email = form.get("email")?.trim();
    const role = form.get("role")?.trim();
    const status = form.get("status");

    // ✅ Validation
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!role) newErrors.role = "Role is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newUser = {
      id: initialData?.id || Date.now(),
      name,
      email,
      role,
      status,
    };

    onSave(newUser);
    onClose();
    setErrors({});
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      
      <div className="bg-white w-96 p-6 rounded-2xl shadow-lg">
        <h2 className="text-lg font-semibold mb-4">
          {initialData ? "Edit User" : "Add User"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name */}
          <div>
            <input
              name="name"
              defaultValue={initialData?.name}
              placeholder="Name"
              className="w-full border px-3 py-2 rounded-lg"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              name="email"
              defaultValue={initialData?.email}
              placeholder="Email"
              className="w-full border px-3 py-2 rounded-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Role */}
          <div>
            <select
              name="role"
              defaultValue={initialData?.role || "User"}
              className="w-full border px-3 py-2 rounded-lg"
            >
              <option>User</option>
              <option>Admin</option>
              <option>Editor</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-xs mt-1">{errors.role}</p>
            )}
          </div>

          {/* ✅ Status Dropdown */}
          <select
            name="status"
            defaultValue={initialData?.status || "Active"}
            className="w-full border px-3 py-2 rounded-lg"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm bg-gray-200 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg"
            >
              Save
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}