import React from 'react'
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
    {
        title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',    
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque expedita dolore doloribus magnam quos laudantium unde deserunt possimus totam sed, corrupti maxime nulla voluptatibus obcaecati excepturi, ipsa aliquid, saepe ea?'
    },
    {
        title: 'Voluptate ab blanditiis officia eum?',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque expedita dolore doloribus magnam quos laudantium unde deserunt possimus totam sed, corrupti maxime nulla voluptatibus obcaecati excepturi, ipsa aliquid, saepe ea?'
    },
    {
        title: 'Nam quisquam quibusdam, quia debitis fugiat unde quam.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque expedita dolore doloribus magnam quos laudantium unde deserunt possimus totam sed, corrupti maxime nulla voluptatibus obcaecati excepturi, ipsa aliquid, saepe ea?'
    },
    {
        title: 'Esse corrupti praesentium ducimus culpa voluptatem, facilis hic odit.',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque expedita dolore doloribus magnam quos laudantium unde deserunt possimus totam sed, corrupti maxime nulla voluptatibus obcaecati excepturi, ipsa aliquid, saepe ea?'
    },
]

const Features = () => {
    return (
        <div className="site__features section__padding" id="features">
            <div className="site__features-heading">
                <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step Into the Future Today & Make it Happen.</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className="site__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Features