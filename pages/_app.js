import '../tailwind.css'
import Head from 'next/head'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import { useWindowWidth } from '@react-hook/window-size'

function MyApp({ Component, pageProps }) {


  const [BGImage, setBGImage] = useState("home")
  const [platform, setPlatform] = useState("desktop")
  const width = useWindowWidth();

  useEffect(() => {

    if(width < 640) {
      setPlatform('mobile')
    } else if(width < 1280) {
      setPlatform('tablet')
    } else {
      setPlatform('desktop')
    }

  }, [width])

  function updateBG(page, device){
    document.body.style.backgroundImage = `url(/assets/${page}/background-${page}-${device}.jpg)`
  }

  useEffect(() => {

    updateBG(BGImage, platform)

  }, [BGImage, platform])

  function updateBGImage(page){
    setBGImage(page)
  }

  pageProps = {...pageProps, updateBGImage, platform}

  return (
    <>
      <Head>
        <title>Frontend Mentor | Space Tourism Website</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="shortcut icon" type="image/png" href="/assets/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed:wght@300;400;700&family=Bellefair&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
