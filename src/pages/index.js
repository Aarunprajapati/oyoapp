import Header1 from "@/components/Header1"
import Header2 from "@/components/Header2"
import Header3 from "@/components/Header3"
import Image from "next/image"
import Head from "next/head"
import Header4 from "@/components/Header4"
import Footer from "@/components/Footer"


const index = () => {
  return (
    <div>
      <Head>
        <title>OYO</title>
        <link rel="icon" href="/logo.png" />
      </Head>
        <Header1/>
        <Header2/>
        <Header3/>
        <div className=" mx-20 ">
            <div className="my-14">
             <Image src={'/Banner1.jpg'} alt="Banner1" width={1000} height={1000} className=" w-full h-80 img-fluid"/>
            </div>
            <div className="my-16">
             <Image src={'/banner2.png'} alt="Banner1" width={1000} height={1000} className=" w-full h-40 img-fluid"/>
            </div>
        </div>
        <Header4/>
        <Footer/>
    </div>
  )
}

export default index
