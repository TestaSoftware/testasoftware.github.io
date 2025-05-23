import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import {EnvelopeIcon, PhoneIcon, LockClosedIcon} from "@heroicons/react/20/solid";

import { Container } from '@/components/Container'
import {
  BlueSkyIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MastodonIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-indigo-500 dark:text-zinc-200 dark:hover:text-indigo-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-indigo-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function SocialLinkDownload({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-indigo-500 dark:text-zinc-200 dark:hover:text-indigo-500"
        download
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-indigo-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    "I&apos;m Steve Testa: software architect, accessibility advocate, guitar enthusiast, Dad.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Steve Testa: software architect, accessibility advocate, guitar enthusiast, Dad.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m an experienced software architect passionate about delivering innovative, high-quality solutions. With a strong background in customer-facing web development, I specialize in the .NET stack, React and Svelte—though my expertise extends across multiple languages and platforms as a skilled polyglot developer. I have a proven track record of architecting custom software solutions, serving as a technical thought leader, and driving best practices throughout the software development lifecycle, including development, DevOps, and testing. While I embrace the world of .NET, my inner Linux enthusiast always finds a way to shine.
            </p>
            <p>
              Beyond code, my life revolves around my incredible family. I&apos;m a devoted husband to an amazing wife and a proud father to two wonderful daughters. Being a girl dad is one of my greatest joys—whether we&apos;re painting toes or braiding hair, I cherish every moment and wouldn&apos;t trade a single one.
            </p>
            <p>
              As a father to a special needs child, I&apos;m deeply committed to advocating for accessibility and inclusion, both in the physical and digital worlds. Web accessibility isn't just a professional passion—it's a personal mission. I believe technology should empower everyone, and I work to ensure that digital experiences are inclusive for all.
            </p>
            <p>
              Outside of work and family, I have an eclectic mix of hobbies that keep me engaged. I love playing guitar, tinkering with electronics, exploring 3D printing, and strategizing over a good game of chess. I also have an undeniable obsession with the Rubik&apos;s cube.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://bsky.app/profile/testasoftware.com" aria-label="Follow on BlueSky" icon={BlueSkyIcon}>Follow on Bluesky</SocialLink>
            <SocialLink href="https://hachyderm.io/@steve_testa" className="mt-4" aria-label="Follow on Mastodon" icon={MastodonIcon}>Follow on Mastodon</SocialLink>
            <SocialLink href="https://www.linkedin.com/in/stevendtesta/" className="mt-4" aria-label="Follow on LinkedIn" icon={LinkedInIcon}> Follow on LinkedIn</SocialLink>
            <SocialLink href="https://github.com/stesta" className="mt-4" aria-label="Follow on GitHub" icon={GitHubIcon}>Follow on GitHub</SocialLink>
            <SocialLink href="mailto:steve@testasoftware.com" aria-label="email" icon={MailIcon} className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
              steve@testasoftware.com
            </SocialLink>
            <SocialLink href="tel:440-305-0073" aria-label="telephone" icon={PhoneIcon} className="mt-4">440.305.0073</SocialLink>
            <SocialLinkDownload href="/data/steve_testa.asc" aria-label="public pgp key" icon={LockClosedIcon} className="mt-4">PGP Key</SocialLinkDownload>
          </ul>
        </div>
      </div>
    </Container>
  )
}
