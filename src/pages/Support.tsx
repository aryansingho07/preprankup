import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MessageSquare, MapPin, Send } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Support() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setTimeout(() => {
            setIsSubmitting(false)
            alert('Message sent successfully!')
        }, 1500)
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold text-graphite-900 mb-6 font-display">Contact Support</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Our team is here to help you achieve your goals. Reach out to us anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Support Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="p-8 rounded-3xl bg-olive/5 border border-olive/10 flex items-start gap-4 transition-all hover:bg-olive/10">
                            <div className="w-12 h-12 bg-graphite-900 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                                <Mail className="text-white w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-graphite-900 mb-1">Email Us</h3>
                                <p className="text-gray-600 mb-2">Typically responds within 2 hours</p>
                                <a href="mailto:support@preprankup.com" className="text-olive-dark font-bold hover:underline">support@preprankup.com</a>
                            </div>
                        </div>

                        <div className="p-8 rounded-3xl bg-graphite-50 border border-graphite-100 flex items-start gap-4 transition-all hover:bg-graphite-100">
                            <div className="w-12 h-12 bg-graphite-900 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                                <Phone className="text-white w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-graphite-900 mb-1">Call Us</h3>
                                <p className="text-gray-600 mb-2">Mon-Fri from 9am to 6pm IST</p>
                                <a href="tel:+911234567890" className="text-graphite-700 font-bold hover:underline">+91 1800-PREP-RANK</a>
                            </div>
                        </div>

                        <div className="p-8 rounded-3xl bg-olive/5 border border-olive/10 flex items-start gap-4 transition-all hover:bg-olive/10">
                            <div className="w-12 h-12 bg-olive rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                                <MessageSquare className="text-white w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-graphite-900 mb-1">Live Chat</h3>
                                <p className="text-gray-600 mb-2">Available 24/7 for Pro members</p>
                                <button className="text-olive-dark font-bold hover:underline">Start Chat Now</button>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 lg:p-12 rounded-3xl border border-gray-100 shadow-xl shadow-graphite-900/5">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input id="firstName" placeholder="John" className="h-12 rounded-xl focus:ring-olive focus:border-olive" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input id="lastName" placeholder="Doe" className="h-12 rounded-xl focus:ring-olive focus:border-olive" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="john@example.com" className="h-12 rounded-xl focus:ring-olive focus:border-olive" required />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input id="subject" placeholder="How can we help?" className="h-12 rounded-xl focus:ring-olive focus:border-olive" required />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea id="message" placeholder="Tell us more about your inquiry..." className="min-h-[150px] rounded-xl pt-4 focus:ring-olive focus:border-olive" required />
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={isSubmitting}
                                    className="w-full h-14 rounded-2xl bg-graphite-900 hover:bg-graphite-800 text-white font-bold text-lg shadow-xl shadow-graphite-900/10 transition-all flex items-center justify-center"
                                >
                                    {isSubmitting ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <span className="flex items-center justify-center">
                                            Send Message <Send className="ml-2 w-5 h-5" />
                                        </span>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
