import { useParams, Link } from 'react-router-dom';
import { getAllPosts } from '../utils/loadPosts';
import MarkdownViewer from '../components/MarkdownViewer';
import { ArrowLeft } from 'lucide-react'; 

function BlogPost() {
  const { slug } = useParams(); 
  const posts = getAllPosts();
  
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="text-center mt-20 font-mono">Post not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 font-mono">
      
      <Link to="/notebook" className="inline-flex items-center text-slate-500 hover:text-slate-900 mb-8 text-sm transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Notebook
      </Link>

      {/* ส่วนหัวบทความ */}
      <header className="mb-12">
        <span className="text-xs text-slate-400 block mb-2">{post.date}</span>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
          {post.title}
        </h1>
        {/* เส้นประคั่นระหว่างหัวข้อกับเนื้อหา */}
        <div className="border-b border-dashed border-slate-300 w-full" />
      </header>

      {/* เนื้อหาบทความ (Markdown) */}
      <article>
        <MarkdownViewer content={post.content} />
      </article>

    </div>
  );
}

export default BlogPost;