interface TechTagProps {
    name: string
}

export default function TechTag({ name }: TechTagProps) {
    return (
        <div className="w-fit pl-4 pr-4 mr-2 mb-2 text-sm bg-secondary-container text-primary rounded-2xl">
            { name }
        </div>
    )
}