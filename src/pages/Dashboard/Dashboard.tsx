import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-semibold">Total Users</h2>
        <p className="text-3xl font-bold mt-2">1,245</p>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-semibold">Revenue</h2>
        <p className="text-3xl font-bold mt-2">$24,500</p>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-semibold">Orders</h2>
        <p className="text-3xl font-bold mt-2">312</p>
      </div>
    </div>
  );
};

export default Dashboard;
