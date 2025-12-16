// import React from "react";
// import { motion } from "framer-motion";
// import { Play } from "lucide-react";
// import milk from "../assets/milk.png";

// export default function LandingPage() {
//   return (
//     <div className="min-h-screen w-full bg-gradient-to-b from-blue-600 to-blue-400 text-white font-sans overflow-x-hidden">
//       {/* NAVBAR */}
//       <nav className="w-full flex items-center justify-between px-8 py-5">
//         {/* Logo Placeholder */}
//         <div className="text-3xl font-extrabold tracking-wide text-white drop-shadow-lg">
//           DOODHWALE
//         </div>

//         <div className="flex items-center space-x-6 text-white font-medium">
//           <button className="hover:text-gray-200 transition">Login</button>
//           <button className="px-5 py-2 bg-white text-blue-600 rounded-full shadow-md hover:bg-gray-100 transition">
//             Get Started
//           </button>
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <section className="px-8 lg:px-20 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//         {/* LEFT CONTENT */}
//         <div className="text-left">
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg"
//           >
//             Fresh & Pure Milk<br />Delivered to Your Doorstep.
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.7 }}
//             className="mt-5 text-lg text-blue-100 max-w-xl"
//           >
//             Doodhwale brings you fresh milk directly from trusted dairy owners. Reliable, pure, and delivered every morning.
//           </motion.p>

//           {/* CTA BUTTONS */}
//           <div className="mt-8 flex items-center space-x-5">
//             <button className="px-7 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition">
//               Start Now
//             </button>

//             {/* Playstore button */}
//             <a
//               href="#" // replace with real link later
//               className="flex items-center space-x-2 px-5 py-3 bg-black/20 backdrop-blur-md rounded-xl hover:bg-black/30 transition"
//             >
//               <Play className="w-5 h-5" />
//               <span className="text-white font-semibold">Get on Playstore</span>
//             </a>
//           </div>
//         </div>

//         {/* RIGHT IMAGE / 3D STYLE */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="w-full flex justify-center space-x-6"
//         >
//           <img
//             src="https://cdn.pixabay.com/photo/2017//06/19/15/milk-1951287_1280.png"
//             alt="Milk Bottle 1"
//             className="w-40 lg:w-52 drop-shadow-2xl"
//           />
//           <img
//             src="https://cdn.pixabay.com/photo/2016/03/05/19/02/bottle-1239363_1280.png"
//             alt="Milk Bottle 2"
//             className="w-40 lg:w-52 drop-shadow-2xl"
//           />
//           <img
//             src="https://cdn.pixabay.com/photo/2017/08/10/07/32/milk-2623055_1280.jpg"
//             alt="Milk Bottle 3"
//             className="w-40 lg:w-52 drop-shadow-2xl"
//           />
//         </motion.div>
//       </section>

//       {/* EXTRA HIGHLIGHT SECTION */
//       <section className="px-10 py-16 bg-blue-100 text-gray-900">
//         <h2 className="text-4xl font-bold text-center mb-10 text-blue-800">Why Choose Us?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           <div className="p-8 bg-white rounded-2xl shadow-xl text-center">
//             <img src="https://cdn.pixabay.com/photo/2014/04/03/11/07/cow-312168_1280.png" className="w-24 mx-auto mb-4" />
//             <h3 className="text-2xl font-semibold mb-3">Farm Fresh</h3>
//             <p className="text-gray-600">Milk sourced straight from farms—no middlemen, no processing.</p>
//           </div>
//           <div className="p-8 bg-white rounded-2xl shadow-xl text-center">
//             <img src="https://cdn.pixabay.com/photo/2013/07/12/19/26/delivery-154173_1280.png" className="w-24 mx-auto mb-4" />
//             <h3 className="text-2xl font-semibold mb-3">Fast Delivery</h3>
//             <p className="text-gray-600">Delivered at your doorstep before you wake up.</p>
//           </div>
//           <div className="p-8 bg-white rounded-2xl shadow-xl text-center">
//             <img src="https://cdn.pixabay.com/photo/2017/06/10/07/18/phone-2389218_1280.png" className="w-24 mx-auto mb-4" />
//             <h3 className="text-2xl font-semibold mb-3">Easy to Manage</h3>
//             <p className="text-gray-600">Pause, resume, or adjust quantity anytime.</p>
//           </div>
//         </div>
//       </section>

//       /* ABOUT SECTION */}
//       <section className="bg-white text-gray-800 rounded-t-3xl mt-10 px-10 py-16">
//         <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">About Us</h2>
//         <p className="text-center max-w-3xl mx-auto text-lg text-gray-600">
//           Doodhwale is your trusted partner for fresh dairy delivery. We connect customers directly with dairy owners, ensuring purity, freshness, and timely doorstep delivery.
//         </p>
//       </section>

//       {/* FEATURES SECTION */}
//       <section className="px-10 py-16 bg-gray-50 text-gray-800">
//         <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">Features</h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           <div className="p-8 bg-white rounded-2xl shadow-xl text-center hover:shadow-2xl transition">
//             <h3 className="text-2xl font-semibold mb-3">Pure & Fresh Milk</h3>
//             <p className="text-gray-600">Directly sourced from trusted dairy owners for unmatched purity.</p>
//           </div>

//           <div className="p-8 bg-white rounded-2xl shadow-xl text-center hover:shadow-2xl transition">
//             <h3 className="text-2xl font-semibold mb-3">Doorstep Delivery</h3>
//             <p className="text-gray-600">We ensure early morning delivery every day at your convenience.</p>
//           </div>

//           <div className="p-8 bg-white rounded-2xl shadow-xl text-center hover:shadow-2xl transition">
//             <h3 className="text-2xl font-semibold mb-3">Easy Ordering</h3>
//             <p className="text-gray-600">Order in seconds with a simple and smooth user experience.</p>
//           </div>
//         </div>
//       </section>

//       {/* CONTACT SECTION */}
//       <section className="px-10 py-16 bg-white text-gray-800">
//         <h2 className="text-4xl font-bold text-center mb-8 text-blue-700">Contact Us</h2>
//         <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">
//           Have questions or need help? Reach out anytime, we’re here for you.
//         </p>

//         <div className="text-center">
//           <p className="text-lg font-medium">📞 +91 90000 00000</p>
//           <p className="text-lg font-medium">✉️ support@doodhwale.in</p>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-blue-700 text-white text-center py-6">
//         <p>© {new Date().getFullYear()} Doodhwale. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// }

// import React from "react";
// import { motion } from "framer-motion";
// import { Play } from "lucide-react";

// export default function LandingPage() {
//   return (
//     <div className="min-h-screen w-full bg-gradient-to-b from-blue-600 to-blue-400 text-white font-sans overflow-x-hidden">
//       {/* NAVBAR */}
//       <nav className="w-full flex items-center justify-between px-8 py-5">
//         {/* Logo Placeholder */}
//         <div className="text-3xl font-extrabold tracking-wide text-white drop-shadow-lg">
//           DOODHWALE
//         </div>

//         <div className="flex items-center space-x-6 text-white font-medium">
//           <button className="hover:text-gray-200 transition">Login</button>
//           <button className="px-5 py-2 bg-white text-blue-600 rounded-full shadow-md hover:bg-gray-100 transition">
//             Get Started
//           </button>
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <section className="px-8 lg:px-20 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//         {/* LEFT CONTENT */}
//         <div className="text-left">
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg"
//           >
//             Fresh & Pure Milk<br />Delivered to Your Doorstep.
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.7 }}
//             className="mt-5 text-lg text-blue-100 max-w-xl"
//           >
//             Doodhwale brings you fresh milk directly from trusted dairy owners. Reliable, pure, and delivered every morning.
//           </motion.p>

//           {/* CTA BUTTONS */}
//           <div className="mt-8 flex items-center space-x-5">
//             <button className="px-7 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition">
//               Start Now
//             </button>

//             {/* Playstore button */}
//             <a
//               href="#" // replace with real link later
//               className="flex items-center space-x-2 px-5 py-3 bg-black/20 backdrop-blur-md rounded-xl hover:bg-black/30 transition"
//             >
//               <Play className="w-5 h-5" />
//               <span className="text-white font-semibold">Get on Playstore</span>
//             </a>
//           </div>
//         </div>

//         {/* RIGHT IMAGE / 3D STYLE */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="w-full flex justify-center"
//         >
//           <img
//             src="https://cdn3d.iconscout.com/3d/premium/thumb/milk-bottle-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--container-animal-product-packaging-food-and-beverage-illustrations-1829321.png"
//             alt="Milk Illustration"
//             className="w-72 lg:w-96 drop-shadow-2xl"
//           />
//         </motion.div>
//       </section>

