import React from 'react';
import './possibility.css';
import possibiltyimage from '../../assets/possibility.png'

const Possibility = () => {
    return (
        <div className="site__possibility section__padding" id="possibility">
            <div className="site__possibility-img">
                <img src={possibiltyimage} alt="possibility" />
            </div>
            <div className="site__possibility-content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laudantium illo iusto consectetur exercitationem deserunt ratione, tenetur qui ex alias perspiciatis sed ea doloribus id distinctio repellat quo nemo magnam.</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    )
}

export default Possibility