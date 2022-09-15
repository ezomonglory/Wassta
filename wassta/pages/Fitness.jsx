import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Init from "../components/InitHeader";
import SideBar from "../components/SideBar";
import Image from "next/image";
import Share from "../components/Share";

export default function Fitness() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Head>
				<title>Fitness 360</title>
				<link rel='icon' href='/image/favicon.ico' />
			</Head>
			<main className='relative'>
				<Init  setOpen={setOpen} open={open} />
				<Header setOpen={setOpen} open={open} />
				<SideBar setOpen={setOpen} open={open} /> 
				<div className='w-full space-y-8 pt-40 lg:w-[80%] mx-auto justify-center items-center  mb-12 p-2 '>
					<h1 className='ph text-left'>Fitness 360</h1>
					<p className='pt'>
						Post pandemic, this dynamic Gym was looking to reposition themselves
						in the market. Our challenge was to use the support of social media
						to grip and engage the online audience in an already saturated
						market. This involved providing strategic direction, planning and
						publishing content, and generating new leads with paid advertising.
					</p>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						<div className='relative h-[70vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/fit1.jpg' layout='fill' />
						</div>

						<div className='relative h-[70vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/fit2.jpg' layout='fill' />
						</div>

						<div className='relative w-full rounded-lg '>
							<Share />
						</div>
					</div>
				</div>

				<Footer />
			</main>
		</div>
	);
}
