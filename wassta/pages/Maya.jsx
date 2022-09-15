import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Init from "../components/InitHeader";
import SideBar from "../components/SideBar";
import Image from "next/image";
import Share from "../components/Share";

export default function Maya() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Head>
				<title>Maya & Mosha-Wassta</title>
				<link rel='icon' href='/image/favicon.ico' />
			</Head>
			<main className='relative'>
				<Init  setOpen={setOpen} open={open} />
				<Header setOpen={setOpen} open={open} />
				<SideBar setOpen={setOpen} open={open} /> 
				<div className='w-full space-y-6 pt-40 lg:w-[70%] mx-auto justify-center items-center  mb-12 p-2 '>
					<div className='w-full h-[50vh] relative rounded-lg overflow-hidden'>
						<Image src='/image/may1.png' layout='fill' />
					</div>

					<h1 className='ph text-left'>Maya & Mosha</h1>
					<p className='pt'>
						Launching this app on social media meant that we got to explore
						animations and colors in their feed to best display the Indian
						culture which is the focus of their app. In order to organically
						drive views and increase downloads for the app, we actively focus on
						community management for their account.
					</p>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<div className='relative h-[70vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/may2.jpg' layout='fill' />
						</div>

						<div className='relative h-[20vh] w-full rounded-lg '>
							<Share />
						</div>
					</div>
				</div>

				<Footer />
			</main>
		</div>
	);
}
