import React, {useEffect, useState} from 'react'
import {getCommits} from './githubAPI.js'
import {formatDate} from '../Thoughts/Thoughts.js'
import './Changelog.css'

const Changelog = () => {
    const [commits, setCommits] = useState([]);

    useEffect(() => {
        const fetchCommits = async() => {
            try {
                const commits = await getCommits();
                setCommits(commits);
            } catch (error) {
                console.error('error (Changelog:useEffect()): ', error);
            }
        };

        fetchCommits();
    }, []);

    const RenderCommits = ({ commitsToRender }) => {
        return commitsToRender.map(commit => (
            <div className="changelogEntry" key={commit.index}>
                <p className="date">{formatDate(commit.date)}:</p>
                <p className="message">{commit.message}</p>
            </div>
        ));
    };

    return (
        <div className="changelogWrapper">
            <div className="changelogContent">
                <h4 className="changelogTitle">changelog</h4>
                <p>-----------------------------------------------------------------------------</p>
                <div className="changelogEntries">
                    <RenderCommits commitsToRender={commits} />
                </div>
            </div>
        </div>
    );
};

export default Changelog;