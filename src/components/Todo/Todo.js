import React, {useState, useEffect} from 'react'
import {fetchTodo} from '../../api/contentfulAPI'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import './Todo.css'

const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            try {
                setTodo(await fetchTodo());
                console.log(todo);

                setLoading(false);
            } catch (error) {
                console.error('error fetching todo:', error);
            }
        }
        fetchData();
    }, );

    if (loading) {
        return <div className="loading">loading...</div>;
    }
    return (
        <div className="bodyWrapper todo">
            <div className="contentContainer">
                <h2>todo</h2>
                <hr></hr>
                <div>
                    {documentToReactComponents(todo.fields.tasks)}
                </div>
            </div>
        </div>
    );
};

export default Todo;