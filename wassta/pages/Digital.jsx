import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Image from "next/image";
import ServGrid from "../components/ServGrid";
import { Serv } from "../Data";

export default function Digital() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Head>
				<title>
					4 Digital Marketing Trends to Watch out for in 2021-Wassta
				</title>
				<link rel='icon' href='/image/favicon.ico' />
			</Head>
			<main className='relative'>
				<Header setOpen={setOpen} open={open} />
				{open ? <SideBar setOpen={setOpen} open={open} /> : " "}
				<div className='w-full space-y-6 pt-40 lg:w-[70%] mx-auto justify-center items-center flex flex-col mb-12 p-2'>
					<h1 className='pink text-2xl mb-4 '>
						{" "}
						4 Digital Marketing Trends to Watch out for in 2021{" "}
					</h1>

					<p className='text-gray-400 mb-4 text-md leading-10'>
						{" "}
						<span className='pink'>1). Image and Video Search </span>
						<br /> Right now, the norm is to type in key-words into a search
						engine for the image or video you’re looking for. However, a
						practice which is currently on the rise and will surely start being
						the norm very soon is submitting images or videos to bring up
						context or similar items in the image/video. This search technique
						will completely alter the SEO landscape which for now has heavily
						relied on textual methods to gain optimal positions online. This
						shift in use will especially alter the way e-commerce brands manage
						their SEO activity as i twill become common-place to see an item and
						then submit an image of it into a search engine in order to find
						similar items or places to purchase the original one. <br /> <br />{" "}
						<span className='pink'>2). The Power of Tiktok</span> <br />{" "}
						Although it may seem like rolling your eyes at the latest TikTok
						trend and regarding the platform as Vine’s lame younger brother is
						the way to go, from a marketer’s perspective this is a grave
						mistake. TikTok has been 2020’s largest growing platform and it only
						seems to be gaining momentum, this is fuelled by consumers’
						substantial appetite for short-form video content. As the platform
						with the largest Gen Z population as active users the future of
						social media and influencer marketing lies in the Chinese giant. In
						2020, Gen Z and Millennials’ spending power amounted to about $140
						billion – let that settle in. Tiktok needs to now take its rightful
						place within a brand’s roster of social media accounts where they
						actively produce content. <br /> <br />
						<span className='pink'>3). Online Shops</span> <br /> If one thing
						has been made apparent during the era of COVID-19 it’s that if your
						business is not online, it does not exist. Having a functional,
						attractive and intuitive online store has become primordial for
						brands and businesses. With lockdowns being imposed every few weeks,
						most businesses cannot rely solely on their brick and mortar point
						of sale anymore. This way of living will also alter many consumers’
						buying habits with larger shifts to exclusively purchasing online,
						this means brands need to prioritize their customer’s online
						experience much more than previous years. This is not only for
						e-commerce type businesses; most brands can benefit from an online
						shift. For example, a yoga studio which has had to close its doors
						temporarily can continue giving classes via online platforms by
						adopting an acute digital strategy. <br /> <br />
						<span className='pink'>4) Audience engagement</span> <br /> With the
						introduction of new technologies, shifting buyer behaviours and
						rising social media adoption – we see a new shift in the digital
						experience. Audiences do not want to be passive listeners and
						viewers of content, they also want to play a role in the content
						they consume. They want to influence, interact and see themselves in
						the content put out by their favourite brands and creators. For this
						reason, brands need to devise campaigns that aim to engage in
						co-creation with users. In 2021, we will see brands inviting their
						consumers to be a part of the conversation.
					</p>
				</div>

				<Footer />
			</main>
		</div>
	);
}
