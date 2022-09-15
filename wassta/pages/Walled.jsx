import Head from "next/head";
import { useRef, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Init from "../components/InitHeader";
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
				<Init  setOpen={setOpen} open={open} />
				<Header setOpen={setOpen} open={open} />
				<SideBar setOpen={setOpen} open={open} /> 
				<div className='w-full space-y-6 pt-24 md:pt-40 lg:w-[90%] mx-auto justify-center items-center  mb-12 p-2 '>
					<h1 className='ph text-left'>Waleed Pharmacy</h1>
					<p className='pt'>
						Shifting brand perception to give Waleed Pharmacy a voice online.
					</p>


					<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
						<div className='relative h-[70vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/wal1.jpg' layout='fill' />
						</div>

						<div className='relative h-[70vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/wal2.jpg' layout='fill' />
						</div>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						<div className='relative h-[80vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/wal3.jpg' layout='fill' />
						</div>

						<div className='relative h-[80vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/wal4.jpg' layout='fill' />
						</div>

						<div className='relative h-[70vh] w-full rounded-lg '>
							<Share  />
						</div>
					</div>
				</div>

				<Footer />
			</main>
		</div>
	);
}
