import { useState } from "react";
import Home from "@mui/icons-material/Home";
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import Apps from "@mui/icons-material/Apps";
import NavItem from "./NavItem";

export default function Drawer() {

    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded)
    }

    const handleItemSelect = () => {

    }

    return (
        <nav className="absolute w-12 h-dvh bg-amber-500"
             style={{ width: isExpanded ? "calc(var(--spacing) * 48)" : "calc(var(--spacing) * 12)"}}>
            <ul>
                <li className="w-full h-12 flex items-center justify-center cursor-pointer"
                    onClick={toggleExpansion}>
                    { isExpanded ? <Close /> : <Menu /> }
                </li>
                <NavItem name="Home" icon={Home} active={true} expanded={isExpanded} />
                <NavItem name="Projects" icon={Apps} active={false} expanded={isExpanded} />
            </ul>
        </nav>
    )
}