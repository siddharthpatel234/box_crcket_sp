import BoxModal from '../models/BoxModal.js'


const addBoxController = async(req,res) => {


    console.log(req.body)

    const boxModal = new BoxModal(req.body)

    const response  = await BoxModal.findOne({boxName : req.body.boxName,latitude : req.body.latitude,longitude : req.body.longitude})
    if(response)
        {
            return (res.status(208).json({message : 'Box is already exist with same name at same location'}))
        }
    boxModal.save().then((data)=>{
        console.log('Box added successfully')
        res.status(308).json({message : 'Box Added',data : data})
    }).catch((error)=>{
        console.log(error)
    })

    // res.status(308).json({message : 'Box Data got'})
    // res.
}

export{addBoxController}