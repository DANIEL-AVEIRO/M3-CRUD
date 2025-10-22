import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        const users = JSON.parse(localStorage.getItem('users')) || []
        const newUser = {
            id: Date.now(),
            username,
            email,
            password
        }
        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))
        toast.success("Registration successfully")
    }
    return (
        <div className="mt-10">
            <h1 className="text-center text-4xl mb-4">Register Form</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 w-full max-w-1/2 mx-auto">
                <input
                    type="text"
                    className="border border-solid border-black rounded-md py-4 px-6"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
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
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register