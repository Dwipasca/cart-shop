import React from "react";

import Button from "../button";

function Navbar({ children }) {
    return (
        <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full bg-gradient-to-r from-cyan-500 to-blue-500">
            {children}
        </nav>
    );
}

export default Navbar;
