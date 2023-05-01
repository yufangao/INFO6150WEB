import '../static/css/BlogDetail.css'
import Sneaker3 from "../static/images/sneaker3.jpg";

function AirJordan13({ darkModeClass}) {
    return (
        <div className={`blog-detail ${darkModeClass}`}>
            <div className={`detail-container ${darkModeClass}`}>
                <div className='detail-title' aria-label='Blog detail title'>
                    Air Jordan 13
                </div>
                <div className='detail-content' aria-label='Blog detail content'>
                    <dl>
                        <dt><strong>Introduction:</strong></dt>
                        <dd>
                            <p>
                                This model had a carbon fiber plate, designed by Hatfield. The Black Panther was the inspiration for the Air Jordan XIII, with the sole resembling the pads on a panther's paw. A hologram on the back of the shoe imitates a panther's eyes in the dark. They were re-released in 2005, which coincided with the release of the Air Jordan 8s shoe.
                            </p>
                            <p>
                                The shoe was re-released in 2004, 2005, 2008, and 2010–2018.
                            </p>
                        </dd>

                    </dl>
                    <img className='detail-img' src={Sneaker3} alt="React Render example" />

                    <dl>
                        <dd>Air Jordan 13</dd>
                    </dl>

                    <dl>
                        <dt><strong>Related Story:</strong></dt>
                        <dd>
                            <p>
                                In the movie He Got Game, the Air Jordan XIII was worn by Jake Shuttlesworth (Denzel Washington). Ray Allen, who played Jake's son Jesus in the film, wore them when he broke Reggie Miller's all-time record for made three-point shots during a game against the Lakers in Boston during the 2011 season. The Jordan Brand re-released the Air Jordan XIII at the end of 2010, which included the French Blue/Flint Grey, White/Red-Black, "Playoff" color way and the Black/Altitude Green color way. </p>
                            <p>
                                In 2017, Jordan Brand released the "History of Flight" colorway. This colorway is from the 2009 World Basketball Festival, where the "History of Flight" collection was revealed to celebrate Jordan's 25th anniversary. </p>
                        </dd>

                    </dl>
                    <br /><br />
                </div>
            </div>
        </div>
    );
}

export default AirJordan13;