import React, {useState, useRef, useEffect} from 'react';
import './CLI.css';

const CLI = () => {
    const [inputValue, setInputValue] = useState('');
    const [outputMessages, setOutputMessages] = useState([]);
    const outputContainerRef = useRef(null);

    function randomMessage() {
        const array = [
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
        ]
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
        return `my time: ${res}`
    }

    const handleCommand = () => {
        const newOutputMessages = [...outputMessages, `> ${inputValue}`];
        switch (inputValue) {
            case 'help':
            case 'commands':
            case 'cmd':
                newOutputMessages.push(
                    'available commands:\nhello, lu, time, status, clear'
                )
                break;
            case 'hello':
                newOutputMessages.push(
                    randomMessage()
                )
                break;
            case 'lu':
                newOutputMessages.push(
                    '02/04/24: added cli to homepage'
                )
                break;
            case 'time':
                newOutputMessages.push(
                    showTime()
                )
                break;
            case 'status':
                newOutputMessages.push(
                    "editing 'home'"
                )
                break;
            case 'clear':
                newOutputMessages.length=0;
                break;
            case '<3':
                newOutputMessages.push(
                    "<3"
                )
            default:
                newOutputMessages.push(
                    "invalid command. type 'help' for available commands."
                )
        }
        setOutputMessages(newOutputMessages);
        setInputValue('');
    };

    useEffect(() => {
        if (outputContainerRef.current) {
            outputContainerRef.current.scrollTop = outputContainerRef.current.scrollHeight;
        }
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
                        className="input flashing-cursor"
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