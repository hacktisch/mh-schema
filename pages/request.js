module.exports = [
    { label: "Page title", type: "text", source: "title" },
    require("../groups/pathReference.js"),
    {
        label: "Top text",
        source: "top_text",
        type: "markdown"
    },

    {
        source: "steps",
        type: "array",
        min: 4,
        max: 4,
        sub: [
            {
                source: "description",
                label: "Description",
                type: "markdown"
            }
        ]
    },
    {
        label: "Bottom text",
        source: "bottom_text",
        type: "markdown"
    },

    {
        source: "affiliate",
        type: "array",
        sub: [
            {
                source: "title",
                label: "Title",
                type: "longtext"
            },
            {
                source: "text",
                label: "Description",
                type: "markdown"
            },

            {
                source: "products",
                type: "array",
                label: "Products",
                sub: [
                    {
                        source: "id",
                        type: "reference",
                        label: "Product",

                        reference: {
                            resource: "product",
                            optionText: "title",
                            inputType: "autocomplete"
                        }
                    }
                ]
            }
        ]
    },

    ...require("../groups/metaTags.js")
];
