


// import React, { useEffect, useState } from "react";
// import Sidebar from "../layouts/AdminSidebar";
// import {
//   FiUsers,
//   FiDollarSign,
//   FiSearch,
//   FiChevronRight,
//   FiList,
//   FiClipboard,
// } from "react-icons/fi";

// const rotatingTexts = [
//   "Delivered At Your Doorstep !!",
//   "Fresh Milk Everyday !!",
//   "Fast • Reliable • Trusted Service",
// ];

// const customers = [
//   { id: 1, name: "Test customer", phone: "1234567809", amount: 61770, status: "due" },
//   { id: 2, name: "Test user 1", phone: "2345678901", amount: 1470, status: "due" },
//   { id: 3, name: "Test user 2", phone: "3456789012", amount: 15330, status: "due" },
//   { id: 4, name: "Demo", phone: "0987654321", amount: 0, status: "paid" },
//   { id: 5, name: "Dj", phone: "3216549870", amount: 0, status: "paid" },
// ];

// export default function Dashboard() {
//   const [bannerIndex, setBannerIndex] = useState(0);

//   useEffect(() => {
//     const t = setInterval(() => {
//       setBannerIndex((prev) => (prev + 1) % rotatingTexts.length);
//     }, 2500);
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <div className="flex bg-gray-100 min-h-screen overflow-hidden">

//       {/* FIXED SIDEBAR */}
//       <div className="w-64 fixed h-full bg-white shadow-xl z-20">
//         <Sidebar />
//       </div>

//       {/* SCROLLABLE CONTENT */}
//       <div className="flex-1 ml-64 p-8 overflow-y-auto">

//         {/* HEADER */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-blue-700">Dashboard</h1>
//           <p className="text-gray-600 mt-1 text-lg">Welcome back 👋</p>
//         </div>

//         {/* ROTATING BANNER */}
//         <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-3xl shadow-lg text-center mb-10">
//           <p className="text-2xl font-semibold transition-all duration-500">
//             {rotatingTexts[bannerIndex]}
//           </p>
//         </div>

//         {/* STATS ROW — only 2 cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
//           <div className="bg-white rounded-3xl shadow-lg p-6 border-l-4 border-blue-500 transition hover:shadow-xl">
//             <FiDollarSign className="text-blue-600 w-10 h-10 mb-3" />
//             <p className="text-gray-500">Total Amount Due</p>
//             <p className="text-4xl font-bold mt-2">₹78,570</p>
//           </div>

//           <div className="bg-white rounded-3xl shadow-lg p-6 border-l-4 border-teal-500 transition hover:shadow-xl">
//             <FiUsers className="text-teal-600 w-10 h-10 mb-3" />
//             <p className="text-gray-500">Active Customers</p>
//             <p className="text-4xl font-bold mt-2">3</p>
//           </div>

//         </div>

//         {/* QUICK ACTIONS */}
//         <div className="bg-white rounded-3xl shadow-lg p-6 mb-10">
//           <h2 className="text-2xl font-semibold text-blue-700 mb-4">Quick Actions</h2>

//           <div className="grid md:grid-cols-2 gap-4">

//             <button className="flex justify-between items-center p-5 rounded-2xl bg-blue-50 hover:bg-blue-100 transition border border-blue-100 shadow-sm">
//               <div className="flex items-center gap-3">
//                 <FiList className="text-blue-700 text-xl" />
//                 <p className="text-gray-900 font-semibold text-lg">Today's Deliveries</p>
//               </div>
//               <span className="bg-green-600 px-3 py-1 text-white rounded-xl text-sm">
//                 3
//               </span>
//             </button>

//             <button className="flex justify-between items-center p-5 rounded-2xl bg-blue-50 hover:bg-blue-100 transition border border-blue-100 shadow-sm">
//               <div className="flex items-center gap-3">
//                 <FiClipboard className="text-blue-700 text-xl" />
//                 <p className="text-gray-900 font-semibold text-lg">Order History & Status</p>
//               </div>
//               <FiChevronRight className="text-gray-600" />
//             </button>

//           </div>
//         </div>

//         {/* CUSTOMERS */}
//         <div className="bg-white rounded-3xl shadow-lg p-6 mb-20">
//           <h2 className="text-2xl font-semibold text-blue-700">Customers</h2>

