import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export interface ProjectData {
    slug: string;
    title: string;
    description: string;
    techStack: string[];
    github: string;
    content: string;
}

export async function getAllProjects(): Promise<ProjectData[]> {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        const processedContent = await remark().use(html).process(content);
        const contentHtml = processedContent.toString();

        return {
          slug,
          title: data.title,
          description: data.description,
          techStack: data.techStack || [],
          github: data.github || '',
          content: contentHtml,
        };
      })
  );

  return allProjectsData;
}

export async function getProjectBySlug(slug: string): Promise<ProjectData | null> {
    try {
        const fullPath = path.join(projectsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        const processedContent = await remark().use(html).process(content);
        const contentHtml = processedContent.toString();

        return {
            slug,
            title: data.title,
            description: data.description,
            techStack: data.techStack || [],
            github: data.github || '',
            content: contentHtml,
        };
    } catch (error) {
        return null;
    }
}