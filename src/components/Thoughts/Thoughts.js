import React, {useEffect, useState} from 'react';
import {getEntries, getPinnedEntries} from './contentfulAPI';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
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

const RichTextComponent = ({ richText, assets }) => {
    return <div>{renderRichTextWithAssets(richText, assets)}</div>;
};

const renderRichTextWithAssets = (richText, assets) => {
    return documentToReactComponents(richText, {
        renderNode: {
            'embedded-asset-block': (node) => {
                const asset = assets.find((asset) => asset.sys.id === node.data.target.sys.id);
                if (asset) {
                    return <img src={asset.fields.file.url} alt={asset.fields.title} />;
                } else {
                    return <div>asset not found</div>;
                }
            },
        },
    });
};

const Thoughts = () => {
    const [selectedThought, setSelectedThought] = useState(null);
    const [selectedContent, setSelectedContent] = useState('pinned');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [thoughts, setThoughts] = useState([]);
    const [pinnedThoughts, setPinnedThoughts] = useState([]);
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const entries = await getEntries();
                setThoughts(entries);
                console.log(entries);

                const entryAssets = [];
                for (const entry of entries) {
                    const content = entry.fields.content;
                    const options = {
                        renderNode: {
                            'embedded-asset-block': (node) => {
                                entryAssets.push(node.data.target);
                            }
                        }
                    };
                    await documentToReactComponents(content, options);
                }
                setAssets(entryAssets);

                const pinnedEntries = await getPinnedEntries();
                setPinnedThoughts(pinnedEntries);
                console.log(pinnedEntries);
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
                <button onClick={handleBackButtonClick}>&#129052;</button>
                <h2>{thoughtToRender.fields.title}</h2>
                <hr></hr>
                <div className="timeDetails">
                    <p>published: {formatDate(thoughtToRender.sys.createdAt)}</p>
                    <p>last updated: {formatDate(thoughtToRender.sys.updatedAt)}</p>
                </div>
                <hr className="softHr"></hr>
                <div className="thoughtContentBody">
                    <RichTextComponent
                        key={thoughtToRender.sys.id}
                        richText={thoughtToRender.fields.content}
                        assets={assets} />
                </div>
            </div>
        )
    }

    return (
        <div className="bodyWrapper">
            <div className="side-menu">
                <nav>
                    <button className={selectedContent === 'pinned' ? 'highlighted' : ''} onClick={() => handleSidebarClick('pinned')}>pinned</button>
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
