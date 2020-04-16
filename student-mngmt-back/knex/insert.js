const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'mydb'
    }
}

const knex = require('knex')(options);

// const cars = [
//     { name: 'Audi', price: 52642 },
//     { name: 'Mercedes', price: 57127 },
//     { name: 'Skoda', price: 9000 },
//     { name: 'Volvo', price: 29000 },
//     { name: 'Bentley', price: 350000 },
//     { name: 'Citroen', price: 21000 },
//     { name: 'Hummer', price: 41400 },
//     { name: 'Volkswagen', price: 21600 },
// ]

// var books = [
//         { name: 'Name of the Wind', genre: 'Fantasy', authorId: '1' },
//         { name: 'The Final Empire', genre: 'Fantasy',  authorId: '2' },
//         { name: 'The Hero of Ages', genre: 'Fantasy',  authorId: '2' },
//         { name: 'The Long Earth', genre: 'Sci-Fi', authorId: '3' },
//         { name: 'The Colour of Magic', genre: 'Fantasy',  authorId: '3' },
//         { name: 'The Light Fantastic', genre: 'Fantasy', authorId: '3' },
//     ];
    
    // var authors = [
    //     { name: 'Patrick Rothfuss', age: 44, id: '1' },
    //     { name: 'Brandon Sanderson', age: 42, id: '2' },
    //     { name: 'Terry Pratchett', age: 66, id: '3' }
    // ];

knex('authors').insert(authors).then(() => console.log("data inserted"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });