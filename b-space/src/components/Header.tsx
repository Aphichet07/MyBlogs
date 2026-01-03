import '../App.css'

function Header() {
  return (
    <header className="bg-amber-50/80 backdrop-blur-md border-b border-amber-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="shrink-0 cursor-pointer">
            <span className="pl-20 font-bold text-2xl text-slate-900 tracking-tight">
              B-Space
            </span>
          </div>

          <nav>
            <ul className="flex gap-8">
              <li>
                <a href="#" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors duration-200">
                  Labs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors duration-200">
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