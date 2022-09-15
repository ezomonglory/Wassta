import React from "react";
import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Init from "../components/InitHeader";
import SideBar from "../components/SideBar";
import Image from "next/image";
import Link from "next/link";
import { Tabs } from "../Data";

function Contacts() {
	const [open, setOpen] = useState(false);
	const [selectedTab, setSelectedTab] = useState(Tabs[0]);

	return (
		<div>
			<Head>
				<title>Contact-Wassta</title>
				<link rel='icon' href='/image/favicon.ico' />
			</Head>
			<main className='relative bg-gray-100 bgGray'>
				<Init  setOpen={setOpen} open={open} />
				<Header setOpen={setOpen} open={open} />
				<SideBar setOpen={setOpen} open={open} /> 
				<div className='w-full space-y-24 pt-40 lg:w-[90%] mx-auto justify-center items-center flex flex-col mb-12 p-2 '>
					<h1 className='text-center text-gray-600 capitalize text-2xl'>
						Enough about us!
					</h1>
					<Image src='/image/conta.png' width={500} height={150} />
					<Image src='/image/mic.gif' width={300} height={200} />
					<form className='space-y-4 p-2'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-4 '>
							<input
								type='text'
								placeholder='Name'
								size={50}
								className='py-8 px-4 outline-none'
							/>
							<input
								type='email'
								placeholder='Email'
								size={50}
								className='py-8 px-4 outline-none'
							/>
						</div>
						<select className='w-full py-8 px-4 outline-none text-gray-400'>
							<option selected disabled>
								Subject
							</option>
							<option>Join Us</option>
							<option>Hire Us</option>
							<option>Partner With Us</option>
							<option>For Everything Else</option>
						</select>
						<textarea
							placeholder='Message'
							className='w-full py-4 px-4'
							rows={10}
						/>

						<button type='submit' className='p-4 hov'>
							Send
						</button>
					</form>

					<div className='w-full'>
						<h1 className='stop text-center'>Stop by and say hi</h1>
						<nav className='mt-6'>
							<ul className='flex justify-between'>
								{Tabs.map((item) => (
									<li
										className={
											item === selectedTab
												? "pink cursor-pointer"
												: "hov cursor-pointer"
										}
										onClick={() => {
											setSelectedTab(item);
										}}
									>
										{item.head}
										{item === selectedTab ? <div className='pink ' /> : ""}
									</li>
								))}
							</ul>
						</nav>
						<div className='mt-4 overflow-hidden rounded-lg'>
							{selectedTab ? selectedTab.map : ""}
						</div>
					</div>
				</div>

				<Footer />
			</main>
		</div>
	);
}

export default Contacts;
