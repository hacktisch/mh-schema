module.exports = [
	{ label: "Page title", type: "text", source: "title" },
	require("../groups/pathReference.js"),
	{
		label: "Top text",
		source: "top_text",
		type: "markdown"
	},

	{
		label: "Extra info block: Images",
		source: "extra_images",

		sub: [
			{
				source: "image",
				label: "Image",
				type: "image",
				accept: {
					"image/jpeg": true,
					"image/webp": "jpg",
					"image/png": "jpg"
				}
			}
		]
	},
	{
		label: "Extra info block: Top text",
		source: "extra_text",
		type: "markdown"
	},
	{
		source: "extra_usps",
		label: "Extra info block: Usps",
		type: "array",
		sub: [
			{
				source: "title",
				label: "USP Text",
				type: "text"
			}
		]
	},
	    {
        tab: "details",
        source: "reviews",
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
				}
			}
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

	...require("../groups/metaTags.js")
];
