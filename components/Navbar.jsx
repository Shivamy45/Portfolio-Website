import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<nav className="flex justify-around items-center py-1 fixed top-0 left-0 z-50 backdrop-blur-sm min-w-full">
			<ScrollLink to="home" smooth={true} duration={0}>
				<Image
					src={theme === "dark" ? assets.logo_dark : assets.logo}
					className="w-38 cursor-pointer"
					alt="Logo"
				/>
			</ScrollLink>
			<div className="border border-[var(--color-border-white)] px-9 py-2 rounded-4xl drop-shadow-[0_10px_35px_0_var(--color-shadow)] bg-[var(--color-bg-navbar)]">
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
				<div className="mode" onClick={toggleTheme}>
					<Image
						src={
							theme === "light"
								? assets.moon_icon
								: assets.sun_icon
						}
						className="w-7 h-7 cursor-pointer"
						alt={theme === "light" ? "moon" : "sun"}
					/>
				</div>
				<ScrollLink
					to="contact"
					smooth={true}
					duration={100}
					className="btn">
					Connect
					<Image
						src={theme === "dark" ? assets.arrow_icon_dark : assets.arrow_icon}
						className="w-3 h-3"
						alt="arrow"
					/>
				</ScrollLink>
			</div>
		</nav>
	);
};

export default Navbar;
