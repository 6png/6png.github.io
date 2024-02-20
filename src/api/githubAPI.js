const repoOwner = '6png';
const repoName = '6png.github.io';
const { Octokit } = require("@octokit/core");

const octokit = new Octokit();


let commitsCache = null;
let lastFetchTime = 0;

export async function fetchCommits() {
    if (commitsCache && Date.now() - lastFetchTime < 66666) {
        return commitsCache;
    }

    try {
        const response = await octokit.request('GET /repos/{owner}/{repo}/commits', {
            owner: repoOwner,
            repo: repoName
        });

        const commits = response.data.map(commit => ({
            date: commit.commit.author.date,
            message: commit.commit.message
        }));

        commitsCache = commits;
        lastFetchTime = Date.now();

        console.log(commits);
        return commits;
    } catch (error) {
        console.error('Error fetching commits:', error);
        throw error;
    }
}