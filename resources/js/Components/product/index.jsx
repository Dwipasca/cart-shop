import React from "react";
import Button from "../button";

function Product({ product, listMyCart, setListMyCart }) {
    const { id, img, title, price } = product;

    const handleAddProductIntoListMyCart = () => {
        const isCartItemExist = listMyCart.some((cartItem) => {
            if (cartItem.id === id) {
                return true;
            }
            return false;
        });

        if (isCartItemExist) {
            const updateCartItem = listMyCart.map((cartItem) => {
                if (cartItem.id === id) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 };
                }
                return cartItem;
            });

            setListMyCart(updateCartItem);
        } else {
            const newCartItem = {
                id,
                img,
                title,
                price,
                quantity: 1,
            };
            setListMyCart([...listMyCart, newCartItem]);
        }
    };

    return (
        <div className="max-w-xs rounded overflow-hidden bg-white shadow-lg">
            <img className="w-full" src={product.img} alt={product.title} />
            <div className="px-6 py-2">
                <h3 className="font-bold text-xl mb-2">{product.title}</h3>
                <p className="text-red-600 font-bold">$ {product.price}</p>
            </div>
            <div className="px-6">
                <Button
                    name="btn-addToMyCart"
                    type="button"
                    className="mb-4"
                    onClick={handleAddProductIntoListMyCart}
                >
                    Add to My Cart
                </Button>
            </div>
        </div>
    );
}

export default Product;
