'use client';
import React from "react";
import { Card } from 'flowbite-react';

let PersonalizedAdvisory = ()=>{
    return(
      <div className="w-full flex justify-center">
         <div className="font-medium text-[40px] max-[768px]:text-[30px] flex justify-center  mt-40">
           <h1 class="w-[100%] text-center font-bold font-semibold text-green-500 ">
           Personalized Advisory Services</h1> 
         </div>
         
      <div
      class="mt-20 mb-10 ml-[50px] mr-[50px] flex flex-col rounded-lg bg-green-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-4xl md:flex-row">
      <img
        class=" h-96 w-full rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg"
        src="..\assets\LandingPage1.jpg"
        alt="" />
      <div class="flex flex-col justify-start p-5  ">
        <h5
          class="mb-2 text-2xl font-medium font-bold text-green-700 dark:text-neutral-50 p-3">
           Farm Assessment and Needs Analysis
        </h5>
        <p class=" w-80 mb-4 text-left text-neutral-600 dark:text-neutral-200 p-3">
        Conducting an in-depth assessment of the farm, including soil quality, climate, available resources, 
        and current agricultural practices. Understanding the specific needs and challenges of the farm and its owners.
        </p>
        <button className="appearance-none " class="bg-green-500 hover:bg-green-300 text-white font-bold py-2 px-4 rounded-3xl mr-5 ">Contact us</button>
      </div>
        
    </div>



    </div>

    
          )
        }

export default PersonalizedAdvisory;