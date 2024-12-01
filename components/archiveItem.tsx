import { dateToString } from "@/lib/utils"

const ArchiveItem: React.FC<{
    id: number
    title: string
    authors: string[]
    date: Date
    tags: string[]
}> = (props) => {
    return (
        <div className="flex flex-col gap-1 pb-4 last:border-none border-b border-stone-300">
            <div className="flex justify-between items-end">
                <a
                    className="text-2xl font-semibold text-stone-800 cursor-pointer no-underline hover:underline underline-offset-4"
                    href={`/paper/${props.id}`}>
                    {props.title}
                </a>
                <span className="text-stone-500 text-md">{dateToString(props.date)}</span>
            </div>

            <div className="flex justify-between">
                <span className="text-stone-500">By {props.authors.join(", ")}</span>

                <div className="space-x-2">
                    {props.tags.map((tag, index) => <span key={index}>{`#${tag}`}</span>)}
                </div>
            </div>
        </div>
    );
}

export default ArchiveItem;