//           {/* Search box */}
//           <div className="flex items-center bg-gray-100 px-4 py-3 rounded-xl gap-3 mt-4">
//             <FiSearch className="text-gray-500" />
//             <input
//               placeholder="Search customers..."
//               className="bg-transparent outline-none w-full"
//             />
//           </div>

//           {/* Table */}
//           <div className="mt-6 overflow-x-auto">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-blue-50 text-left">
//                   <th className="p-3 text-gray-600">Name</th>
//                   <th className="p-3 text-gray-600">Phone</th>
//                   <th className="p-3 text-gray-600">Amount</th>
//                   <th className="p-3"></th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {customers.map((c) => (
//                   <tr key={c.id} className="border-b hover:bg-gray-50 transition">
//                     <td className="p-3 font-semibold">{c.name}</td>
//                     <td className="p-3 text-gray-600">{c.phone}</td>
//                     <td className="p-3">
//                       {c.status === "paid" ? (
//                         <span className="text-green-600 font-semibold">Paid</span>
//                       ) : (
//                         <span className="text-red-600 font-bold">
//                           ₹{c.amount.toLocaleString()}
//                         </span>
//                       )}
//                     </td>
//                     <td className="p-3">
//                       <FiChevronRight className="text-gray-500" />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
              
//             </table>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import Sidebar from "../layouts/AdminSidebar";
// import { apiGet } from "../services/api";
// import {
//   FiUsers,
//   FiDollarSign
// } from "react-icons/fi";

// const rotatingTexts = [
//   "Delivered At Your Doorstep !!",
//   "Fresh Milk Everyday !!",
//   "Fast • Reliable • Trusted Service",
// ];

// export default function Dashboard() {
//   const [bannerIndex, setBannerIndex] = useState(0);

//   // API States
//   const [summary, setSummary] = useState({});
//   const [customerList, setCustomerList] = useState([]);

//   // Banner Rotate
//   useEffect(() => {
//     const t = setInterval(() => {
//       setBannerIndex((prev) => (prev + 1) % rotatingTexts.length);
//     }, 2500);
//     return () => clearInterval(t);
//   }, []);

//   // Fetch APIs
//   useEffect(() => {
//     fetchDashboardSummary();
//     fetchCustomerList();
//   }, []);

//   const fetchDashboardSummary = async () => {
//     try {
//       const res = await apiGet("/boss/dashboard-summary");
//       console.log("📌 Dashboard Summary:", res);

//       setSummary(res?.data || {});
//     } catch (err) {
//       console.error("Dashboard Summary Error:", err.message);
//     }
//   };

//   const fetchCustomerList = async () => {
//     try {
//       const res = await apiGet("/customer");
//       console.log("📌 Customer List:", res);

//       setCustomerList(res?.data || []);
//     } catch (err) {
//       console.error("Customer List Error:", err.message);
//     }
//   };

//   return (
//     <div className="flex bg-gray-100 min-h-screen overflow-hidden">
//       <div className="w-64 fixed h-full bg-white shadow-xl z-20">
//         <Sidebar />
//       </div>

//       <div className="flex-1 ml-64 p-8 overflow-y-auto">
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-blue-700">Dashboard</h1>
//           <p className="text-gray-600 mt-1 text-lg">Welcome back 👋</p>
//         </div>

//         {/* Rotating Banner */}
//         <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-3xl shadow-lg text-center mb-10">
//           <p className="text-2xl font-semibold transition-all duration-500">
//             {rotatingTexts[bannerIndex]}
//           </p>
//         </div>

//         {/* STATS */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//           <div className="bg-white rounded-3xl shadow-lg p-6 border-l-4 border-blue-500">
//             <FiDollarSign className="text-blue-600 w-10 h-10 mb-3" />
//             <p className="text-gray-500">Total Amount Due</p>
//             <p className="text-4xl font-bold mt-2">
//               ₹{summary?.totalDue || 0}
//             </p>
//           </div>

//           <div className="bg-white rounded-3xl shadow-lg p-6 border-l-4 border-teal-500">
//             <FiUsers className="text-teal-600 w-10 h-10 mb-3" />
//             <p className="text-gray-500">Active Customers</p>
//             <p className="text-4xl font-bold mt-2">
//               {summary?.activeCustomers || 0}
//             </p>
//           </div>
//         </div>

//         {/* Extend UI Later */}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import Sidebar from "../layouts/AdminSidebar";
import { apiGet } from "../services/api";
import {
  FiUsers,
  FiDollarSign,
  FiSearch,
  FiChevronRight,
  FiList,
  FiClipboard,
} from "react-icons/fi";

