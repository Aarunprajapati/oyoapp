// Import necessary modules and components
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";


const SingleHotels = ({ hotel }) => {
 
  const [auth, setAuth] = useState(false);

 
  useEffect(() => {
    const userCookie = Cookies.get('user');
    setAuth(!!userCookie);
  }, []);

  return (
    <>
      <Head>
        <title>{hotel?.name}</title>
      </Head>
      <div className="m-10 mb-20">
        <Image
          src={hotel?.banner}
          width={2000}
          height={2000}
          alt="Hotel Image"
          className="w-9/12 h-single-page rounded-2xl mx-auto my-5"
        />
        <div className="my-3 flex flex-col w-9/12 mx-auto">
          <h2 className="font-bold text-3xl text-black">{hotel?.name}</h2>
          <p className="text-slate-500 text-lg my-2">{hotel?.location}</p>
          <p className="text-sm text-slate-400">
            5.0 · Check-in rating Delightful experience
          </p>
        </div>
        <div className="py-8 flex flex-col w-9/12 mx-auto">
          <h2 className="font-bold text-3xl text-black py-4">Description</h2>
          <p className="text-slate-500 text-lg line-clamp-4">
            {hotel?.description}
          </p>
        </div>
        <div className="py-5 flex flex-col w-9/12 mx-auto mb-10">
          <h2 className="font-bold text-2xl text-black">Choose Your Room</h2>
          <div className="h-60 border-2 border-slate-100 my-10 rounded-lg">
            <h2 className="bg-gradient-to-r from-slate-500 to-slate-300 text-white py-2 px-8 mb-5 overflow-hidden rounded-lg">
              SELECTED CATEGORY
            </h2>
            <h2 className="font-bold text-xl text-black px-5">Classic ✅ </h2>
            <p className="text-sm px-5 py-2">Room size: 144 sqft</p>
            <div className="flex items-center justify-between px-5 py-5">
              <div className="flex justify-evenly line-clamp-1 gap-10">
                {hotel?.facilities?.map((facility) => (
                  <li key={facility.name} className="flex gap-5 items-center">
                    <Image
                      src={facility.img}
                      width={200}
                      height={200}
                      className="w-8 h-8"
                    />
                    <span>{facility.name}</span>
                  </li>
                ))}
              </div>
              <div>
                <Image
                  src={hotel?.gallery[0]}
                  width={200}
                  height={200}
                  className="w-52 h-48 rounded-lg mr-0"
                />
              </div>
            </div>
            <div className="flex justify-between px-5 py-5">
              <div>
                <h2 className="font-bold text-xl">{hotel?.price}</h2>
                <p className="text-sm text-slate-400">+ ₹94 taxes & fee</p>
              </div>
              <div>
                {auth ? (
                  <Link href={`/payment/${hotel?._id}`}>
                    <p className="flex items-center justify-center w-52 h-12 rounded-md bg-white border-2 border-slate-400 px-10 font-bold text-sm hover:bg-slate-300">
                      ✅ Book Now
                    </p>
                  </Link>
                ) : (
                  <span className="text-xl">
                    Please{' '}
                    <Link
                      href="/login"
                      className="bg-blue-600 px-5 py-2 text-white text-lg rounded-lg hover:bg-blue-800 cursor-pointer"
                    >
                      Login
                    </Link>{' '}
                    for more offers
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Fetch server-side props for the component
export async function getServerSideProps(ctx) {
  const res = await fetch(`${process.env.BASE_URL}/${ctx.query.id}`);
  const data = await res.json();

  return {
    props: {
      hotel: data.hotel,
    },
  };
}

// Export the component as the default export
export default SingleHotels;
