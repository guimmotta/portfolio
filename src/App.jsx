import Header from './components/Header'
import Hero from './components/Hero'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'
import { profile } from './data/projects'

export default function App() {
  return (
    <>
      <Header profile={profile} />
      <main>
        <Hero profile={profile} />
        <ProjectsSection />
      </main>
      <Footer profile={profile} />
    </>
  )
}
