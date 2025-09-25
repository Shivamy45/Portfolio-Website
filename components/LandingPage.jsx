import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LandingPage = () => {
	return (
		<div className="flex flex-col border-2 border-green-700">
			{/* My Image */}
			<Image src={assets.user_image} className="w-30 h-30" alt="Me" />
			<p>
				Hi! I'm Shivam{" "}
				<Image src={assets.hand_icon} alt="waving hand" />
			</p>
			{/* Animation needed */}
			<h1>I am a Full Stack Developer</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
				debitis? Mollitia eos modi consectetur non ea rem voluptatem
				odio quibusdam!
			</p>
			<div>
				<Link href={"#contact"}>
					Connect With Me{" "}
					<Image src={assets.right_arrow_bold} alt="right arrow" />
				</Link>
				<Link href={"my-resume"}>
					My Resume
					<Image src={assets.download_icon} alt="download" />
				</Link>
			</div>
		</div>
	);
};

export default LandingPage;
