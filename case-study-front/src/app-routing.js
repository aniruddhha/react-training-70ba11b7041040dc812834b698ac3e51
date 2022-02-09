import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from "./signin/signin";
import { CustomerRegistration } from './registration/customer-registration'
import { VendorRegistration } from './registration/vendor-registration'
import { Dashboard } from "./dashboard/dashboard";

export const router = (
    <BrowserRouter>
        <Routes>
            <Route path="" element={<SignIn/>}></Route>
            <Route path="custreg" element={<CustomerRegistration/>}></Route>
            <Route path="vendreg" element={<VendorRegistration/>}></Route>
            <Route path="dashboard" element={<Dashboard/>}></Route>
        </Routes>
    </BrowserRouter>
)