import '../static/css/About.css'
import '../static/css/css-gg.css'
import Selfie from '../static/images/myself.jpg'
function About({darkModeClass}) {
    return (
        <div className="about">
            <div className={`about-img-container ${darkModeClass}`}>
                <div className={`about-img-card ${darkModeClass}`}>
                    <img src={Selfie} alt="Scenery of sea" className="about-img" aria-label='Main pic of about page' />
                </div>
            </div>
            <div className="about-intro-container">
                <div className={`about-intro-header-card ${darkModeClass}`}>
                    <div className="about-intro-header-text" aria-label='The title of about page'>About Sneaker Club</div>
                </div>
                <div className={`about-intro-main-card ${darkModeClass}`} aria-label='The intro of about page' >
                    <p className={`about-intro-main-text ${darkModeClass}`}>
                        Sneaker Club is a website where you can get information about sneakers, especially about Air Jordan Series.
                        <br />
                        There are many websites for sneakers, but I hope I can build one for showing something special, rare, and cool.
                        <br />
                        If you love my website, please SUBSCRIBE to get newest information via email.
                    </p>
                </div>
                <div className={`about-intro-header-card ${darkModeClass}`}>
                    <div className="about-intro-header-text" aria-label='The title of about page'>About Author</div>
                </div>
                <div className={`about-intro-main-card ${darkModeClass}`} aria-label='The intro of about page' >
                    <p className={`about-intro-main-text ${darkModeClass}`}>
                        My name is Yufan Gao, and I'm an international student from China, major in Software Engineering System at Northeastern University.
                        <br />
                        I love programming, taking photos, sneakers, sports, and video games.</p>
                </div>
            </div>
        </div>
    );
}

export default About;