import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";

function Layout({ children }) {
	return (
		<div>
			<Header />
			<div className='flex '>
				{/* <SideBar setOpen={setOpen} open={open} />       */}
				{children}{" "}
			</div>
		</div>
	);
}

export default Layout;
