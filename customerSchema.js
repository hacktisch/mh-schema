module.exports = [
	{
		source: "name",
		type: "text"
	},
	{
		source: "phone",
		type: "text"
	},
	{
		source: "email",
		type: "email"
	},
	{
		source: "location",
		type: "text"
	},
	{
		source: "message",
		type: "text",
		render: "rawHtml"
	},
	{
		source: "date",
		type: "text",
		label: "Event date"
	},
	{
		source: "start",
		type: "text",
		label: "Start time"
	},
	{
		source: "end",
		type: "text",
		label: "End time"
	},
	{
		source: "budget",
		type: "text"
	},
	{
		source: "desire",
		type: "text",
		render: "rawHtml"
	},
	{
		source: "attendees",
		type: "text"
	},
	{
		source: "products",
		type: "reference",
		multiple: "true",
		reference: {
			resource: "product",
			optionText: "title",
			inputType: "autocomplete"
		}
	},
	{
		source: "additional_services",
		type: "text",
		render: "rawHtml"
	},
	{
		source: "filters",
		type: "text",
		render: "rawHtml"
	},
	{
		source: "sent-from",
		type: "text",
		label: "Sent from URL",
		render: "url"
	},
	{
		source: "created",
		label: "Requested on",
		type: "date"
	}
];
