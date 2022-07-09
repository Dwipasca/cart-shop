import React from "react";

function CartListFooter() {
    return (
        <div className="offcanvas-footer flex items-center justify-between p-4 border-t-4">
            <h5
                className="offcanvas-title mb-0 leading-normal font-bold "
                id="offcanvasRightLabel"
            >
                Subtotal
            </h5>

            <h3
                className="offcanvas-title mb-0 mr-2 leading-normal font-bold "
                id="offcanvasRightLabel"
            >
                $ 178
            </h3>
        </div>
    );
}

export default CartListFooter;
