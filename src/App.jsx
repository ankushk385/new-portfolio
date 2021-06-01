import './App.scss';
import Topbar from './components/Topbar/Topbar';
import Contact from './components/Contact/Contact';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonial/Testimonial';
import Works from './components/Works/Works';

function App() {
  return (
    <div className="app">
      <Topbar/>
      <section className="sections">
        <Intro/>
        <Portfolio/>
        <Testimonial/>
        <Works/>
        <Contact/> 
      </section>
    </div>
  );
}

export default App;
