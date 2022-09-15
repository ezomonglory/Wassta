import React from "react";
import Link from "next/link"

function About() {
	return (
		<div className='text-center w-[95%] lg:w-[100%] mx-auto flex flex-col gap-y-6'>
			<h1 className='text-black abt text-center text-[30px] uppercase'>
				About
			</h1>
			<p className='homPar text-[18px] md:text-[21px] text-gray-400 mb-6'>
				Our agency was founded with an idea to disrupt the digital industry. <br/> We
				love to explore the spirit of the unknown, the new and the what <br/> can be…
			</p>

			<Link href="/About">
				<a className='text-pink-300 text-lg hov'>Read More &rarr;</a>
			</Link>
		</div>
	);
}

export default About;
