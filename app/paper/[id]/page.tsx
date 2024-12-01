export default async function PaperPage({ params }: {
    params: { id: number }
}) {
    const id = (await params).id;
    
    /** @todo */
    return (
        <div>
            <p>{id}</p>
        </div>
    );
}
