const { roles } = require("./structure");

module.exports = [
    {
        source: "name",
        type: "text",
        label: "Full name",
        validate: ["required"]
    },
    {
        source: "email",
        type: "email",
        label: "Email address",
        validate: ["email"]
    },
    {
        source: "role",
        type: "select",
        label: "Role",
        choices: roles,
        validate: ["required"],
        props: {
            defaultValue: "supplier"
        }
    },
    {
        source: "gender",
        type: "select",
        label: "Gender",
        choices: [
            { id: "human", name: "Human" },
            { id: "female", name: "Female" },
            { id: "male", name: "Male" },
            { id: "bottts", name: "Robot" },
            { id: "gridy", name: "Genderfluid" }
        ],
        props: {
            defaultValue: "human"
        },
        validate: ["required"],
        mode: "avatar",
        seed: "name"
    },
    {
        source: "password",
        type: "password",
        label: "Password",
        validate: [
            {
                type: "length",
                min: 8
            }
        ]
    },
    require("./groups/changed.js")
];
