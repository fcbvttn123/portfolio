import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import { Skills } from "./pages/Skills"
import { WorkExperiences } from "./pages/WorkExperiences"
import { Contact } from "./pages/Contact"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experiences" element={<WorkExperiences />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
