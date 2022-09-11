import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Image from "next/image";
import Share from "../components/Share";

export default function Cycle() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Head>
				<title>Cycle Souq-Wassta</title>
				<link rel='icon' href='/image/favicon.ico' />
			</Head>
			<main className='relative'>
				<Header setOpen={setOpen} open={open} />
				{open ? <SideBar setOpen={setOpen} open={open} /> : " "}
				<div className='w-full space-y-6 pt-24 lg:pt-40 lg:w-[90%] mx-auto justify-center items-center  mb-12 p-2 '>
					<h1 className='ph text-left'>Cycle Souq</h1>
					<p className='pt'>
						Creating engaging content to complement the brand as a whole through
						design & copy. Elevating the brand’s image and increasing sales
						through targeted advertising.
					</p>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						<div className='relative h-[80vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/cy1.png' layout='fill' />
						</div>

						<div className='grid grid-cols-1 md:col-span-2 md:grid-cols-2 gap-6'>
							<div className='relative h-[40vh] w-full rounded-lg overflow-hidden'>
								<Image src='/image/cy2.png' layout='fill' />
							</div>

							<div className='relative h-[40vh] w-full rounded-lg overflow-hidden'>
								<Image src='/image/cy3.png' layout='fill' />
							</div>

							<div className='relative h-[40vh] w-full rounded-lg overflow-hidden'>
								<Image src='/image/cy4.png' layout='fill' />
							</div>

							<div className='relative h-[20vh] w-full rounded-lg '>
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
