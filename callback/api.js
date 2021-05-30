const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://restcountries.herokuapp.com/api'

function fetchAPI(url, callback){
    var req = new XMLHttpRequest()
    req.open('GET', url, true)
    req.onreadystatechange = function(event){
        if(req.readyState == 4){
            if(req.status== 200){
                callback(null, JSON.parse(req.responseText))
            }else{
                const err = new Error(`URl invalida ${url}`)
                return callback(err, null)
            }
        }
    }
    req.send()
}

fetchAPI(`${API}/v1/region`, function(error1, data1){
    if(error1) return console.error(error1)
    fetchAPI(`${API}/v1/region/${data1[1]}`, function(error2, data2){
        if(error2) return console.error(error2)
        console.log(data2.name)
    })
})