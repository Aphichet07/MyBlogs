import { Linkedin, Github } from "lucide-react"

function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    
                    <div className="flex flex-col">
                        <span className="font-bold text-slate-800">Entropy-Space</span>
                        <span className="text-xs text-slate-500 font-light">
                            Engineering & Research Labs
                        </span>
                    </div>

                    {/* Icons */}
                    <ul className="flex items-center gap-4">
                        <li>
                            <a href="https://github.com/Aphichet07" className="p-2 block text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-all">
                                <Github size={20} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/aphichet-chaiyasat-2a21a1238/" className="p-2 block text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all">
                                <Linkedin size={20} />
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </footer>
    )
}

export default Footer;