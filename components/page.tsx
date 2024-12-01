const SitePage: React.FC<{
    title: string
    children?: React.ReactNode
}> = (props) => {
    return (
        <section className="font-[family-name:var(--font-roboto-slab)] space-y-6">
            <h1>{props.title}</h1>

            <div>
                {props.children}
            </div>
        </section>
    );
}

export default SitePage;
