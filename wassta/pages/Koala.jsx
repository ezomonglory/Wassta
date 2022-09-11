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
				<title>Koala Picks-Wassta</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='relative'>
				<Header setOpen={setOpen} open={open} />
				{open ? <SideBar setOpen={setOpen} open={open} /> : " "}

				<div className='w-full space-y-6 pt-24 lg:pt-40 lg:w-[70%] mx-auto justify-center items-center  mb-12 p-2 '>
					<h1 className='ph text-left'>Koala Picks</h1>
					<p className='pt'>
						Crafting crisp, clear & strategy-driven content that takes their
						creative goals to the next level. And above all, looks fantastic.
					</p>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						<div className='relative h-[80vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/k1.jpg' layout='fill' />
						</div>

						<div className='relative h-[80vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/k2.png' layout='fill' />
						</div>

						<div className='flex flex-col space-y-4'>
							<div className='relative h-[40vh] w-full rounded-lg overflow-hidden'>
								<Image src='/image/k3.png' layout='fill' />
							</div>

							<div className='relative h-[40vh] w-full rounded-lg overflow-hidden'>
								<Image src='/image/k4.png' layout='fill' />
							</div>
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
