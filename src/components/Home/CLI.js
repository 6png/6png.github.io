import React, { useState, useEffect } from 'react';
import './CLI.css';
import { status, greetings, openText } from '../updates.js';
import {fetchCommits} from '../Changelog/githubAPI.js'
import {Link} from 'react-router-dom';


//functions
const fetchLatestUpdate = () => {
    return fetchCommits()
        .then(commits => {
            const mostRecentCommit = [formatDate(commits[0].date), commits[0].message];
            console.log('most recent commit: ', mostRecentCommit);

            return mostRecentCommit;
        })
        .catch(error => {
            console.error('error fetching most recent commit: ', error);
            throw error;
        });
};

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };
    return date.toLocaleString('en-US', options).replace(',', '');
}

const CLI = () => {
    const [inputValue, setInputValue] = useState('');
    const [outputMessages, setOutputMessages] = useState([
        openText[0], openText[1], <br></br>
    ]);
    const [showBlueScreen, setShowBlueScreen] = useState(false);
    const [latestUpdate, setLatestUpdate] = useState([]);

    function randomMessage(array) {
        if (array.length === 0) {
            return 'no messages';
        }

        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    fetchLatestUpdate()
        .then(mostRecentCommit => {
            setLatestUpdate(mostRecentCommit[0] + "\n" + mostRecentCommit[1]);
            console.log('latest update fetched');
        })
        .catch(error => {
            console.error(error);
        });

    function showTime() {
        const options = {
            timeZone: 'America/Los_Angeles',
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
        };

        const formatter = new Intl.DateTimeFormat('en-US', options);
        const currentTime = new Date();

        const res = formatter.format(currentTime);
        return `${res}`
    }

    const handleCommand = () => {
        const newOutputMessages = [...outputMessages.slice(-65), `C:\\Users\\SOUP>${inputValue}`];
        
        setInputValue(inputValue.trim());
        switch (inputValue) {
            // show commands
            case 'help':
            case 'commands':
                newOutputMessages.push(
                    'available commands:\nhello, dir, cd, lu, time, status, cls'
                )
                break;
            // hello typos
            case 'hell':
                newOutputMessages.push(
                    'is earth'
                )
                break;
            case 'helo':
            case 'hllo':
            case 'hlelo':
                newOutputMessages.push(
                    'wow what an idiot'
                )
                break;
            // hello variations
            case 'hi':
            case 'hey':
            case 'hello':
                newOutputMessages.push(
                    randomMessage(greetings)
                )
                break;
            // sitemap
            case 'ls':
            case 'dir':
                newOutputMessages.push(
                    "home* | about | stats | thoughts | resources | todo | changelog"
                )
                break;
            // sitemap links
            case 'cd':
                newOutputMessages.push(
                    "C:\\Users\\SOUP"
                )
                break;
            case 'cd about':
                newOutputMessages.push(
                    <a href="/about" className="sitemap-link" target="_blank" rel="noopener noreferrer">C:\Users\SOUP\about</a>,
                )
                break;
            case 'cd stats':
                newOutputMessages.push(
                    <Link to='/todo' className="sitemap-link">C:\Users\SOUP\stats</Link>,
                )
                break;
            case 'cd thoughts':
                newOutputMessages.push(
                    <Link to='/todo' className="sitemap-link">C:\Users\SOUP\thoughts</Link>
                )
                break;
            case 'cd changelog':
                newOutputMessages.push(
                    <Link to='/todo' className="sitemap-link">C:\Users\SOUP\changelog</Link>
                )
                break;
            case 'cd resources':
                newOutputMessages.push(
                    <Link to='/todo' className="sitemap-link">C:\Users\SOUP\resources</Link>
                )
                break;
            case 'cd todo':
                newOutputMessages.push(
                    <Link to='/todo' className="sitemap-link">C:\Users\SOUP\todo</Link>
                )
                break;
            // bsod
            case 'rmdir guest':
            case 'rd guest':
                setTimeout(() => {
                    setShowBlueScreen(true);
                }, 3000);
                break;
            // idk just handle rd commands
            case 'rd about':
            case 'rd stats':
            case 'rd thoughts':
            case 'rd changelog':
            case 'rd resources':
            case 'rmdir about':
            case 'rmdir stats':
            case 'rmdir thoughts':
            case 'rmdir changelog':
            case 'rmdir resources':
                newOutputMessages.push(
                    'stop it'
                )
                break;
            // latest update
            case 'lu':
                newOutputMessages.push(
                    latestUpdate
                )
                break;
            // time
            case 'time':
                newOutputMessages.push(
                    showTime()
                )
                break;
            // status
            case 'status':
                newOutputMessages.push(
                    "is is currently " + status + "."
                )
                break;
            case 'soup':
                newOutputMessages.push(
                    "hiiiiii :3"
                )
                break;
            // random fishy
            case 'fishy':
                //IMPLEMENT RAND FISHY
                break;
            // clear commands
            case 'cls':
                newOutputMessages.length = 0;
                newOutputMessages.push(
                    openText[0], openText[1],
                )
                break;
            // misc hidden
            case '<3':
                newOutputMessages.push(
                    "<3"
                )
                break;
            default:
                newOutputMessages.push(
                    `'${inputValue}' is not recognized as an internal or external command,
operable program or batch file.`
                )
        }
        newOutputMessages.push('\n');
        setOutputMessages(newOutputMessages);
        setInputValue('');
    };

    useEffect(() => {
        let outputDiv = document.querySelector('.windowContent .output');
        if (outputDiv) {
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }
    }, [outputMessages]);

    return (
        <div>
            {showBlueScreen ? (
                <div className="window blueScreen">
                    <div className="windowTitleBar">
                        <div className="left">
                            <img src="/images/cmd-icon.png" alt="Command Prompt Icon"></img>
                            <h4 className="windowTitle">Command Prompt</h4>
                        </div>
                        <div className="right"></div>
                    </div>
                    <div className="windowContent">
                    </div>
                </div>
            ) : (
                <div className="window">
                    <div className="windowTitleBar">
                        <div className="left">
                            <img src="/images/cmd-icon.png" alt="Command Prompt Icon"></img>
                            <h4 className="windowTitle">Command Prompt</h4>
                        </div>
                        <div className="right"></div>
                    </div>
                    <div className="windowContent">
                        <div className="output">
                            {outputMessages.map((message, index) => (
                                <div key={index}>
                                    {typeof message === 'string' && message.split('\n').map((line, lineIndex) => (
                                        <React.Fragment key={lineIndex}>
                                            {line}
                                            {lineIndex !== message.split('\n').length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                    {typeof message !== 'string' && message} { }
                                </div>
                            ))}
                        </div>
                        <div className="input-container">
                            <p className="thing">C:\Users\SOUP&gt;</p>
                            <input
                                type="text"
                                className="input"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleCommand()}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

};


export default CLI;