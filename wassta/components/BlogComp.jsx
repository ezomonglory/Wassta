import React from "react";
import Image from "next/image";
import Link from "next/link";

function BlogComp({ head, text, image, link }) {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2'>
			<div>
				<h1 className='text-gray-900 text-2xl'> {head} </h1>
				<p className='text-gray-400'> {text} </p>

				<h2 className="text-pink-400">					
					<Link href={link}>
                    Read More &rarr;
                    </Link>
				</h2>
			</div>

			<div className='relative h-[40vh] rounded-xl overflow-hidden'>
				<Image src={image} layout='fill' />
			</div>
		</div>
	);
}

export default BlogComp;
