import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

export default function Navbar() {

  const router = useRouter();
  const isActive = (path) => router.asPath === path;

  const menuItems = [
    { name: "home", link:"/"},
    { name: "destination", link:"/destination"},
    { name: "crew", link:"/crew"},
    { name: "technology", link:"/technology"}
  ]
  const [menuToggle, setMenuToggle] = useState(false);
  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  }

  useEffect(async () => {

    router.events.on('routeChangeStart', () => {
      setMenuToggle(false);
    });
  }, [])

  return (
    <>
      <nav className={`${!menuToggle && "translate-x-full"} sm:translate-x-0 transition duration-300 fixed w-[66.6%] sm:w-auto top-0 right-0 z-20 sm:z-0 sm:relative pt-7 pb-8 sm:py-0 sm:px-12 lg:pl-30 lg:pr-44 h-full bg-white bg-opacity-5 filter backdrop-blur-xl`}>
        <ul className="flex mt-24 sm:mt-0 flex-col sm:flex-row h-full space-y-6 sm:space-y-0 sm:space-x-10 lg:space-x-12">
          {menuItems.map((item, index)=>{
            return ( 

              <li key={index} className={`group ${isActive(item.link) && "border-r-4"} sm:border-r-0`}>
                <Link href={item.link}>
                  <a className="px-8 py-1 sm:py-0 sm:px-0 text-white font-barlowC font-light tracking-[3px] h-full flex items-center uppercase">
                    <span className="sm:hidden lg:inline text-barlowC font-bold mr-3">0{index}</span>
                    <span>{item.name}</span>
                  </a>
                </Link>
                <span className={`hidden transition duration-300 rounded-lg -translate-y-full h-[3px] bg-white w-full sm:block opacity-0 group-hover:opacity-100 ${isActive(item.link) ? "opacity-100" : "bg-opacity-50"}`}></span>
              </li> 
            )
          })}
        </ul>
      </nav>
      <div onClick={toggleMenu} className="flex sm:hidden h-[48px] w-[66px] justify-center items-center ml-auto z-30">

        <div className={`flex flex-col w-6 ${!menuToggle && "space-y-1.5" }`}>
          <span className={`translate-y-1/2 ${menuToggle && "rotate-45" } w-full bg-white block h-0.5 transition duration-300`}></span>
          <span className={`${menuToggle && "hidden" } w-full bg-white block h-0.5 transition duration-300`}></span>
          <span className={`-translate-y-1/2 ${menuToggle && "-rotate-45" } w-full bg-white block h-0.5 transition duration-300`}></span>
        </div>
      </div>
    </>
  )
}