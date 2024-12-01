import SitePage from "@/components/page";

export default function Page() {
    return (
        <SitePage title="Call for Papers">
            <p>
                Our Journal is an open access, peer-reviewed online journal set up by the students from the Club and dedicated to all aspects of science.
            </p>
            <p>
                We are now accepting submissions from students in or graduated from our school!
                The topic of your paper is not specified, just feel free to decide which field you wanna study and turn your novel ideas into a paper.
            </p>
            <br />

            <h2>Basic Requirements</h2>
            <p>
                All submissions should follow the <a href="https://github.com/qzqzcsclub/journal/blob/main/Fundamentals-of-Journal.md" target="_blank">the Fundamentals of Journal</a>.
                Manuscripts must be original, unpublished work and should be submitted in LaTeX or Markdown format. Please ensure that your submission includes a title, abstract (150-300 words), and the main body of the paper.
                The language of your paper is not specified, but you need to ensure that our reviewers and readers could read and understand it.
                The number of authors of one paper should not be exceeding 3.
            </p>

            <h2>Project Structure</h2>
            <p>
                See <a href="https://github.com/qzqzcsclub/journal/blob/main/project-structure-draft.md" target="_blank">Project Structure Draft</a>. (This draft has not been settled)
            </p>

            <h2>Peer Review</h2>
            <p>
                Each submission will undergo a peer-review process by the members in the Privy Council of our Club.
            </p>

            <h2>To Submit</h2>
            <p>
                See <a href="/guidelines">Submission Guidelines</a>.
            </p>
            
            <br />
            <p>For inquiries, feel free to ask in the <a href="https://github.com/qzqzcsclub/journal/issues" target="_blank">issues</a>.</p>
        </SitePage>
    );
}
