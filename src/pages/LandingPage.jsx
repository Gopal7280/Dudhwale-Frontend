import React from "react";
import { motion } from "framer-motion";
import { Play, ChevronRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo1.jpg";
import { useEffect, useState } from "react";
import floatingphones from "../assets/floatingphones.png";
import playStoreBadge from "../assets/playStoreBadge.png";
import milkborder from "../assets/milkborder.png";
import phoneMock from "../assets/phoneMock3.png";
import bgback from "../assets/bgback.png";
import screen1 from "../assets/screen1.png";
import screen2 from "../assets/screen2.png";
import screen3 from "../assets/screen1.png";
import screen4 from "../assets/screen2.png";
import screen5 from "../assets/screen1.png";
import reviewImage from "../assets/reviewImage2.png";
import contactbg from "../assets/contactbg.jpg";
import milksplash from "../assets/milksplash.png";
import logotransparent from "../assets/logotransparent.png";

const screens = [screen1, screen2, screen3, screen4, screen5];


// Small motion presets
const fadeUp = { hidden: { opacity: 0, y: 12 }, visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.12 * i, duration: 0.6, ease: "easeOut" } }) };
const floatY = { animate: { y: [0, -8, 0], transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" } } };

import {
  Droplet,
  Leaf,
  Package,
  ShieldCheck,
  Truck,
  Clock,
  MapPin,
  CheckCircle,
  Download,
  Smile,
  Users,
  Facebook,
  Twitter,
  Instagram,
  Globe
} from "lucide-react";

const features = [
  {
    title: "Daily Drops",
    subtitle: "Before 8 AM",
    icon: <Droplet className="w-7 h-7 text-blue-500" />
  },
  {
    title: "Farm Sourced",
    subtitle: "Local trusted farmers",
    icon: <Leaf className="w-7 h-7 text-green-500" />
  },
  {
    title: "No Minimum",
    subtitle: "Order any qty",
    icon: <Package className="w-7 h-7 text-orange-500" />
  },
  {
    title: "Quality Tested",
    subtitle: "Batch lab checks",
    icon: <ShieldCheck className="w-7 h-7 text-indigo-500" />
  }
];

const socialLinks = [
  {
    label: "facebook",
    icon: Facebook,
    href: "#"
  },
  {
    label: "twitter",
    icon: Twitter,
    href: "#"
  },
  {
    label: "instagram",
    icon: Instagram,
    href: "#"
  },
  {
    label: "google",
    icon: Globe,
    href: "#"
  }
];


const achievements = [
  {
    value: "500+",
    label: "App Downloads",
    icon: Download,
    bg: "bg-blue-500"
  },
  {
    value: "200+",
    label: "Happy Clients",
    icon: Smile,
    bg: "bg-green-500"
  },
  {
    value: "100+",
    label: "Active Accounts",
    icon: Users,
    bg: "bg-indigo-500"
  },
  {
    value: "200+",
    label: "Total App Rates",
    icon: Star,
    bg: "bg-yellow-500"
  }
];




export default function LandingPage() {
  const navigate = useNavigate();


  const features = [
    {
      title: "Daily Drops",
      subtitle: "Before 8 AM",
      icon: (
        <svg viewBox="0 0 64 64" className="w-7 h-7">
          <path d="M32 4C22 16 14 26 14 36a18 18 0 1036 0c0-10-8-20-18-32z" fill="#60a5fa" />
        </svg>
      )
    },
    {
      title: "Farm Sourced",
      subtitle: "Local trusted farmers",
      icon: (
        <svg viewBox="0 0 64 64" className="w-7 h-7">
          <path d="M12 44l20-28 20 28H12z" fill="#34d399" />
          <circle cx="32" cy="48" r="8" fill="#059669" />
        </svg>
      )
    },
    {
      title: "No Minimum",
      subtitle: "Order any qty",
      icon: (
        <svg viewBox="0 0 64 64" className="w-7 h-7">
          <rect x="10" y="20" width="44" height="28" rx="6" fill="#fb923c" />
          <path d="M18 28h28" stroke="#fff" strokeWidth="3" />
        </svg>
      )
    },
    {
      title: "Quality Tested",
      subtitle: "Batch lab checks",
      icon: (
        <svg viewBox="0 0 64 64" className="w-7 h-7">
          <circle cx="32" cy="32" r="20" fill="#818cf8" />
          <path d="M22 32l6 6 14-14" stroke="#fff" strokeWidth="4" fill="none" />
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

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % screens.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getIndex = (offset) =>
    (active + offset + screens.length) % screens.length;

  return (
    <div className="min-h-screen w-full bg-[#EBEBEB] text-gray-900 antialiased overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="w-full flex items-center justify-between px-6 md:px-12 py-4 bg-white backdrop-blur-sm sticky top-0 z-40 shadow-sm">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Dudhwale"
            href="/"
            className="w-18 md:w-24 rounded-md cursor-pointer"
          />
        </div>

        {/* NAV ITEMS */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-700 hover:text-indigo-600 font-medium">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-indigo-600 font-medium">
            About
          </a>
          <a href="#features" className="text-gray-700 hover:text-indigo-600 font-medium">
            Features
          </a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
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
      <header className="relative overflow-hidden  px-6 md:px-12 pt-10 pb-20">

        {/* bottom milk background */}
        <img
          src={milkborder}
          alt="milk splash"
          className="absolute bottom-0 left-0 w-full pointer-events-none select-none z-0 opacity-50"
        />
        {/* gradient blobs (mesh) */}
        <div className="absolute left-[-6rem] top-[-6rem] w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-indigo-100 to-blue-50 opacity-80 blur-3xl -z-10" />
        <div className="absolute right-[-4rem] bottom-[-6rem] w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-white to-blue-50 opacity-80 blur-2xl -z-10" />

        <div className="relative z-10 max-w-7xl mx-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-30">
          {/* LEFT: copy + badges */}
          <div className="space-y-6">
            <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: {} }}>
              <motion.h1 variants={fadeUp} custom={0} className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-blue-900">
                Fresh, happy milk — <span className="text-indigo-600 font-poppins">delivered daily.</span>
              </motion.h1>

              <motion.p variants={fadeUp} custom={1} className="mt-4 text-gray-700 max-w-xl md:text-lg">
                Dudhwale connects you to nearby farmers — pure milk, honest pricing, reliable delivery. Simple subscriptions, flexible plans, and quality checks on every batch.
              </motion.p>
            </motion.div>

            <motion.div className="flex flex-wrap gap-3 items-center mt-4" initial="hidden" animate="visible">

              <motion.button variants={fadeUp} custom={2} onClick={() => navigate("/login")} className="px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold shadow hover:scale-[1.02] transition">
                Subscribe Now
              </motion.button>

              <motion.a
                variants={fadeUp}
                custom={3}
                href="https://play.google.com/store/apps/details?id=com.dairyboss&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <img
                  src={playStoreBadge}
                  alt="Get it on Google Play"
                  className="h-11 md:h-12 hover:scale-[1.02] transition"
                />
              </motion.a>

            </motion.div>

            {/* badges */}
            {/* <motion.div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-md" initial="hidden" animate="visible">
              {features.map((f, i) => (
                <motion.div key={i} variants={fadeUp} custom={4 + i} className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 flex items-center justify-center">
                      {f.icon}
                    </div>

                  </div>
                  <div>
                    <div className="text-sm font-semibold ">{f.title}</div>
                    <div className="text-xs text-gray-500">{f.subtitle}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div> */}

            {/* small trust strip */}
            <motion.div className="mt-6 flex items-center gap-4" variants={fadeUp} custom={9}>
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-full p-2 shadow">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-sm text-gray-700">4.8 · Trusted by 12k+ households</div>
              </div>
              <div className="h-6 w-px bg-gray-200" />
              <div className="text-sm text-gray-600">Delivery coverage in 120+ localities</div>
            </motion.div>
          </div>

          {/* RIGHT: single hero image */}
          <div className="flex justify-center items-center">
            <motion.img
              src={floatingphones}
              alt="Fresh milk delivery"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-md object-contain"
            />
          </div>

        </div>

      </header>


      {/* FEATURES GRID */}
      <section className=" py-20 px-6 mb-26">
        <div className="max-w-6xl mx-auto text-center">

          <p className="text-sm tracking-widest text-blue-600 font-medium mb-2">
            WHY US ?
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-14">
            Why Are We Unique ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

            {/* Item 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow">
                <Truck className="w-9 h-9 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Farm-Fresh Milk
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                Straight from local farms to your doorstep, ensuring purity and freshness in every drop.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow">
                <Clock className="w-9 h-9 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Daily Delivery
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                Set schedule — we arrive early to ensure your milk is fresh and ready for the day.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow">
                <CheckCircle className="w-9 h-9 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Quality Tested
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                Lab checks for every batch to ensure the highest quality and safety standards.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* heading */}
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest text-blue-500 font-semibold mb-2">
              WHAT MAKES US STAND OUT ?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Awosome Features
            </h2>
          </div>

          {/* main layout */}
          <div className="relative grid grid-cols-1 lg:grid-cols-3 items-center gap-10">

            {/* LEFT FEATURES */}
            <div className="space-y-16 text-right">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="relative pr-10">
                  <h4 className="font-semibold text-gray-800">Near By Stores</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Discover Local Stores Based On Your GPS Location
                  </p>

                  {/* dot */}
                  <MapPin className="absolute -right-3.5 top-1 text-blue-500 w-5 h-5" />
                </div>
              ))}
            </div>

            {/* CENTER PHONE */}
            <div className="relative flex justify-center">
              {/* vertical lines */}
              <div className="absolute left-0 top-0 h-full w-px bg-gray-300" />
              <div className="absolute right-0 top-0 h-full w-px bg-gray-300" />

              <img
                src={phoneMock}
                alt="App preview"
                className="relative z-10 w-[260px] md:w-[300px] drop-shadow-2xl"
              />
            </div>

            {/* RIGHT FEATURES */}
            <div className="space-y-16 text-left">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="relative pl-10">
                  <h4 className="font-semibold text-gray-800">Near By Stores</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Discover Local Stores Based On Your GPS Location
                  </p>

                  {/* dot */}
                  <MapPin className="absolute -left-3.5 top-1 text-blue-500 w-5 h-5" />

                </div>
              ))}
            </div>

          </div>

          {/* bottom stats */}
          <div className="mt-28 text-center">
            <p className="text-xs tracking-widest text-blue-500 font-semibold mb-2">
              OUR GLORIUS
            </p>

            <h3 className="text-3xl font-bold text-gray-800 mb-12">
              Acheivements
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="bg-white shadow rounded-xl py-6 px-4 flex items-center gap-4 justify-center"
                  >
                    <div
                      className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="text-left">
                      <div className="text-xl font-bold text-gray-800">
                        {item.value}
                      </div>
                      <div className="text-sm text-gray-500">
                        {item.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      <section className="relative py-32 overflow-hidden bg-linear-to-b from-white to-[#EBEBEB]">

        <img
          src={bgback}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-xs tracking-widest text-blue-500 font-semibold mb-2">
              SCREENSHOTS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              App Screenshots
            </h2>
          </div>

          <div className="flex items-end justify-center gap-6 transition-all duration-500">

            <img
              src={screens[getIndex(-2)]}
              className="w-[170px] opacity-50 translate-y-6 hidden md:block"
            />

            <img
              src={screens[getIndex(-1)]}
              className="w-[200px] opacity-75 translate-y-3 hidden md:block"
            />

            <img
              src={screens[getIndex(0)]}
              className="w-[260px] md:w-[300px] z-20 drop-shadow-2xl"
            />

            <img
              src={screens[getIndex(1)]}
              className="w-[200px] opacity-75 translate-y-3 hidden md:block"
            />

            <img
              src={screens[getIndex(2)]}
              className="w-[170px] opacity-50 translate-y-6 hidden md:block"
            />

          </div>

          <div className="flex justify-center gap-3 mt-12">
            {screens.map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition ${i === active ? "bg-blue-500" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>

        </div>
      </section>

      <section className=" py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-xs tracking-widest text-blue-500 font-semibold mb-3">
              REVIEWS
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Client Reviews
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-xl">
              Love The App!! I'm Looking Forward For Them To Add More Of My Favorite
              Stores So I Can Use Them More Often. Lorem Ipsum Is Simply Dummy Text Of
              The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's
              Standard Dummy Text Ever Since The 1500s,
            </p>

            {/* user */}
            <div className="flex items-center gap-4 mt-8">
              <img
                src="https://i.pravatar.cc/80?img=12"
                alt="user"
                className="w-14 h-14 rounded-full border-2 border-blue-500"
              />
              <div>
                <h4 className="font-semibold text-blue-600">Allhalal</h4>
                <p className="text-sm text-gray-500">
                  Finally A Great App With Variety
                </p>
              </div>
            </div>

            {/* arrows */}
            <div className="flex gap-4 mt-10">
              <button className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-500 hover:text-white transition">
                ←
              </button>
              <button className="w-11 h-11 rounded-full bg-blue-500 text-white flex items-center justify-center hover:scale-105 transition">
                →
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={reviewImage}
              alt="milk products"
              className="max-w-md w-full drop-shadow-xl"
            />
          </div>

        </div>
      </section>


      <section className="relative py-28 overflow-hidden">

        {/* background image */}
        <img
          src={contactbg}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-b from-[#EBEBEB] via-white/10 to-transparent z-0" />

        {/* milk splash bottom */}
        <img
          src={milksplash}
          className="absolute bottom-0 left-0 w-full pointer-events-none"
        />

        <div className="relative max-w-7xl mx-auto px-6 flex justify-end">

          {/* contact card */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-xl">

            <p className="text-xs tracking-widest text-blue-500 font-semibold mb-2">
              CONTACT US
            </p>

            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Get In Touch With Us!
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-5 py-4 rounded-xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <button
                type="submit"
                className="bg-blue-500 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-blue-600 transition"
              >
                Send Now
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#EBEBEB] py-10">
        <div className="max-w-7xl mx-auto px-6">

          {/* TOP ROW */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src={logotransparent}
                alt="dudhwale"
                className="h-18"
              />
              <div className="leading-tight">
                <h3 className="text-xl font-bold text-blue-600">Dudhwale</h3>
                <p className="text-xs tracking-widest text-gray-500">
                  DELIVERY ON DEMAND
                </p>
              </div>
            </div>

            {/* Links */}
            <nav className="flex gap-8 text-gray-700 font-medium">
              <a href="#" className="hover:text-blue-600 transition">About</a>
              <a href="#" className="hover:text-blue-600 transition">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-600 transition">Contact</a>
            </nav>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;

                return (
                  <a
                    key={i}
                    href={item.href}
                    aria-label={item.label}
                    className="w-9 h-9 bg-blue-600 text-white rounded flex items-center justify-center cursor-pointer hover:scale-105 hover:bg-blue-700 transition"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* BOTTOM TEXT */}
          <p className="text-center text-gray-500 text-sm mt-8">
            All rights reserved. <br />
            Copyright ©2026 dudhwale & Compunic Pvt. Ltd.
          </p>
        </div>
      </footer>

    </div>
  );
}




