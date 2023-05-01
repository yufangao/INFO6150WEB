import '../static/css/BlogDetail.css'
import Sneaker1 from '../static/images/sneaker1.jpg';
function AirJordan1({darkModeClass}) {
    return (
        <div className={`blog-detail ${darkModeClass}`}>
            <div className={`detail-container ${darkModeClass}`}>
                <div className='detail-title' aria-label='Blog detail title'>
                    Air Jordan 1
                </div>
                <div className='detail-content' aria-label='Blog detail content'>
                    <dl>
                        <dt><strong>Introduction:</strong></dt>
                        <dd>
                            The first Air Jordan was produced for use by Michael Jordan.
                            They were designed by Peter B. Moore, and released during Jordan's sophomore season with the Chicago Bulls.
                            The Jordan 1 Royal was never worn by Michael Jordan on an NBA court.
                            The black and red Air Jordan 1 has been re-released several times, starting in 1994.
                        </dd>

                    </dl>
                    <img className='detail-img' src={Sneaker1} alt="React Render example" />
                    <dl>
                        <dd>Air Jordan 1</dd>
                    </dl>

                    <dl>
                        <dt><strong>Related Story:</strong></dt>
                        <dd>
                            The red and black colorway of the Nike Air Ship, the prototype for the Jordan I, was later outlawed by then-NBA Commissioner David Stern for having very little white on them.<br/>
                            (This rule, known as the "51 percent" rule, was repealed in the late 2000s.)
                        </dd>

                    </dl>
            
                    <br/><br/>
                </div>
            </div>
        </div>
    );
}

export default AirJordan1;