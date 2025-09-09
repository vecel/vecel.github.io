import StackIcon from "tech-stack-icons"

interface TechStackCardProps {
    title: string,
    items: string[]
}

interface TechStackIconProps {
    name: string
}

export default function TechStackCard({ title, items }: TechStackCardProps) {

    const icons = items.map((item) => <TechStackIcon name={item} />)

    return (
        <div className="size-106 bg-surface-container text-secondary border-4 rounded-md">
            <h3 className="p-4 text-3xl font-bold text-center border-b-4">{title}</h3>
            <div className="flex flex-wrap content-start p-4">
                {icons}
            </div>
        </div>
    )
}

function TechStackIcon({ name }: TechStackIconProps) {
    return (
        <div className="flex flex-col items-center justify-center size-24 text-sm border-on-surface">
            <StackIcon name={name} className="block size-12 mb-1" />
            {name}
        </div>
    )
}