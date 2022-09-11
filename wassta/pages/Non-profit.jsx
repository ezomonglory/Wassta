import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Image from "next/image";
import Share from "../components/Share";

export default function NonProfit() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Head>
				<title>Non-Profit-Wassta</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='relative'>
				<Header setOpen={setOpen} open={open} />
				{open ? <SideBar setOpen={setOpen} open={open} /> : " "}
				<div className='w-full space-y-6 pt-28 md:pt-40 mb-12 lg:w-[90%] mx-auto justify-center items-center p-2 '>
					<h1 className=' text-left text-2xl md:text-[3rem] '>Non Profit Organizations</h1>
					<p className='pt'>
						Worked with trust funds and charitable foundations to support their
						digital design and branding requirements
					</p>

					<div className='relative w-full rounded-lg h-[37vh] '>
						<Share />
					</div>
				</div>
				<Footer />
			</main>
		</div>
	);
}
