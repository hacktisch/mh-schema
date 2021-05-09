module.exports = {
    tab: "main",
    source: "path",
    type: "reference",
    label: "Path",
    multiple: "true",
    sortable: "weight",
    filter: {
        product_id: "IS NULL",
        article_id: "IS NULL",
        page_id: "IS NULL",
        view: "IS NULL"
    },
    reference: {
        resource: "path",
        optionText: "path",
        inputType: "autocomplete",
        quickCreate: true
    },
    props: {
        sort: { field: "length(path)", order: "ASC" }
    }

    ///////////  validate: required
};
