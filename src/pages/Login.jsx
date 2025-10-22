import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const users = JSON.parse(localStorage.getItem('users')) || []

        if (!email || !password) {
            toast.error("All field are required")
        } else {
            const loginUser = users.find((user) => user.email === email && user.password === password)
            if (loginUser) {
                localStorage.setItem("user", JSON.stringify(loginUser))
                toast.success("Login successfully")
                navigate('/')
            } else {
                toast.error("Login failed")
            }
        }
    }
    return (
        <div className="mt-10">
            <h1 className="text-center text-4xl mb-4">Login Form</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 w-full max-w-1/2 mx-auto">
                <input
                    type="email"
                    className="border border-solid border-black rounded-md py-4 px-6"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="border border-solid border-black rounded-md py-4 px-6"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-red-500 py-4 px-6 rounded-sm text-white font-bold text-base"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login