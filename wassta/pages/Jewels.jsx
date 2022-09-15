import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Init from "../components/InitHeader";
import SideBar from "../components/SideBar";
import Image from "next/image";
import Share from "../components/Share";

export default function Tot() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Head>
				<title>Jewels</title>
				<link rel='icon' href='/image/favicon.ico' />
			</Head>
			<main className='relative'>
				<Init  setOpen={setOpen} open={open} />
				<Header setOpen={setOpen} open={open} />
				<SideBar setOpen={setOpen} open={open} /> 
				<div className='w-full space-y-8 pt-40 lg:w-[80%] mx-auto justify-center items-center  mb-12 p-2 '>
					<h1 className='ph text-left'>Jewels</h1>

					<p className='pt'>
						With a goal to remind people of who they are, The Jewels Jar wanted
						to focus on building a greater online presence and reconnecting with
						their current audience. To achieve this, we revamped their website
						and social media platforms in terms of the content, right down to
						the style of imagery and tone of voice.
					</p>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						<div className='relative h-[70vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/jw1.png' layout='fill' />
						</div>

						<div className='relative h-[70vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/jw2.png' layout='fill' />
						</div>

						<div className='relative h-[70vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/jw3.png' layout='fill' />
						</div>

                        <div className='relative h-[70vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/jw4.png' layout='fill' />
						</div>

                        <div className='relative h-[70vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/jw5.png' layout='fill' />
						</div>

                        <div className='relative h-[70vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/jw6.png' layout='fill' />
						</div>
					</div>
					<div className='relative w-full rounded-lg '>
						<Share />
					</div>
				</div>

				<Footer />
			</main>
		</div>
	);
}
