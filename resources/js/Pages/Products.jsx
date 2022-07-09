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

                <CartListBody />

                <CartListFooter />
            </CartListWrapper>
        </>
    );
}
