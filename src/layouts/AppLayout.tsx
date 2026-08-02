import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AppNavLinks, AppFooterLinks } from "../data/navigation";


function AppLayout(){
    return(
        <div className="layout">
            <Navbar links={AppNavLinks}/>
            <Outlet />
            <Footer links={AppFooterLinks}/>
        </div>
    );
}

export default AppLayout;