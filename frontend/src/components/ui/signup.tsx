import { Input } from "./input";
import { Button } from "./button";
import { Label } from "./label";
import { useState } from "react";
import axios from "axios";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");
        try {
            const response = await axios.post("http://localhost:3000/app/v1/api/user/signup", {
                username:name,
                email,
                password,
            });
            if (response.data && response.data.message) {
                setSuccess("successfully signup!");
                setName("");
                setEmail("");
                setPassword("");
                window.location.href = "/signin";
            } else {
                setError(response.data.message || "signup failed!");
            }
        } catch (err: any) {
            setError(
                err.response?.data?.message ||
                "error loading server।"
            );
        }
        setLoading(false);
    };

    return (
        
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                            className="mt-1"
                        />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="mt-1"
                        />
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                            className="mt-1"
                        />
                    </div>
                    {error && <div className="text-red-500 text-sm text-center">{error}</div>}
                    {success && <div className="text-green-600 text-sm text-center">{success}</div>}
                    <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                        disabled={loading}
                    >
                        {loading ? "Signing up..." : "Sign Up"}
                    </Button>
                </form>
                <div className="text-center mt-4 text-sm text-gray-500">
                    Already have an account? <a href="/signin" className="text-blue-600 hover:underline">Sign In</a>
                </div>
            </div>
        </div>
    );
}
