import React from "react";
import { Container } from "../../components/Container.tsx";
import { getArticlesMetadata} from "../../lib/articles.ts";
import { ArticleCard } from "../../components/Article.tsx";

const SimpleLayout = ({ title, intro, children }: {
  title: string
  intro: string
  children?: React.ReactNode
}) => {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  )
};

const ArticlesIndex = () => {
  const articles = getArticlesMetadata();

  return (
    <SimpleLayout
      title="My blog"
      intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
};

export default ArticlesIndex;