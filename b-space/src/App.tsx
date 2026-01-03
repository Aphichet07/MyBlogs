import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import HomePage from './pages/Home.tsx'
import LabPages from './pages/labs.tsx'
import NoteBookPages from './pages/notebook.tsx'
import Layout from './Layout.tsx'
import BlogPost from './pages/BlogPost.tsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route index element={<HomePage />} />
          
          <Route path="labs" element={<LabPages />} />
          <Route path="notebook" element={<NoteBookPages />} />
          <Route path="notebook/:slug" element={<BlogPost />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
