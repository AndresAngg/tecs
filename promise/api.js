const axios = require('axios')
const API = 'https://jsonplaceholder.typicode.com/users'
const JSON = '../json/index.json'
function GetUsers(IDE) {

    axios(JSON)
        .then(res => {
            const persons = res.data;
            for(i=0;i<persons.length;i++){
                if(persons[i].id == IDE){
                    console.log(
                        persons[i].id,
                        persons[i].name,
                        persons[i].username
                        )
                }
            }
      

        })
}
GetUsers(9)