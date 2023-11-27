import React from 'react'
import './Article.css';

function Article(props) {

 
    return (
        <a className='Article' href={props.link} style={{color: props.color}}>
            <img className='imgArticle' src={props.img} alt="produit" />
            <div className='infoArticle'>
                <p className='titleArticle'>{props.title}</p>
                <p className='priceArticle'>{props.price}</p>
            </div>
        </a>
    );
}

export default Article;