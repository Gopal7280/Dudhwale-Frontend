import React, { useState } from "react";
import { apiPost } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function VendorProfileForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    businessName: "",
    ownerName: "",
    gstNo: "",
    fssaiLicense: "",
    aadhaar: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.businessName.trim()) {
      alert("Business Name is required");
      return;
    }

    try {
      const res = await apiPost("/vendor", form);
      console.log("Vendor profile response:", res);

      alert("Vendor profile saved successfully");
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-100 py-10">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Business Details
        </h2>
        <p className="text-gray-500 mb-6 text-center">
          Complete your seller profile to get started.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-1">
              Business Name (Required)
            </label>
            <input
              type="text"
              name="businessName"
              placeholder="Your Dairy or Shop Name"
              className="w-full px-4 py-3 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.businessName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Owner Name</label>
            <input
              type="text"
              name="ownerName"
              placeholder="Owner Name"
              className="w-full px-4 py-3 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.ownerName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">GST Number (Optional)</label>
            <input
              type="text"
              name="gstNo"
              placeholder="e.g. 22ABCDE1234A1Z5"
              className="w-full px-4 py-3 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.gstNo}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">FSSAI License (Optional)</label>
            <input
              type="text"
              name="fssaiLicense"
              placeholder="14-digit FSSAI Number"
              className="w-full px-4 py-3 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.fssaiLicense}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Aadhaar Number (Optional)</label>
            <input
              type="text"
              name="aadhaar"
              placeholder="12-digit Aadhaar Number"
              className="w-full px-4 py-3 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.aadhaar}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition"
          >
            Save & Continue
          </button>
        </form>
      </div>
    </div>
  );
}
