import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Image from "next/image";
import Share from "../components/Share";

export default function Walled() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Head>
				<title>Walled-Wassta</title>
				<link rel='icon' href='/image/favicon.ico' />
			</Head>
			<main className='relative'>
				<Header setOpen={setOpen} open={open} />
				{open ? <SideBar setOpen={setOpen} open={open} /> : " "}
				<div className='w-full space-y-6 pt-24 md:pt-40 lg:w-[90%] mx-auto justify-center items-center  mb-12 p-2 '>
					<h1 className='ph text-left'>Spartan</h1>
					<p className='pt'>
						Continuously elevating Spartan as a qualified brand by tailoring
						campaigns to fit the cycling community in UAE and KSA.
					</p>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
						<div className='relative h-[80vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/spa1.png' layout='fill' />
						</div>

						<div className='relative h-[80vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/spa2.png' layout='fill' />
						</div>

						<div className="flex flex-col gap-y-4"> 
							<div className='relative h-[39vh] w-full rounded-lg overflow-hidden'>
								<Image src='/image/spa3.png' layout='fill' />
							</div>

							<div className='relative h-[39vh] w-full rounded-lg overflow-hidden'>
								<Image src='/image/spa4.png' layout='fill' />
							</div>
						</div>

						<div className='relative  w-full rounded-lg '>
							<Share />
						</div>
					</div>
				</div>
				<Footer />
			</main>
		</div>
	);
}