//       {/* EXTRA HIGHLIGHT SECTION */
//       <section className="px-10 py-16 bg-blue-100 text-gray-900">
//         <h2 className="text-4xl font-bold text-center mb-10 text-blue-800">Why Choose Us?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           <div className="p-8 bg-white rounded-2xl shadow-xl text-center">
//             <img src="https://cdn.pixabay.com/photo/2014/04/03/11/07/cow-312168_1280.png" className="w-24 mx-auto mb-4" />
//             <h3 className="text-2xl font-semibold mb-3">Farm Fresh</h3>
//             <p className="text-gray-600">Milk sourced straight from farms—no middlemen, no processing.</p>
//           </div>
//           <div className="p-8 bg-white rounded-2xl shadow-xl text-center">
//             <img src="https://cdn.pixabay.com/photo/2013/07/12/19/26/delivery-154173_1280.png" className="w-24 mx-auto mb-4" />
//             <h3 className="text-2xl font-semibold mb-3">Fast Delivery</h3>
//             <p className="text-gray-600">Delivered at your doorstep before you wake up.</p>
//           </div>
//           <div className="p-8 bg-white rounded-2xl shadow-xl text-center">
//             <img src="https://cdn.pixabay.com/photo/2017/06/10/07/18/phone-2389218_1280.png" className="w-24 mx-auto mb-4" />
//             <h3 className="text-2xl font-semibold mb-3">Easy to Manage</h3>
//             <p className="text-gray-600">Pause, resume, or adjust quantity anytime.</p>
//           </div>
//         </div>
//       </section>

//       /* ABOUT SECTION */}
//       <section className="bg-white text-gray-800 rounded-t-3xl mt-10 px-10 py-16">
//         <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">About Us</h2>
//         <p className="text-center max-w-3xl mx-auto text-lg text-gray-600">
//           Doodhwale is your trusted partner for fresh dairy delivery. We connect customers directly with dairy owners, ensuring purity, freshness, and timely doorstep delivery.
//         </p>
//       </section>

//       {/* FEATURES SECTION */}
//       <section className="px-10 py-16 bg-gray-50 text-gray-800">
//         <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">Features</h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           <div className="p-8 bg-white rounded-2xl shadow-xl text-center hover:shadow-2xl transition">
//             <h3 className="text-2xl font-semibold mb-3">Pure & Fresh Milk</h3>
//             <p className="text-gray-600">Directly sourced from trusted dairy owners for unmatched purity.</p>
//           </div>

//           <div className="p-8 bg-white rounded-2xl shadow-xl text-center hover:shadow-2xl transition">
//             <h3 className="text-2xl font-semibold mb-3">Doorstep Delivery</h3>
//             <p className="text-gray-600">We ensure early morning delivery every day at your convenience.</p>
//           </div>

//           <div className="p-8 bg-white rounded-2xl shadow-xl text-center hover:shadow-2xl transition">
//             <h3 className="text-2xl font-semibold mb-3">Easy Ordering</h3>
//             <p className="text-gray-600">Order in seconds with a simple and smooth user experience.</p>
//           </div>
//         </div>
//       </section>

//       {/* CONTACT SECTION */}
//       <section className="px-10 py-16 bg-white text-gray-800">
//         <h2 className="text-4xl font-bold text-center mb-8 text-blue-700">Contact Us</h2>
//         <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">
//           Have questions or need help? Reach out anytime, we’re here for you.
//         </p>

//         <div className="text-center">
//           <p className="text-lg font-medium">📞 +91 90000 00000</p>
//           <p className="text-lg font-medium">✉️ support@doodhwale.in</p>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-blue-700 text-white text-center py-6">
//         <p>© {new Date().getFullYear()} Doodhwale. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// }

// import React from "react";
// import { motion } from "framer-motion";
// import { Play } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/logo1.jpg";

// export default function LandingPage() {
//     const navigate = useNavigate(); // ✅ IMPORTANT

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-b from-blue-600 to-blue-400 text-white font-sans overflow-x-hidden">
//       {/* NAVBAR */}
//       <nav className="w-full flex items-center justify-between px-8 py-5">
//         {/* Logo Placeholder */}
//         {/* <div className="text-3xl font-extrabold tracking-wide text-white drop-shadow-lg">
//           DOODHWALE
//         </div> */}
//         <img src={logo} alt="Doodhwale Logo" className="w-32"/>

//         <div className="flex items-center space-x-6 text-white font-medium">
//           <button 
//             onClick={() => navigate('/login')}
//           className="hover:text-gray-200 transition">Login</button>
//           <button             onClick={() => navigate('/login')}
//  className="px-5 py-2 bg-white text-blue-600 rounded-full shadow-md hover:bg-gray-100 transition">
//             Get Started
//           </button>
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <section className="px-8 lg:px-20 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//         {/* LEFT CONTENT */}
//         <div className="text-left">
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg"
//           >
//             Fresh & Pure Milk<br />Delivered to Your Doorstep.
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.7 }}
//             className="mt-5 text-lg text-blue-100 max-w-xl"
//           >
//             Doodhwale brings you fresh milk directly from trusted dairy owners. Reliable, pure, and delivered every morning.
//           </motion.p>

//           {/* CTA BUTTONS */}
//           <div className="mt-8 flex items-center space-x-5">
//             <button className="px-7 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition">
//               Start Now
//             </button>

//             {/* Playstore button */}
//             <a
//               href="#" // replace with real link later
//               className="flex items-center space-x-2 px-5 py-3 bg-black/20 backdrop-blur-md rounded-xl hover:bg-black/30 transition"
//             >
//               <Play className="w-5 h-5" />
//               <span className="text-white font-semibold">Get on Playstore</span>
//             </a>
//           </div>
//         </div>

//         {/* RIGHT IMAGE / 3D STYLE */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="w-full flex justify-center"
//         >
//           <img
//             src="https://img.icons8.com/3d-fluency/512/milk-bottle.png"
//             alt="Milk Illustration"
//             className="w-72 lg:w-96 drop-shadow-2xl"
//           />
//         </motion.div>
//       </section>

//       {/* EXTRA HIGHLIGHT SECTION */
//       <section className="px-10 py-16 bg-blue-100 text-gray-900">
//         <h2 className="text-4xl font-bold text-center mb-10 text-blue-800">Why Choose Us?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           <div className="p-8 bg-white rounded-2xl shadow-xl text-center">
//             <img src="https://cdn.pixabay.com/photo/2014/04/03/11/07/cow-312168_1280.png" className="w-24 mx-auto mb-4" />
//             <h3 className="text-2xl font-semibold mb-3">Farm Fresh</h3>
//             <p className="text-gray-600">Milk sourced straight from farms—no middlemen, no processing.</p>
//           </div>
//           <div className="p-8 bg-white rounded-2xl shadow-xl text-center">
//             <img src="https://cdn.pixabay.com/photo/2013/07/12/19/26/delivery-154173_1280.png" className="w-24 mx-auto mb-4" />
//             <h3 className="text-2xl font-semibold mb-3">Fast Delivery</h3>
//             <p className="text-gray-600">Delivered at your doorstep before you wake up.</p>
//           </div>
//           <div className="p-8 bg-white rounded-2xl shadow-xl text-center">
//             <img src="https://cdn.pixabay.com/photo/2017/06/10/07/18/phone-2389218_1280.png" className="w-24 mx-auto mb-4" />
//             <h3 className="text-2xl font-semibold mb-3">Easy to Manage</h3>
//             <p className="text-gray-600">Pause, resume, or adjust quantity anytime.</p>
//           </div>
//         </div>
//       </section>

//       /* ABOUT SECTION */}
//       <section className="bg-white text-gray-800 rounded-t-3xl mt-10 px-10 py-16">
//         <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">About Us</h2>
//         <p className="text-center max-w-3xl mx-auto text-lg text-gray-600">
//           Doodhwale is your trusted partner for fresh dairy delivery. We connect customers directly with dairy owners, ensuring purity, freshness, and timely doorstep delivery.
//         </p>
//       </section>

//       {/* FEATURES SECTION */}
//       <section className="px-10 py-16 bg-gray-50 text-gray-800">
//         <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">Features</h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           <div className="p-8 bg-white rounded-2xl shadow-xl text-center hover:shadow-2xl transition">
//             <h3 className="text-2xl font-semibold mb-3">Pure & Fresh Milk</h3>
//             <p className="text-gray-600">Directly sourced from trusted dairy owners for unmatched purity.</p>
//           </div>

//           <div className="p-8 bg-white rounded-2xl shadow-xl text-center hover:shadow-2xl transition">
//             <h3 className="text-2xl font-semibold mb-3">Doorstep Delivery</h3>
//             <p className="text-gray-600">We ensure early morning delivery every day at your convenience.</p>
//           </div>

