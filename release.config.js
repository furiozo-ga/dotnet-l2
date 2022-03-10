module.exports={
  plugins: [
    ["@semantic-release/commit-analyzer", {
        "releaseRules": [
            {"type": "major", "release": "major"},
            {"type": "release", "release": "major"},
        ],
        "parserOpts": {
            "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES"]
        }
    }],

    ["@semantic-release/exec",{
        successCmd: `
            echo nextRelease.version=\${nextRelease.version}
            echo nextRelease.type=\${nextRelease.type}
        `
    }],

    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/git"
  ],

  branches: [
    'master',
    { name: 'release-*', prerelease: true },
  ],
}

