import React, { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Image from "next/image";
import Slider from "./Slider";


function HomePage() {    
	return (
		<div className='bg h-[95vh] w-full text-white pt-[5rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 md:items-center relative  p-2 justify-between md:justify-center '>
						<div className=' h-[35vh] md:-mt-[5rem]  '>
							<Slider />
						</div>
						
						<div className='relative w-full md:h-[50vh] h-[40vh]  md:mx-auto '>
							<Image src='/image/banner.png' layout='fill' />
						</div>
					</div>
	);
}

export default HomePage;
