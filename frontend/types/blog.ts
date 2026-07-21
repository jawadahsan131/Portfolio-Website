export interface BlogFrontmatter {
  title: string;
  slug: string;
  date: string;
  category: string;
  tags: string[];
  excerpt: string;
  thumbnail: string;
  readingTime: string;
}

export interface BlogPost extends BlogFrontmatter {
  content: string;
}
