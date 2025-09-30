interface SeparatorProps {
    className?: string
}

export default function Separator({ className = "h-24" }: SeparatorProps) {

    return (
        <div className={className} />
    )
}