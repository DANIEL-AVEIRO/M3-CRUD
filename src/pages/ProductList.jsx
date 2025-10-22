import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const ProductList = () => {

    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    const [user, setUser] = useState(null) // d ka sa kuu - 1

    const saveData = JSON.parse(localStorage.getItem("products")) || []
    const loggedInUser = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        setProducts(saveData)
    }, [])

    useEffect(() => { // 2
        setUser(loggedInUser)
    }, [])

    const handleDelete = (id) => {
        const afterDelete = products.filter((product) => product.id != id)
        setProducts(afterDelete)
        localStorage.setItem("products", JSON.stringify(afterDelete))
        toast.success("Product is deleted successfully")
    }

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) || product.price.toString().includes(search.toString())
    )

    return (
        <div>
            <h1 className='text-center text-3xl'>Product List</h1>
            <div className='flex justify-between items-center'>
                <Link to='/product/create/' className='px-6 py-4 inline-block text-white rounded-lg cursor-pointer bg-green-600'>Add New Product</Link>
                <p className='text-lg'>Username is :{user?.email}</p>
                <input
                    type="search"
                    className="border border-solid border-black rounded-md py-4 px-6"
                    placeholder="Search Here"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
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
                        filteredProducts.length > 0 ? (
                            filteredProducts.map((product, index) => {
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
                        ) : (
                            <tr className='p-4 border border-solid border-black'>
                                <td colSpan={4} className='p-4 border border-solid border-black text-center'>No products found</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductList