import SitePage from "@/components/page";

export default async function PaperPage({ params }: {
    params: Promise<{ id: number }>
}) {
    const id = (await params).id;
    
    /** @todo */
    return (
        <SitePage title="Paper Page">
            <p>{id}</p>
        </SitePage>
    );
}
