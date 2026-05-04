import Layout from "../components/Layout";
import StatCard from "../components/StatCard";
import Charts from "../components/Charts";
import { Users, DollarSign, ShoppingCart, User } from "lucide-react";
import DataTable from "../components/DataTable";

export default function Dashboard() {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard title="Total Users" value="1,245" change="+12.5%" positive icon={<Users size={18} />} />
        <StatCard title="Revenue" value="$32,400" change="+8.2%" positive icon={<DollarSign size={18} />} />
        <StatCard title="Orders" value="845" change="-3.1%" icon={<ShoppingCart size={18} />} />
        <StatCard title="Active Users" value="1,245" positive change="+3.1%" icon={<User size={18} className="text-green-500" />} />
        
      </div>

      {/* Charts */}
      <Charts />
      <DataTable />
    </Layout>
    
  );
}