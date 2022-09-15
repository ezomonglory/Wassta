import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Share() {
	const [click, setClick] = useState(false);
	return (
		<div>
			<div className='flex space-x-3'>
				<motion.div
					// initial={{ width:  }}
					// layout
					// data-isOpen={click}
					onClick={() => setClick(!click)}
				>
					{click ? (
						<motion.div layout>
							<MinusCircleIcon className='h-8 w-8' />
						</motion.div>
					) : (
						<motion.div layout>
							<PlusCircleIcon className='w-8 h-8' />
						</motion.div>
					)}
				</motion.div>

				 
					<motion.div

						className={`flex space-x-3 w ml-12 ${click ? "w-[85%]" : "w-0"}`}
						initial={{ width: "0" }}
						layout
						animate={click ? { width: "100%" } : ""}
                        transition={{duration: 1 }}
                        
						data-isOpen={click}
					>
						<div className='h-8 w-8 overflow-hidden relative cursor-pointer rounded-full '>
							<a href='https://twitter.com/intent/tweet?url=%20www.waassta.com%2Fstallion.html'>
								<Image src='/image/st.png' layout='fill' />
							</a>
						</div>

						<div className='h-8 w-12 overflow-hidden relative cursor-pointer rounded-full '>
							<a href='https://www.facebook.com/waasstadxb/?modal=admin_todo_tour'>
								<Image src='/image/sf.png' layout='fill' />
							</a>
						</div>

						<div className='h-8 w-8 rounded-full  overflow-hidden relative cursor-pointer rounded-full '>
							<a
								href={`https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2Fup%2F%3Fcontinue%3Dhttps%3A%2F%2Fplus.google.com%2Fshare%3Furl%253Dwww.waassta.com%2Fstallion.html&followup=https%3A%2F%2Fplus.google.com%2Fup%2F%3Fcontinue%3Dhttps%3A%2F%2Fplus.google.com%2Fshare%3Furl%253Dwww.waassta.com%2Fstallion.html&flowName=GlifWebSignIn&flowEntry=ServiceLogin`}
							>
								<Image src='/image/sg.png' layout='fill' />
							</a>
						</div>

						<div className='h-8 w-8 overflow-hidden relative cursor-pointer rounded-full '>
							<a
								href={`https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=www.waassta.com%2Fstallion.html&posttype=a&title=&caption=&content=www.waassta.com%2Fstallion.html`}
							>
								<Image src='/image/stm.png' layout='fill' />
							</a>
						</div>

						<div className='h-8 w-8 overflow-hidden relative cursor-pointer rounded-full '>
							<a href='https://www.linkedin.com/company/waassta'>
								<Image src='/image/si.png' layout='fill' />
							</a>
						</div>

						<div className='h-8 w-12  relative cursor-pointer rounded-full '>
							<a href='https://www.pinterest.com/'>
								<Image src='/image/sp.png' layout='fill' />
							</a>
						</div>
					</motion.div>
				
			</div>

			<h1 className='pt mt-2 uppercase'>Share this project!</h1>
		</div>
	);
}

export default Share;
