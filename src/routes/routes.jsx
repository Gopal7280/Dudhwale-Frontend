import { Routes, Route, Navigate } from 'react-router-dom'

import LandingPage from '../pages/LandingPage';
import AuthPage from '../pages/AuthPage';
import Dashboard from '../pages/Dashboard';
import TodaysDeliveries from '../pages/TodaysDelivery';
import VendorProfileForm from '../pages/Vendorform';
import ProductsPage from '../pages/Products';


function RouteComponent() {
  return (
    <Routes>     
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/vendor-profile-form" element={<VendorProfileForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/todays-deliveries" element={<TodaysDeliveries/>} />
        <Route path="/products-list" element={<ProductsPage/>} />
    </Routes>
  )
}

export default RouteComponent