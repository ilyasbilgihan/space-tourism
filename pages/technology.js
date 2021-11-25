import { useEffect } from "react"
import PageTitle from "../components/PageTitle"
import { useState } from "react"

export default function Technology({updateBGImage, data, platform}) {

  const [currData, setCurrData] = useState(data[0])
  const [loadData, setLoadData] = useState(false)

  useEffect(() => {
    updateBGImage("technology")

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
    <div className="h-full py-0 sm:py-10 lg:pt-19 lg:px-44 xl:pr-0">
      <div className="pl-6 sm:pl-10 lg:pl-0">
        <PageTitle index="03" title="Space Launch 101" />
      </div>

      <div className="flex h-full items-center justify-between flex-col-reverse xl:flex-row">
        <div className="flex flex-col justify-center xl:flex-row">
          <ul className="flex xl:flex-col xl:space-x-0 xl:space-y-8 lg:space-x-8 space-x-4 py-8 sm:py-14 xl:py-0 justify-center">
            {
              data.map((item, index) => {
                return (
                  <li key={index}>
                    <a href="#" onClick={changeTab} data-index={index} className={`${((currData.name == item.name) && !loadData) ? "bg-white text-dark" : ""} hover:border-opacity-100 font-bellefair text-white duration-300 lg:text-[32px] sm:text-[24px] text-base lg:h-20 sm:h-15 h-10 lg:w-20 sm:w-15 w-10 flex items-center justify-center border rounded-full border-white border-opacity-25`}>{index+1}</a>
                  </li>
                )
              })
            }
          </ul> 
          <div className={`duration-300 ${loadData ? "opacity-0" : "opacity-1"} xl:pl-20 text-center xl:text-left justify-center`}>
            <span className="font-barlowC font-light uppercase text-[14px] sm:text-base tracking-[2.36px] sm:tracking-[2.7px]">The therminology ...</span>
            <h3 className="my-2 xl:my-0 text-white font-bellefair text-[24px] sm:text-[40px] xl:text-[56px] uppercase flex justify-center xl:justify-start">{currData.name}</h3>
            <p className="px-[26px] sm:px-0 text-center mt-1 sm:mt-0 xl:text-left font-barlow lg:px-0 w-full sm:w-[436px] lg:w-[600px] xl:w-[444px] text-[15px] sm:text-base lg:text-[18px] leading-6 sm:leading-7 lg:leading-8">{currData.description}</p>
          </div>       
        </div>
        <div className={`w-screen lg:h-full lg:w-auto duration-300 ${loadData ? "opacity-0" : "opacity-1"} pt-8 sm:pt-14 xl:pt-0`}>
          <img className="w-full" src={platform == "desktop" ? currData.images.portrait : currData.images.landscape}/>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const host = process.env.NODE_ENV === 'production' ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : process.env.HOST
  const res = await fetch(`${host}/api/technology`)
  const data = await res.json()

  return {
    props: { data },
  }
}