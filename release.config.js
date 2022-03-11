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
        analyzeCommitsCmd: `
            ##vso[task.setvariable variable=OLD_VER;isoutput=true]\${lastRelease.version}
            ##vso[task.setvariable variable=THE_VER;isoutput=true]\${lastRelease.version}
            ##vso[task.setvariable variable=REL_TYP;isoutput=true]re
        `,
        successCmd: `
            ##vso[task.setvariable variable=NEW_VER;isoutput=true]\${nextRelease.version}
            ##vso[task.setvariable variable=THE_VER;isoutput=true]\${nextRelease.version}
            ##vso[task.setvariable variable=REL_TYP;isoutput=true]\${nextRelease.type}
        `,
        failCmd: `echo ====== fail ======`
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
