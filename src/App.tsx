import Cursor from "./components/Cursor"
import Drawer from "./components/Drawer"
import TechStackCard from "./components/TechStackCard"

export default function App() {
  return (
    <>
      <Drawer />
      <div className="ml-21 bg-surface text-on-surface">
        <div className="text-8xl text-center">
          Hi! I'm
          <span className="text-transparent bg-linear-to-r from-primary from-0% via-on-primary via-5% to-primary to-10% bg-clip-text bg-size-[1000px] bg-position-[-300px] animate-shine-text"> Mateusz</span>
          !
        </div>
        <svg viewBox="0 0 200 200" className="ml-auto mr-auto size-200 text-primary-container animate-slide-in">
          <path fill="currentColor" d="M25.5,-34C39.4,-36.1,61.3,-42.1,72.9,-37C84.6,-32,86.1,-16,82.8,-1.9C79.5,12.2,71.6,24.5,62.1,33.3C52.6,42.1,41.6,47.5,31,46.2C20.4,44.9,10.2,36.8,-2.9,41.8C-15.9,46.8,-31.8,64.7,-42.9,66.3C-53.9,67.9,-60.1,53.1,-61.5,39.3C-62.8,25.5,-59.3,12.8,-58.1,0.7C-56.8,-11.4,-57.9,-22.7,-54.9,-33.6C-51.9,-44.5,-44.9,-55,-35,-55.2C-25.2,-55.3,-12.6,-45.2,-3.4,-39.3C5.8,-33.4,11.6,-31.8,25.5,-34Z" transform="translate(100 100)" />
        </svg>

        <section className="bg-secondary-container h-20">

        </section>

        <section>
          <h2 className="p-8 text-4xl font-bold">My Tech Stack</h2>
          <div className="flex gap-8 p-8 pt-0">
            <TechStackCard title="Backend" items={["java", "spring", "nodejs", "expressjs"]} />
            <TechStackCard title="Frontend" items={["html5", "css3", "js"]} />
          </div>
        </section>
        

      </div>
      <Cursor />
    </>
  )
}
