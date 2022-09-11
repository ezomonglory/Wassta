import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Image from "next/image";
import Team from "../components/Team";
import { teamData } from "../Data";

export default function About() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Head>
				<title>About-Wassta</title>
				<link rel='icon' href='/image/favicon.ico' />
			</Head>
			<main className='relative'>
				<Header setOpen={setOpen} open={open} />
				{open ? <SideBar setOpen={setOpen} open={open} /> : " "}
				<div className='w-full space-y-24 pt-40 lg:w-[70%] mx-auto justify-center items-center flex flex-col mb-12 p-2'>
					<Image src='/image/story.png' width={300} height={100} />
					<div className='relative w-full md:h-[60vh] h-[30vh] '>
						<Image src='/image/abt-banner.png' layout='fill' />
					</div>
					<p className='abtpa text-left'>
						‘Bespoke, Candid, Driven’ are our core values. These are the words
						we live by in everything we do. Waassta reflects a shift in how
						people, brands and organisations communicate in the digital age. We
						recognize the revolution that has occurred in the way people shop,
						travel, work and connect with friends and family and try to take
						advantage of this. <br /> <br />
						In the recent years, the digital age has completely altered the
						playing field in how businesses market themselves. We implement
						fully integrated, tailor made strategies to create an impactful
						voice and vision for our clients. We target audiences and work on
						delivering the right message, at the right time, on the right
						device. Every story we tell, every identity we create and every
						interaction we encourage are heartfelt, unconventional marketing
						solutions to help business growth for our clients. <br /> <br />
						We are all about helping you grow. We support small businesses (or
						big ones, we don’t discriminate) in reaching the most profitable
						spot on the digital landscape. Competition is already hard in this
						landscape and we want to equip you with the tools to compete without
						holding you back financially. This is why, we offer competitive
						prices for our services to level the playing field.
					</p>
                    <div>
                        <h2 className="uppercase abthe text-center mb-8">our Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
                            {teamData.map((data)=> <Team image={data.image} name={data.name} title={data.title} text={data.text} />)}
                        </div>
                    </div>
				</div>
				<Footer />
			</main>
		</div>
	);
}
