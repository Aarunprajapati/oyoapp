'use client'

const Header3 = () => {
  return (
    <div className=' bg-gradient-to-r from-red-500  to-red-400 h-44 text-center'>
      <div>
        <h2 className=' text-4xl text-white mx-auto font-bold py-5'>
        Over 157,000 hotels and homes across 35 countries
        </h2>
      </div>
      <div className='grid grid-cols-5 my-3 mx-48 '>
        <input type="text" className=' h-14 col-span-2 bg-gray-100 text-lg px-3 outline-none border-r-2 border-gray-400' placeholder='Search by city hotel, or neighborhood'/>
        <input type="text" className=' h-14 col-span-1 bg-gray-100 text-lg px-3 outline-none border-r-2 border-gray-400' placeholder='Search'/>
        <input type="text" className=' h-14 col-span-1 bg-gray-100 text-lg px-3 outline-none' placeholder='Search'/>
        <button type='submit' className='px-5 py-2 text-lg bg-green-500 text-white h-14 col-span-1 hover:cursor-pointer hover:bg-green-700 '>Search</button>
      </div>
    </div>
  )
}

export default Header3
