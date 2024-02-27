import React, {useState, useEffect, useRef} from 'react'
import {fetchSites} from '../../../api/contentfulAPI';
import '../Resources.css'

const SiteCollection = () => {
    const [loading, setLoading] = useState(true);

    const permanentSitesRef = useRef([]);
    const temporarySitesRef = useRef([]);
    useEffect(() => {
        const fetchData = async() => {
            try {
                const entries = await fetchSites();
                permanentSitesRef.current = entries.filter(entry => entry.metadata.tags.some(tag => tag.sys.id === 'permanent'));
                temporarySitesRef.current = entries.filter(entry => entry.metadata.tags.some(tag => tag.sys.id === 'temporary'));

                setLoading(false);
            } catch (error) {
                console.error('error fetching all sites:', error);
            }
        }
        fetchData();
    }, []);


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

    const PermanentSitesTable = generateSitesTable(permanentSitesRef.current);
    const TemporarySitesTable = generateSitesTable(temporarySitesRef.current);

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