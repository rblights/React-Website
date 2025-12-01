import React from 'react';
import {Article} from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports.js'
import './blog.css';

const Blog = () => {
    return (
        <div className="site__blog section__padding">
            <div className="site__blog-heading">
                <h1 className="gradient__text">A lot is happening, We are blogging about it</h1>
            </div>
            <div className="site__blog-container">
                <div className="site__blog-container_groupA">
                    <Article imgURL={blog01} date="Sep 26, 2021" title="GPT and Open AI is the future. Let's explore how it is!"/>
                </div>
                <div className="site__blog-container_groupB">
                    <Article imgURL={blog02} date="Sep 26, 2021" title="GPT and Open AI is the future. Let's explore how it is!"/>
                    <Article imgURL={blog03} date="Sep 26, 2021" title="GPT and Open AI is the future. Let's explore how it is!"/>
                    <Article imgURL={blog04} date="Sep 26, 2021" title="GPT and Open AI is the future. Let's explore how it is!"/>
                    <Article imgURL={blog05} date="Sep 26, 2021" title="GPT and Open AI is the future. Let's explore how it is!"/>
                </div>
            </div>
        </div>
    )
}

export default Blog