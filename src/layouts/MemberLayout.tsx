import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MemberNavLinks, MemberFooterLinks } from "../data/navigation";

function MemberLayout(){
    return(
        <div className="layout">
            <Navbar links={MemberNavLinks}/>
            <Outlet />
            <Footer links={MemberFooterLinks}/>
        </div>
    );
}

export default MemberLayout;