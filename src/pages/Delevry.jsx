import React from "react";
import servece from "../Services.png";
import servece1 from "../Services (1).png";
import servece2 from "../Services (2).png";

function Delevry() {
  return (
    <div>
      <div className=" container flex justify-center items-center flex-col mt-20 w-full">
        <div className=" flex items-center justify-between w-[1000px]">
          <div className=" flex flex-col items-center justify-center">
            <img className=" w-[80px] h-[80px] mb-4" src={servece} />
            <h3 className=" text-[20px] font-[600] mb-1">
              FREE AND FAST DELIVERY
            </h3>
            <p className=" text-[14px] font-[400]">
              Free delivery for all orders over $140
            </p>
          </div>

          {/* 2 */}
          <div className=" flex flex-col items-center justify-center">
            <img className=" w-[80px] h-[80px] mb-4" src={servece} />
            <h3 className=" text-[20px] font-[600] mb-1">
              FREE AND FAST DELIVERY
            </h3>
            <p className=" text-[14px] font-[400]">
              Free delivery for all orders over $140
            </p>
          </div>
          {/* 3 */}
          <div className=" flex flex-col items-center justify-center">
            <img className=" w-[80px] h-[80px] mb-4" src={servece} />
            <h3 className=" text-[20px] font-[600] mb-1">
              FREE AND FAST DELIVERY
            </h3>
            <p className=" text-[14px] font-[400]">
              Free delivery for all orders over $140
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delevry;
