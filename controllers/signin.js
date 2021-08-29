const handleSignIn = (req, res, pg, bcrypt) =>
    { 
        const {email, password}  = req.body;

        if(!email || !password){
            return res.status('400').json('Incorrect form submission')
         }
        pg.select('hash', 'email').from('login').where('email','=', req.body.email)
        .then(data=>{
            bcrypt.compare(req.body.password, data[0].hash , function(err, result) {
                if(result){
                    pg.select('*').from('users').where('email', '=', data[0].email)
                    .then(user=>res.json(user[0]))
                }else{
                    res.status('400').json("failed")
                }
        });

        })
        .catch(err=> res.status('400').json("failed"))
    }

module.exports={
    handleSignIn: handleSignIn
}