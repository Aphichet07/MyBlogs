import { getAllPosts } from '../utils/loadPosts'
import { Link } from 'react-router-dom'

function Notebook() {
  const posts = getAllPosts(); 

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 font-mono">
      
      <div className="mb-12">
         <h1 className="text-3xl font-bold mb-4">Research Notebook</h1>
         <div className="border-b border-dashed border-slate-300 w-full" />
      </div>

      <div className="space-y-10">
        {posts.map((post) => (
          <div key={post.slug} className="group">
            {/* วันที่ */}
            <span className="text-xs text-slate-400 block mb-1">{post.date}</span>
            
            {/* ชื่อเรื่อง */}
            <Link to={`/notebook/${post.slug}`}>
              <h2 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors cursor-pointer">
                {post.title}
              </h2>
            </Link>

            {/* คำอธิบาย */}
            <p className="text-slate-500 mt-2 text-sm leading-relaxed">
              {post.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Notebook