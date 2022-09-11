import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Image from "next/image";
import ServGrid from "../components/ServGrid";
import { Serv } from "../Data";

export default function Current() {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Head>
				<title>Current digital marketing trends-Wassta</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='relative'>
				<Header setOpen={setOpen} open={open} />
				{open ? <SideBar setOpen={setOpen} open={open} /> : " "}
				<div className='w-full space-y-4 pt-40 lg:w-[90%] mx-auto flex flex-col mb-12 p-2 text-gray-500 text-md leading-8'>
					<h1 className='pink text-2xl text-left '>
						{" "}
						Current digital marketing trends
					</h1>
					<p>
						The days of merely having a website and a neglected Facebook page
						are over. Regardless of which industry you’re in, having a digital
						presence is primordial for your brand to grow and reach those you’re
						trying to reach. This digital landscape is also continuously
						evolving and it is key to stay in touch with the various effective
						ways to reach your audiences.{" "}
					</p>
					<p className='text-gray-800'>
						{" "}
						1. Facebook Might Be Peaking. Honestly.
					</p>
					<p>
						Facebook isn’t the leader in the social media world. According to
						Forbes, <span className="pink"><a href="https://www.forbes.com/sites/meganhills1/2018/03/23/social-media-demographics/#6c6b5494783a">41% </a> </span> {" "}   of its users are over the age of 65. Although the
						platform is not struggling, it is important to understand who
						actually is on the platform. It has clearly morphed into a platform
						which is highly popular among an older demographic, while younger
						audiences tend to flock more towards Instagram, TikTok and Snapchat.{" "}
					</p>
					<p>
						Digital marketers clearly need to be aware who their target market
						is. If the aim is to connect with younger audiences then Facebook is
						probably not the route to be taking however, one could be wasting
						precious marketing budget on targeting the individuals on the wrong
						social platform. Facebook can however be considered a gold-mine when
						it comes to marketing to an older crowd.{" "}
					</p>
					<h1 className='text-gray-800'>
						2. Chatbots Dominating Customer Service
					</h1>
					<p>
						<span className='pink'>
							<a href='https://digitalmarketinginstitute.com/blog/2018-02-25-chatbots-will-80-of-companies-really-be-using-them-by-2020-chatb'>
								Chatbots
							</a>
						</span> {" "}{" "}
						are artificial intelligence (AI) software that acts as a virtual
						“concierge,” they communicate with users and assist them during
						their visit to a platform or website. They can with humans in a very
						natural way, usually through text chat windows, but verbal
						conversations are also possible. Eventually, as the system collects
						more data, the AI learns more about the customers, making it
						possible to offer a continuously-improving service.
					</p>
					<p>
						Recently, chatbots carved out a regular role on Facebook for a
						variety of tasks. Everything from providing weather information to
						automating basic customer support functions. Bots allow users to get
						personalized and dynamic interactions without pulling too much from
						limited human resources.
					</p>
					<p>There are a variety of benefits from employing AI technology:</p>
					<ul className='list-disc'>
						<li className='ml-6'>24/h service</li>
						<li className='ml-6'>Instant replies to customer questions</li>
						<li className='ml-6'>
							No need for breaks, vacations, or overtime pay
						</li>
						<p>
							Tidio research from January 2020 found that <span className="pink"><a href="https://botcore.ai/wp-content/uploads/2018/02/Infographic-Chatbots-2018-01-2-2.jpg">43%</a></span> of customers
							prefer to message an online bot than to phone customer service
							centers when communicating with a brand. With businesses and
							customers eager for more interaction with chatbots, this is sure
							to be one of the fastest-growing digital marketing trends this
							year.{" "}
						</p>
					</ul>
					<h1 className='text-gray-800'>3. Video is not Optional</h1>
					<p>
						If video is not one of your business’s method of communication, then
						you’re lagging behind unfortunately. Text-based content just doesn’t
						cut it anymore when trying to sell products and services online.{" "}
					</p>
					<p>
						In a smartphone-addicted world, people are watching video more than
						ever before. The medium is used to watch, share, learn and create
						opinions.{" "}
					</p>
					<p>
						The concept of pairing visuals and sounds in order to heighten a
						user’s marketing experience is the next level in terms of digital
						marketing. This style of media allows brands and businesses to send
						out various, more concentrated messages within one piece of content.
						Although production can be more costly and time-consuming than
						static posts – the benefits exceed the the investment.{" "}
					</p>
					<p>
						The concept of pairing visuals and sounds in order to heighten a
						user’s marketing experience is the next level in terms of digital
						marketing. This style of media allows brands and businesses to send
						out various, more concentrated messages within one piece of content.
						Although production can be more costly and time-consuming than
						static posts – the benefits exceed the the investment.{" "}
					</p>
					<h1 className='text-gray-800'>
						4. Good Content Matters But So Does Context{" "}
					</h1>
					<p>
						<span className='pink'>
							<a href='https://my.digitalmarketinginstitute.com/library/entry/the-state-of-content-marketing-in-2019-c1m-a2r'>
								Content
							</a>
						</span> {" "}{" "}
						marketing continues to be an essential part of digital marketing,
						although there’s an increasing emphasis on nuance in the content.
						The quality is forever going to matter, but now there’s more
						emphasis on the context and targeting. Google is developing a more
						sophisticated and deeper understanding of content online. This means
						that marketers need to think carefully about their target market and
						how to tailor content more precisely in 2020.
					</p>
					<p>
						Much of this boils down to the BERT update, released on Google in
						November 2019. This new algorithm helps Google get a better
						understanding of the natural language in user searches. The advice
						from Google is that “rather than chase the latest SEO trends, it’s
						more important to ensure a site has fast speeds, useful links, and
						well-written content.”{" "}
					</p>
					<p>
						That being said,{" "}
						<span className='pink'>
							<a href='https://my.digitalmarketinginstitute.com/library/entry/why-seo-is-changing-and-how-best-to-respond-s1m-w2e'>
								Google is getting smarter
							</a>
						</span> {" "}
						, and it gives preference to in-depth, accurate and current content
						that is closely aligned with user preferences.{" "}
					</p>
					<h1 className='text-gray-800'>5. Personalization of Emails</h1>
					<p>
						Email is still very much a channel that continues ot be used by
						billions, be it for commercial or personal purposes. Email is, for
						now, here to stay and email marketing serves as a major tool to
						digital marketers.
					</p>
					<p>
						It is a channel that’s evolving and the once generic style marketing
						emails aren’t that effective anymore. The combination of automation
						and personalization is what makes email marketing relevant.{" "}
					</p>
					<p>
						If you can tailor your email message to a specific user experience,
						such as browsing a specific product this allows a stronger
						connection to be formed with the potential customer. That message
						can be heightened by following up with promotional code or
						demonstration video in order to truly deliver on the needs of the
						customer. Email is often the final trigger to motivate an action,
						especially when combined with your remarketing techniques.
					</p>
					<h1 className='text-gray-800'>6. Interactive Is Mainstream</h1>
					<p>
						What is interactive content ? Anything that people can click on,
						swipe, or generally interact with online. According to Outgrow,{" "}
						<span className='pink'>
							<a href='https://outgrow.co/blog/guide-to-interactive-content'>
								93%
							</a>
						</span> {" "}{" "}
						of marketers rate interactive content as a highly effective tool for
						educating a buyer.
					</p>

					<p>Some interactive content types are:</p>

					<ul className='list-disc'>
						<li className='ml-6'>Quizzes and polls</li>
						<li className='ml-6'>Augmented reality ads</li>
						<li className='ml-6'></li>360-degree videos
						<p>
							These formats have started getting a lot more traction and clear
							favouring from consumers. Some brands have also started leveraging
							extremly high-tech marketing tactics such as augmented reality and
							interactive video content in order to offer people a more
							immersive and engaging experience. These days, customers want this
							type of fun content from brands, as it helps them feel more
							connected to the company as well as having a more memorable
							experience.{" "}
						</p>
					</ul>

					<h1 className='text-gray-800'>7. Voice Interaction Moves Forward</h1>
					<p>
						Thanks to technology such as Siri, Google, Alexa, and a host of
						other ‘smart’ devices, verbal interaction with devices is on the
						rise. As humans, we like to talk and is usually our preferred method
						of communication. So, it would only be natural for the machines we
						interact with to also catch up. This has opened up a whole new
						method of searching, shopping and discovering new things digitally.{" "}
					</p>
					<p>
						This method also poses some challenges as one would wouldn’t get as
						many search results as with a text-based search. It is up to brands
						to optimize these technologies to benefit them. For example,
						showcasing the top search-results on a platform that allow the
						company to generate the most revenue or satisfaction.{" "}
					</p>

					<h1 className='text-gray-800'>
						8. Marketing in Messaging Apps Will Level-Up
					</h1>

					<p>
						Social messaging apps aren’t just for staying in touch with friends
						and family. Many businesses have taken a big interest in apps like
						Facebook Messenger and WhatsApp recently, and it’s no surprise when
						you consider the opportunities:
					</p>
					<ul className="list-disc">
						<li className='ml-6'>
							<span className='pink'>
								<a href='https://www.statista.com/statistics/258749/most-popular-global-mobile-messenger-apps/'>
									1.3 billion monthly users
								</a>
							</span> {" "}{" "}
							are active on Facebook Messenger, sending more than{" "}
							<span className='pink'>
								<a href='10 billion messages'>10 billion messages</a>
							</span> {" "}{" "}
							every month.
						</li>

						<li className='ml-6'>
							WhatsApp has{" "}
							<span className='pink'>
								<a href='https://www.statista.com/statistics/258749/most-popular-global-mobile-messenger-apps/'>
									1.6 billion active users
								</a>
							</span> {" "}
							, sending over{" "}
							<span className='pink'>
								<a href='https://blog.whatsapp.com/10000631/Connecting-One-Billion-Users-Every-Day'>
									55 billion messages
								</a>
							</span> {" "}{" "}
							every day.
						</li>

						<p>
							Although traditional messaging channels like email and social
							media are far from dead, it is clear that people are much more
							active on instant messaging apps. In the next{" "}
							<span className='pink'>
								<a href='https://my.digitalmarketinginstitute.com/library/entry/everything-you-need-to-know-about-facebook-messenger-marketing-and-chatbots-s1o-a2r'>
									5-7 years
								</a>
							</span> {" "}
							, messenger marketing is expected to be the number one marketing
							channel in the world. Therefore, it’s only logical for brands to
							start connecting with consumers on these platforms. Marketing
							through Facebook Messenger generates{" "}
							<span className='pink'>
								<a href='https://review42.com/facebook-messenger-statistics'>
									10 to 80 times{" "}
								</a>
							</span> {" "}{" "}
							more engagement than organic posts on the Facebook feed.
						</p>
					</ul>

					<p>
						Messaging apps allow companies to reach a vast audience with short,
						personalized texts. Consumers are more likely to return to a company
						website if it has a live chat option.
					</p>

					<h1 className='text-gray-800'>9. Omnichannel Marketing is Vital</h1>

					<p>
						<span className='pink'>
							<a href='https://www.singlegrain.com/content-marketing-strategy-2/omnichannel-marketing-using-the-content-sprout-to-overcome-info-overload/'>
								Omnichannel marketing
							</a>
						</span> {" "}{" "}
						is the practice of marketing across multiple platforms, including
						email, apps, social media, and your website. This approach allows
						brands to connect with consumers on more digital touchpoints in
						order to offer a better user experience.
					</p>

					<p>
						By delivering a natural, consistent voice as well as a cohesive
						brand message across all channels, you can generate much better
						results. Customer retention, average order value, and purchase
						frequency are all higher when you market through multiple channels.{" "}
					</p>

					<p>
						As AI technology improves, companies can leverage data insights and
						machine learning to better understand customer behaviors, and then
						personalize it in the most optimal way. Ultimately, a focus on{" "}
						<span className='pink'>
							<a href='https://my.digitalmarketinginstitute.com/library/entry/digital-marketing-with-derek-liddy-s1t-v2i'>
								omnichannel marketing
							</a>
						</span> {" "}{" "}
						is the road to an enhanced customer journey that keeps people coming
						back for more.
					</p>
				</div>

				<Footer />
			</main>
		</div>
	);
}
