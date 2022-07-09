import React from "react";

function Button({ children, name, type, onClick, className = "" }) {
    return (
        <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className} `}
            onClick={onClick}
            id={name}
            name={name}
            type={type}
        >
            {children}
        </button>
    );
}

export default Button;
