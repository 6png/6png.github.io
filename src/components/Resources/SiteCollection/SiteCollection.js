import React from 'react'
import { Permanent, Temp } from './SitesInfo';
import '../Resources.css'

function generateSitesTable(sitesInfo) {
    return (
        <table className="siteColTable">
            <tbody>
                {sitesInfo.map((site, index) => (
                    <tr key={index}>
                        <td style={{ width: '133px', textAlign: 'center' }}>
                            <a href={site[1]}>{site[0]}</a>
                        </td>
                        <td>
                            {site[2]}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

const SiteCollection = () => {
    const PermanentSiteCollection = generateSitesTable(Permanent);
    const ToExploreSiteCollection = generateSitesTable(Temp);
    return (
        <div className="resourcesWrapper">
            <div className="resourcesCard top">
                <h4 className="contentText">permanent site collection</h4>
            </div>
            <div className="resourcesContentCards">
                <div className="siteColCard">
                    {PermanentSiteCollection}
                </div>
            </div>
            <div className="resourcesCard top">
                <h4 className="contentText">to explore</h4>
            </div>
            <div className="resourcesContentCards">
                <div className="siteColCard">
                    {ToExploreSiteCollection}
                </div>
            </div>
        </div>
    )
}

export default SiteCollection;