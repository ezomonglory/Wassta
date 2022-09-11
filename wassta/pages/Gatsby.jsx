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
				<title>Gatsby-Wassta</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='relative'>
				<Header setOpen={setOpen} open={open} />
				{open ? <SideBar setOpen={setOpen} open={open} /> : " "}

				<div className='w-full space-y-6 pt-24 lg:pt-40 lg:w-[90%] mx-auto justify-center items-center  mb-12 p-2 '>
					<h1 className='ph text-left'>Gatsby</h1>
					<p className='pt'>
						Creating an evocative and emotional buzz that speaks the language of
						Gatsby’s young target audience, combining direct, social and paid
						media.
					</p>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						<div className='relative h-[80vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/gat1.png' layout='fill' />
						</div>

						<div className='relative h-[80vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/gat2.png' layout='fill' />
						</div>

						<div className='flex flex-col space-y-4'>
							<div className='relative h-[40vh] w-full rounded-lg overflow-hidden'>
								<Image src='/image/gat3.png' layout='fill' />
							</div>

							<div className='relative h-[40vh] w-full rounded-lg overflow-hidden'>
								<Image src='/image/gat4.png' layout='fill' />
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
