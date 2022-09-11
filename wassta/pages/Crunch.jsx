import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Image from "next/image";
import Share from "../components/Share";

export default function Amin() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Head>
				<title>Crunch & Co-Wassta</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='relative'>
				<Header setOpen={setOpen} open={open} />
				{open ? <SideBar setOpen={setOpen} open={open} /> : " "}
				<div className='w-full space-y-6 pt-24 lg:pt-40 lg:w-[80%] mx-auto justify-center items-center  mb-12 p-2 '>
					<h1 className='ph text-left'>Crunch & Co</h1>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<div className='h-[20vh] flex flex-col space-y-3'>
							<p className='pt'>
								Executing brand, campaign, and audience-based strategies across
								digital platforms to turn leads into clients.
							</p>
							<div className='relative w-full rounded-lg hidden lg:block '>
								<Share />
							</div>
						</div>

						<div className='relative h-[30vh] lg:h-[50vh] w-full rounded-lg overflow-hidden'>
							<Image src='/image/cr1.png' layout='fill' />
						</div>
					</div>

					<div className="lg:hidden">
					<Share />
					</div>
				</div>

				<Footer />
			</main>
		</div>
	);
}
