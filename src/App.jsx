
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home  from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Post from './pages/Post.jsx';
import Nav from './component/nav.jsx';
import User from './pages/User.jsx';
import FormFiller from './component/FormFiller.jsx';
import PlayWork from './pages/PlayWork.jsx';
import Footer from './component/Footer.jsx';


function App() {
  // Define your routes here
  return (
     <><Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/:username' element={<User />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/post' element={<Post />} />
      </Routes>
      <PlayWork />
      <Footer />
    </Router><FormFiller /></>
      
  );
}

export default App; 
