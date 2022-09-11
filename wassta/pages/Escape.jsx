import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Image from "next/image";
import Share from "../components/Share";

export default function Escape() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Head>
				<title>Escape Reality-Wassta</title>
				<link rel='icon' href='/image/favicon.ico' />
			</Head>
			<main className='relative'>
				<Header setOpen={setOpen} open={open} />
				{open ? <SideBar setOpen={setOpen} open={open} /> : " "}
				<div className='w-full space-y-6 pt-40 lg:w-[70%] mx-auto justify-center items-center  mb-12 p-2 '>
					<div className='w-full h-[30vh] md:h-[50vh] relative rounded-lg overflow-hidden'>
						<Image src='/image/es1.jpg' layout='fill' />
					</div>

					<h1 className='ph text-left'>Escape Reality</h1>
					<p className='pt'>
						Took advantage of existing brand guidelines & content to create hype
						around the game in a way that would appeal to a widespread target
						audience varying from families and teenagers, to corporate sectors
					</p>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						<div className='relative h-[70vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/es2.jpg' layout='fill' />
						</div>

						<div className='relative h-[70vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/es3.jpg' layout='fill' />
						</div>

						<div className="flex flex-col gap-4">
							<div className='relative h-[50vh] w-full rounded-lg overflow-hidden'>
								<Image src='/image/es4.jpg' layout='fill' />
							</div>

							<div className='relative h-[18vh] w-full rounded-lg '>
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
