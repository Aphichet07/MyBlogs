import matter from 'gray-matter';
import { Buffer } from 'buffer';

(window as any).Buffer = (window as any).Buffer || Buffer;

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

export const getAllPosts = () => {
  const modules = import.meta.glob('../posts/*.md', { as: 'raw', eager: true });

  const posts = Object.keys(modules).map((path) => {
    const fileContent = modules[path] as string;
    const { data, content } = matter(fileContent);

    return {
      slug: data.slug,
      title: data.title,
      date: data.date,
      description: data.description,
      content: content,
    } as Post;
  });

  return posts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
};