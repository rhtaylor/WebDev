import Navigation from './components/Navigation.js'
//import './App.css';
import './scss/software-dev.scss'
import { Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home.js';
import Resume from './components/Resume.js';
import Tech from './components/Tech.js'
import Layout from './components/Layout.js';

function App() {
  return (
    <div className="software-dev">
      <header className="App-header flex-column">
        <Navigation />
      </header>
      <div>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/WebDev" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/technologies" element={<Tech />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
