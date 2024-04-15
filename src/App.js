import './css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComp from './components/NavComp'
import HomeComp from './components/HomeComp'
import Project from './components/Project'
import Faq from './components/Faq';
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg">
      <div>
      <NavComp />
      </div>

      <div className="#">
        <HomeComp />
      </div>

    <div className="Project">
        <Project />
      </div>

      <div className='Faq'>
        <Faq />
      </div>

      <div className='Footer' >
         <Footer />
      </div>

    </div>

  );
}

export default App;
