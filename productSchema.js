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
        type: "array",
        sub: [
            {
                source: "name",
                label: "Option label",
                type: "text"
            },
            {
                source: "options",
                type: "array",
                sub: [
                    {
                        source: "value",
                        label: "Option value",
                        type: "text"
                    }
                ]
            }
        ]
    },

    {
        tab: "catalog",
        source: "variants_data",
        type: "variants_table",
        variants_source: "variants",

        sub: [
            {
                tab: "catalog",
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
                tab: "catalog",
                source: "price",
                type: "number",
                render: "price"
            },
            {
                tab: "catalog",
                source: "price_compare",
                label: "Price compare at",
                type: "number",
                render: "price"
            },
            {
                tab: "catalog",
                source: "kilo",
                label: "Weight in kilogram",
                type: "number"
            },
            {
                tab: "catalog",
                source: "inventory_qty",
                label: "Quantity in inventory",
                type: "number"
            },
            {
                tab: "catalog",
                source: "sku",
                label: "SKU",
                type: "text"
            },
            {
                tab: "catalog",
                source: "barcode",
                label: "Barcode",
                type: "text"
            },
            {
                tab: "catalog",
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
