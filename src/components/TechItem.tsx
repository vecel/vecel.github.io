import type { ComponentType } from "react"
import type { SvgIconProps } from "@mui/material/SvgIcon"

interface TechItemProps {
    title: string,
    icon: ComponentType<SvgIconProps>
}

export default function TechItem({ title, icon: IconComponent }: TechItemProps) {
    return (
        <div className="flex flex-col justify-center items-center size-24 m-1 border border-secondary rounded-sm">
            <IconComponent className="text-5xl" />
            <span className="text-xs mt-2">{ title }</span>
        </div>
    )
}