//           <div className="p-8 bg-white rounded-2xl shadow-xl text-center hover:shadow-2xl transition">
//             <h3 className="text-2xl font-semibold mb-3">Easy Ordering</h3>
//             <p className="text-gray-600">Order in seconds with a simple and smooth user experience.</p>
//           </div>
//         </div>
//       </section>

//       {/* CONTACT SECTION */}
//       <section className="px-10 py-16 bg-white text-gray-800">
//         <h2 className="text-4xl font-bold text-center mb-8 text-blue-700">Contact Us</h2>
//         <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">
//           Have questions or need help? Reach out anytime, we’re here for you.
//         </p>

//         <div className="text-center">
//           <p className="text-lg font-medium">📞 +91 90000 00000</p>
//           <p className="text-lg font-medium">✉️ support@doodhwale.in</p>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-blue-700 text-white text-center py-6">
//         <p>© {new Date().getFullYear()} Doodhwale. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// }

// import React from "react";
// import { motion } from "framer-motion";
// import { Play } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/logo1.jpg";

// export default function LandingPage() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen w-full bg-white text-gray-800 font-sans overflow-x-hidden">

//       <nav className="w-full flex items-center justify-between px-10 py-6 bg-white shadow-sm">
//         <img src={logo} className="w-32 rounded-md" />

//         <div className="flex items-center space-x-6 text-blue-700">
//           <button onClick={() => navigate("/login")} className="hover:text-blue-600 transition">
//             Login
//           </button>

//           <button
//             onClick={() => navigate("/login")}
//             className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
//           >
//             Get Started
//           </button>
//         </div>
//       </nav>

//       <section className="px-10 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
//         <div>
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-5xl lg:text-7xl font-extrabold leading-tight text-blue-700"
//           >
//             Pure. Fresh. Daily.<br />
//             Your Milk, Delivered Right.
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.7 }}
//             className="mt-6 text-lg text-gray-600 max-w-xl"
//           >
//             Dudhwale brings farm-fresh milk to your doorstep every morning. Zero mixing, zero compromise — only pure dairy from trusted farms.
//           </motion.p>

//           <div className="mt-8 flex items-center space-x-5">
//             <button className="px-7 py-3 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition">
//               Subscribe Now
//             </button>

//             <a className="flex items-center space-x-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-900 transition">
//               <Play className="w-5 h-5" />
//               <span className="text-sm">Get on Playstore</span>
//             </a>
//           </div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.85 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="flex justify-center"
//         >
//           <img
//             src="https://img.icons8.com/3d-fluency/512/milk-carton.png"
//             className="w-80 lg:w-[420px]"
//           />
//         </motion.div>
//       </section>

//       <section className="px-10 py-16 bg-blue-50 text-gray-800">
//         <h2 className="text-4xl font-bold text-center mb-14 text-blue-700">Why Dudhwale?</h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

//           <div className="p-8 bg-white rounded-2xl shadow-xl text-center">
//             <img
//               src="https://img.icons8.com/3d-fluency/512/cow.png"
//               className="w-28 mx-auto mb-4"
//             />
//             <h3 className="text-2xl font-semibold">Farm Fresh</h3>
//             <p className="mt-2 text-gray-600">Milk directly sourced from trusted local dairy farms.</p>
//           </div>

//           <div className="p-8 bg-white rounded-2xl shadow-xl text-center">
//             <img
//               src="https://img.icons8.com/3d-fluency/512/delivery.png"
//               className="w-28 mx-auto mb-4"
//             />
//             <h3 className="text-2xl font-semibold">Early Morning Delivery</h3>
//             <p className="mt-2 text-gray-600">Delivered fresh before sunrise, right at your doorstep.</p>
//           </div>

//           <div className="p-8 bg-white rounded-2xl shadow-xl text-center">
//             <img
//               src="https://img.icons8.com/3d-fluency/512/smartphone.png"
//               className="w-28 mx-auto mb-4"
//             />
//             <h3 className="text-2xl font-semibold">Flexible Subscriptions</h3>
//             <p className="mt-2 text-gray-600">Pause, resume or change quantity anytime.</p>
//           </div>
//         </div>
//       </section>

//       <section className="px-10 py-20 bg-white">
//         <h2 className="text-4xl font-bold text-center text-blue-700 mb-14">How It Works</h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

//           <div className="text-center p-8">
//             <img
//               src="https://img.icons8.com/3d-fluency/512/online-shop.png"
//               className="w-32 mx-auto mb-4"
//             />
//             <h3 className="text-xl font-semibold text-gray-800">1. Choose a Plan</h3>
//             <p className="mt-2 text-gray-600">Select your daily or weekly milk requirement.</p>
//           </div>

//           <div className="text-center p-8">
//             <img
//               src="https://img.icons8.com/3d-fluency/512/task.png"
//               className="w-32 mx-auto mb-4"
//             />
//             <h3 className="text-xl font-semibold text-gray-800">2. Set Delivery Time</h3>
//             <p className="mt-2 text-gray-600">We bring it right when you need it.</p>
//           </div>

//           <div className="text-center p-8">
//             <img
//               src="https://img.icons8.com/3d-fluency/512/home.png"
//               className="w-32 mx-auto mb-4"
//             />
//             <h3 className="text-xl font-semibold text-gray-800">3. Enjoy Pure Milk</h3>
//             <p className="mt-2 text-gray-600">Fresh, unadulterated milk daily.</p>
//           </div>
//         </div>
//       </section>

//       <section className="px-10 py-20 bg-blue-50">
//         <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
//           Customer Stories
//         </h2>

//         <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

//           <div className="p-8 bg-white rounded-2xl shadow-xl">
//             <p className="text-gray-600 text-lg leading-relaxed">
//               “Dudhwale has completely changed our morning routine. The quality of milk is exceptional and delivery is always on time.”
//             </p>
//             <h4 className="mt-4 font-semibold text-blue-700">– Priya Sharma</h4>
//           </div>

//           <div className="p-8 bg-white rounded-2xl shadow-xl">
//             <p className="text-gray-600 text-lg leading-relaxed">
//               “Reliable, fresh and trustworthy. Perfect for families who want pure milk every day.”
//             </p>
//             <h4 className="mt-4 font-semibold text-blue-700">– Ramesh Kumar</h4>
//           </div>

//         </div>
//       </section>

//       <section className="px-10 py-16 bg-white">
//         <h2 className="text-4xl font-bold text-center text-blue-700 mb-6">
//           Contact Us
//         </h2>

//         <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
//           Have questions? We’re here for you every day.
//         </p>

//         <div className="text-center space-y-1">
//           <p className="text-lg font-medium">📞 +91 90000 00000</p>
//           <p className="text-lg font-medium">✉️ support@dudhwale.in</p>
//         </div>
//       </section>

//       <footer className="bg-blue-700 text-white text-center py-6">
//         © {new Date().getFullYear()} Dudhwale. All Rights Reserved.
//       </footer>
//     </div>
//   );
// }

// import React from "react";
// import { motion } from "framer-motion";
// import { Play, Milk, Truck, Gift, PhoneCall, Award, Droplets } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/logo1.jpg";

// export default function LandingPage() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 to-white text-gray-800 font-sans overflow-x-hidden">

//       {/* NAVBAR */}
//       <nav className="w-full flex items-center justify-between px-10 py-6 bg-white backdrop-blur-xl shadow-sm sticky top-0 z-40">
//         <img src={logo} className="w-32 rounded-md shadow" />

//         <div className="flex items-center space-x-6 text-blue-700 font-medium">
//           <button onClick={() => navigate("/login")} className="hover:text-blue-600 transition">
//             Login
//           </button>

//           <button
//             onClick={() => navigate("/login")}
//             className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-md"
//           >
//             Get Started
//           </button>
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <section className="px-10 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
//         <div>
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-6xl lg:text-7xl font-extrabold leading-tight text-blue-700 drop-shadow-sm"
//           >
//             Pure. Fresh. Daily.<br />
//             Fresh Milk At Your Doorstep.
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.7 }}
//             className="mt-6 text-lg text-gray-600 max-w-xl"
//           >
//             Dudhwale delivers 100% pure, farm-fresh cow milk and dairy products with zero preservatives, straight from ethical farmers.
//           </motion.p>

//           <div className="mt-10 flex items-center space-x-5">
//             <button className="px-7 py-3 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition shadow-lg">
//               Subscribe Now
//             </button>

//             <a
//               href="https://play.google.com/store/apps/details?id=com.dairyboss&hl=en"
//               target="_blank"
//               className="flex items-center space-x-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-900 transition shadow-lg"
//             >
//               <Play className="w-5 h-5" />
//               <span className="text-sm">Get on Playstore</span>
//             </a>
//           </div>
//         </div>

//         {/* 3D Illustrations */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.85 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="flex justify-center relative"
//         >
//           <img
//             src="https://img.icons8.com/3d-fluency/512/cow.png"
//             className="w-96 lg:w-[480px] drop-shadow-2xl animate-float"
//           />
//         </motion.div>
//       </section>

