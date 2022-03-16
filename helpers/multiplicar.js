
const fs =require('fs')
const colors=require('colors')
const tablaMultiplicar= (numero=5,validate=false, limit) =>{
   return new Promise((resolve,reject) =>{
    
    let salida='';

    for( let i=1; i<= limit; i++){
        salida+=`${numero} x ${i} = ${numero*i} \n`
    }
    if(validate){
    console.log('============='.green)
    console.log('tabla del '.green, colors.red(numero) )
    console.log('============='.green)
    console.log(salida.blue);
    }
    
   fs.writeFileSync(`./salida/table-${numero}.txt`,salida);
   resolve(`tabla del ${numero} creada`)
    })
    
}

module.exports={
    tablaMultiplicar
}