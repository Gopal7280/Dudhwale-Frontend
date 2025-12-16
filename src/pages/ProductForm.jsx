// import React, { useState } from "react";

// export default function ProductForm({ onClose, onSubmit }) {
//   const [name, setName] = useState("");
//   const [desc, setDesc] = useState("");
//   const [unit, setUnit] = useState("");
//   const [price, setPrice] = useState("");
//   const [gst, setGst] = useState("");

//   const units = [
//     { label: "per Liter (L)", value: "L" },
//     { label: "per Milliliter (ml)", value: "ML" },
//     { label: "per Kilogram (kg)", value: "KG" },
//     { label: "per Gram (g)", value: "G" },
//     { label: "per Piece", value: "PIECE" }
//   ];

//   const gstList = ["0", "5", "12", "18", "28"];

//   const submitHandler = () => {
//     const payload = {
//       name,
//       description: desc,
//       baseUnit: unit,
//       pricePerUnit: Number(price),
//       gst: Number(gst)
//     };
//     onSubmit(payload);
//   };

//   return (
//     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//       <div className="bg-white rounded-2xl w-full max-w-lg p-6">
//         <h2 className="text-2xl font-bold text-blue-700 text-center mb-4">Add New Product</h2>

//         <div className="space-y-4">
//           <div>
//             <p className="font-semibold">Product Name</p>
//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full bg-gray-100 rounded-xl px-4 py-3 mt-1"
//               placeholder="e.g. Fresh Milk"
//             />
//           </div>

//           <div>
//             <p className="font-semibold">Description</p>
//             <textarea
//               value={desc}
//               onChange={(e) => setDesc(e.target.value)}
//               className="w-full bg-gray-100 rounded-xl px-4 py-3 mt-1"
//               placeholder="e.g. Full cream, pasteurized"
//             />
//           </div>

//           <div>
//             <p className="font-semibold">Base Unit</p>
//             <div className="grid grid-cols-2 gap-2 mt-2">
//               {units.map((u) => (
//                 <button
//                   key={u.value}
//                   onClick={() => setUnit(u.value)}
//                   className={`px-3 py-2 rounded-xl border text-sm ${
//                     unit === u.value
//                       ? "bg-blue-600 text-white border-blue-600"
//                       : "bg-blue-50 text-blue-700 border-blue-200"
//                   }`}
//                 >
//                   {u.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div>
//             <p className="font-semibold">Price per Unit (₹)</p>
//             <input
//               type="number"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               className="w-full bg-gray-100 rounded-xl px-4 py-3 mt-1"
//               placeholder="0.00"
//             />
//           </div>

//           <div>
//             <p className="font-semibold">GST (%)</p>
//             <select
//               value={gst}
//               onChange={(e) => setGst(e.target.value)}
//               className="w-full bg-gray-100 rounded-xl px-4 py-3 mt-1"
//             >
//               <option value="">Select GST Rate</option>
//               {gstList.map((g) => (
//                 <option key={g} value={g}>{g}%</option>
//               ))}
//             </select>
//           </div>

//           <div className="flex gap-4 mt-4">
//             <button
//               onClick={onClose}
//               className="flex-1 py-3 rounded-xl bg-gray-200"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={submitHandler}
//               className="flex-1 py-3 rounded-xl bg-blue-600 text-white"
//             >
//               Save Product
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function ProductForm({ onClose, onSubmit }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [baseUnit, setBaseUnit] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [pricePerUnit, setPricePerUnit] = useState("");
  const [gst, setGst] = useState("");

  const units = [
    { label: "per Liter (L)", value: "L" },
    { label: "per Milliliter (ml)", value: "ML" },
    { label: "per Kilogram (kg)", value: "KG" },
    { label: "per Gram (g)", value: "G" },
    { label: "per Piece", value: "PIECE" }
  ];

  const gstList = ["0", "5", "12", "18", "28"];

  const submitHandler = () => {
    const payload = {
      name,
      description,
      baseUnit,
      gst: Number(gst),
      purchasePrice: Number(purchasePrice),
      pricePerUnit: Number(pricePerUnit)
    };
    onSubmit(payload);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-lg p-6">
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-4">Add New Product</h2>

        <div className="space-y-4">
          <div>
            <p className="font-semibold">Product Name</p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-100 rounded-xl px-4 py-3 mt-1"
              placeholder="e.g. Fresh Milk"
            />
          </div>

          <div>
            <p className="font-semibold">Description</p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-gray-100 rounded-xl px-4 py-3 mt-1"
              placeholder="e.g. Full cream, pasteurized"
            />
          </div>

          <div>
            <p className="font-semibold">Base Unit</p>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {units.map((u) => (
                <button
                  key={u.value}
                  onClick={() => setBaseUnit(u.value)}
                  className={`px-3 py-2 rounded-xl border text-sm ${
                    baseUnit === u.value
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-blue-50 text-blue-700 border-blue-200"
                  }`}
                >
                  {u.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold">Purchase Price (₹)</p>
            <input
              type="number"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(e.target.value)}
              className="w-full bg-gray-100 rounded-xl px-4 py-3 mt-1"
              placeholder="0.00"
            />
          </div>

          <div>
            <p className="font-semibold">Price per Unit (₹)</p>
            <input
              type="number"
              value={pricePerUnit}
              onChange={(e) => setPricePerUnit(e.target.value)}
              className="w-full bg-gray-100 rounded-xl px-4 py-3 mt-1"
              placeholder="0.00"
            />
          </div>

          <div>
            <p className="font-semibold">GST (%)</p>
            <select
              value={gst}
              onChange={(e) => setGst(e.target.value)}
              className="w-full bg-gray-100 rounded-xl px-4 py-3 mt-1"
            >
              <option value="">Select GST Rate</option>
              {gstList.map((g) => (
                <option key={g} value={g}>{g}%</option>
              ))}
            </select>
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-xl bg-gray-200"
            >
              Cancel
            </button>
            <button
              onClick={submitHandler}
              className="flex-1 py-3 rounded-xl bg-blue-600 text-white"
            >
              Save Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
