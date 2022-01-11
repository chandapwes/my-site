
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import InfoPage from './components/InfoPage';
import Projects from './components/Projects';
import ContactPage from './components/ContactPage';


function App() {
  return (
    <>
    <header>
      <p>
        Chandler's Site
      </p>

      
    </header>

      <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/info'>About Me</Link>
          <Link to='/projects'>My Projects</Link>
          <Link to='/contact'>How to Reach Me</Link>
        </nav>
      </div>

      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/info' element={<InfoPage/>} />
        <Route exact path='/projects' element={<Projects/>} />
        <Route exact path='/contact' element={<ContactPage/>} />
      </Routes>

    </>
  );
}

export default App;
