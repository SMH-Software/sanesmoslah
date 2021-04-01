import express from 'express'
import dotenv from 'dotenv'
import allRoutes from './routes/routes.js'

const app = express()
dotenv.config()

//moteur template 
app.set('views', './www/views')
app.set('view engine', 'ejs')

//middleware
app.use(express.static('public'))
app.use('/', allRoutes)



app.listen(process.env.PORT, () => console.log(`Le serveur a démarré sur le PORT:http://localhost:${process.env.PORT}`))