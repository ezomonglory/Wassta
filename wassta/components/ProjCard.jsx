import Link from "next/link";
import React from "react";

function ProjCard({ link, text, classs, head }) {
	return (
		<div
			className={`text-center w-full h-[50vh] ${classs}  items-center justify-center rounded-lg group overflow-hidden cursor-pointer`}
		>
			<Link href={link} className=''>
				<div className='flex-col items-center justify-center flex h-full dark p-4 lg:group-hover:flex lg:hidden'>
					<h1 className='text-white text-lg mb-2 uppercase'> {head} </h1>
					<p className='text-white text-sm '>{text}</p>{" "}
				</div>
			</Link>
		</div>
	);
}

export default ProjCard;
