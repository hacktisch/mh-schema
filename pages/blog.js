module.exports = [
	{ label: "Page title", type: "text", source: "title" },
	require("../groups/pathReference.js"),
	...require("../groups/metaTags.js")
];
