import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen bg-gradient-to-br from-[#00152A] to-[#121212] relative flex items-center">
         <div className="container mx-auto p-4 md:w-8/12 w-96">
          <div className="flex justify-center grid grid-cols-1 gap-1 gap-y-4 ">
            <div className='text-white font-bold text-2xl '>Are you experiencing symptoms of office syndrome without realizing it?</div>
            <div className='text-white'>Its easy to join the test. You can get it through the our website.</div>
            <div className='text-white'>You can get it through the our website.</div>
          </div>
        </div>
      </main>
    </>
  )
}
