import React, {useState, useEffect} from 'react'
import {fetchPermanentSites, fetchTemporarySites} from '../../../api/contentfulAPI';
import '../Resources.css'

const SiteCollection = () => {
    const [permanentSites, setPermanentSites] = useState([]);
    const [temporarySites, setTemporarySites] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            try {
                setPermanentSites(await fetchPermanentSites());
                console.log(permanentSites);
                setTemporarySites(await fetchTemporarySites());
                console.log(temporarySites);

                setLoading(false);
            } catch (error) {
                console.error('error fetching all sites:', error);
            }
        }
        fetchData();
    }, [permanentSites, temporarySites]);


    function generateSitesTable(sites) {
        return (
            <table className="siteColTable">
                <tbody>
                {sites.map((site) => (
                    <tr key={site.sys.id}>
                        <td className="siteName">
                            <a href={site.fields.siteUrl}>{site.fields.siteName}</a>
                        </td>
                        <td className="siteNotes">
                            {site.fields.siteNotes.map((note, noteIndex) => (
                                <p key={noteIndex} className="siteNote">{note}</p>
                            ))}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }

    const PermanentSitesTable = generateSitesTable(permanentSites);
    const TemporarySitesTable = generateSitesTable(temporarySites);

    if (loading) {
        return <div className="loading">loading...</div>;
    }

    return (
        <div className="resourcesWrapper">
            <div className="resourcesCard top">
                <h4 className="contentText">permanent site collection</h4>
            </div>
            <div className="resourcesContentCards siteCol">
                <div className="siteColCard">
                    {PermanentSitesTable}
                </div>
            </div>
            <div className="resourcesCard top">
                <h4 className="contentText">to explore</h4>
            </div>
            <div className="resourcesContentCards siteCol" >
                <div className="siteColCard">
                    {TemporarySitesTable}
                </div>
            </div>
        </div>
    )
}

export default SiteCollection;