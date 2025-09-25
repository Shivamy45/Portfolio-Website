import React from "react";
import PortfolioCard from "./PortfolioCard";
import { workData } from "@/assets/assets";
import Link from "next/link";

const Portfolio = () => {
	return (
		<div className="border-2 bg-rose-700">
			<div className="border-2">
				<p>My Portfolio</p>
				<p>My Latest Work</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Veniam aut asperiores soluta saepe eius nobis tempore dolor,
					fugit delectus eveniet!
				</p>
			</div>
			<div className="flex border-2">
				{workData.map((item, idx) => (
					<PortfolioCard data={item} key={idx} />
				))}
			</div>
			<Link href={"/"} className="border-2">Show More</Link>
		</div>
	);
};

export default Portfolio;
