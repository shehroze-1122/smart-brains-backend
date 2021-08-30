const {ClarifaiStub, grpc} = require("clarifai-nodejs-grpc");
const stub = ClarifaiStub.grpc();

const handleClarifaiResponse =  (req, res, pg)=>{

    const metadata = new grpc.Metadata();

    metadata.set("authorization", "Key "+ process.env.CLARIFAI_API);
    const {url, id} = req.body;

    pg.select('entries').from('users').where('id', '=', id).then(data=>{
        if(data[0].entries<20){
            stub.PostModelOutputs(
                {
                    // This is the model ID of a publicly available General model. You may use any other public or custom model ID.
                    model_id: "f76196b43bbd45c99b4f3cd8e8b40a8a",
                    version_id: "6dc7e46bc9124c5c8824be4822abe105",
                    inputs: [{data: {image: {url: url}}}]
                },
                metadata,
                (err, response) => {
                    if (err) {
                        console.log("Error: " + err);
                        return res.status('400').json('Error occurred');
                    }
            
                    if (response.status.code !== 10000) {
                        console.log("Received failed status: " + response.status.description + "\n" + response.status.details);
                        return  res.status('400').json('Request failed');
                    }
                    res.json(response);
                    
                }
            );

        }else{
            res.status('400').json("Threshold reached")
        }
    })

    
}

const handleImage =  (req, res, pg)=>{
    const {id} = req.body;
    pg('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries=>{
        if(entries.length){
            res.json(entries[0]);
        }else{
            res.status('400').json("User not found");
        }
    })
    .catch(err=>res.status('400').json('Failed to get user'))

}

module.exports={
    handleImage: handleImage,
    handleClarifaiResponse: handleClarifaiResponse
}