const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/model/todo');
const {User} = require('./../server/model/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove

Todo.findOneAndRemove({_id: '5997c1b14fad5a3ac4efcd7a'}).then((todo) => {

});

Todo.findByIdAndRemove('5997c1b14fad5a3ac4efcd7a').then((result) => {
    console.log(result);
});