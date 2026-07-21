export interface ProjectFrontmatter {
  title: string;
  slug: string;
  date: string;
  category: string;
  tags: string[];
  description: string;
  thumbnail: string;
  github: string;
  demo: string;
  featured: boolean;
}

export interface Project extends ProjectFrontmatter {
  content: string;
}
