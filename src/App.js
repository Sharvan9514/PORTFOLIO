
import './App.css';
import About from './component/about';

import Header from './component/Header';
import Hero from './component/Hero';
import Resume from './component/resume';
import Contact from './component/contact';







function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <About/>
        <Resume/>
        <Contact/>
    </div>
  );
}

export default App;
