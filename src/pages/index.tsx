import { Container } from "../components/Container.tsx";
import { SocialLink, BlueSkyIcon, MastodonIcon, LinkedInIcon, GitHubIcon } from "../components/Social.tsx";
import { getArticlesMetadata} from "../lib/articles.ts";
import { ArticleCard } from "../components/Article.tsx";
import { ResumeSummary } from "../components/Resume.tsx";

const Index = () => {
  const articles = getArticlesMetadata().slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software architect, developer, and accessibility advocate.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Welcome to Testa Software, my personal and professional digital home.
            I'm Steve, a software architect and developer based in Cleveland, Ohio.
            I'm a full-stack programmer passionate about dotnet, web technologies,
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
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <ResumeSummary />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Index
