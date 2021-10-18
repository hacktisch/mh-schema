module.exports = [
	{ tab: "banner", source: "banner_title", label: "Title", type: "text" },
	{
		tab: "banner",
		source: "banner_desc",
		label: "Description",
		type: "longtext",
		multiline: true
	},
	{
		tab: "banner",
		source: "backgrounds",
		label: "Backgrounds",
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
		tab: "banner",
		source: "usps_banner",
		label: "USP in banner",
		type: "array",
		sub: [
			{
				source: "icon",
				type: "reference",
				label: "Icon",
				reference: {
					resource: "icon",
					inputType: "autocomplete",
					images: true
				}
			},
			{
				label: "Text",
				source: "text",
				type: "text"
			}
		]
	},

	{
		tab: "collection",
		source: "process_title",
		label: "Collection title",
		type: "text"
	},
	{
		tab: "collection",

		source: "process",
		label: "Collection elements",
		type: "array",
		sub: [
			{
				source: "path_id",
				type: "reference",
				label: "Path to link to",
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
				},

				validate: ["required"]
			},
			{
				source: "image",
				label: "Image",
				type: "image",
				accept: { "image/png": true, "image/webp": "png" },
				transforms: {
					_original: {
						width: 300,
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
				source: "description",
				label: "Description",
				type: "markdown"
			}
		]
	},
	{
		tab: "product_selection",

		source: "selection_title",
		label: "Title above products",
		type: "text",
		multiline: true
	},
	{
		tab: "product_selection",
		source: "selection",
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
	},
	{
		tab: "logo_bar",

		source: "logos",
		label: "Logos",
		type: "array",
		sub: [
			{
				source: "image",
				label: "Logo",
				type: "image",
				accept: { "image/png": true, "image/webp": "png" },
				transforms: {
					_original: {
						width: 150,
						height: 40
					}
				}
			}
		]
	},
	{
		tab: "text",

		source: "body",
		label: "Body text",
		type: "markdown"
	},
	{
		tab: "text",

		source: "button_contact",
		label: "Text in contact button",
		type: "text"
	},
	{
		tab: "text",

		source: "button_order",
		label: "Text in order button",
		type: "text"
	},

	...require("../groups/metaTags.js")
];
