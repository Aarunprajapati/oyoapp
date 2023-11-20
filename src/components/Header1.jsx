import Image from "next/image"
import Block from "./Block"

const Header1 = () => {
  return (
    <div className="flex h-20 border-b-2 border-gray-300 justify-between align-items-center px-20 py-5">
        <div className="flex align-items-center justify-center h-full">
        <Image src={'/logo.jpeg'} width={200} height={200} className="w-24 h-8 img-fluid"/>
        </div>
        
    <div className=" flex h-full ">
        <Block title={'Become a member'} text={'Additional 10% off Stay-tune'} svg={'./demo.svg'}/>
        <Block title={'OYO for Business'} text={'Trusted by 5000 Corporates'} svg={'./demo1.svg'}/>
        <Block title={'List Your Property'} text={'Start earning in 30 mins'} svg={'./demo2.svg'}/>
        <Block title={'0124-6201611'} text={'Call us to Book now'} svg={'./demo3.svg'}/>
        <div className="flex items-center px-2">
        <Image src={'/contact.svg'} width={200} height={200} className="w-6 mt-1   rounded-full"/>
        <span className=" font-bold px-2 text-sm">Login/Signup</span>
        </div>
    </div>
        
    </div>
  )
}

export default Header1
