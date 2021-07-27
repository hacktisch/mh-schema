module.exports = [
    require("./groups/title.js"),
    require("./groups/pathReference.js"),
    require("./groups/published.js"),

    {
        tab: "details",
        source: "body",
        label: "Product specifications",
        type: "array",
        sub: [
            {
                source: "tab",
                label: "Tab label",
                type: "text"
            },
            {
                source: "text",
                type: "markdown",
                label: "Tab contents"
            }
        ]
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
        source: "variants",
        variants_target: "variants_data",
        type: "array",
        sub: [
            {
                source: "name",
                label: "Option label",
                type: "text"
            },
            {
                source: "key",
                type: "text",
                defaultFunction: "randId",
                hidden: true
            },
            {
                source: "options",
                label: "Options",
                type: "array",
                sub: [
                    {
                        source: "value",
                        label: "Option value",
                        type: "text"
                    },
                    {
                        source: "key",
                        type: "text",
                        defaultFunction: "randId",
                        hidden: true
                    }
                ]
            }
        ]
    },

    {
        tab: "catalog",
        source: "variants_data",
        type: "array",
        mode: "variants_table",
        variants_source: "variants",

        sub: [
            {
                source: "key",
                type: "text",
                hidden: true
            },

            {
                label: "Main image",
                source: "mainImage",
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
                /////////validate: required
            },
            {
                source: "price",
                label: "Price",
                type: "number",
                render: "price"
            },
            {
                source: "price_compare",
                label: "Price compare at",
                type: "number",
                render: "price"
            },
            {
                source: "kilo",
                label: "Weight in kilogram",
                type: "number"
            },
            {
                source: "inventory_qty",
                label: "Quantity in inventory",
                type: "number"
            },
            {
                source: "sku",
                label: "SKU",
                type: "text"
            },
            {
                source: "barcode",
                label: "Barcode",
                type: "text"
            },
            {
                source: "cost",
                label: "Cost per item",
                type: "number"
            }
        ]
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
        tab: "catalog",
        source: "weight",
        type: "number",
        label: "Weight in a list",
        help:
            "Lower weight is shown first in the results. Higher weights on bottom."
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

    /*
 /*{
        source:"related",
        refs
    },*/

    ...require("./groups/metaTags.js"),
    require("./groups/changed.js")
];
