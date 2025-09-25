import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";

export default function Home() {
	return (
		<>
			<Navbar />
			<LandingPage />
			<About />
			<Services />
			<Portfolio />
			<Contact />
			<Footer />
		</>
	);
}
