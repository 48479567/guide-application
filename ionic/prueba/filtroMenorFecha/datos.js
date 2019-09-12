var doctor = {
  nombre: 'DoctorA',
  celular: '975810578',
  pacientes: [
    {
      nombre: 'Paciente1',
      celular: '999999999',
      estado: true,
      citas: [
        { fecha:110, descripcion: 'descripcion1' }, 
        { fecha:160, descripcion: 'descripcion2' }, 
        { fecha:180, descripcion: 'descripcion3' }, 
        { fecha:200, descripcion: 'descripcion4' }
      ],
      citaUltima: 0
    },
    {
      nombre: 'Paciente2',
      celular: '999999994',
      estado: false,
      citas: [ 
        { fecha:80, descripcion: 'descripcion5'},  
        { fecha:100, descripcion: 'descripcion6'},  
        { fecha:110, descripcion: 'descripcion7'},  
        { fecha:120, descripcion: 'descripcion8'}
      ],
      citaUltima: 0
    },
    {
      nombre: 'Paciente3',
      celular: '999949999',
      estado: true,
      citas: [ 
        { fecha:90, descripcion: 'descripcion9' },
        { fecha:130, descripcion: 'descripcion10' },
        { fecha:150, descripcion: 'descripcion11' },
        { fecha:300, descripcion: 'descripcion12' }
      ], 
      citaUltima: 0
    },
    {
      nombre: 'Paciente4',
      celular: '999949999',
      estado: true,
      citas: [ 
        { fecha:90, descripcion: 'descripcion13' },  
        { fecha:110, descripcion: 'descripcion14' },  
        { fecha:150, descripcion: 'descripcion15' },  
        { fecha:300, descripcion: 'descripcion16' } 
      ],
      citaUltima: 0
    }
  ]
};

module.exports = doctor;