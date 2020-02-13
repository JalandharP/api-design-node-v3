import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/getName/:id', (req, res) => {
    console.log(req.params)
    res.send({ message: 'hello world for node...!!!' });
})

app.post('/', (req, res) => {
    console.log('post body::', req.body);
    res.send({message: 'okay'});
})


export const start = () => { 
    app.listen('3000', ()=>{
        console.log('app started on 300');
    })
}
