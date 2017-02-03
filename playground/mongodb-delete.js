// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MongoDB server');

	//deleteMany
	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	//deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	//findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });

	//deleteMany users
	// db.collection('Users').deleteMany({name: 'George Best'}).then((result) => {
	// 	console.log(result);
	// });

	//findOneAndDelete users
	db.collection('Users').findOneAndDelete({_
		id: new ObjectID('5894f6d87721591c62a3b336')
	}).then((result) => {
		console.log(JSON.stringify(result, null, 2));
	});

	//db.close();
});