//       {/* KEY FEATURES */}
//       <section className="px-10 py-20 bg-blue-50 text-gray-800">
//         <h2 className="text-5xl font-bold text-center mb-14 text-blue-700 drop-shadow-sm">Why Choose Dudhwale?</h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">

//           <div className="p-10 bg-white rounded-2xl shadow-xl hover:scale-105 transition text-center">
//             <img src="https://img.icons8.com/3d-fluency/512/cow.png" className="w-32 mx-auto mb-4" />
//             <h3 className="text-2xl font-semibold">100% Pure Cow Milk</h3>
//             <p className="mt-2 text-gray-600">Fresh milk sourced every morning from certified farmers.</p>
//           </div>

//           <div className="p-10 bg-white rounded-2xl shadow-xl hover:scale-105 transition text-center">
//             <img src="https://img.icons8.com/3d-fluency/512/delivery.png" className="w-32 mx-auto mb-4" />
//             <h3 className="text-2xl font-semibold">Early Morning Delivery</h3>
//             <p className="mt-2 text-gray-600">Delivered before sunrise, straight to your home.</p>
//           </div>

//           <div className="p-10 bg-white rounded-2xl shadow-xl hover:scale-105 transition text-center">
//             <img src="https://img.icons8.com/3d-fluency/512/dairy-product.png" className="w-32 mx-auto mb-4" />
//             <h3 className="text-2xl font-semibold">Dairy Products</h3>
//             <p className="mt-2 text-gray-600">Paneer, Ghee, Curd & more — all farm fresh.</p>
//           </div>

//         </div>
//       </section>

//       {/* HOW IT WORKS */}
//       <section className="px-10 py-20 bg-white">
//         <h2 className="text-5xl font-bold text-center text-blue-700 mb-14 drop-shadow-sm">How It Works</h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto text-center">

//           <div className="p-8 hover:scale-105 transition">
//             <img src="https://img.icons8.com/3d-fluency/512/online-shop.png" className="w-32 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-gray-800">1. Pick Your Plan</h3>
//             <p className="mt-2 text-gray-600">Daily, weekly, or monthly milk package.</p>
//           </div>

//           <div className="p-8 hover:scale-105 transition">
//             <img src="https://img.icons8.com/3d-fluency/512/address.png" className="w-32 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-gray-800">2. Set Delivery Address</h3>
//             <p className="mt-2 text-gray-600">We deliver early morning every day.</p>
//           </div>

//           <div className="p-8 hover:scale-105 transition">
//             <img src="https://img.icons8.com/3d-fluency/512/home.png" className="w-32 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-gray-800">3. Enjoy Fresh Milk</h3>
//             <p className="mt-2 text-gray-600">Pure, safe and chemical-free dairy.</p>
//           </div>

//         </div>
//       </section>

//       {/* ABOUT US */}
//       <section className="px-10 py-20 bg-blue-50">
//         <h2 className="text-5xl font-bold text-center text-blue-700 mb-10 drop-shadow-sm">About Us</h2>

//         <div className="max-w-5xl mx-auto text-center text-lg text-gray-700 leading-relaxed">
//           Dudhwale is a modern dairy delivery platform that connects ethical farmers to urban families.
//           We ensure pure milk, transparent sourcing and fast delivery so every home enjoys
//           trustworthy dairy every single day.
//         </div>
//       </section>

//       {/* CONTACT */}
//       <section className="px-10 py-20 bg-white">
//         <h2 className="text-4xl font-bold text-center text-blue-700 mb-6">Contact Us</h2>

//         <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
//           Need help? Our team is available every day.
//         </p>

//         <div className="text-center space-y-1 text-lg font-medium">
//           <p>📞 +91 90000 00000</p>
//           <p>✉️ support@dudhwale.in</p>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-blue-700 text-white text-center py-6 text-lg">
//         © {new Date().getFullYear()} Dudhwale. All Rights Reserved.
//       </footer>

//     </div>
//   );
// }

// import React from "react";
// import { motion } from "framer-motion";
// import { Play, Truck, Award, Droplets, ShoppingCart } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/logo1.jpg";

// export default function LandingPage() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-b from-white via-blue-50 to-white text-gray-800 font-sans overflow-x-hidden">

//       {/* NAVBAR */}
//       <nav className="w-full flex items-center justify-between px-6 md:px-12 py-5 bg-white/70 backdrop-blur-md sticky top-0 z-40 shadow-sm">
//         <div className="flex items-center gap-4">
//           <img src={logo} alt="Dudhwale" className="w-32 md:w-40 rounded-md shadow-sm" />
//         </div>

//         <div className="flex items-center gap-6 md:gap-8 text-blue-700 font-medium">
//           <button onClick={() => navigate("/login")} className="hidden md:inline hover:text-blue-600 transition">
//             Login
//           </button>

//           <button
//             onClick={() => navigate("/login")}
//             className="px-4 md:px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-md flex items-center gap-2"
//           >
//             <ShoppingCart className="w-4 h-4" />
//             Get Started
//           </button>
//         </div>
//       </nav>

//       {/* HERO */}
//       <header className="px-6 md:px-12 pt-12 pb-8 lg:pb-20">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//           {/* Left */}
//           <div className="space-y-6">
//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               className="text-4xl md:text-6xl font-extrabold leading-tight text-blue-800"
//             >
//               Fresh, Pure Milk —
//               <span className="text-indigo-600"> Delivered Daily</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.25, duration: 0.7 }}
//               className="text-lg md:text-xl text-gray-600 max-w-xl"
//             >
//               Dudhwale connects you directly with ethical farmers — farm‑fresh cow milk and dairy products, delivered before breakfast.
//             </motion.p>

//             <div className="flex flex-wrap gap-4 items-center">
//               <button
//                 onClick={() => navigate("/login")}
//                 className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-lg font-semibold shadow-xl hover:scale-[1.02] transition"
//               >
//                 Subscribe Now
//               </button>

//               <a
//                 href="https://play.google.com/store/apps/details?id=com.dairyboss&hl=en"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center gap-3 px-5 py-3 bg-black text-white rounded-xl hover:bg-gray-900 transition shadow"
//               >
//                 <Play className="w-4 h-4" />
//                 Get on Playstore
//               </a>
//             </div>

//             {/* quick feature badges */}
//             <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-md">
//               <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow">
//                 <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 7v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
//                 <div>
//                   <div className="text-sm font-semibold">Daily Delivery</div>
//                   <div className="text-xs text-gray-500">Before 8 AM</div>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow">
//                 <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="#06B6D4" strokeWidth="1.5"/></svg>
//                 <div>
//                   <div className="text-sm font-semibold">Farm Sourced</div>
//                   <div className="text-xs text-gray-500">Trusted farmers</div>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow">
//                 <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h18" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
//                 <div>
//                   <div className="text-sm font-semibold">No Minimum</div>
//                   <div className="text-xs text-gray-500">Order any qty</div>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow">
//                 <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3 7H9l3-7z" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
//                 <div>
//                   <div className="text-sm font-semibold">Quality Assured</div>
//                   <div className="text-xs text-gray-500">Lab tested</div>
//                 </div>
//               </div>
//             </div>

//           </div>

//           {/* Right - premium 3D hero illustration built with SVG layers */}
//           <div className="flex justify-center relative">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.96 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.9 }}
//               className="relative w-full max-w-lg"
//             >

//               {/* Soft shadow blob */}
//               <div className="absolute -left-10 -top-16 w-72 h-72 bg-gradient-to-br from-indigo-100 to-blue-50 rounded-full blur-3xl opacity-80" />

//               {/* Main illustration - milk bottle + splash + crate */}
//               <svg viewBox="0 0 600 600" className="w-full h-auto">
//                 <defs>
//                   <linearGradient id="g1" x1="0%" x2="100%" y1="0%" y2="100%">
//                     <stop offset="0%" stopColor="#ffffff" />
//                     <stop offset="100%" stopColor="#e6f2ff" />
//                   </linearGradient>
//                   <filter id="s" x="-50%" y="-50%" width="200%" height="200%">
//                     <feDropShadow dx="0" dy="20" stdDeviation="30" floodColor="#cfe6ff" floodOpacity="0.6"/>
//                   </filter>
//                 </defs>

//                 {/* milk bottle */}
//                 <g transform="translate(200,120)" filter="url(#s)">
//                   <rect x="40" y="60" rx="28" ry="28" width="140" height="300" fill="url(#g1)" stroke="#d0e9ff" strokeWidth="4" />
//                   <rect x="80" y="18" width="60" height="40" rx="12" fill="#ffffff" stroke="#d0e9ff" strokeWidth="3" />
//                   <circle cx="110" cy="200" r="36" fill="#fff" opacity="0.9" />
//                   <text x="110" y="205" textAnchor="middle" fontSize="18" fill="#1e3a8a" fontWeight="700">DOODHWALE</text>
//                 </g>

