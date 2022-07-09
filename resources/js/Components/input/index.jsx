import React from "react";

function Input({ type, name, width, value, onChange }) {
    return (
        <input
            id={name}
            name={name}
            type={type}
            className={`form-control block ${width} px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
            value={value}
            onChange={(e) => onChange(e)}
        />
    );
}

export default Input;
