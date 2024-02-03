import React from 'react';
import './Resources.css';

const Resources = () => {
    return (
        <div className="resourcesWrapper">
            <div className="resourcesCard top">
                <img src="/images/jellyfishcute.gif"></img>
                <h3 className="contentText">
                    helpful resources / fun stuff worth bookmarking
                </h3>
            </div>
            <div className="resourcesContentCards">
                <div className="resourcesCard">
                    <h4 className="contentText">aim</h4>
                    <p className="contentText">
                        ------------------------------------------------
                    </p>
                    <ul>
                        <li className="contentText">benchmark list</li>
                    </ul>
                </div>
                <div className="resourcesCard">
                    <h4 className="contentText">html/css</h4>
                    <p className="contentText">
                        ------------------------------------------------

                    </p>
                </div>
                <div className="resourcesCard">
                    <h4 className="contentText">content & design inspo</h4>
                    <p className="contentText">
                        ------------------------------------------------
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Resources;