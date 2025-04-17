import { Route, Routes } from 'react-router'
import AboutUs from './components/AboutUs'
import Home from './components/Home'
import NavBar from './components/NavBar'
import ShowAllContacts from './components/ShowAllContacts'

function App() {

  return (
    <>
      <div className='w-5/6 m-auto'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<ShowAllContacts />} />
          <Route path="/view" element={<ViewContact />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </>
  )
}

export default App
