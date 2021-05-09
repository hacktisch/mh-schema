module.exports = [
    {
        tab: "meta",
        source: "meta",
        label: "Meta tags",
        type: "array",
        min: 1,
        max: 1,
        sub: [
            {
                source: "title",
                label: "Title meta tag",
                type: "longtext"
            },
            {
                source: "description",
                label: "Description meta tag",
                type: "longtext"
            }
        ]
    }
];
