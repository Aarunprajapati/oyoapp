

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


const Hotel = ({ e }) => {

  return (
    <>
    <Head>
      <title>OYO {e?.location}</title>
    </Head>
    <div className=" border-b-2 border-red-400 w-auto h-auto rounded-lg p-5">
      <div className=" flex">
        <Image
          src={e?.banner}
          width={350}
          height={350}
          alt="image"
          className=" w-auto h-auto  mr-8"
        />

        <div className=" flex flex-col w-80 h-auto gap-5">
          {
            e ? e.gallery?.map((ele)=>{
              return (
                <Image
                key={ele}
                src={ele}
                width={200}
                height={200}
                alt="image"
                className=" w-28 h-24 "
              />
              )
            }):""
          }
        
          
         
        </div>
        <div className=" ml-10">
          <h2 className=" font-bold text-xl line-clamp-1">{e?.name}</h2>
          <p className=" text-lg text-slate-700 text-justify py-5">
            {e?.description}
          </p>
          <div className=" text-xl my-5">
            <span className=" font-bold">Facilities :</span>
            <ul className=" flex justify-start  gap-20 mt-5">
              {e
                ? e.facilities?.map((ele) => {
                    return (
                      <li className="mb-3 flex gap-1 items-center" key={ele.name}>
                        <Image src={ele.img} width={200} height={200} className=" w-8 h-8" alt= "image"/>
                       
                        <span className="ml-2">{ele.name}</span>
                      </li>
                    );
                  })
                : ""}
            </ul>
          </div>
          <div className=" flex gap-2">
            <button className=" text-white text-lg font-bold w-48 h-14 hover:bg-blue-800 bg-blue-600 rounded-lg">
              Price : &#8377; {e?.price}
            </button>
            <Link
              href={`/hotels/${e?._id}`}
              className=" text-white text-lg font-bold w-48 h-14 flex items-center justify-center hover:bg-red-800 bg-red-600 rounded-lg"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hotel;
