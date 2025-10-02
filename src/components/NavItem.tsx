interface NavItemProps {
    name: string,
    id: string,
    active: boolean,
}

export default function NavItem({ name, id, active }: NavItemProps) {
    
    const handleAnchorScroll = (e: React.MouseEvent) => {
        e.preventDefault()
        const section = document.getElementById(id)
        section?.scrollIntoView()
    }

    return (
        <a onClick={handleAnchorScroll} className={`flex items-center mb-1 text-sm cursor-pointer ${active ? "text-primary font-bold" : "hover:text-on-surface"}`}>
            { active && <div className="inline-block w-3 h-1 bg-primary rounded-r-2xl"/>}
            <span className="ml-8">{ name }</span>
        </a>
    )
}