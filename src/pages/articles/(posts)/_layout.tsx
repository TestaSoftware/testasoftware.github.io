import {Container} from "../../../components/Container.tsx";
import {Outlet, useLocation, useNavigate} from "react-router";
import {ArrowLeftIcon} from "@heroicons/react/20/solid";
import {Article} from "../../../components/Article.tsx";
import { getArticleMetadata } from "../../../lib/articles.ts";

export default function ArticleLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const previousPathname = document.referrer;
  const article = getArticleMetadata(location.pathname);

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          {previousPathname && (
            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Go back to articles"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            </button>
          )}
          <Article title={article.title} date={article.date.toDateString()}>
              <Outlet />
          </Article>
        </div>
      </div>
    </Container>
  )
}
