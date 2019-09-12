const mongoose = require('mongoose');
const work = require('./work');

(async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017', {
      dbName: 'mydb',
      useNewUrlParser: true,
      // user: '',
      // pass: '',        
    });

    await work();

  } catch (error) {
    console.error(error);
  }
})();






// const mongoose = require('mongoose');

// (async () => {
//   try {
//     const schema = new mongoose.Schema({
//       name: String,
//       email: String,
//       age: Number,
//       date: Date,
//       isValid: Boolean,
//       orders: [{
//         total: Number,
//         tax: Number,
//       }],
//       userAdmin: mongoose.Types.ObjectId,
//       user: {
//         name: String,
//         email: String,
//       }
//     }, { collection: 'users' });

//     //Creacion del modelo
//     const User = mongoose.model('User', schema);

//     await mongoose.connect('mongodb://localhost:27017', {
//       dbName: 'mydb',
//       useNewUrlParser: true,
//       // user: '',
//       // pass: ''
//   });

//   const user1 = new User({
//     name: 'Leo',
//     email: 'leo@Leo.com',
//   });

//   await user1.save();

//   const user = await User.findOne({ name: 'Leo' });
//   user.set({
//     age: 11,
//     date: new Date(),
//   });

//   await user.save();

//   } catch (error) {
//     console.error(error);
//   }
// })();

