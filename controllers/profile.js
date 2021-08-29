const handleProfile = (req, res, pg)=>{
    const {id} = req.params;
    pg.select('*').from('users').where({
        id: id
    })
    .then(user=>{
            if(user.length !== 0){
                res.json(user[0]);
            }else{
                res.status(400).json("profile not found")
            }
    })
}

module.exports = {
    handleProfile: handleProfile
}