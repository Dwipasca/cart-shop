import React from "react";

function CartListWrapper({ isOpen, children }) {
    return (
        <div
            className={`flex flex-col max-w-full bg-clip-padding shadow-sm outline-none ease-in-out text-white fixed bottom-0 top-0 right-0 ml-10 border-none w-96 transition duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 ${
                isOpen ? "translate-x-0" : "translate-x-full"
            } `}
        >
            {children}
        </div>
    );
}

export default CartListWrapper;
