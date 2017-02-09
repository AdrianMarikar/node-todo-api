const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
	console.log(result);
});

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '589ccb51b518c5abf13780de'}).then((todo) => {

});

Todo.findByIdAndRemove('589ccb51b518c5abf13780de').then((todo) => {
	console.log(todo);
});