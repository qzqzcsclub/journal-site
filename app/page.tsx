import HomeSection from "@/components/homeSection";

export default function Home() {
	return (
		<div className="font-[family-name:var(--font-roboto-slab)]">
			<div className="mt-10 space-y-4">
				<h1 className="text-8xl max-lg:text-7xl max-md:text-5xl font-bold">CSC<br />Journal</h1>

				<p className="text-lg font-semibold">The Official Journal of Quanzhou 7th Middle School Cyber Security Club</p>

				<p className="text-md">
					This Journal is aimed to provide a platform for the students in <a href="https://csc.iteacher.org.cn" target="_blank">Cyber Security Club</a> to share their knowledge and experience, lifting their enthusiasm and motivation of studying and exploring.
					The topics of the articles in the Journal are diverse, including but not limited to computer science, software developing, mathematics, physics, chemistry and philosophy.
					The articles to be published to the Journal will be reviewed by the members of our Club, see <a href="https://github.com/qzqzcsclub/journal/blob/main/Fundamentals-of-Journal.md" target="_blank">the Fundamentals of Journal</a> for detailed information.
				</p>
			</div>
			
			<div className="mt-8 space-y-8">
				<HomeSection title="Call for Paper">
					<p>
						Our Journal is now accepting submissions from students in or graduated from our school!
						The topic of your paper is not specified, just feel free to decide which field you wanna study and turn your novel ideas into a paper.
					</p>
					<br />
					<p>
						<b>Basic Requirements:</b> All submissions should follow the <a href="https://github.com/qzqzcsclub/journal/blob/main/Fundamentals-of-Journal.md" target="_blank">the Fundamentals of Journal</a>.
						Manuscripts must be original, unpublished work and should be submitted in LaTeX or Markdown format. Please ensure that your submission includes a title, abstract (150-300 words), and the main body of the paper.
						The language of your paper is not specified, but you need to ensure that our reviewers and readers could read and understand it.
						The number of authors of one paper should not be exceeding 3.
					</p>
					<p>
						<b>Project Structure:</b> See <a href="https://github.com/qzqzcsclub/journal/blob/main/project-structure-draft.md" target="_blank">Project Structure Draft</a>. (This draft has not been settled)
					</p>
					<p>
						<b>Peer Review:</b> Each submission will undergo a peer-review process by the members in the Privy Council of our Club.
					</p>
					<p>
						<b>To Submit:</b> Please open a Pull Request that includes your submission to our <a href="https://github.com/qzqzcsclub/journal" target="_blank">Github Repo</a>. After being reviewed, your paper will be published in the next issue. For inquiries, feel free to ask in the <a href="https://github.com/qzqzcsclub/journal/issues" target="_blank">issues</a>.
					</p>
				</HomeSection>

				<HomeSection title="Important Dates">
					{/** @todo */}
				</HomeSection>
			</div>
		</div>
	);
}
