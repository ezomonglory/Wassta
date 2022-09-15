import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import About from "../components/About";
import Clients from "../components/Client";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import Layout from "../components/Layout";
import Init from "../components/InitHeader";
import SideBar from "../components/SideBar";
import Slider from "../components/Slider";
import StalkUs from "../components/StalkUs";

export default function Home() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Head>
				<title>Wassta</title>
				<link rel='icon' href='/image/favicon.ico' />
			</Head>
			<main className="relative">
                <Init  setOpen={setOpen} open={open} />				
				<Header setOpen={setOpen} open={open} />
				 <SideBar setOpen={setOpen} open={open} />
				<div className='w-full space-y-24'>					
					<HomePage />
					<About />
					<Clients />
					<StalkUs />
					<Footer />
				</div>
			</main>
		</div>
	);
}
