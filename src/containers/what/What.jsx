import React from 'react';
import { Feature } from '../../components/index.js'
import './what.css';

const What = () => {
    return (
        <div className="site__what section__margin" id="what">
            <div className="site__what-feature">
                <Feature title="What is GPT" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum nulla facere, magni sint, amet voluptatum quae in ipsum illo debitis ex numquam inventore molestias distinctio consequatur sit velit commodi impedit."/>
            </div>
            <div className="site__what-heading">
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className="site__what-container">
                <Feature title="Chatbots" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum nulla facere, magni sint, amet voluptatum quae in ipsum illo debitis ex numquam inventore molestias distinctio consequatur sit velit commodi impedit." />
                <Feature title="Knowledgebase" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum nulla facere, magni sint, amet voluptatum quae in ipsum illo debitis ex numquam inventore molestias distinctio consequatur sit velit commodi impedit." />
                <Feature title="Education" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum nulla facere, magni sint, amet voluptatum quae in ipsum illo debitis ex numquam inventore molestias distinctio consequatur sit velit commodi impedit."/>
            </div>
        </div>
    )
}

export default What