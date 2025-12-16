import React, { useEffect, useState } from "react";
import Sidebar from "../layouts/AdminSidebar";
import { apiGet, apiPost } from "../services/api";
import ProductForm from "./ProductForm";
import { FiPlus } from "react-icons/fi";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  const loadProducts = async () => {
    const res = await apiGet("/products");
    setProducts(res?.data || []);
  };

  const createProduct = async (data) => {
    await apiPost("/products", data);
    setOpenForm(false);
    loadProducts();
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 fixed h-full bg-white shadow-xl">
        <Sidebar />
      </div>

      <div className="flex-1 ml-64 p-8">
        <h1 className="text-3xl font-bold text-blue-700">Products</h1>

        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[70vh] gap-4">
            <p className="text-gray-600 text-lg">No products available</p>
            <button
              onClick={() => setOpenForm(true)}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl"
            >
              Add New Product
            </button>
          </div>
        ) : (
          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl p-5 shadow border-l-4 border-blue-500"
                >
                  <p className="text-xl font-semibold">{p.name}</p>
                  <p className="text-gray-600 mt-1">{p.description}</p>
                  <p className="font-semibold mt-3">₹{p.pricePerUnit}</p>
                  <p className="text-sm text-gray-500">
                    Unit: {p.baseUnit}, GST: {p.gst}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={() => setOpenForm(true)}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-blue-600 shadow-lg flex items-center justify-center text-white"
        >
          <FiPlus size={26} />
        </button>

        {openForm && (
          <ProductForm
            onClose={() => setOpenForm(false)}
            onSubmit={createProduct}
          />
        )}
      </div>
    </div>
  );
}
