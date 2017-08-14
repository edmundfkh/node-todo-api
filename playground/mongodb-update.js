// const MongoClient = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5991392ba926f110a42915ba')}, {
    //     $set: {
    //         completed: false
    //     }
    // }, { 
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({_id: new ObjectID('59916ce3a926f110a4291ad5')}, {
        $set: {
            name: 'edmund'
        },
        $inc: {
            age: -1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    //db.close();
});

