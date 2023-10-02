import React from "react";
import Sustain from "../assets/Sustainbility.jpg"



let Sustainbility = ()=>{
    return(
       <div className="w-[100%]">
        <div className=" flex w-[100%] flex justify-center ">
            <h1 className="min-[768px]:text-[30px] text-[40px] font-bold text-green-500 font-semibold  p-4">Sustainable Practices</h1>
        </div>
        <div>
        <div className="w-[100] max-[768px]:w-[100%] md:flex justify-center py-5">
            <div className="w-[40%] max-[768px]:w-[100%]">
                <div className="mx-[3%]  rounded-lg ">
                    <div className="bg-cover bg-center  rounded-lg h-[300px] " style={{ backgroundImage: `url(${Sustain})` }}>
                    </div>
                </div>
            </div>
            <div className="w-[46%] max-[768px]:w-[100%] m-[3%] bg-green-100 p-6 -ml-10 rounded-lg">
                <div className="text-[25px] flex justify-center font-bold text-green-700 font-semibold">
                    <p>
                        Promoting Regenerative Farming for a Healthy Future
                    </p>
                </div>
                <div className="text-[15px] flex justify-center text-neutral-600 pt-5 pb-20">
                    <p className="w-[90%]">
                        AgroSight is committed to sustainability and promotes regenerative farming practices that prioritize soil health, biodiversity, and natural resource conservation. By encouraging farmers to adopt practices such as cover cropping, crop rotation, 
                        and integrated pest management, we contribute to the long-term health of agricultural ecosystems.
                    </p>
                    
                </div>
            </div>

        </div>
        </div>
       </div>

    )
}

export default Sustainbility;