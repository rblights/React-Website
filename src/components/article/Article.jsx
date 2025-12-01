import React from 'react';
import './article.css';

const Article = ({imgURL, date, title}) => {
    return (
        <div className="site__blog-container_article">
            <div className="site__blog-container_article-img">
                <img src={imgURL} alt="blog"/>
            </div>
            <div className="site__blog-container_article-content">
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}

export default Article