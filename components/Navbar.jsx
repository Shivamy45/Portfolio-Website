import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
	return (
		<nav className="flex justify-around items-center py-1 fixed top-0 left-0 z-50 backdrop-blur-sm min-w-full">
			<ScrollLink to="home" smooth={true} duration={0}>
				<Image
					src={assets.logo}
					className="w-38 cursor-pointer"
					alt="Logo"
				/>
			</ScrollLink>
			<div className="border border-white px-9 py-2 rounded-4xl drop-shadow-[0_10px_35px_0_rgba(0,0,0,0.03)] bg-white/50">
				<ul className="flex gap-16 font-ovo">
					<li className="cursor-pointer">
						<ScrollLink to="home" smooth={true} duration={0}>
							Home
						</ScrollLink>
					</li>
					<li className="cursor-pointer">
						<ScrollLink to="about" smooth={true} duration={0}>
							About
						</ScrollLink>
					</li>
					<li className="cursor-pointer">
						<ScrollLink to="services" smooth={true} duration={0}>
							Services
						</ScrollLink>
					</li>
					<li className="cursor-pointer">
						<ScrollLink to="work" smooth={true} duration={0}>
							My Work
						</ScrollLink>
					</li>
				</ul>
			</div>
			<div className="flex gap-6 items-center justify-center">
				<Image
					src={assets.moon_icon}
					className="w-7 h-7 cursor-pointer"
					alt="moon"></Image>
				<ScrollLink
					to="contact"
					smooth={true}
					duration={100}
					className="btn">
					Connect
					<Image
						src={assets.arrow_icon}
						className="w-3 h-3"
						alt="arrow"
					/>
				</ScrollLink>
			</div>
		</nav>
	);
};

export default Navbar;
