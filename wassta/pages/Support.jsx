import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Image from "next/image";
import Share from "../components/Share";

export default function Support() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Head>
				<title>Support Small Initiative-Wassta</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='relative'>
				<Header setOpen={setOpen} open={open} />
				{open ? <SideBar setOpen={setOpen} open={open} /> : " "}
				<div className='w-full space-y-6  pt-24 lg:pt-40 lg:w-[90%] mx-auto justify-center items-center  mb-12 p-2 '>
					<h1 className='ph text-left'>Support Small Initiative</h1>
					<p className='pt'>
					With the help of influencers and the local community, this campaign thrived on the concept of cross marketing to drive traffic and increase sales for all participating businesses.
					</p>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

						<div className='relative h-[70vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/sup1.png' layout='fill' />
						</div>

                        <div className='relative h-[70vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/sup2.png' layout='fill' />
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
