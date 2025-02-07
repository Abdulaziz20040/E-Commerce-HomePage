import React from "react";
import informaImg from "../img/Frame 600.jpg";

function Information() {
  return (
    <div className="container">
      <div className="relative">
        <img className="  w-full h-[500px] object-cover " src={informaImg} />
        <div className=" absolute top-14 left-14">
          <h3 className=" text-[#00FF66] text-[16px] font-[600]">Categories</h3>
          <h1 className=" w-[433px] text-[48px] font-[600] text-white leading-[60px] mt-9">
            Enhance Your Music Experience
          </h1>
          <div className=" flex items-center gap-3 mt-8">
            <button className="font-[600]  bg-white rounded-full w-[64px] h-[64px] flex flex-col items-center justify-center">
              <span className=" font-bold text-[16px]">23</span>
              <span className=" text-[11px]">Hours</span>
            </button>
            <button className="font-[600]  bg-white rounded-full w-[64px] h-[64px] flex flex-col items-center justify-center">
              <span className=" font-bold text-[16px]">05</span>
              <span className=" text-[11px]">Days</span>
            </button>
            <button className="font-[600]  bg-white rounded-full w-[64px] h-[64px] flex flex-col items-center justify-center">
              <span className=" font-bold text-[16px]">59</span>
              <span className=" text-[11px]">Minutes</span>
            </button>
            <button className="font-[600]  bg-white rounded-full w-[64px] h-[64px] flex flex-col items-center justify-center">
              <span className=" font-bold text-[16px]">35</span>
              <span className=" text-[11px]">Seconds</span>
            </button>
          </div>
          <button className=" bg-[#00FF66] mt-9 w-[171px] h-[56px] rounded-[4px] text-white flex justify-center items-center text-[16px] font-[500]">
            Buy Now!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Information;
