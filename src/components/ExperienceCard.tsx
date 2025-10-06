import type { Experince } from "../types"
import TechTag from "./TechTag"

export default function ExperienceCard({ experience }: { experience: Experince }) {
    
    let counter = 1
    
    return (
        <div className="w-4/5 h-90 mt-24 flex border shadow-[4px_4px] shadow-secondary">
            <div className="relative flex-4">
              <h3 className="pl-6 mt-3 mb-3 text-xl text-on-surface-light">
                { experience.title }
              </h3>
              <div className="w-32 h-0.5 bg-primary rounded-r-xs" />
              <p className="p-2 text-sm text-on-surface-dark text-justify">
                { experience.description }
              </p>
              <div className="absolute bottom-0 left-0 w-full flex">
                <div className="p-3 pl-5 pr-5 bg-on-surface text-2xl text-surface">
                    { experience.years }
                </div>
                <div className="pr-6 ml-auto flex items-center text-sm font-extralight text-on-surface-dark">
                    { experience.company }
                </div>
              </div>
            </div>
            <div className="h-full w-[1px] bg-on-surface-variant"></div>
            <div className="flex-3 p-4 flex flex-col text-on-surface">
              <h4 className="font-bold">What have I learned:</h4>
              <ul className="text-sm">
                { experience.achievements.map(achievement => 
                    <li key={counter++} className="before:content-['>_'] before:text-secondary">{ achievement }</li>
                )}
              </ul>
              <div className="flex flex-wrap w-fit mt-auto">
                { experience.technologies.map(tech =>
                    <TechTag key={counter++} name={tech} />
                )}
              </div>
            </div>
          </div>
    )
}