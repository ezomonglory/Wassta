import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React, { useState } from "react";

function Share() {
	const [click, setClick] = useState(false);
	return (
		<div>
            <div className='flex space-x-3'>
			<div onClick={() => setClick(!click)}>
				{click ? (
					<MinusCircleIcon className='h-8 w-8' />
				) : (
					<PlusCircleIcon className='w-8 h-8' />
				)}
			</div>

			{click ? (
				<div className='flex space-x-3 w-[85%]  '>
					<div className='h-8 w-8 overflow-hidden relative cursor-pointer'>
						<a href="https://twitter.com/intent/tweet?url=%20www.waassta.com%2Fstallion.html">
                        <Image src='/image/st.png' layout='fill' /></a>
					</div>

					<div className='h-8 w-12 overflow-hidden relative cursor-pointer'>
						<a className="https://www.facebook.com/waasstadxb/?modal=admin_todo_tour">
                        <Image src='/image/sf.png' layout='fill' />
                        </a>
					</div>

					<div className='h-8 w-8 rounded-full  overflow-hidden relative cursor-pointer'>
						<a  href={`https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2Fup%2F%3Fcontinue%3Dhttps%3A%2F%2Fplus.google.com%2Fshare%3Furl%253Dwww.waassta.com%2Fstallion.html&followup=https%3A%2F%2Fplus.google.com%2Fup%2F%3Fcontinue%3Dhttps%3A%2F%2Fplus.google.com%2Fshare%3Furl%253Dwww.waassta.com%2Fstallion.html&flowName=GlifWebSignIn&flowEntry=ServiceLogin`}>
                        <Image src='/image/sg.png' layout='fill' />
                        </a>
					</div>

					<div className='h-8 w-8 overflow-hidden relative cursor-pointer'>
						<a href={`https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=&url=www.waassta.com%2Fstallion.html&posttype=a&title=&caption=&content=www.waassta.com%2Fstallion.html`}>
                        <Image src='/image/stm.png' layout='fill' />
                        </a>
					</div>

					<div className='h-8 w-8 overflow-hidden relative cursor-pointer'>
						<a href="https://www.linkedin.com/company/waassta">
                        <Image src='/image/si.png' layout='fill' />
                        </a>
					</div>

					<div className='h-8 w-12  relative cursor-pointer'>
						<a href="https://www.pinterest.com/">
                        <Image src='/image/sp.png' layout='fill' />
                        </a>
					</div>
				</div>
			) : (
				""
			)}
		</div >

        <h1 className="pt mt-2 uppercase">Share this project!</h1>
        </div>
	);
}

export default Share;
