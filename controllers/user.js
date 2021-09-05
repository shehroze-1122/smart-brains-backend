
const updateUsername = (req, res, pg)=>{
    const newName = req.body.newName;
    const userEmail = req.body.userEmail;
    console.log(newName)
    if(newName && userEmail){

        pg('users').where('email', '=', userEmail ).update('name', newName).returning('name')
        .then(name=>{
            if(name.length){
                res.json(name[0])
            }else{
                res.status('400').json('failed');
            }
        })
        .catch(err=>{
            console.log(err)
            res.status('400').json("failed");
        })

    }else{
        res.status('400').json('failed');
    }
}
module.exports= {
 updateUsername: updateUsername
}