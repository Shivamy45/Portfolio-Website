import React from "react";
import PortfolioCard from "./PortfolioCard";
import { assets, workData } from "@/assets/assets";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
const Portfolio = () => {
	const { theme } = useTheme();
	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }} // start state
			whileInView={{ opacity: 1, y: 0 }} // animate when in viewport
			viewport={{ once: true, amount: 0.3 }} // trigger once when 30% visible
			transition={{ duration: 0.6, ease: "easeOut" }}
			id="work"
			className="bg-[var(--color-bg)] flex flex-col gap-7 justify-center items-center min-h-screen min-w-full text-[var(--color-text-primary)]">
			<div className="text-center w-1/2 font-ovo flex flex-col gap-9">
				<p className="text-2xl">My portfolio</p>
				<p className="text-6xl">My latest work</p>
				<p className="text-xl/normal text-[var(--color-text-secondary)]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Veniam aut asperiores soluta saepe eius nobis tempore dolor,
					fugit delectus eveniet!
				</p>
			</div>
			<div className="flex gap-5 w-3/4 flex-wrap">
				{workData.map((item, idx) => (
					<PortfolioCard data={item} key={idx} />
				))}
			</div>
			<Link href={"/"} className="btn">
				Show More
				<Image
					src={
						theme === "dark"
							? assets.right_arrow_bold_dark
							: assets.right_arrow
					}
					alt="right arrow"
					className="w-4 h-2"
				/>
			</Link>
		</motion.section>
	);
};

export default Portfolio;
