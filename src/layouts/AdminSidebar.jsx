// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import mealx from "../assets/mealx.png";
// import {
//   LayoutDashboard,
//   ClipboardList,
//   FileText,
//   CreditCard,
//   FileCheck,
//   Menu,
//   X,
//   Headset,
//   Users,     // 👈 new for Profiles
//   History ,
//   UserPlus            // ✅ Add this
// } from "lucide-react";
// import storage from "../utils/storage";

// const AdminSidebar = () => {
//   const location = useLocation();
//   const [isOpen, setIsOpen] = useState(false);

//   const getLinkClasses = (paths) => {
//     const isActive = Array.isArray(paths)
//       ? paths.includes(location.pathname)
//       : location.pathname === paths;
//     return `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 w-full ${
//       isActive
//         ? "bg-blue-100 text-blue-600 font-semibold border-l-4 border-blue-500"
//         : "text-gray-600 hover:text-orange-500 hover:bg-gray-100"
//     }`;
//   };

//   return (
//     <>
//       {/* Mobile Header */}
//       <div className="md:hidden flex items-center w-full bg-white px-2 py-2 fixed top-0 left-0 z-50 gap-2 shadow-md">
//         <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 cursor-pointer">
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//         <img src={mealx} alt="MealX Logo" className="h-6" />
//       </div>

//       {/* Sidebar */}
//       <div
//         className={`bg-white shadow-sm border-r fixed top-0 left-0 h-screen w-36 md:w-60 flex flex-col justify-between z-40 transform transition-transform duration-300 ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 md:relative md:flex`}
//       >
//         <div className="md:flex md:flex-col md:gap-2 md:flex-grow md:pt-4 pt-16 md:pl-4 py-1">
//           {/* <div className="hidden md:block p-6">
//             <img src={mealx} alt="MealX Logo" className="h-10 mb-1" />
//             <span className="text-xs text-orange-500 font-semibold">
//               Admin Panel
//             </span>
//           </div> */}

//           <Link to="/dashboard" className={getLinkClasses("/dashboard")}>
//             <LayoutDashboard size={20} />
//             Dashboard
//           </Link>

//      {/* <Link to="/admin-messes" className={getLinkClasses("/admin-messes")}>
//             <FileText size={20} />
//             Mess Profiles
//           </Link>

//           <Link to="/admin-customer-plans" className={getLinkClasses("/admin-customer-plans")}>
//             <ClipboardList size={20} />
//             Customer Plans
//           </Link>

//             <Link to="/admin-settlements" className={getLinkClasses("/admin-settlements")}>
//             <CreditCard size={20} />
//             Settlements
//           </Link>
// <Link to="/all/transactions" className={getLinkClasses("/all/transactions")}>
//   <History size={20} />
//   Transaction History
// </Link>

//           <Link to="/admin-linked-accounts" className={getLinkClasses("/admin-linked-accounts")}>
//             <FileCheck size={20} />
//             Linked Accounts
//           </Link>

//  <Link to="/all/profiles" className={getLinkClasses("/all/profiles")}>
//   <Users size={20} />
//   Profiles
// </Link> */}
// {storage.getItem("role") === "super-admin" && (
//   <Link to="/add-new-member" className={getLinkClasses("/add-new-member")}>
//     <UserPlus size={20} />
//     Add Team Member
//   </Link>
// )}


// {/* 
//           <Link to="/admin-support" className={getLinkClasses("/admin-support")}>
//   <Headset size={20} />
//   Support
// </Link> */}
//         </div>
//         <div className="p-4 border-t text-xs text-gray-500 text-center">
//            All rights reserved.
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminSidebar;


import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import dudhwaleLogo from "../assets/logo.jpg"; // Dudhwale logo
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  FileText,
  Menu,
  X,
  UserPlus,
  CreditCard,
  History
} from "lucide-react";
import storage from "../utils/storage";

const DudhwaleSidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const getLinkClasses = (paths) => {
    const isActive = Array.isArray(paths)
      ? paths.includes(location.pathname)
      : location.pathname === paths;
    return `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 w-full ${
      isActive
        ? "bg-blue-100 text-blue-600 font-semibold border-l-4 border-blue-500"
        : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
    }`;
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden flex items-center w-full bg-white px-2 py-2 fixed top-0 left-0 z-50 gap-2 shadow-md">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 cursor-pointer">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <img src={dudhwaleLogo} alt="Dudhwale Logo" className="h-6" />
      </div>

      {/* Sidebar */}
      <div
        className={`bg-white shadow-sm border-r fixed top-0 left-0 h-screen w-36 md:w-60 flex flex-col justify-between z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:flex`}
      >
        <div className="md:flex md:flex-col md:gap-2 md:flex-grow md:pt-4 pt-16 md:pl-4 py-1">
          <div className="hidden md:flex items-center gap-2 px-15 py-5">
            <img src={dudhwaleLogo} alt="Dudhwale Logo" className="h-10" />
          </div>

          <Link to="/dashboard" className={getLinkClasses("/dashboard")}>
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link to="/todays-deliveries" className={getLinkClasses("/todays-deliveries")}>
            <Users size={20} />
            Today's Deliveries
          </Link>

          <Link to="/orders" className={getLinkClasses("/orders")}>
            <ClipboardList size={20} />
            Orders
          </Link>

          <Link to="/products-list" className={getLinkClasses("/products-list")}>
            <FileText size={20} />
            Products
          </Link>

          <Link to="/transactions" className={getLinkClasses("/transactions")}>
            <History size={20} />
            Transactions
          </Link>

          {storage.getItem("role") === "super-admin" && (
            <Link to="/add-team-member" className={getLinkClasses("/add-team-member")}>
              <UserPlus size={20} />
              Add Team Member
            </Link>
          )}

          <Link to="/settlements" className={getLinkClasses("/settlements")}>
            <CreditCard size={20} />
            Settlements
          </Link>
        </div>

        <div className="p-4 border-t text-xs text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Dudhwale. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default DudhwaleSidebar;
