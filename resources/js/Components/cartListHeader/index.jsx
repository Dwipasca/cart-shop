import React from "react";

function CartListHeader({ onClick }) {
    return (
        <div className="flex items-center justify-between p-4 border-b-2">
            <h5
                className="offcanvas-title text-2xl mb-0 leading-normal font-bold mb-4"
                id="offcanvasRightLabel"
            >
                My Cart
            </h5>
            <button
                type="button"
                className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-white font-bold border-none rounded-none  focus:shadow-none focus:outline-none focus:opacity-100 hover:text-red-600 hover:opacity-75 hover:no-underline"
                aria-label="Close"
                onClick={onClick}
            >
                X
            </button>
        </div>
    );
}

export default CartListHeader;
