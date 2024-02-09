const repoOwner = '6png';
const repoName = '6png.github.io';
const { Octokit } = require("@octokit/core");

const octokit = new Octokit();

export async function fetchCommits() {
    try {
        const response = await octokit.request('GET /repos/{owner}/{repo}/commits', {
            owner: repoOwner,
            repo: repoName
        });

        return response.data.map(commit => ({
            date: commit.commit.author.date,
            message: commit.commit.message
        }));
    } catch (error) {
        console.error('Error fetching commits:', error);
        throw error;
    }
}