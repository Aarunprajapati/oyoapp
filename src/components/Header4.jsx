'use client'
import Image from "next/image"

const Header4 = () => {
  return (
    <div className=" mx-20 h-24 flex justify-between items-center border-2 border-gray-300 py-5 px-5 ">
        <div className=" flex items-center mt-5">
            <Image src={'/header4logo.svg'} width={200} height={200} className=" w-14 h-14"/>
            <div className="ml-5">
                <h2 className=" font-bold text-xl space-x-4">Get access to exclusive deals</h2>
                <p className="text-lg text-gray-600">Only the best deals reach your inbox</p>
            </div>
        </div>
        <div className="flex items-center">
            <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-400 ml-2">Your Email</label>
                <input type="email" placeholder="E.g arun@gmail.com"  className="rounded-lg w-80 h-14 px-6 py-3 mr-5 outline-none border border-gray-300"/>

            </div>
            <button type="submit" className=" w-28 h-12 mt-4 bg-red-500 rounded px-5 text-lg text-white py-2">notify</button>
        </div>
 
    </div>
  )
}

export default Header4
