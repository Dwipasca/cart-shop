import React from "react";

function ProductList({ products }) {
    return (
        <div className=" flex flex-wrap justify-center gap-8 max-w-5xl">
            {products.map((product) => {
                return (
                    <div
                        className="max-w-xs rounded overflow-hidden bg-white shadow-lg"
                        key={product.id}
                    >
                        <img
                            className="w-full"
                            src={product?.img}
                            alt={product?.title}
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                                {product.title}
                            </div>
                            <p className="text-red-600 font-bold">
                                $ {product?.price}
                            </p>
                        </div>
                        <div className="px-6 pt-2 pb-2">
                            <button className="bg-cyan-500 hover:bg-blue-700 text-white py-2 px-4 mb-4 rounded">
                                Add to My Cart
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ProductList;
