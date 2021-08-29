const saltRounds = 10;

const handleRegister = (req, res, pg, bcrypt) => {
    const {name, email, password}= req.body;

    if(!email || !name || !password){
       return res.status('400').json('Incorrect form submission')
    }
    pg.transaction(trx=>{

        bcrypt.hash(password, saltRounds, function(err, hash) {
            trx.insert({
                email: email,
                hash: hash
            }).into('login')
            .returning('email')
            .then(loginEmail=>{
                return trx.insert({
                    name: name,
                    email: email,
                    joined: new Date()
                })
                .into('users')
                .returning('*')
                .then(user=>{
                    res.json(user[0])
                })                
            })
            .then(trx.commit)
            .catch(trx.rollback)

         });
   

    })
    .catch(err=> res.status('400').json("Unable to register"))
}
    
module.exports={
    handleRegister: handleRegister
}