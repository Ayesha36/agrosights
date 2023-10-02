import React from "react";
import Precision from "../assets/Precision.jpg"
import Icon from "../assets/farmer.svg"




let PrecisonSection= ()=>{
    return(
        <div className="w-full justify-center  mt-20 ">
            <div className="w-[100%] max-[768px]:w-[90%] min-[768px]:flex justify-center">
             <div className=" w-[50%] max-[768px]:hidden">
             <h1 className="text-[35px]  w-[100%]  text-center  font-semibold text-green-500 hover:text-green-300">
             Empowering Farmers with informed decision making
             </h1>
                <div className="w-[90%] mt-2">
                <p className="text-[20px] py-5 text-neutral-600 dark:text-neutral-200  ">
             There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
             by injected humour, or randomised words which don’t look even slightly believable.
             </p>
             <div className="flex justify-around mt-8 shadow-2xl shadow-[black] w-[80%] rounded-xl">
             <div className="w-[22%] rounded-[80px]  bg-[#cdccb8]  shadow-2xl shadow-[black]">
             <img src={Icon} className=""/>    
             </div>
             <div className="w-[60%] ">
                <p className=" mt-4 text-[25px] font-bold font-semibold text-green-500 hover:text-green-300">Discover More With AgroSight</p>
             </div>
             </div>
                </div>
                </div>
                <div className="min-[769px]:w-[50%] flex justify-end">
                    <div className="min-[769px]:w-[75%] flex justify-end py-5 ">
                    <img src={Precision} className="rounded-[10px] w-[100] h-[70%]"/>
                    </div>
                </div>

            <div className=" flex justify-around w-[100%]  mt-2 shadow-xl   rounded-xl min-[768px]:hidden">
             <div className="w-[22%] rounded-[80px]  bg-[#cdccb8]  shadow-xl ">
             <img src={Icon} className=""/>    
             </div>
             <div className="w-[60%] ">
                <p className="text-[20px] font-bold">Discover More With AgroSight</p>
             </div>
             </div>
               

            </div>

        </div>
    )
}

export default PrecisonSection;