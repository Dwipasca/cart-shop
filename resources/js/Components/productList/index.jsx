import React from "react";
import Product from "../product";

function ProductList({ products }) {
    return (
        <div className=" flex flex-wrap justify-center gap-8 max-w-5xl">
            {products.map((product) => {
                return <Product key={product.id} product={product} />;
            })}
        </div>
    );
}

export default ProductList;
