import Image from "next/image"

const Footer = () => {
  return (
    <div className="grid grid-cols-2 mx-20 my-10 h-screen bg-gray-200">
        <div className=' col-span-1 flex items-center justify-center'>
           <Image src={'/footer1.png'} width={500} height={500} alt="footer" className=" img-fluid"/>
        </div>
        <div className=' col-span-1 mt-24 '>
            <h1 className=" my-6 text-2xl font-bold text-black-50">World's leading chain of hotels and homes</h1>
            <p>More Destinations. More Ease. More Affordable</p>
            <div className="flex my-10 w-64 justify-between items-center">
                <div className=" border ">
                    <h3 className=" font-bold text-4xl">35</h3>
                    
                    <p>Countries</p>
                    
                </div>
               
                <div>
                    <h3 className=" font-bold text-4xl">157,000+</h3>
                    <p>Hotels & Homes</p>
                </div>
            </div>
            <div>
                <ul className="flex flex-wrap mt-20 w-full">
                    <li className="py-5 px-2 w-52 list-disc text-black text-lg font-bold">India</li>
                    <li className="py-5 px-2 w-52 list-disc text-black text-lg font-bold">China</li>
                    <li className="py-5 px-2 w-52 list-disc text-black text-lg font-bold">Malaysia</li>
                    <li className="py-5 px-2 w-52 list-disc text-black text-lg font-bold">Nepal</li>
                    <li className="py-5 px-2 w-52 list-disc text-black text-lg font-bold">Indonesia</li>
                    <li className="py-5 px-2 w-52 list-disc text-black text-lg font-bold">UAE</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
