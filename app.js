const express = require('express')
const routes = require('./routes')
const user = require('./routes/user')
const http = require('http')
const path = require('path')
var ejs = require('ejs')

const session = require('express-session')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'PMS'
})

connection.connect()
global.db=connection

//all environment variables
app.set('port',process.env.PORT || 8080)
app.set('views',__dirname + '/views')
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')))
app.use(session({
    secret: 'poopie pants',
    resave : false,
    saveUninitialized : true,
    cookie : {maxAge:60000}
}))

//development
app.get('/',routes.index);
app.get('/signup',user.signup)
app.post('/signup',user.signup)
app.get('/login',routes.index)
app.post('/login',user.login)
app.get('/home/manager',user.dashboard_m)
app.get('/home/hr',user.dashboard_h)
app.get('/home/employer',user.dashboard_e)
app.get('/home/logout',user.logout)

app.get('/edit/:userId',user.allot)
app.post('/update/:userId',user.update)

app.listen(8080)