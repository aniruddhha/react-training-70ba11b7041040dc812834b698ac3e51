import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from "./signin/signin";

export const router = (
    <BrowserRouter>
        <Routes>
            <Route path="" element={<SignIn/>}></Route>
        </Routes>
    </BrowserRouter>
)