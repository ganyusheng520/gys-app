import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LoggerFactory from '../lib/Log';

LoggerFactory.init({
  appName: 'MyApp',
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
