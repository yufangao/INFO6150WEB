import '../static/css/JordanCarousels.css'
import Carousel from "./Carousel";
function JordanCarousels({ darkModeClass }) {
    return (
        <div className={`album ${darkModeClass}`}>
            <div className={`album-title ${darkModeClass}`} aria-label='Album title'>
                Carousel of Air Jordans
            </div>
            <Carousel></Carousel>
            <br />
            <br />
        </div>
    )
}

export default JordanCarousels;