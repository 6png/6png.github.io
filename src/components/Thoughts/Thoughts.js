import React, {useEffect, useState} from 'react';
import {getThoughts, getPinnedThoughts} from '../../api/contentfulAPI';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import { renderOptions} from '../../api/contentfulAPI';
import './Thoughts.css';


export function formatDate(isoDateString) {
    const date = new Date(isoDateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hour}:${minute}`;
}

const Thoughts = () => {
    const [selectedThought, setSelectedThought] = useState(null);
    const [selectedContent, setSelectedContent] = useState('pinned');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [thoughts, setThoughts] = useState([]);
    const [pinnedThoughts, setPinnedThoughts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [entries, pinnedEntries] = await Promise.all([getThoughts(), getPinnedThoughts()]);
                setThoughts(entries);
                setPinnedThoughts(pinnedEntries);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleThoughtClick = (thought) => {
        setSelectedThought(thought);
    };

    const handleBackButtonClick = () => {
        setSelectedThought(null);
    };

    const handleSidebarClick = (section) => {
        setSelectedContent(section);
        setSelectedThought(null);
    };

    if (loading) {
        return <div className="loading">loading...</div>;
    }

    if (error) {
        return <div>error: {error}</div>;
    }

    const RenderThoughts = ({thoughtsToRender}) => {
        return thoughtsToRender.map((thought) => (
            <div className="thoughtName" key={thought.sys.id} onClick={() => handleThoughtClick(thought)}>
                <p>{formatDate(thought.sys.createdAt)}: {thought.fields.title}</p>
            </div>
        ));
    };

    const RenderThought = ({thoughtToRender})  => {

        return (
            <div className="thoughtContent">
                <button onClick={handleBackButtonClick}>
                    <svg width="18pt" height="18pt" version="1.1" viewBox="0 0 1200 1200"
                         xmlns="http://www.w3.org/2000/svg" className="svg">
                        <path
                            d="m60 600c0 298.8 241.2 540 540 540s540-241.2 540-540c0-297.6-241.2-540-540-540s-540 242.4-540 540zm523.2-253.2c22.801 22.801 22.801 57.602 0 80.398-1.1992 2.3984-116.4 116.4-116.4 116.4h404.4c31.199 0 56.398 25.199 56.398 56.398 0 31.199-25.199 57.602-56.398 57.602l-404.4 0.003906 116.4 116.4c22.801 22.801 22.801 58.801 0 80.398-22.801 22.801-57.602 22.801-80.398 0-4.8008-4.8008-213.6-213.6-213.6-213.6-22.801-22.801-22.801-57.602 0-80.398 0 0 212.4-212.4 213.6-213.6 22.801-22.797 57.598-22.797 80.398 0.003906z"/>
                    </svg>
                </button>
                <div className="thoughtContentHeader">
                    <h2>{thoughtToRender.fields.title}</h2>
                </div>
                <hr className="doubleHr1"></hr>
                <div className="thoughtContentBody">
                    {documentToReactComponents(thoughtToRender.fields.content, renderOptions)}
                </div>
                <hr className="doubleHr2"></hr>
                <div className="thoughtContentFooter">
                    <div className="timeDetails">
                        <p>
                            (is) posted {formatDate(thoughtToRender.sys.createdAt)}pt |
                            last updated {formatDate(thoughtToRender.sys.updatedAt)}pt
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="bodyWrapper">
            <div className="side-menu">
                <nav>
                    <button className={selectedContent === 'pinned' ? 'highlighted' : ''}
                            onClick={() => handleSidebarClick('pinned')}>pinned</button>
                    <button className={selectedContent === 'all' ? 'highlighted' : ''} onClick={() => handleSidebarClick('all')}>all</button>
                </nav>
            </div>
            <div className="contentContainer thoughts">
                {selectedContent === 'pinned' && (
                    selectedThought ? (
                        <RenderThought thoughtToRender={selectedThought} />
                    ) : (
                        <>
                            <RenderThoughts thoughtsToRender={pinnedThoughts}/>
                        </>
                    )
                )}
                {selectedContent === 'all' && (
                    selectedThought ? (
                        <RenderThought thoughtToRender={selectedThought} />
                    ) : (
                        <RenderThoughts thoughtsToRender={thoughts} />
                    )
                )}
            </div>
        </div>
    );
};

export default Thoughts;
