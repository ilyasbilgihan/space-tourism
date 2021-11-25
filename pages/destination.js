import { useEffect } from "react"
import PageTitle from "../components/PageTitle"
import Image from "next/image"
import { useState } from "react"

export default function Destination({updateBGImage, platform, data}) {


  const [size, setSize] = useState(445)
  const [currData, setCurrData] = useState(data[0])
  const [loadData, setLoadData] = useState(false)

  function updateSize(){
    if(platform == "tablet"){
      setSize(300)
    }else if(platform == "mobile"){
      setSize(170)
    }else {
      setSize(445)
    }
  }

  useEffect(() => {
    updateBGImage("destination")
    updateSize();

  }, [])

  useEffect(() => {
    updateSize()
  }, [platform])

  function changeTab(e){
    e.preventDefault()
    setLoadData(true)
    
    setTimeout(() => {
      setCurrData(data.find(item => item.name == e.target.innerHTML))
      setLoadData(false)
    }, 300)
  }

  return (
    <div className="px-6 lg:px-44 pt-0 lg:pt-19 sm:p-10">
      <PageTitle index="01" title="Pick Your Destination" />
      <div className="flex flex-col xl:flex-row">
        <div className={`${loadData ? "opacity-0" : "opacity-1"} flex justify-center flex-shrink-0 pt-8 sm:pt-15 xl:pl-[50px] xl:pt-[100px] xl:pr-[150px] transition duration-300 `}>
          <Image src={currData.images.webp.slice(1)} width={size} height={size}/>
        </div>
        <div className="flex-1 flex flex-col items-center xl:items-start pt-6 xl:pt-0 ">
          <ul className="flex uppercase font-barlowC font-light space-x-7 sm:space-x-9 text-[14px] sm:text-base tracking-[2.36px] sm:tracking-[2.7px]">
            {
              data.map((item, index) => {
                return (
                  <li key={index} className={`${(currData.name == item.name) && !loadData ? "!border-opacity-100 text-white": ""} duration-300 border-b-[3px] border-opacity-0 border-white hover:border-opacity-50 flex py-2 sm:py-3 `}><a href="#" onClick={changeTab}>{item.name}</a></li>
                )
              })
            }
          </ul>
          <div className={`w-full flex flex-col items-center xl:items-start lg-w-auto pt-5 xl:pt-12 text-center xl:text-left transition duration-300 ${loadData ? "opacity-0" : "opacity-1"}`}>
            <h1 className="flex items-center uppercase text-white font-bellefair justify-center lg:justify-start pb-2 xl:pb-0 h-[64px] sm:h-[92px] xl:h-[115px] text-[56px] sm:text-[80px] xl:text-[100px]">{currData.name}</h1>
            <p className="font-barlow sm:px-16 lg:px-0 w-full xl:w-[444px] text-[15px] sm:text-base lg:text-[18px] leading-6 sm:leading-7 lg:leading-8">{currData.description}</p>
            
            <div className="flex w-full border-t border-[#383B4B] justify-center xl:justify-start flex-col sm:flex-row mt-8 sm:mt-14 py-8 sm:py-7 space-y-8 sm:space-y-0 sm:space-x-17">
              <div className="flex flex-col space-y-3">
                <span className="font-barlowC font-light uppercase text-alt text-[14px] tracking-[2.36px]">Avg. Distance</span>
                <span className="text-white font-bellefair text-[28px] uppercase">{currData.distance}</span>
              </div>
              <div className="flex flex-col space-y-3">
                <span className="font-barlowC font-light uppercase text-alt text-[14px] tracking-[2.36px]">Est. Travel Time</span>
                <span className="text-white font-bellefair text-[28px] uppercase">{currData.travel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const host = process.env.NODE_ENV === 'production' ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : process.env.HOST
  const res = await fetch(`${host}/api/destination`)
  const data = await res.json()

  return {
    props: { data },
  }
}