import React from "react";

const ProductCreate = () => {
    return (
        <div>
            <h1 className="text-center text-4xl mb-4">Product Create Form</h1>
            <form className="grid grid-cols-1 gap-4 w-full max-w-1/2 mx-auto">
                <input
                    type="text"
                    className="border border-solid border-black rounded-md py-4 px-6"
                    placeholder="Enter product name"
                />
                <input
                    type="number"
                    className="border border-solid border-black rounded-md py-4 px-6"
                    placeholder="Enter product price"
                />
                <button
                    type="submit"
                    className="bg-red-500 py-4 px-6 rounded-sm text-white font-bold text-base"
                >
                    Create
                </button>
            </form>
        </div>
    );
};

export default ProductCreate;
