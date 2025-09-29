import type { ComponentType } from "react"
import type { SvgIconProps } from "@mui/material/SvgIcon"

interface SocialItemProps {
    link: string,
    icon: ComponentType<SvgIconProps>,
}

export default function SocialItem({ link, icon: IconComponent }: SocialItemProps) {
    return (
        <a href={link} target="_blank" className="mb-6">
            <IconComponent />
        </a>
    )
}