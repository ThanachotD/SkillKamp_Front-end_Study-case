import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Iframe from '../components/Iframe'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div className="container mx-auto p-4 md:w-10/12 w-96 flex justify-center my-12">
          <div className='grid grid-cols-1 gap-4'>
          <div className='flex justify-center'>
            <h1 className='text-4xl tracking-widest pb-8'>Contact Us</h1>
            </div>
          <div className="grid grid-cols-3 gap-24 ">
            <div className="flex flex-col">
            <div className='pb-8'>VISIT US</div>
            <div>500 Terry Francois St.</div>
            <div>San Francisco, CA 94158</div>
            <div>123-456-7890</div>
            </div>  
          <div className="flex flex-col">
             <div className='pb-8'>OPENING HOURS</div>
            <div>Mon - Fri: 7am - 10pm</div>
            <div>​​Saturday: 8am - 10pm</div>
            <div>​Sunday: 8am - 11pm</div>
            </div>  
             <div className="flex flex-col">
             <div className='pb-8'>CUSTOMER SERVICE</div>
                        <div>1-800-000-000</div>
            <div>123-456-7890</div>
            <div>info@mysite.com</div>
            </div>  
          
          </div>
         
          
    <div className="w-full py-16 bg-white  ">
        <h2 className="text-2xl pb-8 flex justify-center">FOR ANY QUESTIONS, PLEASE SEND US A MESSAGE</h2>
        <form className="mx-8 space-y-8">
            <div>
                <input type="text"
                    className="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
                    placeholder="Full Name" />
            </div>
            <div>
                <input type="text"
                    className="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
                    placeholder="Your Email" />
                <span className="text-xs text-red-600">Email field required</span>
            </div>
            <div>
                <input type="text"
                    className="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
                    placeholder="Subject" />
            </div>
            <div>
                <textarea name="message"
                    className="w-full p-6 text-sm border-b-2 border-gray-400  outline-none opacity-50 focus:border-blue-400"
                    placeholder="Enter your message"></textarea>
            </div>

            <button className="block w-full px-2 py-4 mt-2 text-white bg-[#D2461C] ">Submit</button>
        </form>
    </div>
      </div>

          </div>
        
      </main>
    </>
  )
}
