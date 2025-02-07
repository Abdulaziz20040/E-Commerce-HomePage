import React from "react";
import one from "../img/one.jpg";
import wan from "../img/wan.png";
import tu from "../img/tu.png";
import sri from "../img/sri.png";

function ProductGrid() {
  return (
    <div className=" container flex flex-col justify-center w-full pl-20">
      <div className=" flex items-center gap-2 mb-4">
        <button className=" bg-[#DB4444] w-5 h-10 rounded-[4px]"></button>
        <p className=" text-[#DB4444] text-[16px] font-[600]">Featured</p>
      </div>
      <div className=" mb-14">
        <h1 className=" text-[36px] font-[600]">New Arrival</h1>
      </div>
      <div className=" flex items-center gap-4">
        {/* left */}
        <div className=" relative">
          <img className="w-[670px] h-[600px]" src={one} />
          <div className=" absolute bottom-10 left-10 text-white">
            <h2 className=" text-[24px] font-[600]">PlayStation 5</h2>
            <p className=" text-[14px] font-[400] w-[242px] mt-2">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className=" mt-3 w-[81px] h-[24px] border-b pb-2">
              Shop Now
            </button>
          </div>
        </div>
        {/* right */}
        <div className="  w-[600px] h-[600px] flex items-center gap-4 flex-col">
          {/* top */}
          <div className=" relative">
            <img className=" w-[580px] h-[284px]" src={wan} />
            <div className=" absolute bottom-10 left-10 text-white">
              <h2 className=" text-[24px] font-[600]">Women’s Collections</h2>
              <p className=" text-[14px] font-[400] w-[242px] mt-1">
                Featured woman collections that give you another vibe.{" "}
              </p>
              <button className=" mt-2 w-[81px] h-[24px] border-b pb-2">
                Shop Now
              </button>
            </div>
          </div>
          {/* bottom */}
          <div className=" flex items-center gap-4">
            {/* bottom left */}
            <div className=" relative">
              <img className=" w-[279px] h-[300px]" src={tu} />
              <div className=" absolute bottom-10 left-10 text-white">
                <h2 className=" text-[24px] font-[600]">Speakers</h2>
                <p className=" text-[14px] font-[400] w-[242px] mt-1">
                  Amazon wireless speakers{" "}
                </p>
                <button className=" mt-1 w-[81px] h-[24px] border-b pb-2">
                  Shop Now
                </button>
              </div>
            </div>
            {/* botttom right */}
            <div className=" relative">
              <img className="w-[279px] h-[300px]" src={sri} />
              <div className=" absolute bottom-10 left-10 text-white">
                <h2 className=" text-[24px] font-[600]">Perfume</h2>
                <p className=" text-[14px] font-[400] w-[242px] mt-1">
                  GUCCI INTENSE OUD EDP
                </p>
                <button className=" mt-1 w-[81px] h-[24px] border-b pb-2">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
