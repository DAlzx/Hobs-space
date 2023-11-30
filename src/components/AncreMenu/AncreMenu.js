import React from 'react';
import "./AncreMenu.css";

const scrollToTarget = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1); // Pour enlever le '#'
    const target = document.getElementById(targetId);

    if (target) {
        const scrollTo = target.offsetTop;
        window.scrollTo({
            top: scrollTo,
            behavior: 'smooth',
        });
    }
}

function AncreMenu(props) {
    return (
        <a className='js-anchor-link' href={`#${props.ancre}`} style={{ color: props.color }} onClick={scrollToTarget}>
            {props.name}
        </a>
    );
}

export default AncreMenu;
