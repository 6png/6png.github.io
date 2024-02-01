import React from 'react';
import "98.css"

const Home = () => {
    return (
        <div>
            <div class="window" style={{ width: 300 }}>
                <div class="title-bar">
                    <div class="title-bar-text">window</div>
                    <div class="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div class="window-body">
                    <p>There's so much room for activities!</p>
                </div>
            </div>
        </div>
    );
};

export default Home;