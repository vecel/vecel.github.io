import TechTag from "./TechTag"

interface ProjectCardProps {
    title: string,
    time: string,
    link: string,
    description: string,
    tags: Array<string>
}

export default function ProjectCard({ title, time, link, description, tags }: ProjectCardProps) {
    
    let counter = 1
    
    return (
        <div className="flex flex-col size-64 p-2 pb-0 text-sm border border-secondary">
            <div className="flex text-base">
                <span className="font-bold">
                    { title }
                </span>
                <span className="ml-auto text-primary">
                    { time }
                </span>
            </div>
            <a href="#" target="_blank" className="text-xs text-on-surface-variant">
                { link }
            </a>
            <p className="mb-2 text-on-surface-dark overflow-hidden flex-1">
                { description } 
            </p>
            <div className="flex flex-wrap mt-auto">
                { tags.map(tag => 
                    <TechTag key={counter++} name={tag} small={true} />
                )}
            </div>
        </div>
    )
}