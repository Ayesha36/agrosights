import React from "react";
import Technology from "../assets/agro2.jpg"


let Progess = ()=>{
    return(
        <div className="w-[100%]">
        <div className=" flex w-[100%] flex justify-center ">
            <h1 className="min-[768px]:text-[30px] text-[40px] font-bold text-green-500 font-semibold  p-4">Emerging Technology</h1>
        </div>
        <div>
        <div className="w-[100] max-[768px]:w-[100%] md:flex justify-center py-5">
            <div className="w-[40%] max-[768px]:w-[100%]">
                <div className="mx-[3%]  rounded-lg ">
                    <div className="bg-cover bg-center  rounded-lg h-[300px] " style={{ backgroundImage: `url(${Technology})` }}>
                    </div>
                </div>
            </div>
            <div className="w-[46%] max-[768px]:w-[100%] m-[3%] bg-green-100 p-6 -ml-10 rounded-lg">
                <div className="text-[25px] flex justify-center font-bold text-green-700 font-semibold">
                    <p>
                    Driving Progress through Partnerships
                    </p>
                </div>
                <div className="text-[15px] flex justify-center text-neutral-600 pt-5 pb-20 -mb-10">
                    <p className="w-[90%] text-neutral-600 dark:text-neutral-200 ">
                    AgroSight recognizes the importance of collaboration in driving progress in the agriculture industry. 
                        That's why we actively collaborate with academic institutions, government agencies, and industry partners to foster knowledge exchange,
                         accelerate innovation, and address.
                    </p>
                </div>
                <button className="appearance-none " class="bg-green-500 hover:bg-green-300 text-white font-bold py-2 px-4 rounded-3xl mb-10 ml-8 ">Read More...</button>
            </div>

        </div>
        </div>
       </div>
      
    )
}

export default Progess;
