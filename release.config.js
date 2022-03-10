module.exports={
  "plugins": [
    ["@semantic-release/commit-analyzer", {
        "releaseRules": [
            {"type": "major", "release": "major"},
            {"type": "release", "release": "major"},
        ],
        "parserOpts": {
            "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES", "boza"]
        }
    }],

    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/git"
  ],
  branches: [
    'mastera',
    { name: 'release-*', prerelease: true },
  ],
}
