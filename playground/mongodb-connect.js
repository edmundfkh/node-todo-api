// const MongoClient = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').insertOne({
    //     text: 'some',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert to Do', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // } );

    // db.collection('Users').insertOne({
    //     name: 'ed',
    //     age: 12,
    //     location: 'SG'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Error', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    db.close();
});

