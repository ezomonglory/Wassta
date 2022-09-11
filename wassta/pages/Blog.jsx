import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Head>
				<title>Blog-Wassta</title>
				<link rel='icon' href='/image/favicon.ico' />
			</Head>
			<main className='relative'>
				<Header setOpen={setOpen} open={open} />
				{open ? <SideBar setOpen={setOpen} open={open} /> : " "}
				<div className='w-full space-y-24 pt-40 lg:w-[90%] mx-auto justify-center items-center flex flex-col mb-12 p-2'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4'>
						<div>
							<h1 className='text-gray-600 text-2xl mb-4'>
								{" "}
								4 Digital Marketing Trends to Watch out for in 2021{" "}
							</h1>
							<p className='text-gray-400 mb-4 text-md leading-10'>
								{" "}
								1) Image and Video search <br />  2) The Power of Tiktok <br /> {" "}
								3) Online Shops <br /> 
								4) Audience Engagement{" "}
							</p>

							<h2 className='text-pink-400 hov'>
								<Link href='/Digital'>Read More &rarr;</Link>
							</h2>
						</div>

						<div className='relative h-[40vh] rounded-xl overflow-hidden'>
							<Image src='/image/blogComp.jpg' layout='fill' />
						</div>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4'>
						<div>
							<h1 className='text-gray-600 text-2xl'>
								{" "}
								Current digital marketing trends
							</h1>
							<p className='text-gray-400 leading-7 text-md mb-4'>
								The days of merely having a website and a neglected Facebook
								page are over. Regardless of which industry you’re in, having a
								digital presence is primordial for your brand to grow and reach
								those you’re trying to reach. This digital landscape is also
								continuously evolving and it is key to stay in touch with the
								various effective ways to reach your audiences.
							</p>

							<h2 className='text-pink-400'>
								<Link href='/Current'>Read More &rarr;</Link>
							</h2>
						</div>

						<div className='relative h-[40vh] rounded-xl overflow-hidden'>
							<Image src='/image/blogBar.jpg' layout='fill' />
						</div>
					</div>
				</div>

				<Footer />
			</main>
		</div>
	);
}
