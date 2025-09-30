interface SeparatorProps {
    height?: number
}

export default function Separator({ height = 24 }: SeparatorProps) {

    const h = "h-" + height

    return (
        <div className={h} />
    )
}