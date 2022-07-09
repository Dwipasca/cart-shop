import React from "react";
import CartListItem from "../cartListItem";

function CartListBody({ listMyCart, setListMyCart }) {
    return (
        <div className="offcanvas-body flex-grow p-4 overflow-y-auto bg-blue-50">
            <div className="flex flex-col justify-start gap-4 min-h-fit">
                {listMyCart.map((cartItem) => {
                    return (
                        <CartListItem
                            key={cartItem.id}
                            cartItem={cartItem}
                            setListMyCart={setListMyCart}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default CartListBody;
