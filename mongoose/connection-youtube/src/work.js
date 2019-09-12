const User = require('./user');

async function work() {
  //Como se ve en el arreglo de ObjectId. Populate esto como en sql con join, entonces lo que hace populate es cuando hay alguna relacion con otro documento es traer el arreglo junto con todos los datos del documento(s) refereciado(s) esto a un modelo.
  // const user = await User.findOne({ name: 'Leo' }).populate('friends');
  // const userData = user.toObject(); // Esto a cambio de lean(), que ya no quita las propiedeas a la anterior llamada.
  // en el funcionamiento con mongo directamente tener cuidado con la forma en la que trabaja sin set.

  // const result = await User.updateMany({ name: 'Leo' }, {
  //   $set: {
  //     name: 'Leo2'
  //   }
  // });
  // if (result.ok) {
  //   console.log('exitoso');
  // } else {
  //   console.error('error');
  // }

  // const user = await User.findOneAndUpdate({}, { name: 'Juan' }); // esto te pasa el documento antes de ser actualizado si se quiere ver el que ya cambio sgte.
  // const user = await User.findOneAndUpdate({}, { name: 'Otro2'}, { new: true }); // ojo esto solo funciona con uno a la vez.

  // user 

  const result = await User.remove({ name: 'Otro2' }); // Solo borrar documentos por id por que puede resultar problematico.
  // const result = await User.findOneAndDelete({...}), el mismo funcionamiento con update.

  result
}

module.exports = work;
