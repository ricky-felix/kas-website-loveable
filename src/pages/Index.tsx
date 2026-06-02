import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

const Index = () => {
	return (
		<main className="min-h-screen bg-background text-foreground">
			<Nav />
			{/* Hero keeps its own on-load entrance (above the fold). */}
			<Hero />
			<Marquee />
			<Reveal>
				<Services />
			</Reveal>
			<Reveal>
				<Projects />
			</Reveal>
			<Reveal>
				<Process />
			</Reveal>
			<Reveal>
				<WhyUs />
			</Reveal>
			<Reveal>
				<Contact />
			</Reveal>
			<Footer />
		</main>
	);
};

export default Index;