//                 {/* milk splash */}
//                 <g transform="translate(70,260)">
//                   <path d="M120 40 C90 10, 40 10, 20 40 C0 80, 80 90, 120 40 Z" fill="#ffffff" opacity="0.95" />
//                   <path d="M220 60 C200 30, 140 20, 120 60 C100 100, 220 110, 220 60 Z" fill="#ffffff" opacity="0.9" />
//                 </g>

//                 {/* small crate of bottles */}
//                 <g transform="translate(330,300)">
//                   <rect x="-30" y="60" width="140" height="80" rx="12" fill="#fff" stroke="#dbeafe" strokeWidth="2" />
//                   <rect x="-10" y="22" width="30" height="60" rx="8" fill="#f8fafc" stroke="#e2f0ff" />
//                   <rect x="30" y="22" width="30" height="60" rx="8" fill="#f8fafc" stroke="#e2f0ff" />
//                   <rect x="70" y="22" width="30" height="60" rx="8" fill="#f8fafc" stroke="#e2f0ff" />
//                 </g>

//               </svg>

//             </motion.div>
//           </div>

//         </div>
//       </header>

//       {/* FEATURES (detailed) */}
//       <section className="px-6 md:px-12 py-20 bg-white">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//           <div>
//             <h3 className="text-4xl font-bold text-blue-800 mb-4">What we deliver</h3>
//             <p className="text-gray-600 mb-6">From fresh cow milk to a curated selection of dairy products — paneer, ghee, curd, khoa and more. Everything sourced responsibly from nearby farms and delivered daily.</p>

//             <ul className="space-y-4">
//               <li className="flex gap-3 items-start">
//                 <div className="p-3 bg-blue-50 rounded-lg shadow-sm"><Truck className="w-6 h-6 text-blue-600" /></div>
//                 <div>
//                   <div className="font-semibold">Doorstep Delivery</div>
//                   <div className="text-gray-500 text-sm">Schedule daily drops or one-off deliveries.</div>
//                 </div>
//               </li>

//               <li className="flex gap-3 items-start">
//                 <div className="p-3 bg-blue-50 rounded-lg shadow-sm"><Droplets className="w-6 h-6 text-blue-600" /></div>
//                 <div>
//                   <div className="font-semibold">Pure Milk</div>
//                   <div className="text-gray-500 text-sm">No preservatives — only farm fresh milk.</div>
//                 </div>
//               </li>

//               <li className="flex gap-3 items-start">
//                 <div className="p-3 bg-blue-50 rounded-lg shadow-sm"><Award className="w-6 h-6 text-blue-600" /></div>
//                 <div>
//                   <div className="font-semibold">Quality Checked</div>
//                   <div className="text-gray-500 text-sm">Each batch is tested before dispatch.</div>
//                 </div>
//               </li>
//             </ul>

//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             {/* Small cards with inline SVG images */}
//             <div className="p-4 bg-blue-50 rounded-2xl shadow-inner">
//               <div className="w-full aspect-[4/3] bg-white rounded-xl flex items-center justify-center">
//                 <svg className="w-28 h-28" viewBox="0 0 64 64" fill="none"><path d="M32 6c-9 0-16 7-16 16v22c0 6 6 10 16 10s16-4 16-10V22c0-9-7-16-16-16z" fill="#fff" stroke="#93c5fd" strokeWidth="2"/></svg>
//               </div>
//               <h4 className="mt-3 font-semibold">Milk Bottles</h4>
//               <div className="text-sm text-gray-500">Fresh bottles every morning.</div>
//             </div>

//             <div className="p-4 bg-white rounded-2xl shadow-xl">
//               <div className="w-full aspect-[4/3] bg-blue-50 rounded-xl flex items-center justify-center">
//                 <svg className="w-28 h-28" viewBox="0 0 64 64" fill="none"><path d="M12 44h40v4a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4v-4z" fill="#fff" stroke="#bfdbfe" strokeWidth="2"/></svg>
//               </div>
//               <h4 className="mt-3 font-semibold">Paneer & Curd</h4>
//               <div className="text-sm text-gray-500">Homestyle dairy products.</div>
//             </div>

//             <div className="p-4 bg-white rounded-2xl shadow-xl">
//               <div className="w-full aspect-[4/3] bg-blue-50 rounded-xl flex items-center justify-center">
//                 <svg className="w-28 h-28" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="28" r="12" fill="#fff" stroke="#c7d2fe" strokeWidth="2"/></svg>
//               </div>
//               <h4 className="mt-3 font-semibold">Ghee & Khoa</h4>
//               <div className="text-sm text-gray-500">Traditional dairy essentials.</div>
//             </div>

//             <div className="p-4 bg-blue-50 rounded-2xl shadow-inner">
//               <div className="w-full aspect-[4/3] bg-white rounded-xl flex items-center justify-center">
//                 <svg className="w-28 h-28" viewBox="0 0 64 64" fill="none"><path d="M20 44h24v-8H20v8z" fill="#fff" stroke="#bfdbfe" strokeWidth="2"/></svg>
//               </div>
//               <h4 className="mt-3 font-semibold">Cold Storage</h4>
//               <div className="text-sm text-gray-500">Secure cold-chain delivery.</div>
//             </div>

//           </div>

//         </div>
//       </section>

//       {/* HOW IT WORKS (expanded) */}
//       <section className="px-6 md:px-12 py-20 bg-gradient-to-b from-blue-50 to-white">
//         <div className="max-w-6xl mx-auto text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-blue-800">How it works</h2>
//           <p className="text-gray-600 mt-3">Simple steps to get fresh milk every morning</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">

//           <div className="bg-white p-6 rounded-2xl shadow-xl text-center">
//             <div className="w-20 h-20 mx-auto mb-4 bg-blue-50 rounded-xl flex items-center justify-center">
//               <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none"><path d="M3 7h18" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/></svg>
//             </div>
//             <h4 className="font-semibold">Choose Plan</h4>
//             <p className="text-sm text-gray-500 mt-2">Pick daily, weekly or custom delivery.</p>
//           </div>

//           <div className="bg-white p-6 rounded-2xl shadow-xl text-center">
//             <div className="w-20 h-20 mx-auto mb-4 bg-blue-50 rounded-xl flex items-center justify-center">
//               <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none"><path d="M12 3v4" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round"/></svg>
//             </div>
//             <h4 className="font-semibold">Confirm & Pay</h4>
//             <p className="text-sm text-gray-500 mt-2">Secure checkout with multiple options.</p>
//           </div>

//           <div className="bg-white p-6 rounded-2xl shadow-xl text-center">
//             <div className="w-20 h-20 mx-auto mb-4 bg-blue-50 rounded-xl flex items-center justify-center">
//               <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none"><path d="M3 12h18" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/></svg>
//             </div>
//             <h4 className="font-semibold">We Collect</h4>
//             <p className="text-sm text-gray-500 mt-2">Fresh milk sourced from local farms.</p>
//           </div>

//           <div className="bg-white p-6 rounded-2xl shadow-xl text-center">
//             <div className="w-20 h-20 mx-auto mb-4 bg-blue-50 rounded-xl flex items-center justify-center">
//               <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none"><path d="M3 3l18 18" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round"/></svg>
//             </div>
//             <h4 className="font-semibold">Delivered Fresh</h4>
//             <p className="text-sm text-gray-500 mt-2">Morning doorstep delivery.</p>
//           </div>

//         </div>
//       </section>

//       {/* ABOUT */}
//       <section className="px-6 md:px-12 py-20 bg-white">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-blue-800 mb-6">About Dudhwale</h2>
//           <p className="text-gray-600 leading-relaxed text-lg">Dudhwale is built to bring transparency and trust into the dairy supply chain. We partner with local ethical farms, test every batch for quality and deliver it fresh to families who value purity. Our small-batch collection and cold-chain handling ensure taste and nutrition remain intact.</p>
//         </div>
//       </section>

//       {/* CONTACT */}
//       <section className="px-6 md:px-12 py-16 bg-blue-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <h3 className="text-3xl font-semibold text-blue-800 mb-3">Get in touch</h3>
//           <p className="text-gray-600">Questions? Partnerships? We're here.</p>

//           <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
//             <a href="tel:+919000000000" className="px-5 py-3 bg-white rounded-xl shadow inline-block">📞 +91 90000 00000</a>
//             <a href="mailto:support@dudhwale.in" className="px-5 py-3 bg-white rounded-xl shadow inline-block">✉️ support@dudhwale.in</a>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-blue-800 text-white text-center py-8">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//             <div className="text-sm">© {new Date().getFullYear()} Dudhwale. All Rights Reserved.</div>
//             <div className="flex items-center gap-4 text-sm opacity-90">
//               <a href="#">Privacy</a>
//               <a href="#">Terms</a>
//               <a href="#">Careers</a>
//             </div>
//           </div>
//         </div>
//       </footer>

