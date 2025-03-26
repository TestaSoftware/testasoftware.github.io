import { Container } from "../../components/Container.tsx";
import {BlueSkyIcon, GitHubIcon, LinkedInIcon, MastodonIcon} from "../../components/Social.tsx";
import {Link} from "../../components/ui/link.tsx";
import clsx from "clsx";
import {PhoneIcon} from "@heroicons/react/16/solid";
import {EnvelopeIcon, LockClosedIcon} from "@heroicons/react/20/solid";

function SocialLink({
                      icon: Icon,
                      ...props
                    }: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <li className={clsx(props.className, 'flex')}>
      <Link
        href={props.href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-indigo-500 dark:text-zinc-200 dark:hover:text-indigo-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-indigo-500" />
        <span className="ml-4">{props.children}</span>
      </Link>
    </li>
  )
}

function SocialLinkDownload({
                      icon: Icon,
                      ...props
                    }: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <li className={clsx(props.className, 'flex')}>
      <a
        href={props.href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-indigo-500 dark:text-zinc-200 dark:hover:text-indigo-500"
        download
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-indigo-500" />
        <span className="ml-4">{props.children}</span>
      </a>
    </li>
  )
}



export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <img
              src="/images/steve-avatar.jpg"
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Steve Testa: software architect, accessibility advocate, guitar enthusiast, Dad.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I am a software developer and architect. My current day job is at 
              Hyland Software here in the Clevaland area in Ohio. I have been with 
              Hyland for more than 15 years. My work is mostly customer facing web 
              development using the dotnet stack, react, and svelte. While I love 
              everything dotnet, I'm also a linux nerd at heart.
            </p> 
            <p>
              I am a husband to an amazing wife and father of two amazing daughters. 
              My life revolves around my family. I love being a girl Dad. Let's paint 
              our toes and braid hair. I love it all. I wouldn't trade a thing.  
            </p>
            <p>
              As a father to a special needs kiddo, I am also a huge advocate for 
              accessibility and inclusion. Both in the physical and digital worlds. 
            </p>
            <p>
              I have a varied list of hobbies that enjoy including: playing guitar, 
              electronics, 3D printing, and playing chess. I am also a huge fan of 
              the Rubik's cube.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" aria-label="Follow on BlueSky" icon={BlueSkyIcon}>Follow on Bluesky</SocialLink>
            <SocialLink href="#" className="mt-4" aria-label="Follow on Mastodon" icon={MastodonIcon}>Follow on Mastodon</SocialLink>
            <SocialLink href="#" className="mt-4" aria-label="Follow on LinkedIn" icon={LinkedInIcon}> Follow on LinkedIn</SocialLink>
            <SocialLink href="#" className="mt-4" aria-label="Follow on GitHub" icon={GitHubIcon}>Follow on GitHub</SocialLink>
            <SocialLink href="mailto:steve@testasoftware.com" aria-label="email" icon={EnvelopeIcon} className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
              steve@testasoftware.com
            </SocialLink>
            <SocialLink href="tel:440-305-0073" aria-label="telephone" icon={PhoneIcon} className="mt-4">440.305.0073</SocialLink>
            <SocialLinkDownload href="/public/data/steve_testa.asc" aria-label="public pgp key" icon={LockClosedIcon} className="mt-4">PGP Key</SocialLinkDownload>
          </ul>
        </div>
      </div>
    </Container>
  )
}