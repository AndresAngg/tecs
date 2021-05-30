const promise = new Promise((resolve, reject) =>{
    const FLAG = 7
    if(FLAG == 5){
        resolve('Todo salio bien')
    } else {
        reject(new Error('Internal servers error 500'))
    }
})

promise.then(response => console.log(response))
.catch(err => console.info(err))
