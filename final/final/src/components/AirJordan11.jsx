import '../static/css/BlogDetail.css'
import Sneaker2 from "../static/images/sneaker2.jpg";

function AirJordan11({ darkModeClass}) {
    return (
        <div className={`blog-detail ${darkModeClass}`}>
            <div className={`detail-container ${darkModeClass}`}>
                <div className='detail-title' aria-label='Blog detail title'>
                    Air Jordan 11
                </div>
                <div className='detail-content' aria-label='Blog detail content'>
                    <dl>
                        <dt><strong>Introduction:</strong></dt>
                        <dd>
                            <p>
                                This model was designed by Tinker Hatfield.
                                When the shoe launched, Michael Jordan (retired from basketball by then) was with the Birmingham Barons in baseball's minor baseball leagues.
                                Hatfield designed the sneaker waiting for Jordan to come back and hoping he would play in them.
                            </p>
                            <p>
                                The ballistic mesh upper of the sneaker was meant to make the Air Jordan XI lighter and more durable.
                                Further changes came with the use of a carbon fiber spring plate in the translucent outsole, giving the shoe better torque when twisting on the court.
                                The highlight and arguably best-known aspect of the shoe is its patent leather mudguard.
                                Patent leather was lightweight compared to genuine leather and also tended not to stretch as much – a property to help keep the foot within the bounds of the foot bed during directional changes on the court.
                                The patent leather gave the XI a "formal" look.
                                When this shoe released, some wore this model with business suits instead of dress shoes.
                            </p>
                        </dd>

                    </dl>
                    <img className='detail-img' src={Sneaker2} alt="React Render example" />

                    <dl>
                        <dd>Air Jordan 11</dd>
                    </dl>

                    <dl>
                        <dt><strong>Related Story:</strong></dt>
                        <dd>
                            <p>
                                The sneakers were only samples in 1995 when Jordan decided to come back to the NBA. Hatfield and Nike discouraged Jordan from playing in them, but once they were produced, he couldn't resist. Also noteworthy, Jordan violated league dress code by wearing the shoes, as his teammates wore all-black shoes.
                            </p>
                            <p>
                                It wasn't the first time Jordan had run afoul of NBA footwear rules, having broken them with his very first signature shoe in 1985. He was fined $5,000 for not following the Bulls' colorway policy with the AJ XI. After the fine, Nike made him a pair of the shoes in a black/white/concord colorway for the series against Orlando; Jordan wore Penny Hardaway's signature black Nike Air Flight shoes for Game 3 while said colorway was under production. A similar black/white/royal blue colorway was released to the public at the end of 2000. The colorway was changed for the public release because the concord purple had looked like royal blue on television.
                            </p>
                        </dd>

                    </dl>
                <br></br>
            </div>
            </div>
        </div>
    );
}

export default AirJordan11;