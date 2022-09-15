import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Init from "../components/InitHeader";
import SideBar from "../components/SideBar";
import Image from "next/image";
import Share from "../components/Share";

export default function Amin() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Head>
				<title>Amin & Wilson-Wassta</title>
				<link rel='icon' href='/image/favicon.ico' />
			</Head>
			<main className='relative'>
				<Init  setOpen={setOpen} open={open} />
				<Header setOpen={setOpen} open={open} />
				<SideBar setOpen={setOpen} open={open} /> 
				<div className='w-full space-y-6 pt-24 lg:pt-40 lg:w-[90%] mx-auto justify-center items-center  mb-12 p-2 '>

                    <div className="w-full h-[30vh] lg:h-[50vh] relative rounded-lg overflow-hidden">
                        <Image src="/image/prop1.jpg" layout="fill" />
                    </div>

					<h1 className='ph text-left'>Amin & Wilson</h1>
					<p className='pt'>
                    Executing brand, campaign, and audience-based strategies across digital platforms to turn leads into clients.
					</p>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						<div className='relative h-[40vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/prop2.png' layout='fill' />
						</div>

                        <div className='relative h-[40vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/prop3.png' layout='fill' />
						</div>

                        <div className='relative h-[40vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/prop4.png' layout='fill' />
						</div>

                        <div className='relative h-[80vh] w-full rounded-lg overflow-hidden'>
								<Image src='/image/prop5.png' layout='fill' />
							</div>

						<div className=' md:col-span-2 gap-6 flex flex-col'>
							
							<div className='relative h-[40vh] w-full rounded-lg overflow-hidden'>
								<Image src='/image/prop6.jpg' layout='fill' />
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
