import React from "react";
import PortfolioCard from "./PortfolioCard";
import { assets, workData } from "@/assets/assets";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
	return (
		<div className="flex flex-col gap-7 justify-center items-center min-h-screen min-w-full text-[#242424]">
			<div className="text-center w-1/2 font-ovo flex flex-col gap-9">
				<p className="text-2xl">My portfolio</p>
				<p className="text-6xl">My latest work</p>
				<p className="text-xl/normal text-[#565656]">
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
					src={assets.right_arrow}
					alt="right arrow"
					className="w-4 h-2"
				/>
			</Link>
		</div>
	);
};

export default Portfolio;
