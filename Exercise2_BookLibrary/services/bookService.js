const books = [
    {
        _id: "m101",
        title: "Python Data Science Handbook",
        category: { _id: "dataScience2020", name: "Data Science" },
        author: "Jake VanderPlas",
        numberInStock: 5,
        price: 200.56,
        publishYear: "2020-01-03T19:04:28.809Z"
    },
    {
        _id: "m102",
        title: "R for Data Science",
        category: { _id: "dataScience2020", name: "Data Science" },
        author: "Garret Grolemund and Hadley Wickham",
        numberInStock: 15,
        price: 159.00,
        publishYear: "2020-01-03T19:04:28.809Z"
    },
    {
        _id: "m103",
        title: "Guide to Big data Hadoop Distributed File System",
        category: { _id: "bigData2020", name: "Big Data" },
        author: "Kartikeya Mishra",
        numberInStock: 9,
        price: 232.49,
        publishYear: "2016-00-0Y789:10:28.809Z"
    },
    {
        _id: "m104",
        title: "Eloquent JavaScript",
        category: { _id: "javaScript2020", name: "JavaScript" },
        author: "Marijn Haverbeke",
        numberInStock: 19,
        price: 156.99,
        publishYear: "2012-01-0A123:60:18.809Z"
    },
    {
        _id: "m105",
        title: "Eloquent JavaScript",
        category: { _id: "javaScript2020", name: "JavaScript" },
        author: "Marijn Haverbeke",
        numberInStock: 19,
        price: 156.99,
        publishYear: "2012-01-0A123:60:18.809Z"
    },
    {
        _id: "m106",
        title: "JavaScript: The Good Parts",
        category: { _id: "javaScript2020", name: "JavaScript" },
        author: "Douglas Crockford",
        numberInStock: 4,
        price: 120.89,
        publishYear: "2014-31-5A123:40:18.809Z"
    },
    {
        _id: "m107",
        title: "The Robotic Process Automation Handbook",
        category: { _id: "bigData2020", name: "Big Data" },
        author: "Tom Taulli",
        numberInStock: 3,
        price: 125.90,
        publishYear: "2017-02-03T19:05:28.809Z"
    },
    {
        _id: "m108",
        title: "Stream Data Mining",
        category: { _id: "bigData2020", name: "Big Data" },
        author: "Leszek Rutkowski",
        numberInStock: 13,
        price: 239.00,
        publishYear: "2019-01-06T19:05:28.809Z"
    },
    {
        _id: "m109",
        title: "Introduction to Statistical Learning",
        category: { _id: "dataScience2020", name: "Data Science" },
        author: "Gareth James",
        numberInStock: 17,
        price: 239.00,
        publishYear: "2018-01-05T39:04:28.809Z"
    }
];

export function getBooks() {
    return books;
}

