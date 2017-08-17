const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/model/todo');
const {User} = require('./../server/model/user');
// var id = '59939efdee737e05379a13a31';

// if (!ObjectID.isValid(id)) {
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => {
//     console.log(e);
// })

User.findById('5991acd0d99e4130dd9a1094').then((user) => {
    if (!user) {
        return console.log('ID not found');
    }
    console.log('User by id', user);
}).catch((e) => {
    console.log(e);
})