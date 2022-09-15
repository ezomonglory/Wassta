import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Init from "../components/InitHeader";
import SideBar from "../components/SideBar";
import Image from "next/image";
import Share from "../components/Share";

export default function Tot() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Head>
				<title>Tot N Tales</title>
				<link rel='icon' href='/image/favicon.ico' />
			</Head>
			<main className='relative'>
				<Init  setOpen={setOpen} open={open} />
				<Header setOpen={setOpen} open={open} />
				<SideBar setOpen={setOpen} open={open} /> 
				<div className='w-full space-y-8 pt-40 lg:w-[80%] mx-auto justify-center items-center  mb-12 p-2 '>
                <h1 className='ph text-left'>Tot N Tales</h1>

					<p className='pt'>
                    Created a compelling brand narrative, to hype the launch of this online platform, and executed a 360° marketing strategy thereafter
					</p>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						<div className='relative h-[70vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/tot1.png' layout='fill' />
						</div>

						<div className='relative h-[70vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/tot3.png' layout='fill' />
						</div>

                       <div className="flex flex-col space-y-4">
                       <div className='relative h-[55vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/tot2.png' layout='fill' />
						</div>

						<div className='relative w-full rounded-lg '>
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
