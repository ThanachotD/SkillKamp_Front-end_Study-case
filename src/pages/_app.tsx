import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from './components/Layouts/Header'
import Footer from './components/Layouts/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
