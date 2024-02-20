const lfmuser = 'i666666i';

export async function fetchRecentTracks() {
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lfmuser}&api_key=${process.env.REACT_APP_LASTFM_API_KEY}&limit=6&format=json`
    let recentTracks = [];
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'i666666i'
            }
        });

        if (!response.ok) {
            console.error('no network');
        }

        const data = await response.json();

        for (const tr of data.recenttracks.track) {
            console.log(tr.artist['#text'] + ' - ' + tr.name);
            recentTracks.push(`${tr.artist['#text']} - ${tr.name}`)
        }

        return recentTracks;
    } catch (error) {
        console.error('error fetching recent tracks:', error);
        return null;
    }
}