import React from "react";
import Image from "next/image";
import { InstagramEmbed } from "react-social-media-embed";

function StalkUs() {
	return (
		<div className='w-[95%] lg:w-[80%] mx-auto overflow-hidden space-y-12 '>
			<h1 className='text-black abt text-center text-[30px] uppercase'>
				#Stalkus
			</h1>

			<div>
				<a href='https://www.instagram.com/waassta' target='blank'>
					<div className='flex space-x-2 items-center'>
						<div className='bg-black p-4 rounded-full h-14 w-14'>
							<Image src='/image/ig.png' width={50} height={50} />
						</div>
						<h2 className='text-pink-300 text-lg '>@Wassta</h2>
					</div>
				</a>
				<div className=' grid  grid-cols-1 md:grid-cols-2 space-y-4  lg:grid-cols-3 space-x-4 w-full mx-auto justify-center items-center '>
					<div
						style={{
							display: "flex",
							justifyContent: "center",							
							borderColor: "yellow",
						}}
						className='overflow-hidden'
					>
						<InstagramEmbed
							url='https://www.instagram.com/p/Ch5Fp9RJXAe/'
							retryDelay={2000}
							width={328}
						/>
					</div>

					<div
						style={{
							display: "flex",
							justifyContent: "center",							
						}}
						className='overflow-hidden'
					>
						<InstagramEmbed
							url='https://www.instagram.com/p/Cd-3svEIMSA/'
							retryDelay={2000}
							width={328}
						/>
					</div>

					<div
						style={{
							display: "flex",
							justifyContent: "center",							
						}}
						className='overflow-hidden'
					>
						<InstagramEmbed
							url='https://www.instagram.com/p/Ccf4lVRoibw/'
							retryDelay={2000}
							width={328}
						/>
					</div>

					<div
						style={{
							display: "flex",
							justifyContent: "center",							
						}}
						className=''
					>
						<InstagramEmbed
							url='https://www.instagram.com/p/Ch9oAA8JMf5/'
							retryDelay={2000}
							width={328}
						/>
					</div>

					<div
						style={{
							display: "flex",
							justifyContent: "center",							
						}}
						className=''
					>
						<InstagramEmbed
							url='https://www.instagram.com/p/CZ9ceH0JYiZ/'
							retryDelay={2000}
							width={328}
						/>
					</div>

					<div
						style={{
							display: "flex",
							justifyContent: "center",							
						}}
						className=''
					>
						<InstagramEmbed
							url='https://www.instagram.com/p/CbMqgVooNL1/'
							retryDelay={2000}
							width={328}
						/>
					</div>
				</div>
			</div>

			<div className='flex gap-2 flex-col md:flex-row text-center w-full justify-center'>
				To see more follow us on instagram{" "}
				<span>
					<a href='https://www.instagram.com/waassta' target='blank'>
						<h2 className='text-pink-300 text-lg '>@Wassta</h2>
					</a>
				</span>
			</div>
		</div>
	);
}

export default StalkUs;
