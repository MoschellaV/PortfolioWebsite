import React from "react";
import { useRouter } from "next/router";
import Navbar from "../Navbar";

const NavbarWrapper = ({ children }) => {
    const router = useRouter();
    const is404Page = router.pathname === "/404";

    return (
        <div>
            {!is404Page && <Navbar />}
            <main>{children}</main>
        </div>
    );
};

export default NavbarWrapper;
