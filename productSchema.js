module.exports = [
    require("./groups/title.js"),
    require("./groups/pathReference.js"),
    require("./groups/published.js"),
    {
        tab: "main",
        source: "supplier_id",
        type: "reference",
        label: "Supplier account",
        help:
            "Suppliers with a login to the CMS can submit revision proposals for their linked products",
        filter: {
            role: "supplier",
            status: 1
        },
        reference: {
            resource: "user",
            optionText: "name",
            inputType: "autocomplete"
        },
        props: {
            sort: { field: "name", order: "ASC" }
        }
    },
    {
        tab: "details",
        source: "lead",
        type: "longtext",
        multiline: true
    },
    {
        tab: "details",
        source: "body",
        type: "markdown",
        label: "Long description"
    },
    {
        tab: "media",
        label: "Main image",
        source: "mainImage",
        type: "image",
        accept: { "image/jpeg": true, "image/webp": "jpg", "image/png": "jpg" },
        transforms: {
            _original: {
                width: 700,
                height: 470
            }
        }
        /////////validate: required
    },

    {
        tab: "media",
        source: "slides",
        type: "array",
        mode: "mediaplayer",
        xor: true,
        sub: [
            {
                source: "url",
                label: "Youtube URL",
                type: "text"
            },
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
                        width: 700,
                        height: 470
                    }
                }
            }
        ]
    },

    {
        tab: "catalog",
        source: "price",
        type: "number",
        render: "price"
    },
    {
        tab: "catalog",
        source: "price_until",
        type: "number",
        render: "price",
        label: "Price until",
        help:
            "Maximum price in the price range",
    },
    {
        tab: "catalog",
        source: "priceOnRequest",
        type: "boolean"
    },
    {
        tab: "details",
        source: "reviews",
        type: "array",
        sub: [
            {
                source: "author",
                label: "Author",
                type: "text"
            },
            {
                source: "rating",
                label: "Rating",
                type: "slider",
                min: 0,
                max: 100,
                step: 10,
                factor: 0.05
            },
            {
                source: "text",
                label: "Text",
                type: "longtext",
                multiline: true
            }
        ]
    },
    {
        tab: "details",
        source: "titleOverwritten",
        type: "text"
    },
    {
        tab: "details",
        source: "songs",
        type: "array",
        sub: [
            {
                source: "title",
                label: "Title",
                type: "text"
            },
            {
                source: "artist",
                label: "Artist",
                type: "text"
            }
        ]
    },
    {
        tab: "catalog",
        source: "weight",
        type: "number"
    },
    {
        tab: "catalog",
        source: "isPartner",
        type: "boolean"
    },
    {
        tab: "catalog",
        source: "category",
        type: "reference",
        multiple: "true",
        /////////validate: required
        label: "Category",
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
    {
        tab: "catalog",
        source: "occasion",
        type: "reference",
        multiple: "true",
        label: "Occasion",
        root: "occasion",
        filter: { root: "occasion" },
        reference: {
            resource: "tree",
            optionText: "text"
        },
        props: {
            sort: { field: "weight", order: "ASC" }
        }
    },
    {
        tab: "catalog",
        source: "genre",
        type: "reference",
        multiple: "true",
        label: "Genre",
        root: "genre",
        filter: { root: "genre" },
        reference: {
            resource: "tree",
            optionText: "text"
        },
        props: {
            sort: { field: "weight", order: "ASC" }
        }
    },

    /*
 /*{
        source:"related",
        refs
    },*/

    ...require("./groups/metaTags.js"),
    require("./groups/changed.js")
];
