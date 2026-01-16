import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { GraduationCap, Briefcase, Landmark, BookOpen, ChevronRight, Check } from 'lucide-react'

const categories = [
    {
        id: 'CAT',
        name: 'CAT / MBA',
        description: 'Entrance exams for premium business schools like IIMs, XLRI, FMS.',
        icon: GraduationCap,
        color: 'blue',
    },
    {
        id: 'SSC',
        name: 'SSC CGL / CHSL',
        description: 'Staff Selection Commission exams for central government jobs.',
        icon: Briefcase,
        color: 'emerald',
    },
    {
        id: 'Bank',
        name: 'Banking / IBPS',
        description: 'Banking exams for PO, Clerk, and Specialist Officer positions.',
        icon: Landmark,
        color: 'amber',
    },
    {
        id: 'UPSC',
        name: 'UPSC / CSAT',
        description: 'Civil services and CSAT preparation for IAS/IPS aspirants.',
        icon: BookOpen,
        color: 'purple',
    },
]

export default function Onboarding() {
    const [selected, setSelected] = useState<string | null>(null)
    const navigate = useNavigate()

    const handleContinue = () => {
        if (selected) {
            navigate('/')
        }
    }

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 sm:p-12">
            <div className="w-full max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-graphite-900 mb-4 tracking-tight font-display">
                        Personalize Your Experience
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Which exam are you preparing for? We'll tailor your dashboard and mock tests accordingly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {categories.map((cat) => {
                        const Icon = cat.icon
                        const isSelected = selected === cat.id

                        return (
                            <button
                                key={cat.id}
                                onClick={() => setSelected(cat.id)}
                                className={`flex items-start text-left p-6 rounded-3xl border-2 transition-all duration-300 group relative ${isSelected
                                    ? 'border-olive bg-olive/5 shadow-md ring-1 ring-olive/20'
                                    : 'border-gray-100 hover:border-olive hover:bg-gray-50'
                                    }`}
                            >
                                <div className={`mr-5 p-4 rounded-2xl bg-white shadow-sm transition-transform duration-300 ${isSelected ? 'scale-110' : 'group-hover:scale-105'}`}>
                                    <Icon className={`w-8 h-8 rounded-xl ${cat.color === 'blue' ? 'text-blue-500' :
                                        cat.color === 'emerald' ? 'text-emerald-500' :
                                            cat.color === 'amber' ? 'text-amber-500' :
                                                'text-purple-500'
                                        }`} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-graphite-900 mb-2">{cat.name}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{cat.description}</p>
                                </div>
                                {isSelected && (
                                    <div className="absolute top-4 right-4 w-6 h-6 bg-olive rounded-full flex items-center justify-center shadow-lg">
                                        <Check className="text-white w-4 h-4" />
                                    </div>
                                )}
                            </button>
                        )
                    })}
                </div>

                <div className="flex flex-col items-center gap-4">
                    <Button
                        size="lg"
                        disabled={!selected}
                        onClick={handleContinue}
                        className="w-full sm:w-64 h-14 rounded-2xl bg-graphite-900 hover:bg-graphite-800 text-white font-bold text-lg shadow-xl shadow-graphite-900/10 transition-all flex items-center justify-center"
                    >
                        Continue <ChevronRight className="ml-2 w-5 h-5" />
                    </Button>
                    <p className="text-gray-500 text-sm">You can always change this in your profile settings later.</p>
                </div>
            </div>
        </div>
    )
}
