import React from "react";

function CartListBody() {
    return (
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
                        <p className="text-red-600 font-bold mb-4">$ 23</p>

                        <div className="flex items-center justify-start">
                            <div
                                className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg h-8"
                                role="group"
                            >
                                <button
                                    type="button"
                                    className="rounded-l inline-block px-4 bg-blue-600 text-white font-medium text-lg leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out font-bold"
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
                                    className=" rounded-r inline-block px-4 bg-blue-600 text-white font-medium text-lg leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartListBody;
