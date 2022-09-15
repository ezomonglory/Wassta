import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "@heroicons/react/solid";
import NavLink from "./NavLink";

function Init({ setOpen, open }) {
	

	const headRef = useRef();

	return (
		<div className='bg-black md:bg-transparent  w-full flex justify-between  items-center px-8 fixed md:absolute z-40 md:top-20  lg:w-[80%] lg:ml-[10%] lg:mr-[10%]'>
			<NavLink href='/'>
				<div className='relative w-[40%] h-[40%] cursor-pointer md:hidden '>
					<Image src='/image/wasta.png' width={200} height={100} />
				</div>
			</NavLink>
			<MenuIcon
				className='md:hidden h-8 w-8 text-white cursor-pointer '
				onClick={() => setOpen(!open)}
			/>

			<div className='text-black hea text-[13px] justify-between uppercase text-lg md:flex-row flex-col hidden md:flex w-full md:w-[70%] mx-auto items-center'>
				<div className="overflow-hidden navhov text-black w-[85px]">
                <NavLink href='/Projects'>
					<p className='cursor-pointer  inline-block '>Projects</p>
				</NavLink>
                <div className="h-[2px] w-24 hove  bg-black" />
                </div>
				
				<div className="overflow-hidden navhov w-[85px]">
                <NavLink href='/Services'>
					<p className='cursor-pointer  inline-block '>Services</p>
				</NavLink>
                <div className="h-[2px] w-24 hove  bg-black" />
                </div>
				
				<div className='flex flex-col space-y-4 -mt-16 w-[20%] items-center'>
                <div className="overflow-hidden navhov w-[60px]">
                <NavLink href='/About'>
					<p className='cursor-pointer  inline-block '>About</p>
				</NavLink>
                <div className="h-[2px] w-24 hove  bg-black" />
                </div>
					
					<NavLink href='/'>
						<div className='relative w-full h-[12vh] cursor-pointer '>
							<Image src='/image/logoBlack.png' layout='fill' />
						</div>
					</NavLink>
				</div>
				<div className="overflow-hidden navhov w-[50px]">
                <NavLink href='/Blog'>
					<p className='cursor-pointer  inline-block '>Blog</p>
				</NavLink>
                <div className="h-[2px] w-24 hove  bg-black" />
                </div>
				
				<div className="overflow-hidden navhov w-[85px]">
                <NavLink href='/Contacts'>
					<p className='cursor-pointer  inline-block '>Contacts</p>
				</NavLink>
                <div className="h-[2px] w-24 hove  bg-black" />
                </div>
				
			</div>
		</div>
	);
}

export default Init;
