import Cat1 from './static/images/cat1.jpg'
import Cat2 from './static/images/cat2.jpg'
import Cat3 from './static/images/cat3.jpg'
import Cat4 from './static/images/cat4.jpg'
import Cat5 from './static/images/cat5.jpg'
import Cat6 from './static/images/cat6.jpg'
import './static/css/Home.css'

function Home({ onNav }) {
    return (
        <div className="home">
            <div className="card">
                <h2 className="card__title">Cat</h2>
                <img className="card__pic" src={Cat1} alt="Cat_Pic" />
                <div className="card__text">Click here link to <a href='/about.html' onClick={onNav} >about.html</a></div>
            </div>
            <div className="card">
                <h2 className="card__title">Cat</h2>
                <img className="card__pic" src={Cat2} alt="Cat_Pic" />
                <div className="card__text">Click here link to <a href='/cats.html' onClick={onNav} >cats.html</a></div>
            </div>
            <div className="card">
                <h2 className="card__title">Cat</h2>
                <img className="card__pic" src={Cat3} alt="Cat_Pic" />
                <div className="card__text">Lorem ipsum dolor sit amet consectetur, at commodi nobis est magnam. Maiores aliquid deserunt magni.</div>
            </div>
            <div className="card">
                <h2 className="card__title">Cat</h2>
                <img className="card__pic" src={Cat4} alt="Cat_Pic" />
                <div className="card__text">Lorem ipsum, dolor sit amet consectetur ta doloribus sint, odio, laboriosam a debitis, atque iusto animi voluptas!</div>
            </div>
            <div className="card">
                <h2 className="card__title">Cat</h2>
                <img className="card__pic" src={Cat5} alt="Cat_Pic" />
                <div className="card__text">Lorem ipsum dolor sit, amet consectetur adipis uuntur cumque dolorum, optio reprehenderit delectus, veniam totam odit temporibus quidem voluptate veritatis saepe.</div>
            </div>
            <div className="card">
                <h2 className="card__title">Cat</h2>
                <img className="card__pic" src={Cat6} alt="turtle on land near the sea" />
                <div className="card__text">Lorem ipsum dolor sit amet consectetur, adipisicintium provident est magnam. Maiores aliquid deserunt magni.</div>
            </div>
        </div>
    );
}

export default Home;