//     </div>
//   );
// }



// src/pages/LandingPage.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { Play } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/logo1.jpg"; // replace with your logo

// export default function LandingPage() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 to-white text-gray-800 font-sans overflow-x-hidden">

//       {/* NAVBAR */}
//       <nav className="w-full flex items-center justify-between px-6 md:px-12 py-4 bg-white/60 backdrop-blur-sm sticky top-0 z-40">
//         <div className="flex items-center gap-4">
//           <img src={logo} alt="Dudhwale" className="w-28 md:w-36 rounded-lg shadow-sm" />
//         </div>

//         <div className="flex items-center gap-4 md:gap-8">
//           <button onClick={() => navigate("/login")} className="hidden md:inline text-blue-700 hover:text-blue-600 transition">
//             Login
//           </button>

//           <button
//             onClick={() => navigate("/login")}
//             className="inline-flex items-center gap-2 px-4 md:px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:scale-[1.02] transition"
//           >
//             <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M3 12h18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
//             Get Started
//           </button>
//         </div>
//       </nav>

//       {/* HERO */}
//       <header className="px-6 md:px-12 pt-10 pb-8 lg:pb-20">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

//           {/* LEFT - text + CTAs */}
//           <div className="space-y-6">
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-blue-800"
//             >
//               Fresh, Happy Milk — <span className="text-indigo-600">Delivered Daily</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.15 }}
//               className="text-md md:text-lg text-gray-600 max-w-xl"
//             >
//               Dudhwale brings farm-fresh cow milk and lovely dairy products directly from trusted farmers to your door. Cute, clean and trustworthy — just like breakfast should be.
//             </motion.p>

//             <div className="flex flex-wrap gap-3 items-center mt-4">
//               <button
//                 onClick={() => navigate("/login")}
//                 className="px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow hover:scale-[1.02] transition"
//               >
//                 Subscribe Now
//               </button>

//               <a
//                 href="https://play.google.com/store/apps/details?id=com.dairyboss&hl=en"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center gap-2 px-4 py-2 bg-white border rounded-xl shadow-sm hover:bg-gray-50 transition"
//               >
//                 <Play className="w-4 h-4 text-black" />
//                 <span className="text-sm text-gray-800">Get on Playstore</span>
//               </a>
//             </div>

//             {/* bubbly badges */}
//             <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-md">
//               {[
//                 ["Daily drops", "Before 8 AM"],
//                 ["Farm Sourced", "Trusted Farmers"],
//                 ["No Minimum", "Order Any Qty"],
//                 ["Quality", "Lab Tested"],
//               ].map(([title, sub], i) => (
//                 <div key={i} className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow">
//                   <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
//                     {/* small icon circle */}
//                     <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#60A5FA" strokeWidth="1.5"/></svg>
//                   </div>
//                   <div>
//                     <div className="text-sm font-semibold">{title}</div>
//                     <div className="text-xs text-gray-500">{sub}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT - cute 3D-style inline SVG illustration */}
//           <div className="flex justify-center">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.9 }}
//               className="relative w-full max-w-md"
//             >
//               {/* soft curved background */}
//               <div className="absolute -left-8 -top-10 w-72 h-72 rounded-full bg-gradient-to-br from-indigo-100 to-blue-50 opacity-90 blur-2xl" />
//               <div className="absolute right-0 -bottom-8 w-56 h-56 rounded-full bg-gradient-to-br from-white to-blue-50 opacity-80 blur-xl" />

//               {/* SVG illustration (cow + milk bottle + splash) */}
//               <svg viewBox="0 0 420 360" className="w-full h-auto">
//                 <defs>
//                   <linearGradient id="milkGrad" x1="0" x2="1">
//                     <stop offset="0%" stopColor="#ffffff" />
//                     <stop offset="100%" stopColor="#e6f2ff" />
//                   </linearGradient>
//                   <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
//                     <feDropShadow dx="0" dy="16" stdDeviation="20" floodColor="#cbe7ff" floodOpacity="0.6"/>
//                   </filter>
//                 </defs>

//                 {/* Cow (cute) */}
//                 <g transform="translate(20,40)">
//                   <ellipse cx="260" cy="170" rx="110" ry="75" fill="#fff" stroke="#f8fafc" strokeWidth="2" opacity="0.95"/>
//                   {/* body patches */}
//                   <path d="M220 150 q20 -30 60 -10 q20 12 2 30 q-40 40 -62 20 q-20 -20 -0 -40z" fill="#111827" opacity="0.9"/>
//                   <path d="M180 160 q-15 -30 -50 -10 q-12 10 -2 30 q25 30 54 10z" fill="#111827" opacity="0.9"/>
//                   {/* head */}
//                   <g transform="translate(140,80)">
//                     <rect x="-6" y="-10" rx="18" ry="18" width="90" height="70" fill="#fff" stroke="#e6eefc" strokeWidth="2"/>
//                     <circle cx="20" cy="18" r="8" fill="#111827"/>
//                     <circle cx="56" cy="18" r="8" fill="#111827"/>
//                     <rect x="18" y="36" rx="6" width="26" height="8" fill="#FDE68A"/>
//                     {/* little horns */}
//                     <path d="M6 -4 q-10 -12 -18 2" stroke="#f7c6a4" strokeWidth="6" strokeLinecap="round" fill="none"/>
//                     <path d="M84 -4 q10 -12 18 2" stroke="#f7c6a4" strokeWidth="6" strokeLinecap="round" fill="none"/>
//                   </g>
//                 </g>

//                 {/* Milk bottle in front */}
//                 <g transform="translate(40,30)" filter="url(#softShadow)">
//                   <rect x="200" y="40" rx="20" ry="20" width="90" height="180" fill="url(#milkGrad)" stroke="#dbeafe" strokeWidth="3"/>
//                   <rect x="225" y="14" width="40" height="36" rx="8" fill="#fff" stroke="#dbeafe" strokeWidth="3" />
//                   <circle cx="245" cy="140" r="22" fill="#fff" />
//                   <text x="245" y="144" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e3a8a">DOODH</text>
//                 </g>

//                 {/* Milk splash */}
//                 <g transform="translate(40,120)">
//                   <path d="M60 40 C40 10, 10 10, 0 40 C-10 80, 80 90, 120 40 C150 10, 200 30, 170 60 C130 110, 70 80, 60 40 Z"
//                         fill="#fff" opacity="0.95" />
//                 </g>

//                 {/* Decorative stars / bubbles */}
//                 <g transform="translate(320,0)">
//                   <circle cx="20" cy="40" r="6" fill="#BFDBFE" opacity="0.9"/>
//                   <circle cx="60" cy="10" r="4" fill="#DBEAFE" opacity="0.9"/>
//                 </g>
//               </svg>

//             </motion.div>
//           </div>

//         </div>
//       </header>

//       {/* FEATURES */}
//       <section className="px-6 md:px-12 py-16 bg-blue-50">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">Why Dudhwale is loved</h2>
//           <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Fresh milk, friendly farmers and fuss-free delivery — made for happy mornings.</p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
//             {[
//               { title: "Farm-Fresh Milk", text: "Straight from local farms", color: "from-blue-400 to-indigo-400" },
//               { title: "Daily Delivery", text: "Set schedule — we arrive early", color: "from-emerald-400 to-teal-400" },
//               { title: "Dairy Products", text: "Paneer, curd, ghee & more", color: "from-yellow-300 to-amber-400" },
//               { title: "Quality Tested", text: "Lab checks for every batch", color: "from-purple-400 to-pink-400" },
//             ].map((f, i) => (
//               <motion.div key={i} whileHover={{ y: -6 }} className="p-6 bg-white rounded-2xl shadow-lg text-left">
//                 <div className={`w-12 h-12 rounded-lg mb-3 bg-gradient-to-br ${f.color} flex items-center justify-center text-white shadow-md`}>
//                   <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.2"/></svg>
//                 </div>
//                 <h4 className="font-semibold text-lg">{f.title}</h4>
//                 <p className="text-sm text-gray-600 mt-2">{f.text}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* HOW IT WORKS */}
//       <section className="px-6 md:px-12 py-20 bg-white">
//         <div className="max-w-6xl mx-auto text-center mb-8">
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-800">How it works</h2>
//           <p className="text-gray-600 mt-2">Simple steps — sign up, pick plan, receive fresh milk.</p>
//         </div>

