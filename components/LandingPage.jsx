import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link as ScrollLink } from "react-scroll";

const LandingPage = () => {
	return (
		<section
			id="home"
			className="flex flex-col gap-7 justify-center items-center min-h-screen min-w-full">
			<div className="w-45 h-45 rounded-full overflow-hidden">
				{/* My Image */}
				<Image
					src={assets.user_image}
					alt="Me"
					className="w-full h-full object-cover object-top"
				/>
			</div>
			<div className="flex justify-center items-center font-ovo">
				<p className="text-[28px]">Hi! I'm Shivam&nbsp;</p>
				<Image
					src={assets.hand_icon}
					className="w-7 h-7"
					alt="waving hand"
				/>
			</div>
			{/* Animation using react-simple-typewriter */}
			<h1 className="text-5xl font-bold text-center">
				I am a{" "}
				<Typewriter
					words={["Full Stack Developer", "Software Developer"]}
					loop={true}
					cursor
					cursorStyle="|"
					typeSpeed={50}
					deleteSpeed={20}
					delaySpeed={900}
				/>
			</h1>
			<p className="text-xl/relaxed text-[#565656] w-1/2 text-center font-ovo">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
				debitis? Mollitia eos modi consectetur non ea rem voluptatem
				odio quibusdam!
			</p>
			<div className="flex justify-center items-center text-lg gap-4">
				<ScrollLink
					to="contact"
					duration={0}
					smooth={true}
					className="dark_btn">
					connect with me{" "}
					<Image
						src={assets.right_arrow_white}
						alt="right arrow"
						className="w-3 h-3"
					/>
				</ScrollLink>
				<a
					href="/resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="btn">
					my resume{" "}
					<Image
						src={assets.download_icon}
						alt="download"
						className="w-4 h-4"
					/>
				</a>
			</div>
		</section>
	);
};

export default LandingPage;
