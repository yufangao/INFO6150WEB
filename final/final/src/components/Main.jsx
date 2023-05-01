import Home from './Home';
import About from './About';
import JordanCarousels from './JordanCarousels';
import '../static/css/Main.css'
import AirJordan13 from './AirJordan13'
import AirJordan1 from './AirJordan1'
import AirJordan11 from './AirJordan11';
import AirJordan5 from "./AirJordan5";
function Main({ darkModeClass, page, changePage}) {
  return (
    <main id="main-content" className={`main ${darkModeClass}`}>
      { (page === '/') && <Home darkModeClass={darkModeClass} changePage={changePage}/> }
      { (page === '/about.html') && <About darkModeClass={darkModeClass}/> }
      { (page === '/jordanCarousels.html') && <JordanCarousels darkModeClass={darkModeClass}/> }
      { (page === '/airJordan13.html') && <AirJordan13 darkModeClass={darkModeClass}/> }
      { (page === '/airJordan1.html') && <AirJordan1 darkModeClass={darkModeClass}/> }
      { (page === '/airJordan11.html') && <AirJordan11 darkModeClass={darkModeClass}/> }
      { (page === '/airJordan5.html') && <AirJordan5 darkModeClass={darkModeClass}/> }
    </main>
  );
}

export default Main;
