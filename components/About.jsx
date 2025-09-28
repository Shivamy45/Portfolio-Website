import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import AboutCard from "./AboutCard";
import AboutCard2 from "./AboutCard2";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";

const About = () => {
	const { theme } = useTheme();
	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }} // start state
			whileInView={{ opacity: 1, y: 0 }} // animate when in viewport
			viewport={{ once: true, amount: 0.3 }} // trigger once when 30% visible
			transition={{ duration: 0.6, ease: "easeOut" }}
			id="about"
			className="bg-[var(--color-bg)] flex flex-col gap-7 justify-center items-center min-h-screen min-w-full">
			<div className="font-ovo text-center">
				<p className="text-2xl">Introduction</p>
				<p className="text-6xl">About Me</p>
			</div>
			<div className="flex justify-center w-3/4 gap-10">
				{/* My Image */}
				<Image
					src={assets.user_image}
					className="w-90"
					alt="User Image"
				/>
				<div className="flex flex-col gap-4 justify-between mb-5">
					<p className="font-ovo text-xl/normal text-[var(--color-text-secondary)]">
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Eaque odio eveniet dolorum ratione, ea
						consequuntur qui quod nulla unde! Tenetur incidunt fuga
						voluptates explicabo consectetur blanditiis nisi,
						repudiandae sed reiciendis.
					</p>
					<div className="flex gap-3">
						{infoList.map((item, idx) => (
							<AboutCard key={idx} data={item} />
						))}
					</div>
					<div className="flex flex-col">
						<p className="font-ovo text-xl text-[var(--color-text-light)]">
							Tools I Use
						</p>
						<div className="flex gap-4">
							{toolsData.map((item, idx) => (
								<AboutCard2 key={idx} img={item} />
							))}
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default About;
