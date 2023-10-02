import React from "react";
import headerImage from '../assets/Advisory.jpg'



let Header = ()=>{
    return(
    <div className="mt-2  w-full flex justify-center   ">
        <div className="min-[768px]:flex w-[95%] rounded-xl  my-5">
         <img src={headerImage}  className="w-[100%] h-[70%] mt-10  rounded-lg shadow-inner mb-0"  />
         <div class=" top-40 px-4 py-3  w-50 justify-center ">
      <h6 class="text-left font-semibold text-3xl mt-10 text-green-500 hover:text-green-300 p-6"> Revolutionizing Farming with Precision Technology and Sustainable Practices </h6><br></br>
      <h6 class="text-left font-semibold text-neutral-600 dark:text-neutral-200  p-6 -mt-10">
         Gather your precision weather data in a single application and simplify <br></br>the daily management of your agricultural work, with indicators adapted <br></br> to your crops.It is a critical step toward ensuring food security, reducing <br></br> environmental impact, and improving the overall efficiency and <br></br> productivity of agricultural systems. 
      </h6>
      <button  className="appearance-none " class=" mt-10 bg-green-500 hover:bg-green-300 text-white font-semibold font-bold py-2 px-4 rounded-2xl ml-6 " >Click to Crop</button>
    </div>
        </div>
   
</div>
    )
}

export default Header;
