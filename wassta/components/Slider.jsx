import React from "react";
typeof window === "undefined" ? " " : import("tw-elements");

function Slider() {
	return (
		<div className="w-full">
			<div
				id='carouselExampleControls'
				className='carousel slide relative '
				data-bs-ride='carousel'
			>
				<div className='carousel-inner relative w-full overflow-hidden text-center '>
					<div className='carousel-item active relative float-left w-full text-gray-700  text-[1.5rem] lg:text-[2.5rem] sli text-center hea fade mt-[4rem] lg:mt-[2rem]'>
						Converting  crowds into 
						clients
					</div>
					<div className='carousel-item relative float-left w-full text-gray-700  text-[1.5rem] lg:text-[2.5rem] sli text-center hea fade mt-[3rem] lg:mt-0'>
						It's not about  who you  know,<br/> it's about who  knows you
					</div>
					<div className='carousel-item relative float-left w-full text-gray-700   text-[1.5rem] lg:text-[2.5rem] sli text-center hea fade mt-[6rem] lg:mt-[4rem]'>
						{" "}
						You need  Waassta
					</div>
				</div>
			</div>
		</div>
	);
}

export default Slider;
