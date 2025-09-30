import Cursor from "./components/Cursor"
import Navbar from "./components/Navbar"

import { FaGitAlt, FaGithub, FaJava, FaLinkedinIn, FaPython, FaReact } from "react-icons/fa6"
import { SiCss3, SiHtml5, SiJavascript, SiR, SiSpring, SiTailwindcss } from "react-icons/si"
import SocialItem from "./components/SocialItem"
import Section from "./components/Section"
import TechItem from "./components/TechItem"
import Separator from "./components/Separator"
import TechTag from "./components/TechTag"
import ExperienceCard from "./components/ExperienceCard"

export default function App() {
  return (
    <>
      <Navbar />
      <main className="ml-32 mr-32 min-h-dvh flex flex-col items-center bg-surface text-on-surface">
        <section className="w-3/5 mt-24">
          <h3 className="font-mono text-primary text-sm">Hello, my name is</h3>
          <h1 className="text-5xl text-on-surface-light">Mateusz Karandys</h1>
          <h2 className="text-on-surface-variant text-xl">I'm a software developer.</h2>
          <Separator className="h-4" />
          <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <Separator className="h-4" />
          <div className="p-3 pl-6 pr-6 w-fit border border-secondary rounded-xl text-primary font-mono cursor-pointer">Let's start</div>
        </section>
        <Separator />
        <Section id="about" title="About Me">

        </Section>
        <Separator />
        <Section id="technologies" title="My Tech Stack">
          <div className="flex justify-around flex-wrap text-primary font-mono">
            <TechItem title="Java" icon={FaJava} />
            <TechItem title="Spring" icon={SiSpring} />
            <TechItem title="Html" icon={SiHtml5} />
            <TechItem title="Css" icon={SiCss3} />
            <TechItem title="Javascript" icon={SiJavascript} />
            <TechItem title="React" icon={FaReact} />
            <TechItem title="Tailwind" icon={SiTailwindcss} />
            <TechItem title="Python" icon={FaPython} />
            <TechItem title="R" icon={SiR} />
            <TechItem title="Git" icon={FaGitAlt} />
          </div>
        </Section>
        <Separator />
        <Section id="experience" title="My Experience">
          <div className="flex flex-col items-center">
            <ExperienceCard
              title="Backend Developer"
              description="to do"
              years="2024"
              achievements={["item 1", "item 2"]}
              company="JetBrains"
              technologies={["Java", "Spring Boot"]}
            />
          </div>
        </Section>
        <Separator />

      </main>
      <aside className="fixed top-0 right-0 h-full w-32 flex flex-col items-center bg-surface text-primary">
        <div className="mt-auto flex flex-col text-3xl">
          <SocialItem link="https://github.com/vecel" icon={FaGithub} />
          <SocialItem link="" icon={FaLinkedinIn} />
        </div>
        <div className="w-0.5 h-60 bg-primary"></div>
      </aside>
      <Cursor />
    </>
  )
}
