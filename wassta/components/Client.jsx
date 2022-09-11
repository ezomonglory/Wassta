import React from "react";
import Link from "next/link"

function Clients() {
	return (
		<div className='text-center w-[95%] lg:w-[80%] mx-auto flex flex-col gap-y-6'>
			<h1 className='text-black abt text-center text-[30px] uppercase'>
				Clients
			</h1>
			<p className='text-2xl par text-gray-400 mb-6'>
            We put the user at the heart of our strategy to deliver the best -of-bread campaigns and experiences. If you’d like to know more,  explore some of our recent projects or simply get in touch!
			</p>

            <Link href="/Projects">
				<a className='text-pink-300 text-lg hov'>Our Projects &rarr;</a>
			</Link>
			
		</div>
	);
}

export default Clients;
