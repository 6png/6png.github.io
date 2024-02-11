import React, {useEffect, useState} from 'react'
import {fetchCommits} from '../../api/githubAPI.js'
import {formatDate} from '../Thoughts/Thoughts.js'
import './Changelog.css'

const Changelog = () => {
    const [commits, setCommits] = useState([]);

    useEffect(() => {
        const storeCommits = async() => {
            try {
                const commits = await fetchCommits();
                setCommits(commits);
            } catch (error) {
                console.error('error (Changelog:useEffect()): ', error);
            }
        };

        storeCommits();
    }, []);

    const RenderCommits = ({ commitsToRender }) => {
        return commitsToRender.map((commit, index) => (
            <div className="changelogEntry" key={index}>
                <p className="date">{formatDate(commit.date)}:</p>
                <p className="message">{commit.message}</p>
            </div>
        ));
    };

    return (
        <div className="changelogWrapper">
            <div className="changelogContent">
                <h4 className="changelogTitle">changelog</h4>
                <hr></hr>
                <div className="changelogEntries">
                    <RenderCommits commitsToRender={commits} />
                </div>
            </div>
        </div>
    );
};

export default Changelog;