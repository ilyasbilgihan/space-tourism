import { useEffect } from "react"
import Link from "next/link"

export default function Home({updateBGImage}) {

  useEffect(() => {
    updateBGImage("home")
  }, [])
  

  return (
    <div className="p-6 sm:p-44 flex flex-col lg:flex-row items-center lg:items-stretch">
      <div className="flex-shring-0 text-center lg:text-left space-y-4 sm:space-y-6">
        <span className="font-barlowC font-light uppercase text-base sm:text-[20px] lg:text-[28px] tracking-[2.7px] sm:tracking-[3.38px] lg:tracking-[4.72px]">So, you want to travel to</span>
        <h1 className="flex items-center justify-center font-bellefair text-white uppercase text-[80px] sm:text-[150px] h-[100px] sm:h-[150px] lg:h-[172px]">Space</h1>
        <p className="font-barlow text-[15px] sm:text-base lg:text-[18px] sm:w-[463px] lg:w-[444px] leading-6 sm:leading-7 lg:leading-8">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <div className="relative flex-1 pt-20 sm:pt-40 lg:pt-0">
        <Link href="/destination">
          <a className="group bg-white rounded-full flex items-center justify-center relative lg:absolute right-0 bottom-0 w-[150px] h-[150px] sm:w-[242px] sm:h-[242px] lg:w-[274px] lg:h-[274px]">
            <div className="group-hover:scale-150 transition duration-300 w-full h-full absolute bg-white opacity-10 rounded-full"></div>
            <span className="z-10 select-none text-black uppercase font-bellefair tracking-widest text-[20px] sm:text-[32px]">Explore</span>
          </a>
        </Link>
      </div>
    </div>
  )
}
