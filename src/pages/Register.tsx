import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { User, Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react'

export default function Register() {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate register logic
        setTimeout(() => {
            setIsLoading(false)
            navigate('/onboarding')
        }, 1500)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-cream via-white to-white p-4">
            <div className="w-full max-w-md">
                {/* Logo/Brand */}
                <div className="text-center mb-8">
                    <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
                        <div className="w-10 h-10 bg-graphite-900 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                            <span className="text-white font-bold text-lg">P</span>
                        </div>
                        <span className="text-2xl font-bold text-graphite-900 font-display">
                            Prep<span className="text-olive">RankUp</span>
                        </span>
                    </Link>
                    <h1 className="text-3xl font-bold text-graphite-900 mb-2">Create an account</h1>
                    <p className="text-gray-600">Start your journey to top percentiles today</p>
                </div>

                {/* Register Card */}
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-xl shadow-graphite-900/5">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    className="pl-11 h-12 rounded-xl border-gray-200 focus:ring-olive focus:border-olive"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email address</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    className="pl-11 h-12 rounded-xl border-gray-200 focus:ring-olive focus:border-olive"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    className="pl-11 h-12 rounded-xl border-gray-200 focus:ring-olive focus:border-olive"
                                    required
                                />
                            </div>
                        </div>

                        <p className="text-xs text-gray-500 leading-relaxed">
                            By clicking "Create account", you agree to our{' '}
                            <Link to="/terms" className="text-olive-dark hover:text-olive font-medium underline">Terms of Service</Link>{' '}
                            and{' '}
                            <Link to="/privacy" className="text-olive-dark hover:text-olive font-medium underline">Privacy Policy</Link>.
                        </p>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-12 rounded-xl bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <span className="flex items-center justify-center">
                                    Create account <ArrowRight className="ml-2 w-5 h-5" />
                                </span>
                            )}
                        </Button>
                    </form>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-gray-100" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-4 text-gray-400 font-medium">Or join with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="h-12 rounded-xl border-gray-200 hover:bg-gray-50 flex items-center justify-center gap-2">
                            <Chrome className="w-5 h-5 text-gray-600" />
                            <span className="text-gray-700 font-medium">Google</span>
                        </Button>
                        <Button variant="outline" className="h-12 rounded-xl border-gray-200 hover:bg-gray-50 flex items-center justify-center gap-2">
                            <Github className="w-5 h-5 text-gray-600" />
                            <span className="text-gray-700 font-medium">GitHub</span>
                        </Button>
                    </div>
                </div>

                {/* Footer Link */}
                <p className="text-center mt-8 text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="text-olive-dark hover:text-olive font-bold">
                        Log in instead
                    </Link>
                </p>
            </div>
        </div>
    )
}
