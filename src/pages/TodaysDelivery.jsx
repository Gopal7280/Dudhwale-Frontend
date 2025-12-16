// import React, { useState } from "react";
// import { Sun, Moon, Search, CheckCircle, Edit, Plus } from "lucide-react";
// import Sidebar from "../layouts/AdminSidebar";

// export default function TodaysDeliveries() {
//   const [slot, setSlot] = useState("morning");

//   const deliveries = [
//     {
//       id: 1,
//       name: "Test User 1",
//       product: "Dudh",
//       qty: "0.5 L",
//       price: 30,
//       slot: "Morning",
//     },
//     {
//       id: 2,
//       name: "Test User 2",
//       product: "Dudh",
//       qty: "2 L",
//       price: 120,
//       slot: "Morning",
//     },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col bg-[#F2F9FF]">
//   <Sidebar />
//       {/* HEADER */}
//       <div className="p-5 text-white bg-gradient-to-b from-[#4DB8FF] to-[#007ACD] rounded-b-3xl shadow-md">
//         <h1 className="text-2xl font-semibold">Today's Deliveries</h1>
//         <p className="mt-1 text-sm opacity-90">Welcome, Test user!</p>

//         {/* Toggle */}
//         <div className="flex rounded-2xl mt-5 bg-white/30 p-1 w-max">
//           <button
//             onClick={() => setSlot("morning")}
//             className={`flex gap-2 items-center px-4 py-2 rounded-xl text-sm font-medium ${
//               slot === "morning"
//                 ? "bg-white text-[#007ACD] shadow"
//                 : "text-white"
//             }`}
//           >
//             <Sun size={16} /> Morning
//           </button>

//           <button
//             onClick={() => setSlot("evening")}
//             className={`flex gap-2 items-center px-4 py-2 rounded-xl text-sm font-medium ${
//               slot === "evening"
//                 ? "bg-white text-[#007ACD] shadow"
//                 : "text-white"
//             }`}
//           >
//             <Moon size={16} /> Evening
//           </button>
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div className="px-4 mt-5">

//         {/* Items Left */}
//         <div className="flex items-center justify-between mb-2">
//           <h2 className="text-xl font-semibold text-[#007ACD]">
//             2 Items left
//           </h2>

//           <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-md">
//             <Sun size={18} className="text-[#007ACD]" />
//           </div>
//         </div>

//         {/* Total Summary */}
//         <div className="bg-white w-max px-6 py-4 rounded-2xl shadow">
//           <p className="text-3xl font-bold text-[#007ACD]">
//             2.50 <span className="text-gray-600 text-lg">L</span>
//           </p>
//           <p className="text-gray-500 text-sm">Total for morning</p>
//         </div>

//         {/* Search */}
//         <div className="bg-white mt-5 p-3 rounded-xl shadow-md flex items-center gap-3">
//           <Search size={18} className="text-gray-500" />
//           <input
//             placeholder="Search by customer or product..."
//             className="outline-none flex-1 text-sm"
//           />
//         </div>

//         {/* Delivery Cards */}
//         <div className="mt-5 space-y-4">
//           {deliveries.map((d) => (
//             <div
//               key={d.id}
//               className="bg-white rounded-2xl p-4 shadow-md flex justify-between items-center"
//             >
//               <div>
//                 <h3 className="font-semibold text-lg">{d.name}</h3>
//                 <p className="text-[#007ACD] font-medium -mt-1">{d.product}</p>
//                 <p className="text-gray-600 text-sm mt-1">
//                   {d.qty} (₹{d.price}) -{" "}
//                   <span className="text-red-500">{d.slot}</span>
//                 </p>
//               </div>

//               <div className="flex gap-3">
//                 <button className="h-10 w-10 rounded-full border border-[#007ACD] flex items-center justify-center">
//                   <Edit size={18} className="text-[#007ACD]" />
//                 </button>
//                 <button className="h-10 w-10 rounded-full border border-green-500 flex items-center justify-center">
//                   <CheckCircle size={20} className="text-green-500" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Floating Add Button */}
//       <button className="fixed bottom-20 right-6 bg-[#007ACD] h-16 w-16 rounded-full text-white shadow-xl flex items-center justify-center text-3xl">
//         <Plus size={32} />
//       </button>

//       {/* Bottom Navbar */}
//       <div className="fixed bottom-0 left-0 w-full bg-white shadow-md px-4 py-3 flex justify-around">
//         <NavItem label="Dashboard" active={false} />
//         <NavItem label="Today’s Del." active={true} />
//         <div className="w-12" /> {/* gap for plus button */}
//         <NavItem label="Products" active={false} />
//         <NavItem label="My Account" active={false} />
//       </div>
//     </div>
//   );
// }

