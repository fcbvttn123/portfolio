import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import { Skills } from "./pages/Skills"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
