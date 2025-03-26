import React from "react";
import clsx from "clsx";
import { Link } from "./ui/link.tsx";

export const AvatarContainer =
  ({ className, ...props }: React.ComponentPropsWithoutRef<'div'>)=> {

  return (
    <div
      className={clsx(
        className,
        'h-10 w-10 rounded-full bg-white/90 p-0.5 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10',
      )}
      {...props}
    />
  )
}

const Avatar =
  ({ large = false, className, ...props }: Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'> &
   { large?: boolean })=> {

  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      <img
        src="/images/steve-avatar.jpg"
        alt=""
        sizes={large ? '4rem' : '2.25rem'}
        className={clsx(
          'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
          large ? 'h-16 w-16' : 'h-9 w-9',
        )}
      />
    </Link>
  )
}

export default Avatar;