import { Routes, Route } from "react-router";
import AppLayout from "../layouts/AppLayout";
import App from "../App";
import MemberLayout from "../layouts/MemberLayout";
import Karina from "../pages/members/Karina";
import Winter from "../pages/members/Winter";
import Giselle from "../pages/members/Giselle";
import Ningning from "../pages/members/Ningning";

function AppRoutes(){
    return(
        <Routes>
            <Route element={<AppLayout />}>
                <Route path="/" element={<App />} />
            </Route>

            <Route path="/member" element={<MemberLayout />}>
                <Route path=":karina" element={<Karina />} />
                <Route path=":winter" element={<Winter />} />
                <Route path=":giselle" element={<Giselle />} />
                <Route path=":ningning" element={<Ningning />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;