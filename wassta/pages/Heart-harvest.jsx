import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Init from "../components/InitHeader";
import SideBar from "../components/SideBar";
import Image from "next/image";
import Share from "../components/Share";

export default function Heart() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Head>
				<title>Heart & Harvest-Wassta</title>
				<link rel='icon' href='/image/favicon.ico' />
			</Head>
			<main className='relative'>
				<Init  setOpen={setOpen} open={open} />
				<Header setOpen={setOpen} open={open} />
				<SideBar setOpen={setOpen} open={open} /> 
				<div className='w-full space-y-6 pt-24 md:pt-40 lg:w-[90%] mx-auto justify-center items-center  mb-12 p-2 '>
					<h1 className='ph text-left'>Heart & Harvest</h1>
					<p className='pt'>
						An organic social media strategy that focuses on video content and
						influencer collaborations in targeted cities in the USA.
					</p>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						<div className='relative h-[80vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/hr1.png' layout='fill' />
						</div>

						<div className="grid grid-cols-1 md:col-span-2 md:grid-cols-2 gap-6">
                        <div className='relative h-[40vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/hr2.png' layout='fill' />
						</div>

						<div className='relative h-[40vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/hr3.png' layout='fill' />
						</div>

						<div className='relative h-[40vh] md:col-span-2 w-full rounded-lg '>
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
