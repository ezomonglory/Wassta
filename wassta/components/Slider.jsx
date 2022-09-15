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
					<div className='carousel-item active relative float-left w-full text-gray-700   sli text-center  fade mt-[4rem] md:mt-[2rem] md:text-[50px] lg:text-[66px]'>
						Converting <br/> crowds into <br/>
						clients
					</div>
					<div className='carousel-item relative float-left w-full text-gray-700   sli text-center  fade mt-[3rem] md:mt-0 md:text-[50px] lg:text-[66px]'>
						It's not about <br/> who you <br/> know, it's who <br/> knows you
					</div>
					<div className='carousel-item relative float-left w-full text-gray-700    sli text-center  fade mt-[6rem] md:mt-[4rem] md:text-[50px] lg:text-[66px]'>
						{" "}
						You need <br/> Waassta
					</div>
				</div>
			</div>
		</div>
	);
}

export default Slider;
