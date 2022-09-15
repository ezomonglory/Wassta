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
				<div className=' grid mt-6  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 w-full mx-auto justify-center items-center '>
					<a href='https://www.instagram.com/p/Ch9oAA8JMf5/' target='_blank'>
						<div className='stalk1 w-full rounded-lg '></div>
					</a>
					<a href='https://www.instagram.com/p/Ch9oAA8JMf5/' target='_blank'>
						<div className='stalk2 w-full rounded-lg relative flex items-center justify-center '>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='white'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='white'
								className='w-20 h-20 mx-auto absolute'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z'
								/>
							</svg>
						</div>
					</a>

					<a href='https://www.instagram.com/tv/Cd-3svEIMSA/' target='_blank'>
						<div className='stalk3 w-full rounded-lg flex items-center justify-center '>
                        <svg
								xmlns='http://www.w3.org/2000/svg'
								fill='white'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='white'
								className='w-20 h-20 mx-auto absolute'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z'
								/>
							</svg>
                        </div>
					</a>

					<a href='https://www.instagram.com/reel/Ccf4lVRoibw/' target='_blank'>
						<div className='stalk4 w-full rounded-lg flex items-center justify-center '>
                        <svg
								xmlns='http://www.w3.org/2000/svg'
								fill='white'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='white'
								className='w-20 h-20 mx-auto absolute'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z'
								/>
							</svg>
                        </div>
					</a>

					<a href='https://www.instagram.com/p/CbMqgVooNL1/' target='_blank'>
						<div className='stalk5 w-full rounded-lg '></div>
					</a>

					<a href='https://www.instagram.com/p/CZ9ceH0JYiZ/' target='_blank'>
						<div className='stalk6 w-full rounded-lg '></div>
					</a>
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
