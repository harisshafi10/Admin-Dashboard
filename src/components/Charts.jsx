// src/components/Charts.jsx
import {LineChart,Line,BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer,} from "recharts";

const salesData = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 600 },
  { name: "Mar", sales: 800 },
  { name: "Apr", sales: 700 },
  { name: "May", sales: 900 },
];

const userData = [
  { name: "Jan", users: 200 },
  { name: "Feb", users: 300 },
  { name: "Mar", users: 500 },
  { name: "Apr", users: 400 },
  { name: "May", users: 650 },
];

export default function Charts() {
  return (
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* Line Chart */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border">
        <h2 className="text-lg font-medium mb-4">Sales Overview</h2>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#3b82f6" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border">
        <h2 className="text-lg font-medium mb-4">User Growth</h2>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={userData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Profit */}

       <div className="bg-white p-5 rounded-2xl shadow-sm border">
        <h2 className="text-xl font-medium mb-4">Profit</h2>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip  className=' bg-blue-600 text-2xl'/>
              <Line type="monotone" dataKey="sales" stroke="#3b82f6" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}