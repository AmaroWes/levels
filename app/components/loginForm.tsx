"use client"
import { signIn } from "next-auth/react"

export default function LoginForm() {
    async function login(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = {
            email: formData.get("email"),
            password: formData.get("password"),
        }
        signIn("credentials",{
            ...data,
            callbackUrl: "/player"
        })
    }
    return(
        <form onSubmit={login} className="bg-white p-12 rounded-lg w-96 max-w-full flex flex-col gap-2 justify-center items-center">
          <h2 className="font-bold text-xl text-primary-content mb-3">Levels</h2>
          <input
            name="email" 
            type="email"
            placeholder="Email"
            className="input input-primary w-full" 
            autoComplete="off"
            required
          />
          <input 
            name="password"
            type="password"
            placeholder="password"
            className="input input-primary w-full" 
            autoComplete="off"
            required
          />
          <button type="submit" className="btn btn-primary w-full">Sign in</button>
        </form>
    )
}