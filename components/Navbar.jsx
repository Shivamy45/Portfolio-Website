import Link from "next/link";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = () => {
	return (
		<nav className="flex justify-around items-center py-1 fixed top-0 left-0 z-50 backdrop-blur-sm w-full">
			<Image
				src={assets.logo}
				className="w-38 cursor-pointer"
				alt="Logo"
			/>
			<div className="border border-white px-9 py-2 rounded-4xl drop-shadow-[0_10px_35px_0_rgba(0,0,0,0.03)] bg-white/50">
				<ul className="flex gap-16 font-ovo">
					<li>
						<Link href={"#home"}>Home</Link>
					</li>
					<li>
						<Link href={"#about"}>About</Link>
					</li>
					<li>
						<Link href={"#services"}>Services</Link>
					</li>
					<li>
						<Link href={"#work"}>My Work</Link>
					</li>
				</ul>
			</div>
			<div className="flex gap-6 items-center justify-center">
				<Image
					src={assets.moon_icon}
					className="w-7 h-7 cursor-pointer"
					alt="moon"></Image>
				<Link href={"#contact"} className="btn">
					Connect
					<Image
						src={assets.arrow_icon}
						className="w-3 h-3"
						alt="arrow"
					/>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
