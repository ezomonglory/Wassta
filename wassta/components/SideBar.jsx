import React from "react";
import Link from "next/link"
import NavLink from "./NavLink";
import { XIcon } from "@heroicons/react/solid";
import {motion} from "framer-motion"

function SideBar({setOpen, open}) {

    
	
	return (
		<motion.div
        initial={{x:"-100%", opacity:"0"}}        
        animate={open?{x:"0%", opacity:"1"}: ""}
        style={{opacity:"0"}}
        transition={{stiffness:1}}
         className='bg-black lg:hidden text-white w-[50%] h-screen text-[1.3rem] flex flex-col gap-y-8 p-4 md:w-[30%] pt-28 md:pt-[8rem] z-10 left fixed side hea '
         
         >

			<div className="absolute  right-8 hov top-[6rem] md:top-[7rem]" onClick={()=>{
				setOpen(!open)
			}}>
			<XIcon className="h-6 w-6"  />
			</div>

			<NavLink href='/Projects' onClick={()=> {
				setOpen(!open)
			}}>
				<p className='cursor-pointer hov'>Projects</p>
			</NavLink>
			<NavLink href='/Services' className='cursor-pointer hov' onClick={()=> {
				setOpen(!open)
			}}>
				<p className='cursor-pointer hov'>Services</p>
			</NavLink>
			<NavLink href='/About' className='cursor-pointer hov' onClick={()=> {
				setOpen(!open)
			}}>
				<p className='cursor-pointer hov'>About</p>
			</NavLink>{" "}
			<NavLink href='/Blog' className='cursor-pointer hov' onClick={()=> {
				setOpen(!open)
			}}>
				<p className='cursor-pointer hov'>Blog</p>
			</NavLink>{" "}
			<NavLink href='/Contacts' className='cursor-pointer hov' onClick={()=> {
				setOpen(!open)
			}}>
				<p className='cursor-pointer hov'>Contacts</p>
			</NavLink>
		</motion.div>
	);
}

export default SideBar;
