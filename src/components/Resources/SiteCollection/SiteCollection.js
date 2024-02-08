import React from 'react'
import { SitesInfo } from './SitesInfo';
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
    const SitesTable = generateSitesTable(SitesInfo);
    return (
        <div className="resourcesWrapper">
            <div className="resourcesContentCards">
                <div className="resourcesCard top">
                    <h4 className="contentText">site collection</h4>
                </div>
                <div className="siteColCard">
                    {SitesTable}
                </div>
            </div>
        </div>
    )
}

export default SiteCollection;