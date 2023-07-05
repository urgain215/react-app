module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/urgain215/react-app/",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        ["@semantic-release/github"]
    ]
};