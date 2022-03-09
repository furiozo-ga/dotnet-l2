module.exports = {
    verifyConditions: [
    //     // Verifies a NUGET_TOKEN environment variable has been provided
    //     () => {
    //         if (!process.env.NUGET_TOKEN) {
    //             throw new SemanticReleaseErrorc(
    //                 'The environment variable NUGET_TOKEN is required.',
    //                 'ENOAPMTOKEN',
    //             )
    //         }
    //     },
    //     // Verifies the conditions for the plugins used below
    //     // For example verifying a GITHUB_TOKEN environment variable has been provided
        '@semantic-release/changelog',
        '@semantic-release/git',
    //     '@semantic-release/github',
    ],
    prepare: [
        {
            path: '@semantic-release/exec',
            cmd: `echo aaa ------`,
        },

//        {
//            path: '@semantic-release/exec',
//            cmd: `docker login unicominternal.azurecr.io -u $DOCKER_HUB_USER -p $DOCKER_HUB_PASSWORD`,
//        },
        //{
        //     path: '@semantic-release/exec',
        //     cmd: "docker build -f $LOCAL_PATH/ci/Dockerfile.Api -t unicominternal.azurecr.io/unicom.volume.api:${nextRelease.version} $STAGING_PATH",
        //},
        //{
        //    path: '@semantic-release/exec',
        //    cmd: "docker push unicominternal.azurecr.io/unicom.volume.api:${nextRelease.version}",
        //},

        {
            path: '@semantic-release/exec',
            cmd: "echo prepare",
        },
           ["@semantic-release/changelog",{
                "changelogFile": "CHLOG.md" 
            }],

//        '@semantic-release/changelog',
//        '@semantic-release/git',
    ],
    publish: [

        ["@semantic-release/git",{
            "assets": ["CHLOG.md"]
        }],

    ],
    success: [
        {
            path: '@semantic-release/exec',
            cmd: "echo success"
//            cmd: "sed -i 's/{{version}}/${nextRelease.version}/g' ci/manifest.yaml",
        },
    ],
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
            "@semantic-release/release-notes-generator",

            "@semantic-release/exec"
    ],
    branches: [
        'master',
        //{ name: 'feat-builds', prerelease: true },сасасасевееререр
    ]
}
