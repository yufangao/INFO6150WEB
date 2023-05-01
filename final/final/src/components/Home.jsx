import Sneaker1 from '../static/images/sneaker1.jpg'
import Sneaker2 from '../static/images/sneaker2.jpg'
import Sneaker3 from '../static/images/sneaker3.jpg'
import Sneaker4 from '../static/images/sneaker4.jpg'
import '../static/css/Home.css'
import Accordion from './Accordion'

const items = [
    {
        title: 'Nike\'s History',
        content: 'Nike, Inc., formerly (1964–78) Blue Ribbon Sports, American sportswear company headquartered in Beaverton, Oregon. It was founded in 1964 as Blue Ribbon Sports by Bill Bowerman, a track-and-field coach at the University of Oregon, and his former student Phil Knight. They opened their first retail outlet in 1966 and launched the Nike brand shoe in 1972. The company was renamed Nike, Inc., in 1978 and went public two years later. By the early 21st century, Nike had retail outlets and distributors in more than 170 countries, and its logo—a curved check mark called the “swoosh”—was recognized throughout the world.',
    },
    {
        title: 'Air Jordan\'s History',
        content: 'Air Jordan is a line of basketball shoes and athletic apparel produced by American corporation Nike, Inc. The first Air Jordan shoe was produced for Hall of Fame former basketball player Michael Jordan during his time with the Chicago Bulls in late 1984 and released to the public on April 1, 1985. The shoes were designed for Nike by Peter Moore, Tinker Hatfield, and Bruce Kilgore.',
    }
];

function Home({ changePage, darkModeClass }) {
    return (
        <div className={`home ${darkModeClass}`}>
            <div className={`blog-card-left fade-in ${darkModeClass}`} onClick={(e) => { changePage('/airJordan1.html') }} aria-label='Blog intro card'>
                <img className='blog-cover-left' src={Sneaker1} alt="Sneaker1: Jordan1" aria-label='The cover of this blog' />
                <div className='blog-wrapper'>
                    <div className={`blog-title ${darkModeClass}`}>
                        Air Jordan 1
                    </div>
                    <div className='blog-info'>
                        <h4>1985</h4>
                    </div>
                    <div className='blog-content'>
                        The first Air Jordan was produced for use by Michael Jordan...
                    </div>
                </div>
            </div>
            <div className={`blog-card-right fade-in ${darkModeClass}`} onClick={(e) => { changePage('/airJordan11.html') }} aria-label='Blog intro card'>
                <img className='blog-cover-right' src={Sneaker2} alt="Sneaker2: Jordan11" aria-label='The cover of this blog' />
                <div className='blog-wrapper'>
                    <div className={`blog-title ${darkModeClass}`}>
                        Air Jordan 11
                    </div>
                    <div className='blog-info'>
                        <h4>1995</h4>
                    </div>
                    <div className='blog-content'>
                        Jordan wore the Air Jordan XI on the way to helping the Chicago Bulls claim the 1995–96 NBA Championship...
                    </div>
                </div>
            </div>
            <div className={`blog-card-left fade-in ${darkModeClass}`} onClick={(e) => { changePage('/airJordan13.html') }} aria-label='Blog intro card'>
                <img className='blog-cover-left' src={Sneaker3} alt="Sneaker3: Jordan13" aria-label='The cover of this blog'/>
                <div className='blog-wrapper'>
                    <div className={`blog-title ${darkModeClass}`}>
                        Air Jordan 13
                    </div>
                    <div className='blog-info'>
                        <h4>1997</h4>
                    </div>
                    <div className='blog-content'>
                        This model had a carbon fiber plate, designed by Hatfield...
                    </div>
                </div>
            </div>
            <div className={`blog-card-right fade-in ${darkModeClass}`} onClick={(e) => { changePage('/airJordan5.html') }} aria-label='Blog intro card'>
                <img className='blog-cover-right' src={Sneaker4} alt="Sneaker4: Jordan5" aria-label='The cover of this blog' />
                <div className='blog-wrapper'>
                    <div className={`blog-title ${darkModeClass}`}>
                        Air Jordan 5
                    </div>
                    <div className='blog-info'>
                        <h4>1990</h4>
                    </div>
                    <div className='blog-content'>
                        The Air Jordan V features include a reflective tongue with a protruding design, translucent rubber soles and lace locks...
                    </div>
                </div>
            </div>

            <div className='blog-accordion'>
                <Accordion darkModeClass={darkModeClass} items={items}></Accordion>
            </div>
        </div>
    );
}

export default Home;