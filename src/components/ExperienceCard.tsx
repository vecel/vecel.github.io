import Separator from "./Separator"
import TechTag from "./TechTag"

interface ExperienceCardProps {
    title: string,
    description: string,
    years: string,
    achievements: string[],
    company: string,
    technologies: string[]
}

export default function ExperienceCard({ title, description, years, achievements, company, technologies }: ExperienceCardProps) {
    
    let counter = 1
    
    return (
        <div className="w-4/5 h-90 flex border shadow-[4px_4px] shadow-secondary">
            <div className="relative flex-4">
              <h3 className="pl-6 mt-3 mb-3 text-xl text-on-surface-light">
                { title }
              </h3>
              <div className="w-32 h-0.5 bg-primary rounded-r-xs" />
              <p className="p-2 text-sm text-on-surface-dark">
                { description }
              </p>
              <div className="absolute bottom-0 left-0 w-full flex">
                <div className="p-3 pl-5 pr-5 bg-on-surface text-2xl text-surface">
                    { years }
                </div>
                <div className="pr-6 ml-auto flex items-center text-sm font-extralight text-on-surface-dark">
                    { company }
                </div>
              </div>
            </div>
            <div className="h-full w-[1px] bg-on-surface-variant"></div>
            <div className="flex-3 p-4 text-on-surface">
              <h4 className="font-bold">What have I learned:</h4>
              <ul className="text-sm">
                {/* <li className="before:content-['>_'] before:text-secondary">abc</li>
                <li className="before:content-['>_'] before:text-secondary">abc</li> */}
                { achievements.map(achievement => 
                    <li key={counter++} className="before:content-['>_'] before:text-secondary">{ achievement }</li>
                )}
              </ul>
              <Separator className="h-2" />
              <div className="flex flex-wrap w-fit">
                { technologies.map(tech =>
                    <TechTag key={counter++} name={tech} />
                )}
              </div>
            </div>
          </div>
    )
}