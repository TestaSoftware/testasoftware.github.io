import Link from 'next/link'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  BlueSkyIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MastodonIcon,
  XIcon,
} from '@/components/SocialIcons'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { Resume } from '@/components/Resume'
import { Photos } from '@/components/PhotoRibbon'


function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}


function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}


export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software architect, developer, and accessibility advocate.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Welcome to Testa Software, my personal and professional digital home.
            I&apos;m Steve, a software architect and developer based in Cleveland, Ohio.
            I&apos;m a full-stack programmer passionate about dotnet, web technologies,
            and accessibility.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink href="https://bsky.app/profile/testasoftware.com" aria-label="Follow on BlueSky" icon={BlueSkyIcon} />
            <SocialLink href="https://hachyderm.io/@steve_testa" aria-label="Follow on Mastodon" icon={MastodonIcon} />
            <SocialLink href="https://www.linkedin.com/in/stevendtesta/" aria-label="Follow on LinkedIn" icon={LinkedInIcon} />
            <SocialLink href="https://github.com/stesta" aria-label="Follow on GitHub" icon={GitHubIcon} />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
          </div>
        </div>
      </Container>
    </>
  )
}
