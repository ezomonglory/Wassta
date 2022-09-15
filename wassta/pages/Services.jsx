import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Init from "../components/InitHeader";
import SideBar from "../components/SideBar";
import Image from "next/image";
import ServGrid from "../components/ServGrid";
import { Serv } from "../Data";

export default function Services() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Head>
				<title>Service-Wassta</title>
				<link rel='icon' href='/image/favicon.ico' />
			</Head>
			<main className='relative'>
				<Init  setOpen={setOpen} open={open} />
				<Header setOpen={setOpen} open={open} />
				<SideBar setOpen={setOpen} open={open} /> 
				<div className='w-full space-y-12 pt-40 lg:w-[70%] mx-auto justify-center items-center flex flex-col mb-12 p-2'>
					<Image src='/image/serv.png' width={500} height={150} />
					<h2 className='text-center serv'> Our bread & butter</h2>
					<p className='abtpa text-center'>
						We are everything you’d expect from a larger agency: accountable,
						autonomous, flexible and personable. Yet we deliver scale and reach
						for global brands from our offices in Dubai and Geneva.
					</p>
					<div className='grid grid-cols-1 md:grid-cols-2'>
						{Serv.map((data) => (
							<ServGrid image={data.image} text={data.text} />
						))}
					</div>
				</div>

				<Footer />
			</main>
		</div>
	);
}
