import '../static/css/BlogDetail.css'
import Sneaker4 from "../static/images/sneaker4.jpg";

function AirJordan5({ darkModeClass}) {
    return (
        <div className={`blog-detail ${darkModeClass}`}>
            <div className={`detail-container ${darkModeClass}`}>
                <div className='detail-title' aria-label='Blog detail title'>
                    Air Jordan 5
                </div>
                <div className='detail-content' aria-label='Blog detail content'>
                    <dl>
                        <dt><strong>Introduction:</strong></dt>
                        <dd>
                            <p>
                                The Air Jordan V was released in February 1990 and designed by Hatfield. Inspired by a WWII Mustang fighter, features include a reflective tongue with a protruding design, translucent rubber soles and lace locks.
                            </p>
                        </dd>

                    </dl>
                    <img className='detail-img' src={Sneaker4} alt="React Render example" />

                    <dl>
                        <dd>Air Jordan 5</dd>
                    </dl>

                    <dl>
                        <dt><strong>Related Story:</strong></dt>
                        <dd>
                            <p>
                                The Air Jordan V saw a lot of use in popular sitcom The Fresh Prince of Bel-Air. During many episodes Will Smith wore the Metallic Silver, Grape, and Fire Red colorways. To pay tribute to his character, Jordan released the Air Jordan 5 Bel Air in 2013 and 2020.</p>
                        </dd>

                    </dl>
                    <br /><br />
                </div>
            </div>
        </div>
    );
}

export default AirJordan5;