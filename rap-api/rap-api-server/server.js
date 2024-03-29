const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let rappers = {
    '21 savage':{
        'age': 28,
        'birthName':'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'age': 27,
        'birthName':'Channcelor',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown':{
        'age': 'unknown',
        'birthName':'unknown',
        'birthLocation': 'unknown'
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
app.get('/api/rappers/:rapperName', (request, response)=> {
    const rapName = request.params.rapperName.toLowerCase()
    console.log(rapName) 
    if(rappers[rapName]){
        response.json(rappers[rapName])
    }else{
        response.json(rappers['unknown'])
    }
    
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})