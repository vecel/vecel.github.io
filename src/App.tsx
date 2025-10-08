import Cursor from "./components/Cursor"
import Navbar from "./components/Navbar"

import { FaGitAlt, FaGithub, FaJava, FaLinkedinIn, FaPython, FaReact } from "react-icons/fa6"
import { SiCplusplus, SiCss3, SiHtml5, SiJavascript, SiR, SiSpring, SiTailwindcss } from "react-icons/si"
import SocialItem from "./components/SocialItem"
import Section from "./components/Section"
import TechItem from "./components/TechItem"
import Separator from "./components/Separator"
import ExperienceCard from "./components/ExperienceCard"
import ProjectCard from "./components/ProjectCard"
import { experience } from "./data/experience"
import EmailForm from "./components/EmailForm"
import PopupBanner from "./components/PopupBanner"
import { useState } from "react"

export default function App() {

  const emptyPopup = {
    message: "",
    display: false
  }

  const [popup, setPopup] = useState(emptyPopup)

  const displayPopup = (message: string) => {
    setPopup({
      message: message,
      display: true
    })
    setTimeout(() => setPopup(emptyPopup), 4000)
  }

  return (
    <>
      <Navbar />
      <main className="ml-32 mr-32 min-h-dvh flex flex-col items-center bg-surface text-on-surface">
        <Separator className="h-24" />
        <section id="welcome" className="w-3/5 scroll-mt-24">
          <h3 className="text-primary text-sm">Hello, my name is</h3>
          <h1 className="text-5xl text-on-surface-light">Mateusz Karandys</h1>
          <h2 className="text-on-surface-variant text-xl">I'm a software developer.</h2>
          <Separator className="h-4" />
          <p className="text-sm text-justify">
            Welcome to my personal site. Here you will find some information about me that I find important. I put here my work experience and projects I've created. If you find it interesting let me know. Feel free to contact me at:
            <span className="text-primary"> mateusz.karandys@gmail.com</span>
          </p>
          <Separator className="h-4" />
          <div className="p-3 pl-6 pr-6 w-fit border border-secondary rounded-xl text-primary  cursor-pointer">Let's start</div>
        </section>
        <Separator />
        <Section id="about" title="About Me">
          <p className="text-justify">
            I'm a human (Captcha passed) with ironic and sarcastic sense of humour. I also like nerdy jokes. When something interests me I try to dig into it. I like hiking in the mountains, doing crosswords, coding, watching TV game show "Va Banque". My favourite stand-uper is Boras. Currently I'm learing two new languages: German and Flutter. When it comes to programming I cannot sleep until my project has nice structure (joking, I sleep well). I have some sense of art when looking at code. Nerdy? Hell yes!
            <br />
            <br />
            I try to keep balance in my life. I like to feel sun rays on my face. I'm sick of over positive posts on LinkedIn. I hate medicine ads that promise problems will disappear when you take the drug instead of putting an effort in changing yourself. Sometimes I just don't want to do anything. Sometimes I'm bored and sometimes I like this state.
            <br />
            <br />
            I live in Warsaw, Poland. Here I study Data Analysis Engineering at Warsaw University of Technology. 
          </p>
        </Section>
        <Separator />
        <Section id="tech" title="My Tech Stack">
          <div className="flex justify-around flex-wrap text-primary">
            <TechItem title="Java" icon={FaJava} />
            <TechItem title="Spring" icon={SiSpring} />
            <TechItem title="Html" icon={SiHtml5} />
            <TechItem title="Css" icon={SiCss3} />
            <TechItem title="Javascript" icon={SiJavascript} />
            <TechItem title="React" icon={FaReact} />
            <TechItem title="Tailwind" icon={SiTailwindcss} />
            <TechItem title="Python" icon={FaPython} />
            <TechItem title="R" icon={SiR} />
            <TechItem title="C++" icon={SiCplusplus} />
            <TechItem title="Git" icon={FaGitAlt} />
          </div>
        </Section>
        <Separator />
        <Section id="experience" title="My Experience">
          <div className="flex flex-col items-center">
            { experience.map((exp) => (
              // TODO: change key
              <ExperienceCard key={exp.title} experience={exp} />
            ))}
          </div>
        </Section>
        <Separator />
        <Section id="projects" title="Projects">
          <div>
            <ProjectCard 
              title="Reddit Clone"
              time="2023"
              link="to be done"
              description="to be done"
              tags={["Java", "Spring", "React", "Javascript"]}
            />
          </div>
        </Section>
        <Separator />
        <Section id="contact" title="Contact">
          <Separator className="h-8" />
          <div className="flex h-100 text-sm">
            <p className="flex-2">
              Send me a message using the form below.
              <br />
              <br />
              Or write directly at: 
              <br /> 
              <span className="text-primary">mateusz.karandys@gmail.com</span>
            </p>
            <div className="w-4 h-full" />
            <EmailForm displayPopup={displayPopup}/>
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
      <footer className="ml-32 mr-32 h-32 bg-surface">
        
      </footer>
      <Cursor />
      <PopupBanner message={popup.message} display={popup.display}/>
    </>
  )
}
