import Home from "@mui/icons-material/Home";
import Apps from "@mui/icons-material/Apps";
import NavItem from "./NavItem";

export default function Drawer() {

    // const handleItemSelect = (name: string) => {
    //     setIsExpanded(false)
    // }

    return (
        <nav className="fixed h-full bg-surface-container text-secondary shadow-(--nav-shadow) z-10">
            <ul className="mt-2">
                <NavItem name="Home" icon={Home} active={true} />
                <NavItem name="Projects" icon={Apps} active={false} />
            </ul>
        </nav>
    )
}