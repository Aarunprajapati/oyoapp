
'use client'
import Image from 'next/image';
import Block from './Block';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Header1 = () => {
  const router = useRouter();
 const[auth,setAuth] = useState(false)
 useEffect(()=>{
  const key  = Cookies.get('user');
  if(key){
    setAuth(true)
    return;
  }
  setAuth(false)
 },[auth])

  const handleLogout = () => {
    Cookies.remove('user');
    router.push('/'); 
  };

  return (
    <div className="flex h-20 border-b-2 border-gray-300 justify-between items-center px-20 py-5">
      <div className="flex items-center justify-center h-full">
        <Image src="/logo.jpeg" width={200} height={200} alt='header1image' className="w-24 h-8 img-fluid" />
      </div>

      <div className="flex h-full">
        <Block title="Become a member" text="Additional 10% off Stay-tune" svg="./demo.svg" />
        <Block title="OYO for Business" text="Trusted by 5000 Corporates" svg="./demo1.svg" />
        <Block title="List Your Property" text="Start earning in 30 mins" svg="./demo2.svg" />
        <Block title="0124-6201611" text="Call us to Book now" svg="./demo3.svg" />

        <div className="flex items-center px-2">
          <Image src="/contact.svg" width={200} height={200} alt='header1image2' className="w-6 mt-1 rounded-full" />

          {auth ? (
            <button
              className="px-3 py-2 rounded font-bold text-sm bg-red-600 text-white ml-5 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link href="/login">
              <span className="font-bold px-2 text-sm">Login/Signup</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header1;
