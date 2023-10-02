import React from "react";
import polygontestImage from "../assets/mapPolygon.png";
import FeatureImg from "../assets/fture.png"
import farmManagement from "../assets/farm Mangament.jpg";
import cropMonitring from "../assets/Monitor.jpg";
import agro from "../assets/IPM2.avif"



let Feature = ()=>{
    return(
        <div className="w-full   ">
         <div className="font-medium text-[50px] max-[768px]:text-[30px] flex justify-center  mb-12 mt-[-10%] ">
           <h1 class="w-[100%] text-center font-bold font-semibold text-green-500 hover:text-6xl">
            Feature Highlights</h1> 
         </div>
        <div>
       <div className="w-[100%] flex justify-center">
            <div className="w-[95%]">
              <div className="w-[100%] min-[768px]:flex  justify-between  ">
                <div className="min-[768px]:w-[30%] w-[90%] max-[768px]:m-auto mr-20 ">
                    <img src={cropMonitring} className="rounded-lg"/>
                    <div className="w-[100%] flex justify-center  ">
                        <div className="w-[90%] bg-green-100 text-[#10332e] p-5 rounded-lg relative bottom-[25px] z-[999]">
                        <h1 className="text-[20px] font-bold p-2 text-green-700">Integrated Pest Management (IPM)</h1>
                        <div>
                            <p className="text-neutral-600 dark:text-neutral-200 ">
                            Utilizing technology to monitor and predict pest infestations, enabling early 
                            intervention and reducing the need for chemical pesticides.Maintain a balance in the ecosystem
                            </p>
                        </div>
                        <div>
                            <p className="text-[25px] font-bold mt-3 text-green-700">Read More...</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="min-[768px]:w-[30%] w-[90%] max-[768px]:m-auto mr-20">
                <img src={agro} className="rounded-lg"/>
                <div className="w-[100%] flex justify-center">
                        <div className="w-[90%] bg-green-100 text-[#10332e] p-5 rounded-lg relative bottom-[25px]">
                        <h1 className="text-[20px] font-bold p-2 text-green-700">Automated Harvesting </h1>
                        <div>
                            <p className="text-neutral-600 dark:text-neutral-200 ">
                            Incorporating autonomous and robotic machinery for planting, harvesting,
                             and crop maintenance, enhancing operational efficiency and reducing labor costs.
                              Maintenance schedules for increased productivity.
                            </p>
                        </div>
                        <div>
                            <p className="text-[25px] font-bold mt-3 text-green-700">Read More...</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="min-[768px]:w-[30%] w-[90%] max-[768px]:m-auto">
                <img src={farmManagement} className="rounded-lg"/>
                <div className="w-[100%] flex justify-center">
                        <div className="w-[90%] bg-green-100 text-[#10332e] p-5 rounded-lg relative bottom-[25px]">
                        <h1 className="text-[20px] font-bold p-2 text-green-700">Inteligent Crop Monitring</h1>
                        <div>
                            <p className="text-neutral-600 dark:text-neutral-200 ">
                            One of AgroSight's standout offerings is our intelligent crop monitoring system.
                             Equipped with high-resolution cameras and powered by artificial intelligence, 
                            this system enables farmers to remotely monitor their fields with precision
                            </p>
                        </div>
                        <div>
                            <p className="text-[25px] font-bold mt-3 text-green-700">Read More...</p>
                        </div>
                        </div>
                    </div>
                </div>
                
              </div>

            </div>
       </div>
        </div>

        
           

        </div>
        
    )
}

export default Feature;