import React from 'react'
import './Todo.css'

const Todo = () => {
    return (
        <div className="bodyWrapper todo">
            <div className="contentContainer">
                <h2>todo</h2>
                <hr></hr>
                <ul>
                    <li>add content type + link contentful api to 'site-collection'</li>
                    <li>clean css</li>
                    <li>add about > ..me elsewhere content</li>
                    <li>make gifs display page</li>
                    <li>add custom cursors</li>
                    <li>add lastfm status to cli</li>
                </ul>
            </div>
        </div>

    )
}

export default Todo;