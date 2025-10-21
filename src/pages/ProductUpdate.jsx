import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const ProductUpdate = () => {
    const { id } = useParams()
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const navigate = useNavigate()

    const allProducts = JSON.parse(localStorage.getItem("products"))

    useEffect(() => {
        const oldData = allProducts.find((product) => product.id == id)
        if (oldData) {
            setName(oldData.name)
            setPrice(oldData.price)
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const updated = allProducts.map((product) => product.id == id ? { ...product, name, price } : product)
        localStorage.setItem("products", JSON.stringify(updated))
        toast.success("Product is updated successfully")
        navigate('/')
    }
    return (
        <div className="mt-10">
            <h1 className="text-center text-4xl mb-4">Product Update Form</h1>
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
                    Update
                </button>
            </form>
        </div>
    );
}

export default ProductUpdate