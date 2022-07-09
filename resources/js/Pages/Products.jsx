import React, { useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/navbar";
import Button from "@/Components/button";
import ProductList from "@/Components/productList";
import CartListWrapper from "@/Components/cartListWrapper";
import CartListHeader from "@/Components/cartListHeader";
import CartListBody from "@/Components/cartListBody";
import CartListFooter from "@/Components/cartListFooter";

export default function Products({ products }) {
    const [isOpen, setIsOpen] = useState(false);
    const [listMyCart, setListMyCart] = useState([
        {
            id: "1",
            img: "https://cdn.shopify.com/s/files/1/0895/1746/products/Vaso_01_1728x.jpg?v=1571828828",
            price: 52,
            title: "Titanium Cookset",
            quantity: 3,
        },
        {
            id: "2",
            img: "https://cdn.shopify.com/s/files/1/0895/1746/products/Vaso_01_1728x.jpg?v=1571828828",
            price: 62,
            title: "Titanium Cookset 2",
            quantity: 2,
        },
    ]);

    const handleOpenSidebar = () => {
        setIsOpen(true);
    };

    const handleCloseSideBar = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Head title="Cart Shop" />

            <Navbar>
                <div className="mb-2 sm:mb-0">
                    <h1 className="text-2xl no-underline text-white hover:text-blue-dark font-bold">
                        Cart Shop
                    </h1>
                </div>
                <Button
                    name="btn-mycart"
                    type="button"
                    onClick={handleOpenSidebar}
                >
                    My Cart
                </Button>
            </Navbar>

            <section className="flex justify-center min-h-screen min-w-screen py-12 ">
                <ProductList products={products} />
            </section>

            <CartListWrapper isOpen={isOpen}>
                <CartListHeader onClick={handleCloseSideBar} />
                <CartListBody
                    listMyCart={listMyCart}
                    setListMyCart={setListMyCart}
                />
                <CartListFooter />
            </CartListWrapper>
        </>
    );
}
