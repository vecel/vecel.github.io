import NavItem from "./NavItem";
import { useEffect, useState } from "react";

type TopDistance = {
    id: string,
    dist: number
}

export default function Navbar() {

    const [sections, setSections] = useState<string[]>([])
    const [active, setActive] = useState("")
    
    useEffect(() => {
        const nodes = Array.from(document.querySelectorAll("section"))
        const ids = nodes.map(node => node.id)
        setSections(ids)
        if (active === "") setActive(ids[0])

        const handleScroll = () => {
            const current = nodes.map(node => {
                return {
                    id: node.id,
                    dist: node.getBoundingClientRect().top
                }
            }).reduce((acc: TopDistance, cur: TopDistance) => {
                return Math.abs(acc.dist) < Math.abs(cur.dist) ? acc : cur
            })
            setActive(current.id)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <nav className="fixed top-0 left-0 h-full w-32 flex justify-center bg-surface text-on-surface-dark z-10">
            <ul className="flex flex-col mt-36 w-full">
                { sections.map(id =>
                    <NavItem key={id} id={id} name={id[0].toUpperCase() + id.slice(1) } active={active == id} />
                )}
            </ul>
        </nav>
    )
}