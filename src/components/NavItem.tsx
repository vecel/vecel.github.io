import type { ComponentType } from "react"
import type { SvgIconProps } from "@mui/material/SvgIcon"


interface NavItemProps {
    name: string,
    icon: ComponentType<SvgIconProps>,
    expanded: boolean,
    active: boolean
}

export default function NavItem({ name, icon: IconComponent, expanded, active }: NavItemProps) {
    return (
        <li className="w-full h-12 flex items-center justify-center cursor-pointer"
            style={{ color: active ? "red" : "black"}}>
            <IconComponent />
            { expanded && name}
        </li>
    )
}