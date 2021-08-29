const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');

const knex = require('knex');
const signin = require('./controllers/signin');
const register = require('./controllers/register');
const profile = require('./controllers/profile');
const image = require('./controllers/image')

const pg = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'sadstory',
      database : 'smart_brains'
    }
  });

const app = new express();
app.use(cors());
app.use(express.json());

// app.get(('/'), (req, res)=>{
//     pg.select('*').from('users')
//     .then(users=>{
//         res.json(users);
//     })
// })

app.post(('/signin'),(req, res)=>signin.handleSignIn(req, res, pg, bcrypt))

app.post(('/register'), (req, res)=>register.handleRegister(req, res, pg, bcrypt))

app.get(('/profile/:id'), (req, res)=> profile.handleProfile(req, res, pg))

app.put(('/image'),(req, res)=>image.handleImage(req, res, pg))

app.post(('/imageUrl'),(req, res)=>image.handleClarifaiResponse(req, res))


app.listen('3001', ()=>console.log('App running on port 3001'))