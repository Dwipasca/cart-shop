import React from "react";
import Button from "../button";

function Product({ product }) {
    const { img, title, price } = product;

    return (
        <div className="max-w-xs rounded overflow-hidden bg-white shadow-lg">
            <img className="w-full" src={img} alt={title} />
            <div className="px-6 py-2">
                <h3 className="font-bold text-xl mb-2">{title}</h3>
                <p className="text-red-600 font-bold">$ {price}</p>
            </div>
            <div className="px-6">
                <Button
                    name="btn-addToMyCart"
                    type="button"
                    className="mb-4"
                    onClick={() => {
                        console.log(title);
                    }}
                >
                    Add to My Cart
                </Button>
            </div>
        </div>
    );
}

export default Product;
