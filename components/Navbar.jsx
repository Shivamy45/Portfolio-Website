import Link from "next/link";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = () => {
	return (
		<nav className="flex justify-around border-2 border-red-700">
			<Image
				src={assets.logo}
				className="w-38 cursor-pointer border-2 border-black"
				alt="Logo"
			/>
			<div>
				<ul className="flex gap-16 bg-amber-50 border-2 border-black">
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
			<div className="flex border-2 border-black">
				<Image
					src={assets.moon_icon}
					className="w-8 h-8 cursor-pointer"
					alt="moon"></Image>
				<Link href={"#contact"}>
					Connect
					<Image
						src={assets.arrow_icon}
						className="w-4 h-4"
						alt="arrow"
					/>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
