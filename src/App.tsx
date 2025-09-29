import Cursor from "./components/Cursor"
import Navbar from "./components/Navbar"

import { FaGithub, FaLinkedinIn } from "react-icons/fa6"
import SocialItem from "./components/SocialItem"

export default function App() {
  return (
    <>
      <Navbar />
      <main className="ml-32 mr-32 min-h-dvh flex flex-col items-center bg-surface text-on-surface">
        <section className="w-3/5 mt-24">
          <h3 className="font-mono text-primary text-sm">Hello, my name is</h3>
          <h1 className="text-5xl text-white">Mateusz Karandys</h1>
          <h2 className="text-on-surface-variant text-xl">I'm a software developer</h2>
          <p className="mt-4 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <ul className="text-primary">
            <li>&gt; About</li>
            <li>&gt; Experience</li>
            <li>&gt; Contact</li>
          </ul>
        </section>

        <section className="w-3/5 mt-12">
          <h2 className="text-xl text-primary font-mono">About</h2>
        </section>

        <section className="w-3/5 mt-12">
          <h2 className="text-xl text-primary font-mono after:inline-block after:h-[1px] after:w-full after:bg-on-surface-variant">Technologies</h2>
        </section>

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
