"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"

export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    setTimeout(() => {
      // Admin credentials
      if (
        (email === "admin@cygnuzai.com" && password === "1234") ||
        (email === "founder@cygnuzai.com" && password === "1234")
      ) {
        const expiryDate = new Date()
        expiryDate.setTime(expiryDate.getTime() + 24 * 60 * 60 * 1000)

        document.cookie = `admin-session=authenticated; path=/; expires=${expiryDate.toUTCString()}`
        router.push("/admin")
      } else {
        setError("Invalid email or password")
      }

      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col md:flex-row">
      {/* Left Panel */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-lime-400 to-emerald-500 p-12 flex-col justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <span className="text-lime-300 font-bold text-lg">CA</span>
            </div>
            <span className="text-2xl font-semibold text-black">Cygnuz AI</span>
          </div>

          <h1 className="text-4xl font-bold text-black mt-12">
            Cygnuz AI Admin Panel
          </h1>
          <p className="text-black/80 mt-4 max-w-md">
            Manage AI agents, automation workflows, client systems, and platform
            settings from one secure dashboard.
          </p>
        </div>

        <div className="mt-auto">
          <Image
            src="/images/admin-cover.png"
            alt="Cygnuz AI Dashboard"
            width={500}
            height={300}
            className="rounded-xl shadow-xl"
          />
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12">
        {/* Mobile Header */}
        <div className="flex md:hidden items-center gap-3 mb-8 w-full">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-lg">CA</span>
          </div>
          <span className="text-2xl font-semibold text-white">Cygnuz AI</span>
        </div>

        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              Sign in to Admin
            </h2>
            <p className="text-neutral-400 mt-2">
              Access the Cygnuz AI management dashboard
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3 rounded-lg flex items-center gap-3">
                <AlertCircle className="h-5 w-5" />
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-neutral-200">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@cygnuzai.com"
                className="bg-[#1a1a1a] border-neutral-800 text-white"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-neutral-200">
                  Password
                </Label>
                <button
                  type="button"
                  className="text-sm text-lime-300 hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-[#1a1a1a] border-neutral-800 text-white"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-lime-300 text-black hover:bg-lime-200"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-neutral-400 text-sm">
              Need help? Contact{" "}
              <a
                href="mailto:support@cygnuzai.com"
                className="text-lime-300 hover:underline"
              >
                cygnuzai@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
