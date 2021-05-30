const axios = require('axios')
const API = 'https://my-json-server.typicode.com/AndresHelloWorld/tecs/usuarios'
const JSON = '../json/index.json'
function GetUsers(IDE) {

    axios(API)
        .then(res => {
            const persons = res.data;   
            for(i=0;i<persons.length;i++){
                if(persons[i].id == IDE){
                    console.log(
                        persons[i].id,
                        persons[i].name,
                        persons[i].email
                        )
                }
            }
        })
}
GetUsers(2)