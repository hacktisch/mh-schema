module.exports = [
    {
        label: "Message bar: Payment received",
        source: "msg_received",
        type: "text"
    },
    {
        label: "Message bar: Payment still being processed",
        source: "msg_processing",
        type: "text"
    },
    { label: "Title for successful payment", type: "text", source: "title" },

    {
        label: "Page text for successful payment",
        source: "body",
        type: "markdown"
    },

    {
        label: "Title for cancelled payment",
        type: "text",
        source: "title_cancel"
    },

    {
        label: "Page text for cancelled payment",
        source: "body_cancel",
        type: "markdown"
    },

    ...require("../groups/metaTags.js")
];
