import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Image from "next/image";
import Share from "../components/Share";

export default function Vego() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Head>
				<title>Vego Cafe-Wassta</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='relative'>
				<Header setOpen={setOpen} open={open} />
				{open ? <SideBar setOpen={setOpen} open={open} /> : " "}
				<div className='w-full space-y-6  pt-24 lg:pt-40 lg:w-[90%] mx-auto justify-center items-center  mb-12 p-2 '>
					<h1 className='ph text-left'>Vego Cafe</h1>
					<p className='pt'>
						No matter how appetizing your food is, your efforts are going
						unnoticed if you’re not driving traffic into your restaurant.
						Keeping in mind Vego’s business objectives, we ensure that their
						social media strategy is aligned with their holistic marketing
						strategy. We spend our time creating highly targeted and curated
						content for their online channels.
					</p>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<div className='flex flex-col space-y-4'>
							<div className='relative h-[60vh] w-full rounded-lg overflow-hidden'>
								<Image src='/image/veg1.jpg' layout='fill' />
							</div>
							<div className='relative h-[38vh] w-full rounded-lg overflow-hidden'>
								<Image src='/image/veg2.jpg' layout='fill' />
							</div>
						</div>

						<div className='relative h-[100vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/veg3.png' layout='fill' />
						</div>
					</div>
					<div className='relative h-[20vh] w-full rounded-lg '>
						<Share />
					</div>
				</div>

				<Footer />
			</main>
		</div>
	);
}