const rotatingTexts = [
  "Delivered At Your Doorstep !!",
  "Fresh Milk Everyday !!",
  "Fast • Reliable • Trusted Service",
];

export default function Dashboard() {
  const [bannerIndex, setBannerIndex] = useState(0);

  const [summary, setSummary] = useState({});
  const [customerList, setCustomerList] = useState([]);

  // Banner rotation
  useEffect(() => {
    const t = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2500);
    return () => clearInterval(t);
  }, []);

  // Fetch API Data
  useEffect(() => {
    fetchDashboardSummary();
    fetchCustomerList();
  }, []);

  const fetchDashboardSummary = async () => {
    try {
      const res = await apiGet("/boss/dashboard-summary");
      setSummary(res?.data || {});
    } catch (err) {
      console.error("Dashboard Summary Error:", err.message);
    }
  };

  const fetchCustomerList = async () => {
    try {
      const res = await apiGet("/customer");
      setCustomerList(res?.data || []);
    } catch (err) {
      console.error("Customer List Error:", err.message);
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen overflow-hidden">
      <div className="w-64 fixed h-full bg-white shadow-xl z-20">
        <Sidebar />
      </div>

      <div className="flex-1 ml-64 p-8 overflow-y-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-700">Dashboard</h1>
          <p className="text-gray-600 mt-1 text-lg">Welcome back 👋</p>
        </div>

        {/* Rotating Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-3xl shadow-lg text-center mb-10">
          <p className="text-2xl font-semibold transition-all duration-500">
            {rotatingTexts[bannerIndex]}
          </p>
        </div>

        {/* STATS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-3xl shadow-lg p-6 border-l-4 border-blue-500 transition hover:shadow-xl">
            <FiDollarSign className="text-blue-600 w-10 h-10 mb-3" />
            <p className="text-gray-500">Total Amount Due</p>
            <p className="text-4xl font-bold mt-2">
              ₹{summary?.totalAmountDue?.toLocaleString() || 0}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 border-l-4 border-teal-500 transition hover:shadow-xl">
            <FiUsers className="text-teal-600 w-10 h-10 mb-3" />
            <p className="text-gray-500">Active Customers</p>
            <p className="text-4xl font-bold mt-2">
              {summary?.totalCustomers || 0}
            </p>
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Quick Actions
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <button className="flex justify-between items-center p-5 rounded-2xl bg-blue-50 hover:bg-blue-100 transition border border-blue-100 shadow-sm">
              <div className="flex items-center gap-3">
                <FiList className="text-blue-700 text-xl" />
                <p className="text-gray-900 font-semibold text-lg">
                  Today's Deliveries
                </p>
              </div>
              <span className="bg-green-600 px-3 py-1 text-white rounded-xl text-sm">
                {summary?.pendingDeliveries || 0}
              </span>
            </button>

            <button className="flex justify-between items-center p-5 rounded-2xl bg-blue-50 hover:bg-blue-100 transition border border-blue-100 shadow-sm">
              <div className="flex items-center gap-3">
                <FiClipboard className="text-blue-700 text-xl" />
                <p className="text-gray-900 font-semibold text-lg">
                  Order History & Status
                </p>
              </div>
              <FiChevronRight className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* CUSTOMERS */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-20">
          <h2 className="text-2xl font-semibold text-blue-700">Customers</h2>

          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-xl gap-3 mt-4">
            <FiSearch className="text-gray-500" />
            <input
              placeholder="Search customers..."
              className="bg-transparent outline-none w-full"
            />
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-50 text-left">
                  <th className="p-3 text-gray-600">Name</th>
                  <th className="p-3 text-gray-600">Phone</th>
                  <th className="p-3 text-gray-600">Amount</th>
                  <th className="p-3"></th>
                </tr>
              </thead>

              <tbody>
                {customerList.map((c) => (
                  <tr
                    key={c.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-3 font-semibold">{c.name}</td>
                    <td className="p-3 text-gray-600">{c.phone}</td>
                    <td className="p-3">
                      {c.amount === 0 ? (
                        <span className="text-green-600 font-semibold">Paid</span>
                      ) : (
                        <span className="text-red-600 font-bold">
                          ₹{c.amount.toLocaleString()}
                        </span>
                      )}
                    </td>
                    <td className="p-3">
                      <FiChevronRight className="text-gray-500" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
