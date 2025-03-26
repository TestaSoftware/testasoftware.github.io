import { ArticleWithSlug } from "../lib/articles.ts";
import { Card } from "./Card.tsx";
import { Prose } from "./Prose.tsx";

export const ArticleCard = ({ article }: { article: ArticleWithSlug }) => {
  const formatted_date = `${article.date.getFullYear()}-${article.date.getMonth() + 1}-${article.date.getDate()}`;
  
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={article.slug}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={formatted_date}
          className="md:hidden"
          decorate
        >
          {formatted_date}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={formatted_date}
        className="mt-1 max-md:hidden"
      >
        {formatted_date}
      </Card.Eyebrow>
    </article>
  )
}

export function Article({ title, date, children }: { title: string, date: string, children: React.ReactNode }) {
  return (
    <article>
      <header className="flex flex-col">
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {title}
        </h1>
        <time
          //dateTime={article.date}
          className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
          <span className="ml-3">{date}</span>
        </time>
      </header>
      <Prose className="mt-8" data-mdx-content>
        {children}
      </Prose>
    </article>
  );
}