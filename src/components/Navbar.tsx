import Home from "@mui/icons-material/Home";
import Apps from "@mui/icons-material/Apps";
import NavItem from "./NavItem";

export default function Navbar() {

    // const handleItemSelect = (name: string) => {
    //     setIsExpanded(false)
    // }

    return (
        <nav className="fixed top-0 left-0 h-full w-32 flex justify-center bg-surface text-primary z-10">
            <ul className="mt-36">
                <NavItem link="home" name="Home" icon={Home} active={true} />
                <NavItem link="projects" name="Projects" icon={Apps} active={false} />
                <NavItem link="tech-stack" name="Tech" icon={Home} active={false} />
            </ul>
        </nav>
    )
}