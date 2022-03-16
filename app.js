
const { number } = require('yargs');
const {tablaMultiplicar}= require('./helpers/multiplicar')
const argv= require('./config/yargs');
const colors=require('colors')
console.clear();
console.log(argv)
const numero=3
tablaMultiplicar(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow))
    .catch(err => console.log(err))