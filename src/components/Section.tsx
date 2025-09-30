import type { PropsWithChildren } from "react";

interface SectionProps {
    id: string,
    title: string
}

export default function Section({ id, title, children }: PropsWithChildren<SectionProps>) {
    return (
        <section id={id} className="w-3/5">
            <h2 className="text-xl text-primary font-mono after:inline-block after:h-[1px] after:w-full after:bg-on-surface-variant">{ title }</h2>
            { children }
        </section>
    )
}