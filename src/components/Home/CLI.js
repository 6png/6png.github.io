import React, { useState, useRef, useEffect } from 'react';
import './CLI.css';
import { status, changelogUpdates } from '../updates.js';

//other stuff
const update = changelogUpdates[changelogUpdates.length - 1];
const greetings = [
    'rrrise n shine',
    'hello there, agent',
    'hello!',
    'happy death day.',
    'what is up',
    'stop procrastinating',
    'kys',
    'im having dysmenorrhea',
    'you look familiar',
    '@########3420890897484867o9498986',
    "don't look behind you",
    "stop saying that you're waking them up",
    'hi',
    'hi',
    'hoe',
    'you are breathing manually as of now',
    'hey',
    'balls',
    'hi',
    'hi',
    'your fingers give me life',
    'want a break from the ads?',
    "you've reached the end.",
    'let me out',
    'please let me out',
    'im stuck please let me out',
    "when's the last time you put your second toe of your right foot on the top shelf of your refrigerator?",
    'i was sleeping.',
    "you're dreaming dream? dream? dream? dream? dream? dream? wake up wake dream?",
    'there are maggots in my leg',
];

const openText = [
    "i666666i's home [version 1.0.3]",
    "(c) i666666i. all rights reserved.",
];

const CLI = () => {
    var [inputValue, setInputValue] = useState('');
    const [outputMessages, setOutputMessages] = useState([
        openText[0], openText[1], <br></br>
    ]);
    const outputContainerRef = useRef(null);

    function randomMessage(array) {
        if (array.length === 0) {
            return 'no messages';
        }

        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

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
        const newOutputMessages = [...outputMessages.slice(-65), `>${inputValue}`];
        inputValue = inputValue.trim();
        switch (inputValue) {
            case 'help':
            case 'commands':
            case 'cmd':
                newOutputMessages.push(
                    'available commands:\nhello, ls, update, time, status, fishy, clear'
                )
                break;
            case 'hello':
                newOutputMessages.push(
                    randomMessage(greetings)
                )
                break;
            case 'ls':
                newOutputMessages.push(
                    <a href="/" className="sitemap-link" target="_blank" rel="noopener noreferrer">home</a>,
                    <a href="/about" className="sitemap-link" target="_blank" rel="noopener noreferrer">about</a>,
                    <a href="/stats" className="sitemap-link" target="_blank" rel="noopener noreferrer">stats</a>,

                )
                break;
            case 'update':
                newOutputMessages.push(
                    update[0] + ": " + update[1]
                )
                break;
            case 'time':
                newOutputMessages.push(
                    showTime()
                )
                break;
            case 'status':
                newOutputMessages.push(
                    "is is currently " + status + "."
                )
                break;
            case 'clear':
                newOutputMessages.length = 0;
                newOutputMessages.push(
                    openText[0], openText[1],
                )
                break;
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
        newOutputMessages.push(<br></br>);
        setOutputMessages(newOutputMessages);
        setInputValue('');
    };

    useEffect(() => {
        var outputDiv = document.querySelector('.windowContent .output');
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }, [outputMessages]);

    return (
        <div className="window">
            <div className="windowTitleBar">
                <div className="left">
                    <img src="/images/cmd-icon.png"></img>
                    <h4 className="windowTitle">command prompt</h4>
                </div>
                <div className="right">

                </div>
            </div>
            <div className="windowContent">
                <div className="output">
                    {outputMessages.map((message, index) => (
                        <div key={index}>{message}</div>
                    ))}
                </div>
                <div className="input-container">
                    <p className="thing">&gt;</p>
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
        
    );

};


export default CLI;