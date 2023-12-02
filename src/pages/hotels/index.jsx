import Filters from "@/components/Filters";
import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";
import axios from "axios";

import React, { useEffect, useState } from "react";

const hotels = ({ hotels }) => {
  const [price, setPrice] = useState(3000);
  const [list, setList] = useState([]);
  const[checkedList, setCheckedList] = useState([])

  // console.log(checkedList)

  const handleCheckedList = async ()=>{
    const {data} = await axios.get(`/api/facilities/search?val=${checkedList}`);
    // console.log(data)
    if(data?.searchHotel){
      setList(data?.searchHotel);
    }
  }

  useEffect(()=>{
    if(checkedList){
      handleCheckedList()

    }
  },[checkedList]) 

  const handlePrice = async () => {
    const { data } = await axios.get(`/api/facilities/price?price=${price}`);
    // console.log(data)
    if (data?.hotelsprice) {
      // console.log(data?.price)
      setList(data?.hotelsprice);
    }
  };

  return (
    <>
      <Header1 />
      <div className=" grid grid-cols-12">
        <div className=" col-span-3">
          <Filters
            price={price}
            setPrice={setPrice}
            handlePrice={handlePrice}
            checkedList={checkedList}
            setCheckedList={setCheckedList}
          />
        </div>
        <div className="col-span-9">
        {list.length > 0
            ? list.map((e) => {
                return (
                  <div className=" m-5 " key={e._id}>
                    <Hotel e={e} />
                  </div>
                );
              })
            : hotels
            ? hotels.map((e) => {
                return (
                  <div className=" m-5 " key={e._id}>
                    <Hotel e={e} />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(`${process.env.BASE_URL}?city=${ctx.query.city}`);
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      hotels: data.hotels ? data.hotels : data.allhotels,
    },
  };
}

export default hotels;
