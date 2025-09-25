"use client"
import { assets } from "@/assets/assets";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<div className="absolute inset-0 -z-10">
				<Image
					src={assets.header_bg_color}
					alt="header bg"
					className="fixed -z-10 inset-0 w-full h-full object-bottom left-30 top-[-600px]"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
			</div>
			<Navbar />
			<LandingPage />
			{/* <About /> */}
			{/* <Services /> */}
			{/* <Portfolio /> */}
			{/* <Contact /> */}
			{/* <Footer /> */}
		</div>
	);
}
