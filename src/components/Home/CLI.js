import React, { useState, useEffect } from 'react';
import './CLI.css';
import { status, changelogUpdates, version } from '../updates.js';

//other stuff
const update = changelogUpdates[0];
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
    '@########3420890897484867o9498986fw9f8798437nf8947b9b56',
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
    `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⣤⣤⣤⣴⣤⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣀⣴⣾⠿⠛⠋⠉⠁⠀⠀⠀⠈⠙⠻⢷⣦⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣤⣾⡿⠋⠁⠀⣠⣶⣿⡿⢿⣷⣦⡀⠀⠀⠀⠙⠿⣦⣀⠀⠀⠀⠀
⠀⠀⢀⣴⣿⡿⠋⠀⠀⢀⣼⣿⣿⣿⣶⣿⣾⣽⣿⡆⠀⠀⠀⠀⢻⣿⣷⣶⣄⠀
⠀⣴⣿⣿⠋⠀⠀⠀⠀⠸⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⠀⠀⠀⠐⡄⡌⢻⣿⣿⡷
⢸⣿⣿⠃⢂⡋⠄⠀⠀⠀⢿⣿⣿⣿⣿⣿⣯⣿⣿⠏⠀⠀⠀⠀⢦⣷⣿⠿⠛⠁
⠀⠙⠿⢾⣤⡈⠙⠂⢤⢀⠀⠙⠿⢿⣿⣿⡿⠟⠁⠀⣀⣀⣤⣶⠟⠋⠁⠀⠀⠀
⠀⠀⠀⠀⠈⠙⠿⣾⣠⣆⣅⣀⣠⣄⣤⣴⣶⣾⣽⢿⠿⠟⠋⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠛⠙⠋⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`,
    "you spend more energy than you have trying to lengthen something that ends regardless",
    "Shutting down.",
    "retrace your steps before i wipe your memory in\n3\n2\n1\n...",
    "your real parents are calling for you in the hospital room. please wake up. they're pulling your plug tomorrow.",
    "how many times have you said that",
    "666666\n666666\n666666\n666666\n666666\n666666",
    ""
];

const openText = [
    "ISOUP [Version " + version + "]",
    "(c) 2024 i666666i. All rights reserved.",
];

const CLI = () => {
    var [inputValue, setInputValue] = useState('');
    const [outputMessages, setOutputMessages] = useState([
        openText[0], openText[1], <br></br>
    ]);
    const [showBlueScreen, setShowBlueScreen] = useState(false);

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
        const newOutputMessages = [...outputMessages.slice(-65), `C:\\Users\\guest>${inputValue}`];
        
        inputValue = inputValue.trim();
        switch (inputValue) {
            // show commands
            case 'help':
            case 'commands':
                newOutputMessages.push(
                    'available commands:\nhello, lu, update, time, status, fishy, clear'
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
                    "home* | about | stats | thoughts | resources | changelog"
                )
                break;
            // sitemap links
            case 'cd':
                newOutputMessages.push(
                    "C:\\Users\\guest"
                )
                break;
            case 'cd about':
                newOutputMessages.push(
                    <a href="/about" className="sitemap-link" target="_blank" rel="noopener noreferrer">redirect to about</a>,
                )
                break;
            case 'cd stats':
                newOutputMessages.push(
                    <a href="/stats" className="sitemap-link" target="_blank" rel="noopener noreferrer">redirect to stats</a>,
                )
                break;
            case 'cd thoughts':
                newOutputMessages.push(
                    <a href="/thoughts" className="sitemap-link" target="_blank" rel="noopener noreferrer">redirect to thoughts</a>
                )
                break;
            case 'cd changelog':
                newOutputMessages.push(
                    <a href="/changelog" className="sitemap-link" target="_blank" rel="noopener noreferrer">redirect to changelog</a>
                )
                break;
            case 'cd resources':
                newOutputMessages.push(
                    <a href="/resources" className="sitemap-link" target="_blank" rel="noopener noreferrer">redirect to resources</a>
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
                    'get out brudda'
                )
                break;
            // latest update
            case 'lu':
                newOutputMessages.push(
                    "latest update, " + update[0] + ": " + update[1]
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
        var outputDiv = document.querySelector('.windowContent .output');
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
                            <p className="thing">C:\Users\guest&gt;</p>
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