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
        <a href={linkTo} className="flex flex-col items-center p-2 m-2 text-sm rounded-2xl hover:bg-primary-container hover:text-on-primary cursor-pointer">
            <IconComponent />
            {name}
        </a>
    )
}