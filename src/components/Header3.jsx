"use client";

import Link from "next/link";
import { useState } from "react";


const Header3 = () => {
  const [city, setCity] = useState(' ')
  return (
    <div className=" bg-gradient-to-r from-red-500  to-red-400 h-44 text-center">
      <div>
        <h2 className=" text-4xl text-white mx-auto font-bold py-5">
          Over 157,000 hotels and homes across 35 countries
        </h2>
      </div>
      <div className="flex justify-center w-3/4 my-3 mx-48 mb-20 ">
        <input
          type="text"
          className=" h-14  w-1/2 bg-gray-100 text-lg px-3 outline-none border-r-2 border-gray-400"
          placeholder="Search by city hotel, or neighborhood"
          onChange={(e)=>{ setCity(e.target.value)}}
        />
        {/* <input
          type="text"
          className=" h-14 col-span-1 bg-gray-100 text-lg px-3 outline-none border-r-2 border-gray-400"
          placeholder="Search"
        />
        <input
          type="text"
          className=" h-14 col-span-1 bg-gray-100 text-lg px-3 outline-none"
          placeholder="Search"
        /> */}
        <button
          type="submit"
          className="px-5 py-2 text-lg w-60 bg-green-500 text-white h-14 col-span-1 hover:cursor-pointer hover:bg-green-700 "
        >
        <Link href={`/hotels?city=${city}`}>Search</Link>
        </button>
      </div>
    </div>
  );
};

export default Header3;