// function NavItem({ label, active }) {
//   return (
//     <button
//       className={`flex flex-col items-center text-xs font-medium ${
//         active ? "text-[#007ACD]" : "text-gray-500"
//       }`}
//     >
//       <div className="h-2 w-2 rounded-full mb-1" />
//       {label}
//     </button>
//   );
// }

import React, { useState } from "react";
import { Sun, Moon, Search, CheckCircle, Edit, Plus } from "lucide-react";
import Sidebar from "../layouts/AdminSidebar";

export default function TodaysDeliveries() {
  const [slot, setSlot] = useState("morning");

  const deliveries = [
    {
      id: 1,
      name: "Test User 1",
      product: "Dudh",
      qty: "0.5 L",
      price: 30,
      slot: "Morning",
    },
    {
      id: 2,
      name: "Test User 2",
      product: "Dudh",
      qty: "2 L",
      price: 120,
      slot: "Morning",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#F2F9FF] overflow-hidden">

      {/* FIXED SIDEBAR */}
      <div className="fixed left-0 top-0 h-full w-[240px] bg-white shadow-xl z-30">
        <Sidebar />
      </div>

      {/* RIGHT SIDE CONTENT (scrollable) */}
      <div className="ml-[240px] flex-1 h-screen overflow-y-auto pb-32">

        {/* HEADER */}
        <div className="p-5 text-white bg-gradient-to-b from-[#4DB8FF] to-[#007ACD] rounded-b-3xl shadow-md">
          <h1 className="text-2xl font-semibold">Today's Deliveries</h1>
          <p className="mt-1 text-sm opacity-90">Welcome, Test user!</p>

          {/* Toggle */}
          <div className="flex rounded-2xl mt-5 bg-white/30 p-1 w-max">
            <button
              onClick={() => setSlot("morning")}
              className={`flex gap-2 items-center px-4 py-2 rounded-xl text-sm font-medium ${
                slot === "morning"
                  ? "bg-white text-[#007ACD] shadow"
                  : "text-white"
              }`}
            >
              <Sun size={16} /> Morning
            </button>

            <button
              onClick={() => setSlot("evening")}
              className={`flex gap-2 items-center px-4 py-2 rounded-xl text-sm font-medium ${
                slot === "evening"
                  ? "bg-white text-[#007ACD] shadow"
                  : "text-white"
              }`}
            >
              <Moon size={16} /> Evening
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="px-4 mt-5">

          {/* Items Left */}
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold text-[#007ACD]">
              2 Items left
            </h2>

            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-md">
              <Sun size={18} className="text-[#007ACD]" />
            </div>
          </div>

          {/* Total Summary */}
          <div className="bg-white w-max px-6 py-4 rounded-2xl shadow">
            <p className="text-3xl font-bold text-[#007ACD]">
              2.50 <span className="text-gray-600 text-lg">L</span>
            </p>
            <p className="text-gray-500 text-sm">Total for morning</p>
          </div>

          {/* Search */}
          <div className="bg-white mt-5 p-3 rounded-xl shadow-md flex items-center gap-3">
            <Search size={18} className="text-gray-500" />
            <input
              placeholder="Search by customer or product..."
              className="outline-none flex-1 text-sm"
            />
          </div>

          {/* Delivery Cards */}
          <div className="mt-5 space-y-4 mb-44">
            {deliveries.map((d) => (
              <div
                key={d.id}
                className="bg-white rounded-2xl p-4 shadow-md flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold text-lg">{d.name}</h3>
                  <p className="text-[#007ACD] font-medium -mt-1">
                    {d.product}
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    {d.qty} (₹{d.price}) -{" "}
                    <span className="text-red-500">{d.slot}</span>
                  </p>
                </div>

                <div className="flex gap-3">
                  <button className="h-10 w-10 rounded-full border border-[#007ACD] flex items-center justify-center">
                    <Edit size={18} className="text-[#007ACD]" />
                  </button>
                  <button className="h-10 w-10 rounded-full border border-green-500 flex items-center justify-center">
                    <CheckCircle size={20} className="text-green-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Add Button */}
        <button className="fixed bottom-20 right-6 bg-[#007ACD] h-16 w-16 rounded-full text-white shadow-xl flex items-center justify-center text-3xl z-40">
          <Plus size={32} />
        </button>

        {/* Bottom Navbar */}
        
      </div>
    </div>
  );
}

function NavItem({ label, active }) {
  return (
    <button
      className={`flex flex-col items-center text-xs font-medium ${
        active ? "text-[#007ACD]" : "text-gray-500"
      }`}
    >
      <div className="h-2 w-2 rounded-full mb-1" />
      {label}
    </button>
  );
}
