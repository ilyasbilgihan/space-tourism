import Image from 'next/image'
import Navbar from './Navbar'
import Link from 'next/link'

export default function Header() {


  return (
    <header className="h-24 flex items-center sm:justify-between lg:justify-start lg:mt-10">
      <Link href="/">
        <a className="flex flex-shrink-0 items-center mx-6 sm:mx-10 lg:mx-16">
          <Image 
            src="/assets/shared/logo.svg"
            width="48"
            height="48"
          />
        </a>
      </Link> 
      <div className="relative z-10 flex-1 h-px origin-left scale-x-110 bg-white hidden lg:block"></div>
      <Navbar />
    </header>
  )
}
