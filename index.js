const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const title = core.getInput('title');
    const body = core.getInput('body');
    const owner = core.getInput('owner');
    const repoName = core.getInput('repo');
    const branchName = core.getInput('branch');
    const baseBranch = core.getInput('base-branch') || "master";    

    const token = core.getInput('token') || github.token;
    const octokit = github.getOctokit(token);

    // create pull request
    const pullRequestResponse = await octokit.rest.pulls.create({
      owner: owner,
      repo: repoName,
      title: title,
      body: body,
      base: baseBranch,
      head: branchName
    });

    console.log(`Pull request created: ${pullRequestResponse.data.html_url}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
