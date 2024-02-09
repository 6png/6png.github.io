const repoOwner = '6png';
const repoName = '6png.github.io';
const githubAccessToken = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;
export const getCommits = async () => {
    try {
        const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/commits`, {
            headers: {
                Authorization: `token ${githubAccessToken}`
            }
        });
        const commitsData = await response.json();
        const commitsArray = commitsData.map((commit, index) => ({
            index: index,
            date: commit.commit.author.date,
            message: commit.commit.message
        }));
        console.log('commits fetched: ', commitsArray);
        return commitsArray;
    } catch (error) {
        console.error('error fetching commits (getCommits): ', error);
        throw error;
    }
};