//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
//           <motion.div whileHover={{ scale: 1.03 }} className="bg-blue-50 p-6 rounded-2xl text-center">
//             <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center shadow">
//               <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none"><path d="M3 7h18" stroke="#2563EB" strokeWidth="1.5"/></svg>
//             </div>
//             <h4 className="font-semibold">Pick a Plan</h4>
//             <p className="text-sm text-gray-600 mt-2">Daily, weekly or custom quantity.</p>
//           </motion.div>

//           <motion.div whileHover={{ scale: 1.03 }} className="bg-blue-50 p-6 rounded-2xl text-center">
//             <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center shadow">
//               <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none"><path d="M12 3v4" stroke="#06B6D4" strokeWidth="1.5"/></svg>
//             </div>
//             <h4 className="font-semibold">We Collect</h4>
//             <p className="text-sm text-gray-600 mt-2">From our trusted farmers every morning.</p>
//           </motion.div>

//           <motion.div whileHover={{ scale: 1.03 }} className="bg-blue-50 p-6 rounded-2xl text-center">
//             <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center shadow">
//               <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none"><path d="M3 3l18 18" stroke="#10B981" strokeWidth="1.5"/></svg>
//             </div>
//             <h4 className="font-semibold">Delivered Fresh</h4>
//             <p className="text-sm text-gray-600 mt-2">Left at your doorstep before breakfast.</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* PRODUCTS */}
//       <section className="px-6 md:px-12 py-20 bg-gradient-to-b from-blue-50 to-white">
//         <div className="max-w-6xl mx-auto text-center mb-8">
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-800">Our Products</h2>
//           <p className="text-gray-600 mt-2">Farm-made dairy goodies your family will love.</p>
//         </div>

//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[
//             { title: "Fresh Milk", subtitle: "Bottle / Pouch", color: "bg-white" },
//             { title: "Paneer", subtitle: "Soft & Fresh", color: "bg-white" },
//             { title: "Curd", subtitle: "Homestyle", color: "bg-white" },
//             { title: "Ghee", subtitle: "Cold-pressed", color: "bg-white" },
//           ].map((p, i) => (
//             <motion.div key={i} whileHover={{ y: -6 }} className="p-4 rounded-2xl shadow-lg bg-white text-left">
//               <div className="w-full aspect-[4/3] rounded-xl bg-blue-50 flex items-center justify-center mb-4">
//                 <svg className="w-24 h-24" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="28" r="14" fill="#fff" stroke="#93c5fd" strokeWidth="2"/></svg>
//               </div>
//               <h4 className="font-semibold">{p.title}</h4>
//               <div className="text-sm text-gray-500">{p.subtitle}</div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ABOUT */}
//       <section className="px-6 md:px-12 py-20 bg-white">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">About Dudhwale</h2>
//           <p className="text-gray-600 leading-relaxed text-lg">Dudhwale partners with ethical local farms and ensures transparent sourcing, batch testing and cold-chain handling — so you get pure, nutritious milk every day.</p>
//         </div>
//       </section>

//       {/* CONTACT */}
//       <section className="px-6 md:px-12 py-16 bg-blue-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <h3 className="text-2xl font-semibold text-blue-800 mb-3">Get in touch</h3>
//           <p className="text-gray-600">Questions? Partnerships? We're here.</p>

//           <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
//             <a href="tel:+919000000000" className="px-5 py-3 bg-white rounded-xl shadow inline-block">📞 +91 90000 00000</a>
//             <a href="mailto:support@dudhwale.in" className="px-5 py-3 bg-white rounded-xl shadow inline-block">✉️ support@dudhwale.in</a>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-blue-800 text-white text-center py-8">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//             <div className="text-sm">© {new Date().getFullYear()} Dudhwale. All Rights Reserved.</div>
//             <div className="flex items-center gap-4 text-sm opacity-90">
//               <a href="#" className="hover:underline">Privacy</a>
//               <a href="#" className="hover:underline">Terms</a>
//               <a href="#" className="hover:underline">Careers</a>
//             </div>
//           </div>
//         </div>
//       </footer>

