import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "@heroicons/react/solid";
import NavLink from "./NavLink";

function Header({ setOpen, open }) {


	useEffect (() => {
		{			
			window.onscroll = () => {
				if (
					document.body.scrollTop > 20 ||
					document.documentElement.scrollTop > 20
				) {
					headRef.current.style.top = "0";
                    headRef.current.style.transition= "all .2s "
				} else {
					headRef.current.style.top = "-15%";
				}
			};
		}
	});


	const headRef = useRef();    
	
	return (
		<div
			className='bg-black hidden md:flex  w-full justify-between  items-center px-8 fixed z-40 top-[-15%]'
			ref={headRef}
		>
			<NavLink href='/'>
				<div className='relative w-[40%] h-[40%] cursor-pointer '>
					<Image src='/image/wasta.png' width={200} height={100}  />
				</div>
			</NavLink>

			<MenuIcon
				className='lg:hidden h-8 w-8 text-white cursor-pointer '
				onClick={() => setOpen(!open)}
			/>

			<div className='text-white hea text-[13px] justify-between uppercase text-lg lg:flex-row flex-col hidden lg:flex w-[50%]'>
				<NavLink href='/Projects'>
					<p className='cursor-pointer hov'>Projects</p>
				</NavLink>
				<NavLink href='/Services' className='cursor-pointer hov'>
					<p className='cursor-pointer hov'>Services</p>
				</NavLink>
				<NavLink href='/About' className='cursor-pointer hov'>
					<p className='cursor-pointer hov'>About</p>
				</NavLink>{" "}
				<NavLink href='/Blog' className='cursor-pointer hov'>
					<p className='cursor-pointer hov'>Blog</p>
				</NavLink>{" "}
				<NavLink href='/Contacts' className='cursor-pointer hov'>
					<p className='cursor-pointer hov'>Contacts</p>
				</NavLink>
			</div>
		</div>
	);
}

export default Header;
