module.exports = [
    require("./groups/title.js"),
    require("./groups/pathReference.js"),
    require("./groups/published.js"),
    {
        tab: "details",
        source: "body",
        type: "markdown",
        label: "Long description"
    },
    {
        tab: "details",
        source: "seoLinks",
        type: "array",
        sub: [
            {
                source: "image",
                label: "Image",
                type: "image",
                accept: {
                    "image/jpeg": true,
                    "image/webp": "jpg",
                    "image/png": "jpg"
                },
                transforms: {
                    _original: {
                        width: 450,
                        height: 300
                    }
                }
            },
            {
                source: "title",
                label: "Title",
                type: "text"
            },
            {
                source: "text",
                label: "Description",
                type: "markdown"
            },
            {
                source: "path",
                type: "reference",
                label: "Path",
                filter: {
                    weight: 0
                },
                reference: {
                    resource: "path",
                    optionText: "path",
                    inputType: "autocomplete"
                },
                props: {
                    sort: { field: "length(path)", order: "ASC" }
                }

                ///////////  validate: required
            },
            {
                source: "sublinks",
                type: "array",
                label: "Sub-links",
                sub: [
                    {
                        source: "path",
                        type: "reference",
                        label: "Path",
                        filter: {
                            weight: 0
                        },
                        reference: {
                            resource: "path",
                            optionText: "path",
                            inputType: "autocomplete"
                        },
                        props: {
                            sort: { field: "length(path)", order: "ASC" }
                        }

                        ///////////  validate: required
                    },
                    {
                        source: "title",
                        label: "Title",
                        type: "text"
                    }
                ]
            }
        ]
    },

    {
        tab: "media",
        source: "banner_title",
        label: "Banner title",
        type: "text"
    },
    {
        tab: "media",
        source: "banner_desc",
        label: "Banner description",
        type: "longtext",
        multiline: true
    },
    {
        tab: "media",
        source: "banner_backgrounds",
        label: "Banner background",
        type: "array",
        sub: [
            {
                source: "image",
                label: "Image",
                type: "image",
                accept: {
                    "image/jpeg": true,
                    "image/webp": "jpg",
                    "image/png": "jpg"
                },
                transforms: {
                    _original: {
                        width: 1920,
                        height: 1080
                    }
                }
            }
        ]
    },

    {
        tab: "catalog",
        source: "showCatalog",
        type: "boolean",
        label: "Show product list and filters",
        props: {
            defaultValue: true
        }
    },
    {
        tab: "catalog",
        source: "addCategory",
        type: "reference",
        /////////validate: required
        label: "Product category",
        root: "category",
        filter: { root: "category" },
        reference: {
            resource: "tree",
            optionText: "text"
        },
        props: {
            sort: { field: "weight", order: "ASC" }
        }
    },

    ...require("./groups/metaTags.js"),
    require("./groups/changed.js")
];
