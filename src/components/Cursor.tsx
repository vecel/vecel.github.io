import { useEffect, useState } from "react"

export default function Cursor() {
    
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })

    const handleMouseMove = (e: MouseEvent) => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
    }

    const handleMouseOut = (e: MouseEvent) => {
        setPosition({
            x: cutToWindowWidth(e.clientX),
            y: cutToWindowHeight(e.clientY)
        })
    }

    const cutToWindowWidth = (value: number) => {
        return Math.max(Math.min(value, window.innerWidth), 0)
    }

    const cutToWindowHeight = (value: number) => {
        return Math.max(Math.min(value, window.innerHeight), 0)
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mouseout", handleMouseOut)
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseout", handleMouseOut)
        }
    }, [])

    return (
        <div 
            className="fixed size-5 border-2 border-solid border-primary rounded-full pointer-events-none z-100" 
            style={{ left: position.x - 10, top: position.y - 10 }} 
        />
    )
}