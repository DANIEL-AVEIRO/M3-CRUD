import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const ProductList = () => {

    const [products, setProducts] = useState([])

    const saveData = JSON.parse(localStorage.getItem("products")) || []
    useEffect(() => {
        setProducts(saveData)
    }, [])

    const handleDelete = (id) => {
        const afterDelete = products.filter((product) => product.id != id)
        setProducts(afterDelete)
        localStorage.setItem("products", JSON.stringify(afterDelete))
        toast.success("Product is deleted successfully")
    }

    return (
        <div>
            <h1 className='text-center text-3xl'>Product List</h1>
            <div className='flex justify-between'>
                <Link to='/product/create/' className='px-6 py-4 inline-block text-white rounded-lg cursor-pointer bg-green-600'>Add New Product</Link>
                <input
                    type="text"
                    className="border border-solid border-black rounded-md py-4 px-6"
                    placeholder="Search Here"
                />
            </div>
            <table className='w-full mt-10 p-4 border border-solid border-black'>
                <thead className='p-4 border border-solid border-black'>
                    <tr className='p-4 border border-solid border-black'>
                        <th className='p-4 border border-solid border-black'>No</th>
                        <th className='p-4 border border-solid border-black'>Name</th>
                        <th className='p-4 border border-solid border-black'>Price</th>
                        <th className='p-4 border border-solid border-black'>Action</th>
                    </tr>
                </thead>
                <tbody className='p-4 border border-solid border-black'>
                    {
                        products.map((product, index) => {
                            return (
                                <tr key={index} className='p-4 border border-solid border-black'>
                                    <td className='p-4 border border-solid border-black text-center'>{index + 1}</td>
                                    <td className='p-4 border border-solid border-black text-center'>{product.name}</td>
                                    <td className='p-4 border border-solid border-black text-center'>{product.price}</td>
                                    <td className='p-4 border border-solid border-black text-center'>
                                        <Link to={`/product/update/${product.id}`} className='px-6 py-4 inline-block text-white rounded-lg cursor-pointer bg-yellow-500'>Edit</Link>
                                        <button onClick={() => handleDelete(product.id)} className='px-6 py-4 inline-block text-white ms-4 rounded-lg cursor-pointer bg-red-500'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductList