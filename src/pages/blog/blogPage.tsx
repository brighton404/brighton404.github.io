import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getPostById } from '@/utils/blogUtils';
import ReactMarkdown from 'react-markdown';
import type { ReactNode } from 'react';
import Header from '@/components/header';

// Define the types for custom components
type MarkdownComponentProps = {
  children: ReactNode;
  [key: string]: any;
};

// Custom components for ReactMarkdown
const MarkdownComponents = {
  p: ({ children, ...props }: MarkdownComponentProps) => (
    <p className="mb-4 leading-relaxed" {...props}>{children}</p>
  ),
  h1: ({ children, ...props }: MarkdownComponentProps) => (
    <h1 className="text-3xl font-bold mt-8 mb-4" {...props}>{children}</h1>
  ),
  h2: ({ children, ...props }: MarkdownComponentProps) => (
    <h2 className="text-2xl font-bold mt-6 mb-3" {...props}>{children}</h2>
  ),
  h3: ({ children, ...props }: MarkdownComponentProps) => (
    <h3 className="text-xl font-bold mt-4 mb-2" {...props}>{children}</h3>
  ),
  ul: ({ children, ...props }: MarkdownComponentProps) => (
    <ul className="list-disc pl-6 mb-4 space-y-2" {...props}>{children}</ul>
  ),
  ol: ({ children, ...props }: MarkdownComponentProps) => (
    <ol className="list-decimal pl-6 mb-4 space-y-2" {...props}>{children}</ol>
  ),
  code: ({ inline, className, children, ...props }: {
    inline?: boolean;
    className?: string;
    children: ReactNode;
    [key: string]: any;
  }) => (
    <code
      className={`${className ?? ''} ${
        inline
          ? 'bg-gray-100 rounded px-1 py-0.5'
          : 'block bg-100 p-4 rounded-lg overflow-x-auto'
      }`}
      {...props}
    >
      {children}
    </code>
  ),
  blockquote: ({ children, ...props }: MarkdownComponentProps) => (
    <blockquote className="border-l-4 border-gray-200 pl-4 italic my-4" {...props}>
      {children}
    </blockquote>
  ),
};

export function BlogPage() {
  const { id } = useParams<{ id: string }>();
  
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', id],
    queryFn: () => getPostById(id!),
    enabled: !!id
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Post not found</h2>
          <Link 
            to="/blog" 
            className="text-blue-500 hover:underline"
          >
            Return to blog list
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 w-screen">
      <Header />
      <main className="max-w-3xl mx-auto py-8 px-4 sm:pt-20">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-blue-500 hover:underline mb-6"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog List
        </Link>
        <article className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-600 mb-8">
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>{post.author}</span>
          </div>
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown 
              components={MarkdownComponents}  // Corrected to use 'components'
              className="markdown-content"
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
    </div>
  );
}
