module.exports = [
	{ tab: "banner", source: "banner_title", label: "Title", type: "text" },
	{
		tab: "banner",
		source: "banner_desc",
		label: "Description",
		type: "longtext",
		 multiline:true
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
		tab: "order_process",
		source: "process_title",
		type: "text"
	},
	{
		tab: "order_process",

		source: "process",
		label: "Steps",
		type: "array",
		min: 3,
		max: 3,
		sub: [
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
		tab: "order_process",
		source: "process_button",
		type: "text",
		label: "Order button text"
	},
	{
		tab: "product_selection",

		source: "selection_title",
		label: "Title above products",
		type: "text",
		 multiline:true,
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

	 ...require("../groups/metaTags.js"),
];
