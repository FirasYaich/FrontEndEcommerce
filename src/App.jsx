import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Editarticle      from './components/articles/Editarticle'
import Insertarticle    from './components/articles/Insertarticle'
import Listarticle      from './components/articles/Listarticle'
import Viewarticle      from './components/articles/Viewarticle'

import Editcategorie    from './components/categories/Editcategorie'
import Insertcategorie  from './components/categories/Insertcategorie'
import Listcategorie    from './components/categories/Listcategorie'
import Viewcategorie    from './components/categories/Viewcategorie'

import Editscategorie   from './components/scategorie/Editscategorie'
import Insertscategorie from './components/scategorie/Insertscategorie'
import Listscategorie   from './components/scategorie/Listscategorie'
import Viewscategorie   from './components/scategorie/Viewscategorie'

import Menu from './components/Menu';

function App() {
  
  return (
    <>

  <Router>
    
    <Menu/>
      
      <Routes>

          

          <Route path="/editart"    element={<Editarticle     />} />
          <Route path="/insertart"  element={<Insertarticle   />} />
          <Route path="/listart"    element={<Listarticle     />} />
          <Route path="/viewart"    element={<Viewarticle     />} />

          <Route path="/editcat"    element={<Editcategorie   />} />
          <Route path="/insertcat"  element={<Insertcategorie />} />
          <Route path="/listcat"    element={<Listcategorie   />} />
          <Route path="/viewcat"    element={<Viewcategorie   />} />

          <Route path="/editscat"   element={<Editscategorie  />} />
          <Route path="/insertscat" element={<Insertscategorie/>} />
          <Route path="/listscat"   element={<Listscategorie  />} />
          <Route path="/viewscat"   element={<Viewscategorie  />} />

      </Routes>

  </Router>

    </>
  )
}

export default App
