import React, { useState } from 'react';
import '../static/css/Accordion.css'
function Accordion({items, darkModeClass}) {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    }

    function itemBody(item) {
        return (
            <div className="accordion-item-body fade-test">
                {item.content}
            </div>
        );
    }

    return (
        <div className={`accordion ${darkModeClass}`}>
            {items.map((item, index) => (
                <div
                    key={item.index}
                    className="accordion-item"
                    onClick={() => handleClick(index)}
                    aria-label='Accordion item'
                >
                    <div className="accordion-item-header">
                        <div className="accordion-item-header-text" aria-label='Accordion item content'>{item.title}</div>
                    </div>
                    {index === activeIndex ? itemBody(item) : ""}
                </div>
            ))}
        </div>
    );
}

export default Accordion;