
import React, { useState  } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Lock, Eye, EyeOff, User, KeyRound as Key } from "lucide-react";
import logo from "../assets/logo2.jpg";
import milk from "../assets/Ddhwalebasket.png";
import { apiPost } from "../services/api";
import  Storage  from "../utils/storage";
// import { toast } from "react-hot-toast";

export default function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");
  const [role, setRole] = useState("customer");
  const [showPass, setShowPass] = useState(false);

  const [form, setForm] = useState({
    invite: "",
    name: "",
    mobile: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (mode === "register") {
  //     if (role !== "dudhwale" && !form.invite.trim()) {
  //       alert("Invite code is required for Customer and Farmer.");
  //       return;
  //     }

  //     if (!form.name.trim()) {
  //       alert("Full name is required.");
  //       return;
  //     }

  //     if (form.password !== form.confirm) {
  //       alert("Passwords do not match.");
  //       return;
  //     }
  //     const finalRole = role === "dudhwale" ? "admin" : role;

  //     try {
  //       const payload = {
  //         name: form.name,
  //         mobile: form.mobile,
  //         password: form.password,
  //         role: finalRole,
  //         sellerCode: form.invite || null,
  //       };
  //       await apiPost("/api/auth/register", payload);
  //       navigate("/dashboard");
  //       Storage.setItem("user", JSON.stringify(payload));
  //       alert("Registration Successful. Please login.");
  //       setMode("login");
  //     } catch (err) {
  //       alert(err.message);
  //     }

  //     return;
  //   }

  //   if (mode === "login") {
  //     try {
  //       const payload = { mobile: form.mobile, password: form.password };
  //       const data = await apiPost("/api/auth/login", payload);
  //       console.log(data);
  //       Storage.setItem("data", data);
  //       alert("Login Successful");
  //       navigate("/dashboard");
  //     } catch (err) {
  //       navigate("/dashboard");
  //       alert(err.message);
  //     }
  //   }
  // };
 
//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (mode === "register") {
//     if (role !== "dudhwale" && !form.invite.trim()) {
//       alert("Invite code is required for Customer and Farmer.");
//       return;
//     }

//     if (!form.name.trim()) {
//       alert("Full name is required.");
//       return;
//     }

//     if (form.password !== form.confirm) {
//       alert("Passwords do not match.");
//       return;
//     }

//     const finalRole = role === "dudhwale" ? "admin" : role;

//     try {
//       const payload = {
//         name: form.name,
//         mobile: form.mobile,
//         password: form.password,
//         role: finalRole,
//         sellerCode: form.invite || null,
//       };

//       await apiPost("/api/auth/register", payload);

//       const loginPayload = {
//         mobile: form.mobile,
//         password: form.password,
//       };

//       const res = await apiPost("/api/auth/login", loginPayload);

//       localStorage.setItem("Dudhwaletoken", res.data.token);
//       localStorage.setItem("role", res.data.user.role);
//       localStorage.setItem("userId", res.data.user.userId);

//       navigate("/dashboard");
//     } catch (err) {
//       alert(err.message);
//     }

//     return;
//   }

//   if (mode === "login") {
//     try {
//       const payload = { mobile: form.mobile, password: form.password };
//       const res = await apiPost("/api/auth/login", payload);

//       Storage.setItem("Dudhwaletoken", res.data.token);
//       Storage.setItem("role", res.data.user.role);
//       Storage.setItem("userId", res.data.user.userId);

//       alert("Login Successful");
//       navigate("/dashboard");
//     } catch (err) {
//       alert(err.message);
//     }
//   }
// };


const handleSubmit = async (e) => {
  e.preventDefault();

  if (mode === "register") {
    if (role !== "dudhwale" && !form.invite.trim()) {
      alert("Invite code is required for Customer and Farmer.");
      return;
    }

    if (!form.name.trim()) {
      alert("Full name is required.");
      return;
    }

    if (form.password !== form.confirm) {
      alert("Passwords do not match.");
      return;
    }

    const finalRole = role === "dudhwale" ? "admin" : role;

    try {
      const payload = {
        name: form.name,
        mobile: form.mobile,
        password: form.password,
        role: finalRole,
        sellerCode: form.invite || null,
      };

      // ✅ Register user
      await apiPost("/auth/register", payload);

      // ✅ Auto-login
      const loginPayload = {
        mobile: form.mobile,
        password: form.password,
      };
      const res = await apiPost("/auth/login", loginPayload);

      localStorage.setItem("Dudhwaletoken", res.data.token);
      localStorage.setItem("role", res.data.user.role);
      localStorage.setItem("userId", res.data.user.userId);

      // ✅ Conditional navigation after register
      if (finalRole === "admin") {
        navigate("/vendor-profile-form");
      } else {
        navigate("/dashboard");
      }

    } catch (err) {
      alert(err.message);
    }

    return;
  }

  if (mode === "login") {
    try {
      const payload = { mobile: form.mobile, password: form.password };
      const res = await apiPost("/auth/login", payload);

      localStorage.setItem("Dudhwaletoken", res.data.token);
      localStorage.setItem("role", res.data.user.role);
      localStorage.setItem("userId", res.data.user.userId);

      // ✅ Conditional navigation after login
      if (res.data.user.isBusinessRegistered) {
        navigate("/dashboard");
      } else {
        navigate("/vendor-profile-form");
      }

      alert("Login Successful");
    } catch (err) {
      alert(err.message);
    }
  }
};


  return (
    <div className="min-h-screen flex bg-white">
      <div className="hidden lg:flex w-1/1 bg-gradient-to-b from-[#74D3FF] to-[#0073A8] items-center justify-center relative">
        <img src={milk} alt="milk" className="w-3/4 max-w-lg object-contain drop-shadow-xl"
 />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center py-10 px-6">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-6">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center">
              <img src={logo} alt="logo" className="w-20 h-20 rounded-full object-contain" />
            </motion.div>
          </div>

          <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center mb-5">
            <h1 className="text-3xl font-extrabold text-gray-800">{mode === "login" ? "Welcome Back" : "Create Your Account"}</h1>
            <p className="text-sm text-gray-500 mt-2">{mode === "login" ? "Login to continue your journey" : "Join the Doodhwale network"}</p>
          </motion.div>

          <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-3xl p-6 shadow-xl shadow-lg">
            {mode === "register" && (
              <div className="mb-5">
                <p className="font-medium text-gray-700 mb-3">Register as</p>
                <div className="grid grid-cols-3 gap-2">
                  {["customer", "farmer", "dudhwale"].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`py-2 rounded-xl text-sm ${role === r ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
                    >
                      {r.charAt(0).toUpperCase() + r.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              {mode === "register" && role !== "dudhwale" && (
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border">
                  <Key className="w-5 h-5 text-gray-400" />
                  <input name="invite" placeholder="Seller's Invite Code" className="w-full bg-transparent outline-none" onChange={handleChange} />
                </div>
              )}

              {mode === "register" && (
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border">
                  <User className="w-5 h-5 text-gray-400" />
                  <input name="name" placeholder="Full Name" className="w-full bg-transparent outline-none" onChange={handleChange} />
                </div>
              )}

              <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border">
                <Phone className="w-5 h-5 text-gray-400" />
                <input name="mobile" placeholder="Mobile No." className="w-full bg-transparent outline-none" onChange={handleChange} />
              </div>

              <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border">
                <Lock className="w-5 h-5 text-gray-400" />
                <input name="password" placeholder="Password" type={showPass ? "text" : "password"} className="w-full bg-transparent outline-none" onChange={handleChange} />
                <button type="button" onClick={() => setShowPass(!showPass)}>
                  {showPass ? <EyeOff className="w-5 h-5 text-gray-500" /> : <Eye className="w-5 h-5 text-gray-500" />}
                </button>
              </div>

              {mode === "register" && (
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border">
                  <Lock className="w-5 h-5 text-gray-400" />
                  <input name="confirm" placeholder="Confirm Password" type={showPass ? "text" : "password"} className="w-full bg-transparent outline-none" onChange={handleChange} />
                </div>
              )}

              {mode === "login" && (
                <div className="text-right">
                  <button type="button" className="text-sm text-blue-600">
                    Forgot Password?
                  </button>
                </div>
              )}

              <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 text-white font-semibold shadow-md">
                {mode === "login" ? "Login" : "Create Account"}
              </button>

              <div className="text-center text-sm text-gray-600">
                {mode === "login" ? (
                  <>
                    Don't have an account?
                    <button type="button" onClick={() => setMode("register")} className="text-blue-600 font-medium ml-1">
                      Sign Up
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?
                    <button type="button" onClick={() => setMode("login")} className="text-blue-600 font-medium ml-1">
                      Sign In
                    </button>
                  </>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
