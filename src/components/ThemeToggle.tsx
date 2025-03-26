import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { Button } from "./ui/button.tsx";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light")
  const otherTheme = theme === 'dark' ? 'light' : 'dark'
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme])

  return (
    <Button
      type="button"
      plain
      aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
      className="group rounded-full bg-white/90 px-3 py-2 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={() => setTheme(otherTheme)}
    >
      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-indigo-50 [@media(prefers-color-scheme:dark)]:stroke-indigo-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-indigo-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-indigo-600" />
      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media_not_(prefers-color-scheme:dark)]:fill-indigo-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-indigo-500 [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400" />
    </Button>
  )
}

export default ThemeToggle;