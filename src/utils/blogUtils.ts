interface FrontMatter {
  id?: string;
  title: string;
  date: string;
  author: string;
  categories: number[];
}

function parseFrontMatter(content: string): { data: FrontMatter; content: string } {
  const frontMatterRegex = /---\n([\s\S]*?)\n---\n([\s\S]*)/;
  const matches = content.match(frontMatterRegex);
  if (!matches) {
    throw new Error('Invalid front matter format');
  }
  const [, frontMatterString, markdownContent] = matches;
  const data: any = {};

  // Parse the YAML-like front matter
  frontMatterString.split('\n').forEach(line => {
    const [key, ...valueArr] = line.split(':');
    if (key && valueArr.length) {
      // Remove type annotation for value
      let value: string | (string | number)[] = valueArr.join(':').trim();
      
      // Handle arrays (like categories)
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(v => {
          const num = parseInt(v.trim());
          return isNaN(num) ? v.trim() : num;
        });
      }
      
      data[key.trim()] = value;
    }
  });

  return {
    data: data as FrontMatter,
    content: markdownContent.trim()
  };
}

const idMapping = new Map<string, string>();

export async function getBlogPosts() {
  const posts = import.meta.glob('../content/*.md', {
    eager: true,
    query: '?raw',
    import: 'default'
  });

  return Object.entries(posts).map(([filepath, content]) => {
    const { data, content: markdownContent } = parseFrontMatter(content as string);
    const slug = filepath.replace('../content/', '').replace('.md', '');

    // Use the ID from front matter, or generate one if not provided
    let id = data.id || idMapping.get(slug);
    if (!id) {
      id = generateId();
      idMapping.set(slug, id);
    }

    return {
      id,
      slug,
      title: data.title,
      content: markdownContent,
      author: data.author,
      date: data.date,
      categories: data.categories || [],
      comments: []
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostById(id: string) {
  const posts = await getBlogPosts();
  return posts.find(post => post.id === id) ?? null;
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 15) +
         Math.random().toString(36).substring(2, 15);
}