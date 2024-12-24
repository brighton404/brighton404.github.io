import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getPostById } from '@/utils/blogUtils';
import { ButtonColor, ButtonState } from '@/components/ui/actionButton';
import Button from '@/components/ui/button';
import Icons from '@/components/icons';
import { marked } from 'marked';

export function BlogPage() {
  const { id } = useParams<{ id: string }>();
  
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', id],
    queryFn: () => getPostById(id!),
    enabled: !!id
  });

  if (isLoading) {
    return (
      <div className='w-full h-screen flex justify-center align-top items-center'>
        <div>
          <p>Loading post...</p>
        </div>
      </div>
    );
  }
  
  if (error || !post) {
    return (
      <div className='w-full h-screen flex justify-center align-middle items-center'>
        <div className='flex flex-col items-center justify-center'>
          <h2>Post not found</h2>
          <Button color={ButtonColor.Primary} state={ButtonState.Default} isOutlined={false} navigateTo="../blog" icon={<Icons variant='chevron-left'/>}>
            Return to blog list
          </Button>
        </div>
      </div>
    );
  }

  // Parse the Markdown content
  const markdownContent = marked(post.content);

  return (
    <div className='w-screen flex justify-center align-top items-center pt-20'>
      <main className="w-1/2 sm:w-full sm:px-6 flex flex-col gap-2">
        <Button color={ButtonColor.Primary} state={ButtonState.Default} isOutlined={false} navigateTo="../blog" icon={<Icons variant='chevron-left'/>}>Back</Button>
        <div className='flex justify-between sm:flex-col gap-4 sm:gap-2  bg-900 px-4 py-2 rounded-sm'>
          <h1>{post.title}</h1>
          <div className="flex gap-2">
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>
        </div>
        <article className="Markdown" dangerouslySetInnerHTML={{ __html: markdownContent }} />
      </main>
    </div>
  );
}
