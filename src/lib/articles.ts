interface FrontMatter {
  title: string
  description: string
  image: string
  date: Date,
  tags: string[]
}

interface ArticleWithSlug  {
  title: string
  description: string
  image: string
  date: Date,
  tags: string[]
  slug: string
}

export type { FrontMatter, ArticleWithSlug }

export function getArticleMetadata(pathname: string) : ArticleWithSlug {
  const directory = pathname.replace('/articles', '')
  const allArticles = getArticlesMetadata();
  
  return allArticles.filter(a => a.slug.includes(directory))[0];
}

export function getArticlesMetadata() : ArticleWithSlug[] {
  const modules = import.meta.glob('../pages/articles/\\(posts\\)/*/*.mdx', { eager: true })

  return Object.keys(modules).map((key) => {
    const mod : any = modules[key];
    return {
      ...mod.frontmatter,
      slug: key.replace('../pages', '').replace('/(posts)', '').replace('/index.mdx', '')
    }
  }).sort((a, b) => b.date - a.date)
}

export function getArchivedArticlesMetadata() : ArticleWithSlug[] {
  const modules = import.meta.glob('../pages/articles/\\(posts\\)/archive/**/*.mdx', { eager: true })

  return Object.keys(modules).map((key) => {
    const mod : any = modules[key];
    return {
      ...mod.frontmatter,
      slug: key.replace('../pages', '').replace('/(posts)', '').replace('/index.mdx', '')
    }
  }).sort((a, b) => b.date - a.date)
}