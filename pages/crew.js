import { useEffect } from "react"
import PageTitle from "../components/PageTitle"
import Image from "next/image"
import { useState } from "react"

export default function Crew({updateBGImage, platform, data}) {



  const [currData, setCurrData] = useState(data[0])
  const [loadData, setLoadData] = useState(false)

  useEffect(() => {
    updateBGImage("crew")

  }, [])

  function changeTab(e){
    e.preventDefault()
    setLoadData(true)
    
    setTimeout(() => {
      setCurrData(data[e.target.dataset.index])
      setLoadData(false)
    }, 300)
  }

  return (
    <div className="px-6 lg:px-44 lg:pb-0 pt-0 lg:pt-19 sm:p-10 crew-content relative">
      <div className="absolute left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0">
        <PageTitle index="02" title="Meet Your Crew" />
      </div>
      <div className="flex flex-col-reverse items-center sm:flex-col lg:flex-row sm:h-full">
        <div className="border-t border-white border-opacity-20 sm:border-0 flex sm:flex-1 sm:flex-col sm:h-full flex-col-reverse sm:justify-between sm:py-12">
          <div className={`duration-300 flex flex-col items-center lg:items-start ${loadData ? "opacity-0" : "opacity-1"}`}>
            <span className="text-white opacity-50 font-bellefair text-base md:text-[24px] lg:text-[32px] uppercase h-[37px] flex items-center">{currData.role}</span>
            <h3 className="text-white font-bellefair text-[24px] md:text-[40px] lg:text-[56px] uppercase flex items-center">{currData.name}</h3>
            <p className="mt-1 sm:mt-0 text-center lg:text-left font-barlow lg:px-0 w-full md:w-[460px] lg:w-[444px] text-[15px] sm:text-base lg:text-[18px] leading-6 sm:leading-7 lg:leading-8">{currData.bio}</p>
          </div>
          <ul className="flex justify-center my-10 sm:mb-0 lg:justify-start space-x-6">
            {
              data.map((item, index) => {
                return (
                  <li key={index}>
                    <a href="#" onClick={changeTab} data-index={index} className={`${(currData.name == item.name) && !loadData ? "!opacity-100" : ""} duration-300 w-4 h-4 hover:opacity-50 block rounded-full bg-white opacity-20`}></a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className={`duration-300 mt-12 sm:mt-0 h-[320px] sm:h-full flex-shrink-0 flex lg:items-end ${loadData ? "opacity-0" : "opacity-1"}`}>
          <img className="h-full lg:h-[90%]" src={currData.images.webp.slice(1)}/>
        </div>

      </div>
      
    </div>
  )
}

export async function getServerSideProps(context) {
  const host = process.env.NODE_ENV === 'production' ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : process.env.HOST
  const res = await fetch(`${host}/api/crew`)
  const data = await res.json()

  return {
    props: { data },
  }
}