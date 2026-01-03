import '../App.css'

function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="shrink-0 cursor-pointer">
             {/* Logo  */}
            <span className="font-bold text-2xl text-slate-900 tracking-tight">
              B-Space
            </span>
          </div>

          <nav>
            <ul className="flex gap-8">
              <li>
                <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-200">
                  Labs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-200">
                  Notebook
                </a>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </header>
  )
}

export default Header