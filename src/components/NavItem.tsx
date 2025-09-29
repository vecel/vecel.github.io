import type { ComponentType } from "react"
import type { SvgIconProps } from "@mui/material/SvgIcon"

interface NavItemProps {
    name: string,
    link: string,
    icon: ComponentType<SvgIconProps>,
    active: boolean,
}

export default function NavItem({ name, link, icon: IconComponent, active }: NavItemProps) {
    
    const linkTo = "#" + link

    return (
        <a href={linkTo} className="flex flex-col items-center mt-2 mb-2 pt-2 pb-2 text-sm rounded-2xl cursor-pointer">
            {/* { active ? <div className="w-2 bg-primary"></div> : null } */}
            <IconComponent />
            {name}
        </a>
    )
}