function soyUnCallback(data){
    console.log(data)
}

function peticionHTTP(callback){
    console.log('Estoy cargando')
    console.log('Ya casi termino')
    console.log('Ya me falta poco')

    callback({
        id: 001,
        useename: 'Andres',
        age: 20
    })
}

peticionHTTP(soyUnCallback)