import type { ComponentType } from "react"
import type { SvgIconProps } from "@mui/material/SvgIcon"

interface NavItemProps {
    name: string,
    icon: ComponentType<SvgIconProps>,
    active: boolean,
}

export default function NavItem({ name, icon: IconComponent, active }: NavItemProps) {
    
    return (
        <li className="flex flex-col items-center p-2 m-2 text-sm rounded-2xl hover:bg-secondary-fixed hover:text-on-secondary-container cursor-pointer">
            <IconComponent />
            {name}
        </li>
    )
}