//     </div>
//   );
// }
// src/pages/LandingPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { Play, ChevronRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import milk from "../assets/14094.jpg"; // primary visual
import bottle from "../assets/14095.jpg"; // secondary
import cow from "../assets/Ddhwalebasket.png"; // tertiary
import drops from "../assets/drops.webp"; // decorative
// Small motion presets
const fadeUp = { hidden: { opacity: 0, y: 12 }, visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.12 * i, duration: 0.6, ease: "easeOut" } }) };
const floatY = { animate: { y: [0, -8, 0], transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" } } };

export default function LandingPage() {
  const navigate = useNavigate();
  const features = [
  { 
    title: "Daily Drops", 
    subtitle: "Before 8 AM",
    icon: (
      <svg viewBox="0 0 64 64" className="w-7 h-7">
        <path d="M32 4C22 16 14 26 14 36a18 18 0 1036 0c0-10-8-20-18-32z" fill="#60a5fa"/>
      </svg>
    )
  },
  {
    title: "Farm Sourced",
    subtitle: "Local trusted farmers",
    icon: (
      <svg viewBox="0 0 64 64" className="w-7 h-7">
        <path d="M12 44l20-28 20 28H12z" fill="#34d399"/>
        <circle cx="32" cy="48" r="8" fill="#059669"/>
      </svg>
    )
  },
  {
    title: "No Minimum",
    subtitle: "Order any qty",
    icon: (
      <svg viewBox="0 0 64 64" className="w-7 h-7">
        <rect x="10" y="20" width="44" height="28" rx="6" fill="#fb923c"/>
        <path d="M18 28h28" stroke="#fff" strokeWidth="3"/>
      </svg>
    )
  },
  {
    title: "Quality Tested",
    subtitle: "Batch lab checks",
    icon: (
      <svg viewBox="0 0 64 64" className="w-7 h-7">
        <circle cx="32" cy="32" r="20" fill="#818cf8"/>
        <path d="M22 32l6 6 14-14" stroke="#fff" strokeWidth="4" fill="none"/>
      </svg>
    )
  }
];


  const products = [
    { title: "Fresh Milk", subtitle: "Bottle / Pouch" },
    { title: "Paneer", subtitle: "Soft & Fresh" },
    { title: "Curd", subtitle: "Homestyle" },
    { title: "Ghee", subtitle: "Cold-pressed" },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 to-white text-gray-900 antialiased overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="w-full flex items-center justify-between px-6 md:px-12 py-4 bg-white/60 backdrop-blur-sm sticky top-0 z-40 shadow-sm">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Dudhwale" className="w-28 md:w-36 rounded-md shadow-sm" />
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <button onClick={() => navigate("/login")} className="hidden md:inline text-blue-700 hover:text-blue-600 transition font-medium">
            Login
          </button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/login")}
            className="inline-flex items-center gap-3 px-4 md:px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg"
          >
            <Play className="w-4 h-4" /> Get Started
          </motion.button>
        </div>
      </nav>

      {/* HERO */}
      <header className="px-6 md:px-12 pt-10 pb-8 lg:pb-20 relative overflow-hidden">
        {/* gradient blobs (mesh) */}
        <div className="absolute left-[-6rem] top-[-6rem] w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-indigo-100 to-blue-50 opacity-80 blur-3xl -z-10" />
        <div className="absolute right-[-4rem] bottom-[-6rem] w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-white to-blue-50 opacity-80 blur-2xl -z-10" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: copy + badges */}
          <div className="space-y-6">
            <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: {} }}>
              <motion.h1 variants={fadeUp} custom={0} className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-blue-900">
                Fresh, happy milk — <span className="text-indigo-600">delivered daily.</span>
              </motion.h1>

              <motion.p variants={fadeUp} custom={1} className="mt-4 text-gray-700 max-w-xl md:text-lg">
                Dudhwale connects you to nearby farmers — pure milk, honest pricing, reliable delivery. Simple subscriptions, flexible plans, and quality checks on every batch.
              </motion.p>
            </motion.div>

            <motion.div className="flex flex-wrap gap-3 items-center mt-4" initial="hidden" animate="visible">
              <motion.button variants={fadeUp} custom={2} onClick={() => navigate("/login")} className="px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow hover:scale-[1.02] transition">
                Subscribe Now
              </motion.button>

              <motion.a variants={fadeUp} custom={3} href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-white border rounded-xl shadow-sm hover:bg-gray-50 transition">
                <Play className="w-4 h-4 text-black" />
                <span className="text-sm text-gray-800">Get on Playstore</span>
              </motion.a>
            </motion.div>

            {/* badges */}
            <motion.div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-md" initial="hidden" animate="visible">
              {features.map((f, i) => (
                <motion.div key={i} variants={fadeUp} custom={4 + i} className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 flex items-center justify-center">
  {f.icon}
</div>

                  </div>
                  <div>
                    <div className="text-sm font-semibold">{f.title}</div>
                    <div className="text-xs text-gray-500">{f.subtitle}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* small trust strip */}
            <motion.div className="mt-6 flex items-center gap-4" variants={fadeUp} custom={9}>
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-full p-2 shadow">
                  <Star className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="text-sm text-gray-700">4.8 · Trusted by 12k+ households</div>
              </div>
              <div className="h-6 w-px bg-gray-200" />
              <div className="text-sm text-gray-600">Delivery coverage in 120+ localities</div>
            </motion.div>
          </div>

          {/* RIGHT: illustration cluster (priority: milk -> bottle -> cow) */}
          <div className="flex justify-center items-center">
            <motion.div className="relative w-full max-w-md" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }}>
              {/* soft curved backgrounds */}
              <div className="absolute -left-8 -top-10 w-72 h-72 rounded-full bg-gradient-to-br from-indigo-100 to-blue-50 opacity-90 blur-2xl" />
              <div className="absolute right-0 -bottom-8 w-56 h-56 rounded-full bg-gradient-to-br from-white to-blue-50 opacity-80 blur-xl" />

              {/* Illustration cluster */}
              <div className="relative z-10">
                {/* Primary: milk image (largest) */}
                <motion.img src={milk} alt="milk" className="mx-auto w-56 h-56 object-contain drop-shadow-2xl rounded-2xl bg-white p-6"
                  variants={floatY} animate="animate" />

                {/* Secondary: bottle (slightly overlapping) */}
                <motion.img src={cow} alt="cow" className="absolute left-6 top-6 w-28 h-28 object-contain drop-shadow-lg rounded-xl  p-3"
                  animate={{ rotate: [-3, 4, -2] }} transition={{ duration: 6, repeat: Infinity }} />

                {/* Tertiary: cow silhouette */}
                <motion.img src={cow} alt="cow" className="absolute right-6 bottom-6 w-28 h-28 object-contain opacity-95"
                  animate={{ x: [0, 6, 0] }} transition={{ duration: 5, repeat: Infinity }} />
              </div>

              {/* Optional: Spline / Lottie hook */}
              {/* 
                If you use a 3D Spline scene or Lottie file, drop it here.
                Example (Spline): <Spline scene="https://prod.spline.design/..." />
              */}
            </motion.div>
          </div>
        </div>
      </header>

      {/* FEATURES GRID */}
      <section className="px-6 md:px-12 py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 initial="hidden" animate="visible" variants={{}} className="text-3xl md:text-4xl font-bold text-blue-800 mb-3">
            Why Dudhwale is loved
          </motion.h2>
          <motion.p initial="hidden" animate="visible" className="text-gray-600 mb-8 max-w-2xl mx-auto">From farm to cup — consistent quality, punctual delivery and happy mornings.</motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {[
              { title: "Farm-Fresh Milk", text: "Straight from local farms", color: "from-blue-400 to-indigo-400" },
              { title: "Daily Delivery", text: "Set schedule — we arrive early", color: "from-emerald-400 to-teal-400" },
              { title: "Dairy Products", text: "Paneer, curd, ghee & more", color: "from-yellow-300 to-amber-400" },
              { title: "Quality Tested", text: "Lab checks for every batch", color: "from-purple-400 to-pink-400" },
            ].map((f, i) => (
              <motion.div key={i} whileHover={{ y: -6 }} initial="hidden" animate="visible" variants={fadeUp} custom={i} className="p-6 bg-white rounded-2xl shadow-lg text-left">
                <div className={`w-12 h-12 rounded-lg mb-3 bg-gradient-to-br ${f.color} flex items-center justify-center text-white shadow-md`}>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.2"/></svg>
                </div>
                <h4 className="font-semibold text-lg">{f.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
 <section className="px-6 md:px-12 py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
            Fresh Reads from Our Dairy Blog
          </h2>
          <p className="text-gray-600 mt-2">Learn, explore and stay informed.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            {
              title: "How Fresh Milk Boosts Immunity",
              text: "Discover why early morning dairy consumption helps boost energy and immunity.",
            },
            {
              title: "Difference Between A2 & Regular Milk",
              text: "A simplified breakdown of what makes farm-sourced A2 milk special.",
            },
            {
              title: "Why Home-made Ghee Is Healthiest",
              text: "Nutritional benefits of traditionally made ghee and how it supports wellness.",
            },
          ].map((blog, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow p-6"
            >
              <div className="w-full h-40 rounded-xl bg-blue-100 mb-4"></div>
              <h3 className="font-semibold text-lg text-blue-900">{blog.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{blog.text}</p>
              <button className="mt-3 text-blue-700 font-medium text-sm hover:underline">
                Read More →
              </button>
            </motion.div>
          ))}
        </div>
      </section>
      {/* HOW IT WORKS */}
      <section className="px-6 md:px-12 py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800">How it works</h2>
          <p className="text-gray-600 mt-2">Sign up, pick your plan, we deliver before breakfast.</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.03 }} className="bg-blue-50 p-6 rounded-2xl text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center shadow">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none"><path d="M3 7h18" stroke="#2563EB" strokeWidth="1.5"/></svg>
            </div>
            <h4 className="font-semibold">Pick a Plan</h4>
            <p className="text-sm text-gray-600 mt-2">Daily, weekly or custom quantity.</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-blue-50 p-6 rounded-2xl text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center shadow">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none"><path d="M12 3v4" stroke="#06B6D4" strokeWidth="1.5"/></svg>
            </div>
            <h4 className="font-semibold">We Collect</h4>
            <p className="text-sm text-gray-600 mt-2">From our trusted farmers every morning.</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="bg-blue-50 p-6 rounded-2xl text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center shadow">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none"><path d="M3 3l18 18" stroke="#10B981" strokeWidth="1.5"/></svg>
            </div>
            <h4 className="font-semibold">Delivered Fresh</h4>
            <p className="text-sm text-gray-600 mt-2">Left at your doorstep before breakfast.</p>
          </motion.div>
        </div>
      </section>
  <section className="px-6 md:px-12 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800">Get in Touch</h2>
          <p className="text-gray-600 mt-2">
            Have questions? Need support? We are here for you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-blue-50 p-8 rounded-3xl shadow-lg">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              className="p-3 rounded-xl border bg-white"
              placeholder="Your Name"
            />
            <input
              className="p-3 rounded-xl border bg-white"
              placeholder="Email Address"
            />
            <input
              className="p-3 rounded-xl border bg-white"
              placeholder="Phone Number"
            />
            <input
              className="p-3 rounded-xl border bg-white"
              placeholder="City / Locality"
            />

            <textarea
              rows={4}
              className="md:col-span-2 p-3 rounded-xl border bg-white"
              placeholder="Message…"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.04 }}
              className="md:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-full shadow"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 md:px-12 py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800">Our Products</h2>
          <p className="text-gray-600 mt-2">Farm-made dairy goodies your family will love.</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="p-4 rounded-2xl shadow-lg bg-white text-left">
              <div className="w-full aspect-[4/3] rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                <svg className="w-24 h-24" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="28" r="14" fill="#fff" stroke="#93c5fd" strokeWidth="2"/></svg>
              </div>
              <h4 className="font-semibold">{p.title}</h4>
              <div className="text-sm text-gray-500">{p.subtitle}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/60 to-blue-50 rounded-3xl p-8 shadow-xl flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900">Fresh milk. Zero hassle. Daily happiness.</h3>
            <p className="text-gray-600 mt-2">Start your subscription today — flexible plans and on-time delivery.</p>
          </div>

          <div className="flex gap-3">
            <motion.button whileHover={{ scale: 1.03 }} onClick={() => navigate("/login")} className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow">
              Start Subscription
            </motion.button>
            <motion.button whileHover={{ scale: 1.03 }} className="px-5 py-3 bg-white rounded-full shadow border" onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}>
              Learn More <ChevronRight className="w-4 h-4 inline-block ml-1" />
            </motion.button>
          </div>
        </div>
      </section>
 <section className="px-6 md:px-12 py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800">FAQ</h2>
          <p className="text-gray-600">Common questions our customers ask.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {[
            {
              q: "What time do you deliver milk?",
              a: "Milk is delivered before 8 AM in all serviceable areas.",
            },
            {
              q: "Is there any minimum order?",
              a: "No minimum — order as little or as much as you need.",
            },
            {
              q: "Where do you source milk from?",
              a: "We collect from local verified farmers every morning.",
            },
            {
              q: "Is the milk tested?",
              a: "Yes, each batch undergoes quality and purity testing.",
            },
          ].map((faq, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-5 bg-white rounded-xl shadow"
            >
              <div className="font-semibold text-blue-900">{faq.q}</div>
              <div className="text-sm text-gray-600 mt-1">{faq.a}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-800 text-white text-center py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm">© {new Date().getFullYear()} Dudhwale. All Rights Reserved.</div>
            <div className="flex items-center gap-4 text-sm opacity-90">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Careers</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}




