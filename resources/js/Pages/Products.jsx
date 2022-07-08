import React from "react";
import { Head } from "@inertiajs/inertia-react";

export default function Welcome({ products }) {
    console.log(products);
    return (
        <>
            <Head title="Cart Shop" />
            <div>
                <p>Hello there</p>
                {products.map((product) => {
                    return <p key={product.id}>{product.title}</p>;
                })}
            </div>
        </>
    );
}
