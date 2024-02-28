import React, {useState, useEffect, useRef} from 'react'
import {fetchTodo} from '../../api/contentfulAPI'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import './Todo.css'

const Todo = () => {
    const todo= useRef([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            try {
                todo.current = await fetchTodo();
                console.log(todo);

                setLoading(false);
            } catch (error) {
                console.error('error fetching todo:', error);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return <div className="loading">loading...</div>;
    }
    return (
        <div className="bodyWrapper todo">
            <div className="contentContainer">
                <h2>todo</h2>
                <hr></hr>
                <div>
                    {documentToReactComponents(todo.current.fields.tasks)}
                </div>
            </div>
        </div>
    );
};

export default Todo;