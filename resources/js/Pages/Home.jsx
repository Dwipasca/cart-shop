import React from "react";
import { Head } from "@inertiajs/inertia-react";

export default function Welcome(props) {
    const { name, age } = props;
    return (
        <>
            <Head title="Cart Shop" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <p>{name}</p>
                <p>{age}</p>
            </div>
        </>
    );
}
