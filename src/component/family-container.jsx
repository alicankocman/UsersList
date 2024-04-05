// family-container.jsx
import React from 'react';

const HeaderTitle = (props) => {
    return (
        <div className="header">
            <p className='titleandbutton'>{props.title}</p>
            <div className='searchbar'>{props.SearchUsers}</div> 
            <div style={{position:"relative",left:"150px",bottom:"70px"}} className='buttons'>
                {props.button1}
                {props.button2}
                {props.button3}
                {props.button4}
                {props.button5}
            </div>
        </div>
    );
}

const Cards = (props) => {
    return (
        <div className="card">
            {props.card1}
            {props.card2}
            {props.card3}
        </div>
    );
}
const Cards_alt = (props) => {
    return (
        <div className="card">
            {props.card4}
            {props.card5}
            {props.card6}
        </div>
    );
}


  
export { HeaderTitle,Cards,Cards_alt };
