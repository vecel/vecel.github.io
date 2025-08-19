import { useEffect, useState } from "react"

export default function Cursor() {
    
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })

    const positionStyle = {
        top: position.y,
        left: position.x,
    }

    const handleMouseMove = (e: MouseEvent) => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
    }

    const handleMouseOut = (e: MouseEvent) => {
        setPosition({
            x: cutToRange(e.clientX, window.innerWidth),
            y: cutToRange(e.clientY, window.innerHeight)
        })
    }

    const cutToRange = (value: number, bound: number) => {
        return Math.max(Math.min(value, bound), 0)
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mouseout", handleMouseOut)
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseout", handleMouseOut)
        }
    }, [])

    return <div className="cursor" style={positionStyle} />
}