import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductCreate = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !price) {
            toast.error("All fields are required")
            return
        }

        const products = JSON.parse(localStorage.getItem("products")) || []

        const newProduct = {
            id: Date.now(),
            name,
            price,
        }
        products.push(newProduct)
        localStorage.setItem("products", JSON.stringify(products))
        toast.success("Product is created successfully")
        navigate('/')
    }

    return (
        <div className="mt-10">
            <h1 className="text-center text-4xl mb-4">Product Create Form</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 w-full max-w-1/2 mx-auto">
                <input
                    type="text"
                    className="border border-solid border-black rounded-md py-4 px-6"
                    placeholder="Enter product name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    className="border border-solid border-black rounded-md py-4 px-6"
                    placeholder="Enter product price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
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
