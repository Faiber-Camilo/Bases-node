
const argv= require('yargs')
        .option('b', {
            alias: 'base',
            type:'number',
            demandOption:'true'
        })
        .option('l',{
            alias: 'listar',
            type:'boolean',
            default:false,
            describe:'muestra la tabla en consola'
        })
        .option('h',{
            alias: 'hasta',
            type:'number',
            default:10,
            describe:'Hasta que número vamos a multiplicar'
        })
        .check((argv,options) =>{
            console.log('yargs',argv)
            if(isNaN(argv.b)){
                throw 'la base tiene que ser un número'
            }
            return true;
        }
        )
        .argv;

module.exports=argv;