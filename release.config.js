module.exports={
  plugins: [
    ["@semantic-release/commit-analyzer", {
        releaseRules: [
            {"type": "major"  , "release": "major"},
            {"type": "release", "release": "major"},
        ],
        parserOpts: {
            "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
        }
    }],

    ["@semantic-release/exec",{
        successCmd: `
            echo "##vso[task.setvariable variable=version;isoutput=true]\${nextRelease.version}"
            echo "##vso[task.setvariable variable=   type;isoutput=true]\${nextRelease.type}"
            if [ "\${nextRelease.type}" = "patch" ]; then
                echo this is patch
            fi
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
