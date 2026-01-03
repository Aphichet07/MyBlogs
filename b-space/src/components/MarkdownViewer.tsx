import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import 'katex/dist/katex.min.css'

interface MarkdownViewerProps {
  content: string
}

const MarkdownViewer = ({ content }: MarkdownViewerProps) => {
  return (
    <div className="font-mono text-slate-800 leading-relaxed text-sm md:text-base">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          h1: ({ node, ...props } : any) => (
            <div className="mb-8 mt-10">
              <h1 className="text-2xl font-bold mb-2 tracking-tight" {...(props as any)} />
              <div className="border-b border-dashed border-slate-300 w-full" />
            </div>
          ),
          
          h2: ({ node, ...props } : any) => (
            <h2 className="text-xl font-bold mt-8 mb-4 decoration-slate-300 underline underline-offset-4 decoration-dashed" {...(props as any)} />
          ),

          p: ({ node, ...props } : any ) => (
            <p className="mb-6 text-justify leading-7" {...(props as any)} />
          ),

          ul: ({ node, ...props } : any) => (
             <ul className="list-disc list-outside ml-6 mb-6 space-y-2" {...(props as any)} />
          ),
          ol: ({ node, ...props } : any) => (
             <ol className="list-decimal list-outside ml-6 mb-6 space-y-2" {...(props as any)} />
          ),

          code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <div className="mb-8 rounded-md overflow-hidden border border-slate-200 shadow-sm">
                  <div className="bg-slate-900 text-slate-400 text-xs px-3 py-1 border-b border-slate-700 flex justify-between">
                      <span>{match[1]}</span>
                      <span>code</span>
                  </div>
                  <SyntaxHighlighter
                    {...props}
                    children={String(children).replace(/\n$/, '')}
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    customStyle={{ margin: 0, borderRadius: 0, fontSize: '0.9em' }}
                  />
              </div>
            ) : (
              <code {...props} className="bg-slate-100 px-1.5 py-0.5 rounded text-red-600 font-bold text-sm border border-slate-200">
                {children}
              </code>
            )
          }
        }}
      />
    </div>
  )
}

export default MarkdownViewer