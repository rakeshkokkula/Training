const express = require('express')
const bodyParser = require('body-parser')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema2')



const route = require('./api/route');
const knex = require('./knex/knexfile.js');
// const select = require('./knex/select')
// const create_table = require('./knex/create_table')


const app=express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/create', route);


app.use('/graphql',graphqlHTTP({
    schema,
    graphiql : true

}))


app.get('/get', function(req,res){
    knex.select().table('books')
    res.json(res)
})




// app.use(create_table)
app.listen(4000,() => {
    console.log('Listening requests on port 4000')
})

// const insertData = (tableName, data) => {

//     return db(tableName)
//             .insert(data)
//             .then(resp => resp)
//             .finally(() => db.destroy());
// }

// insertData('todos', [
//     {
//         title: 'Write an article about Knex :)',
//         description: 'This will be description',
//         start_date: '2020-01-01 12:00',
//         due_date: '2020-02-15 16:56',
//     }
// ])
// .then(insertedId => {
//     console.log(insertedId);
// })

