module.exports = [
    { label: "Page title", type: "text", source: "title" },
    require("../groups/pathReference.js"),
    
    {
        source: "body",
        type: "markdown",
        label: "Page text"
    },

 

    ...require("../groups/metaTags.js")
];
