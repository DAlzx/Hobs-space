import React from 'react'
import './Menu.css';
import AncreMenu from '../../components/AncreMenu/AncreMenu';

function Menu(props) {

 
    return (
        <div className='Menu'>
            <AncreMenu ancre={"#uneDiv"} color={props.color} name={"Un menu"} />
            <AncreMenu ancre={"#uneDiv"} color={props.color} name={"Un menu simple"} />
            <AncreMenu ancre={"#uneDiv"} color={props.color} name={"Un menu moins simple"} />
            <AncreMenu ancre={"#uneDiv"} color={props.color} name={"Un menu"} />
            <AncreMenu ancre={"#uneDiv"} color={props.color} name={"Un menu moins simple"} />
            <AncreMenu ancre={"#uneDiv"} color={props.color} name={"Un menu simple"} />
            <AncreMenu ancre={"#uneDiv"} color={props.color} name={"Un menu"} />
        </div>
    );
}

export default Menu;