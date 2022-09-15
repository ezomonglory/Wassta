import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Init from "../components/InitHeader";
import SideBar from "../components/SideBar";
import Image from "next/image";
import Share from "../components/Share";

export default function Moltocare() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Head>
				<title>Moltocare-Wassta</title>
				<link rel='icon' href='/image/favicon.ico' />
			</Head>
			<main className='relative'>
				<Init  setOpen={setOpen} open={open} />
				<Header setOpen={setOpen} open={open} />
				<SideBar setOpen={setOpen} open={open} /> 
				<div className='w-full space-y-6 pt-40 lg:w-[90%] mx-auto justify-center items-center  mb-12 p-2 '>

                    <div className="w-full h-[50vh] relative rounded-lg overflow-hidden">
                        <Image src="/image/molt1.jpg" layout="fill" />
                    </div>

					<h1 className='ph text-left'>Moltocare</h1>
					<p className='pt'>
                    A series of successful campaigns to boost the online presence of the business thus driving educated consumer enquiries that would convert into sales.
					</p>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						<div className='relative h-[40vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/molt2.jpg' layout='fill' />
						</div>

                        <div className='relative h-[40vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/molt3.jpg' layout='fill' />
						</div>

                        <div className='relative h-[40vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/molt4.png' layout='fill' />
						</div>

                        <div className='relative h-[80vh] w-full rounded-lg overflow-hidden'>
								<Image src='/image/molt6.png' layout='fill' />
							</div>

						<div className=' md:col-span-2 gap-6 flex flex-col'>
							
							<div className='relative h-[40vh] w-full rounded-lg overflow-hidden'>
								<Image src='/image/molt5.jpg' layout='fill' />
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
