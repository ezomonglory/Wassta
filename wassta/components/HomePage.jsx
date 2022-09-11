import React, { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Image from "next/image";
import Slider from "./Slider";


function HomePage() {    
	return (
		<div className='bg h-[95vh] w-full text-white pt-[5rem] lg:pt-[8rem] flex flex-col  lg:items-center relative  p-2 justify-between lg:justify-center '>
						<div className=' h-[35vh] w-[100%] '>
							<Slider />
						</div>
						
						<div className='relative w-full lg:h-full h-[40vh]  md:w-[70%] md:mx-auto lg:w-[50%]'>
							<Image src='/image/banner.png' layout='fill' />
						</div>
					</div>
	);
}

export default HomePage;
