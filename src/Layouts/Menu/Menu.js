import React from 'react'
import './Menu.css';
import AncreMenu from '../../components/AncreMenu/AncreMenu';

function Menu(props) {

    const formatAncre = (text) => {
        console.log(text.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-'));
        return text.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-');
    };
 
    return (
        <div className='Menu'>
            {props.menu ? props.menu.map((title, index) =>
                <AncreMenu ancre={formatAncre(title)} color={props.color} name={title} />
            )
            :
            null
            }
        </div>
    );
}

export default Menu;