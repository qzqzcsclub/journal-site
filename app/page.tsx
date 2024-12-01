import Image from "next/image";

export default function Home() {
	return (
		<div className="font-[family-name:var(--font-roboto-slab)] mt-10 space-y-4">
			<div className="flex gap-6 max-sm:flex-col">
				<Image src="/club-logo.png" alt="Club Logo" width={200} height={200}/>
				<h1 className="inline-block text-8xl max-sm:text-7xl font-bold">CSC<br />Journal</h1>
			</div>

			<p className="text-lg font-semibold">The Official Journal of Quanzhou 7th Middle School Cyber Security Club</p>

			<p className="text-md">
				Aimed to provide a platform for the students in <a href="https://csc.iteacher.org.cn" target="_blank">Cyber Security Club</a> to share their knowledge and experience, lifting their enthusiasm and motivation of studying and exploring,
				<i>The Official Journal of Quanzhou 7th Middle School Cyber Security Club</i> is an open access, peer-reviewed online journal set up by the students from the Club and dedicated to all aspects of science.
				The topics of the articles in the Journal are diverse, including but not limited to computer science, software developing, mathematics, physics, chemistry and philosophy.
				The articles to be published to the Journal will be reviewed by the members of our Club, see <a href="https://github.com/qzqzcsclub/journal/blob/main/Fundamentals-of-Journal.md" target="_blank">the Fundamentals of Journal</a> for detailed information.
			</p>
		</div>
	);
}
