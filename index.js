module.exports = {
	article: require("./articleSchema.js"),
	path: require("./pathSchema.js"),
	tree: require("./treeSchema.js"),
	product: require("./productSchema.js"),
	page: require("./pageSchema.js"),
	globals: require("./globalSettingsSchema.js"),
	structure: require("./structure.js"),

	front: require("./pages/front.js"),
	contact: require("./pages/contact.js"),
	notfound: require("./pages/notfound.js"),
	request: require("./pages/request.js"),
	blog: require("./pages/blog.js"),
	partners: require("./pages/partners.js"),

	user: require("./userSchema.js"),
	file: require("./fileSchema.js"),
	customer: require("./customerSchema.js"),
	timestamp: require("./timestamp.js")
};
