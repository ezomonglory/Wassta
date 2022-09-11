import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Image from "next/image";
import Share from "../components/Share";

export default function Hmb() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Head>
				<title>Heart & Harvest-Wassta</title>
				<link rel='icon' href='/image/favicon.ico' />
			</Head>
			<main className='relative'>
				<Header setOpen={setOpen} open={open} />
				{open ? <SideBar setOpen={setOpen} open={open} /> : " "}
				<div className='w-full space-y-6 pt-24 md:pt-40 lg:w-[90%] mx-auto justify-center items-center  mb-12 p-2'>
					<h1 className='ph text-left'>HMB Homes</h1>
					<p className='pt'>
                    An integrated social campaign that focuses on positioning HMB as the leading choice in the real estate market in the UAE.
					</p>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						<div className='relative h-[80vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/hm1.jpg' layout='fill' />
						</div>

						<div className="grid grid-cols-1 md:col-span-2 md:grid-cols-2 gap-6">
                        <div className='relative h-[40vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/hm2.jpg' layout='fill' />
						</div>

						<div className='relative h-[60vh] md:h-[40vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/hm3.jpg' layout='fill' />
						</div>

						<div className='relative  md:col-span-2 w-full rounded-lg '>
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
