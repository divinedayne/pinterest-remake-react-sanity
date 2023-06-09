export default{
    name:"pin",
    title: "Pin",
    type: "document",
    fields:[
        {
            name:"title",
            title: "Title",
            type: "string",
        },
        {
            name: "about",
            title: "About",
            type: "string",
        },
        {
            name: "destination",
            title: "Destination",
            type: "url",
        },
        {
            name: "category",
            title: "Catergory",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
            name: "userid",
            title: "UserID",
            type: "string",
        },
        {
            name: "postedby",
            title: "PostedBy",
            type: "postedby",
        },
        {
            name: "save",
            title: "Save",
            type: "array",
            of:[{type: "save"}]
        },
        {
            name: "comments",
            title: "Comments",
            type: "array",
            of:[{type: "comment"}]
        },
    ]
}