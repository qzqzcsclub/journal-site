const HomeSection: React.FC<{
    title: string
    children?: React.ReactNode
}> = (props) => {
    return (
        <section className="space-y-2">
            <h2 className="text-3xl font-bold">{props.title}</h2>

            <div>
                {props.children}
            </div>
        </section>
    );
}

export default HomeSection;
