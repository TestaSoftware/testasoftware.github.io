import type { AppProps } from 'next/app'
import HEAD from 'next/head'

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HEAD>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </HEAD>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
