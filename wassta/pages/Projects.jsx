import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjCard from "../components/ProjCard";
import SideBar from "../components/SideBar";
import { ProjData } from "../Data";


export default function Projects() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Head>
				<title>Project-Wassta</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='relative'>
				<Header setOpen={setOpen} open={open} />
				{open ? <SideBar setOpen={setOpen} open={open} /> : " "}
				<div className='w-full space-y-12 pt-40 lg:w-[90%] mx-auto justify-center items-center flex flex-col mb-12 p-2'>
					<Image src="/image/proj.png" width={400} height={100} />

					<div className="grid grid-rows-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full gap-6 h-full">
						<div className="">
							<ProjCard image={ProjData[0].image} head={ProjData[0].head} text={ProjData[0].text} link={ProjData[0].link} classs="proj1" />
						</div>

						<div className="">
							<ProjCard image={ProjData[1].image} head={ProjData[1].head} text={ProjData[1].text} link={ProjData[1].link} classs="proj2" />
						</div>

						<div className="">
							<ProjCard image={ProjData[2].image} head={ProjData[2].head} text={ProjData[2].text} link={ProjData[2].link} classs="proj3" />
						</div>

						<div className="lg:col-span-2">
							<ProjCard image={ProjData[3].image} head={ProjData[3].head} text={ProjData[3].text} link={ProjData[3].link} classs="proj4" />
						</div>

						<div className="">
							<ProjCard image={ProjData[4].image} head={ProjData[4].head} text={ProjData[4].text} link={ProjData[4].link} classs="proj5" />
						</div>

						<div className="">
							<ProjCard image={ProjData[5].image} head={ProjData[5].head} text={ProjData[5].text} link={ProjData[5].link} classs="proj6" />
						</div>

						<div className="">
							<ProjCard image={ProjData[6].image} head={ProjData[6].head} text={ProjData[6].text} link={ProjData[6].link} classs="proj7" />
						</div>

						<div className="">
							<ProjCard image={ProjData[7].image} head={ProjData[7].head} text={ProjData[7].text} link={ProjData[7].link} classs="proj8" />
						</div>

						<div className="row-span-2">
							<ProjCard image={ProjData[8].image} head={ProjData[8].head} text={ProjData[8].text} link={ProjData[8].link} classs="proj9 h" />
						</div>

						<div className="row-span-2 lg:col-span-2">
							<ProjCard image={ProjData[9].image} head={ProjData[9].head} text={ProjData[9].text} link={ProjData[9].link} classs="proj10 h" />
						</div>

						<div className="">
							<ProjCard image={ProjData[10].image} head={ProjData[10].head} text={ProjData[10].text} link={ProjData[10].link} classs="proj11" />
						</div>

						<div className="">
							<ProjCard image={ProjData[11].image} head={ProjData[11].head} text={ProjData[11].text} link={ProjData[11].link} classs="proj12" />
						</div>

						<div className="">
							<ProjCard image={ProjData[12].image} head={ProjData[12].head} text={ProjData[12].text} link={ProjData[12].link} classs="proj13" />
						</div>

						<div className="lg:col-span-2">
							<ProjCard image={ProjData[13].image} head={ProjData[13].head} text={ProjData[13].text} link={ProjData[13].link} classs="proj14" />
						</div>

						<div className="">
							<ProjCard image={ProjData[14].image} head={ProjData[14].head} text={ProjData[14].text} link={ProjData[14].link} classs="proj15" />
						</div>

						<div className="">
							<ProjCard image={ProjData[15].image} head={ProjData[15].head} text={ProjData[15].text} link={ProjData[15].link} classs="proj16" />
						</div>

						<div className="">
							<ProjCard image={ProjData[16].image} head={ProjData[16].head} text={ProjData[16].text} link={ProjData[16].link} classs="proj17" />
						</div>

						<div className="">
							<ProjCard image={ProjData[17].image} head={ProjData[17].head} text={ProjData[17].text} link={ProjData[17].link} classs="proj18" />
						</div>

						<div className="lg:col-span-2">
							<ProjCard image={ProjData[18].image} head={ProjData[18].head} text={ProjData[18].text} link={ProjData[18].link} classs="proj19" />
						</div>

						<div className="">
							<ProjCard image={ProjData[19].image} head={ProjData[19].head} text={ProjData[19].text} link={ProjData[19].link} classs="proj20" />
						</div>
					</div>
				</div>
			</main>
			<Footer/>
		</div>
	);
}
