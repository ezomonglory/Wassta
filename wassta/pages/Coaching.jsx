import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Image from "next/image";
import Share from "../components/Share";

export default function Coaching() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Head>
				<title>Purple Patch</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='relative'>
				<Header setOpen={setOpen} open={open} />
				{open ? <SideBar setOpen={setOpen} open={open} /> : " "}
				<div className='w-full space-y-8 pt-40 lg:w-[80%] mx-auto justify-center items-center  mb-12 p-2 '>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<div className='flex flex-col space-y-4 h-[40vh]'>
							<h1 className='ph text-left'>Purple Patch</h1>

							<p className='pt'>
								Created a compelling brand narrative, to hype the launch of this
								online platform, and executed a 360° marketing strategy
								thereafter
							</p>
						</div>

						<div className='w-full h-[40vh] relative rounded-lg overflow-hidden'>
							<Image src='/image/pur1.jpg' layout='fill' />
						</div>

						<div className='flex flex-col space-y-4'>
							<div className='relative h-[100vh] w-full rounded-lg overflow-hidden'>
								<Image src='/image/pur2.png' layout='fill' />
							</div>

							<div className='relative h-[40vh] w-full rounded-lg overflow-hidden'>
								<Image src='/image/pur3.png' layout='fill' />
							</div>
						</div>
						<div className="flex flex-col space-y-4">
							<div className='relative h-[100vh] w-full rounded-lg overflow-hidden'>
								<Image src='/image/pur4.png' layout='fill' />
							</div>

							<div className='relative w-full rounded-lg '>
								<Share />
							</div>
						</div>
					</div>
				</div>

				<Footer />
			</main>
		</div>
	);
}
