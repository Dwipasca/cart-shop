import React, { useState } from "react";
import { Head } from "@inertiajs/inertia-react";

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
            <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className="mb-2 sm:mb-0">
                    <h1 className="text-2xl no-underline text-white hover:text-blue-dark font-bold">
                        Cart Shop
                    </h1>
                </div>
                <div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleOpenSidebar}
                    >
                        My Cart
                    </button>
                </div>
            </nav>
            {/* ${isOpen ? "bg-black bg-opacity-30 backdrop-blur-sm" : ""} */}
            <section className=" flex justify-center min-h-screen min-w-screen py-12 ">
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
                                    <button
                                        className="bg-cyan-500 hover:bg-blue-700 text-white py-2 px-4 mb-4 rounded"
                                        onClick={handleOpenSidebar}
                                    >
                                        Add to My Cart
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
            <div
                className={`flex flex-col max-w-full bg-clip-padding shadow-sm outline-none ease-in-out text-white fixed bottom-0 top-0 right-0 ml-10 border-none w-96 transition duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } `}
            >
                <div className="offcanvas-header flex items-center justify-between p-4 border-b-2">
                    <h5
                        className="offcanvas-title text-2xl mb-0 leading-normal font-bold mb-4"
                        id="offcanvasRightLabel"
                    >
                        My Cart
                    </h5>
                    <button
                        type="button"
                        className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-white font-bold border-none rounded-none  focus:shadow-none focus:outline-none focus:opacity-100 hover:text-red-600 hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        onClick={handleCloseSideBar}
                    >
                        X
                    </button>
                </div>

                <div className="offcanvas-body flex-grow p-4 overflow-y-auto bg-blue-50">
                    <div className="flex flex-col justify-start gap-4 min-h-fit">
                        <div className="flex flex-col h-fit md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg ">
                            <img
                                className=" w-full h-auto self-center md:ml-2 md:h-44 object-cover md:w-36 rounded-t-lg md:rounded-none md:rounded-l-lg"
                                src="https://cdn.shopify.com/s/files/1/0895/1746/products/Vaso_01_1728x.jpg?v=1571828828"
                                alt=""
                            />
                            <div className="p-6 flex flex-col justify-start">
                                <button
                                    className="self-end w-6 font-bold text-white bg-red-600 rounded text-md mb-2 hover:bg-black hover:bg-opacity-5 hover:text-red-600"
                                    type="button"
                                >
                                    x
                                </button>
                                <h5 className="text-gray-900 text-xl font-bold mb-2">
                                    Titanium Cookset
                                </h5>
                                <p className="text-red-600 font-bold mb-4">
                                    $ 23
                                </p>

                                <div class="flex items-center justify-start">
                                    <div
                                        class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg h-8"
                                        role="group"
                                    >
                                        <button
                                            type="button"
                                            class="rounded-l inline-block px-4 bg-blue-600 text-white font-medium text-lg leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out font-bold"
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            className="form-control block w-14 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                                            id="exampleFormControlInput1"
                                            value={1}
                                        />

                                        <button
                                            type="button"
                                            class=" rounded-r inline-block px-4 bg-blue-600 text-white font-medium text-lg leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col h-fit md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg ">
                            <img
                                className=" w-full h-auto self-center md:ml-2 md:h-44 object-cover md:w-36 rounded-t-lg md:rounded-none md:rounded-l-lg"
                                src="https://cdn.shopify.com/s/files/1/0895/1746/products/Vaso_01_1728x.jpg?v=1571828828"
                                alt=""
                            />
                            <div className="p-6 flex flex-col justify-start">
                                <button
                                    className="self-end w-6 font-bold text-white bg-red-600 rounded text-md mb-2 hover:bg-black hover:bg-opacity-5 hover:text-red-600"
                                    type="button"
                                >
                                    x
                                </button>
                                <h5 className="text-gray-900 text-xl font-bold mb-2">
                                    Titanium Cookset
                                </h5>
                                <p className="text-red-600 font-bold mb-4">
                                    $ 23
                                </p>

                                <div class="flex items-center justify-start">
                                    <div
                                        class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg h-8"
                                        role="group"
                                    >
                                        <button
                                            type="button"
                                            class="rounded-l inline-block px-4 bg-blue-600 text-white font-medium text-lg leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out font-bold"
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            className="form-control block w-14 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                                            id="exampleFormControlInput1"
                                            value={1}
                                        />

                                        <button
                                            type="button"
                                            class=" rounded-r inline-block px-4 bg-blue-600 text-white font-medium text-lg leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col h-fit md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg ">
                            <img
                                className=" w-full h-auto self-center md:ml-2 md:h-44 object-cover md:w-36 rounded-t-lg md:rounded-none md:rounded-l-lg"
                                src="https://cdn.shopify.com/s/files/1/0895/1746/products/Vaso_01_1728x.jpg?v=1571828828"
                                alt=""
                            />
                            <div className="p-6 flex flex-col justify-start">
                                <button
                                    className="self-end w-6 font-bold text-white bg-red-600 rounded text-md mb-2 hover:bg-black hover:bg-opacity-5 hover:text-red-600"
                                    type="button"
                                >
                                    x
                                </button>
                                <h5 className="text-gray-900 text-xl font-bold mb-2">
                                    Titanium Cookset
                                </h5>
                                <p className="text-red-600 font-bold mb-4">
                                    $ 23
                                </p>

                                <div class="flex items-center justify-start">
                                    <div
                                        class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg h-8"
                                        role="group"
                                    >
                                        <button
                                            type="button"
                                            class="rounded-l inline-block px-4 bg-blue-600 text-white font-medium text-lg leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out font-bold"
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            className="form-control block w-14 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                                            id="exampleFormControlInput1"
                                            value={1}
                                        />

                                        <button
                                            type="button"
                                            class=" rounded-r inline-block px-4 bg-blue-600 text-white font-medium text-lg leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col h-fit md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg ">
                            <img
                                className=" w-full h-auto self-center md:ml-2 md:h-44 object-cover md:w-36 rounded-t-lg md:rounded-none md:rounded-l-lg"
                                src="https://cdn.shopify.com/s/files/1/0895/1746/products/Vaso_01_1728x.jpg?v=1571828828"
                                alt=""
                            />
                            <div className="p-6 flex flex-col justify-start">
                                <button
                                    className="self-end w-6 font-bold text-white bg-red-600 rounded text-md mb-2 hover:bg-black hover:bg-opacity-5 hover:text-red-600"
                                    type="button"
                                >
                                    x
                                </button>
                                <h5 className="text-gray-900 text-xl font-bold mb-2">
                                    Titanium Cookset
                                </h5>
                                <p className="text-red-600 font-bold mb-4">
                                    $ 23
                                </p>

                                <div class="flex items-center justify-start">
                                    <div
                                        class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg h-8"
                                        role="group"
                                    >
                                        <button
                                            type="button"
                                            class="rounded-l inline-block px-4 bg-blue-600 text-white font-medium text-lg leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out font-bold"
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            className="form-control block w-14 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                                            id="exampleFormControlInput1"
                                            value={1}
                                        />

                                        <button
                                            type="button"
                                            class=" rounded-r inline-block px-4 bg-blue-600 text-white font-medium text-lg leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
            </div>
        </>
    );
}
