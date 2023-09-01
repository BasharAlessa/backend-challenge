const feedModel = require("../models/feedModel")

const homePage= (req , res)=>{
    feedModel.find()
        .sort({created_at: "-1" })
        .then( data =>{
            res.render("index",{
                feeds:data
            })
        })
        .catch(err =>{
            console.log(err);
        })
}
const creatNewFeed = (req,res)=>{
    res.render("create-new-feed",{
        err:""
    })
}

const submitNewFeed = (req , res)=>{
    if(req.body.name === "" || req.body.message === ""|| req.body.name.length <15 || req.body.message.length <40){
        res.render("create-new-feed",{
            err:"both inputs are required with the defined length"
        })
    }else {
        let newFeed = new feedModel(req.body)
            newFeed.save()
                    .then(()=>{
                        res.redirect("/feed")
                    })
                    .catch(err=>{
                        console.log(err);
                    })
    }
}

const fullFeed =(req , res)=>{
    feedModel.findById(req.params.id)
    .then( data =>{
        res.render("full-feed",{
            feed:data
        })
    })
    .catch(err =>{
        console.log(err);
    })
}
const editFeedPage=(req, res)=>{
    let feedId= req.params.id;
    feedModel.findById(feedId)
        .then(feedInfo =>{
            res.render("edit-feed",{
                info:feedInfo
            })
        })
        .catch(err=>{
            console.log(err)
        })
}

const submitNewEdit = (req, res)=>{
    if(req.body.name === "" || req.body.message === "" || req.body.name.length <15 || req.body.message.length <40){
        res.render("edit-feed",{
            info:"",
            err :"both inputs are required with the defined length",
            info: feedInfo
        })
}else {
    feedModel.findByIdAndUpdate(req.params.id , req.body)
        .then (()=>{    
            feedModel.findById(req.params.id)
            .then( data =>{
                res.render("full-feed",{
                    feed:data
                })
            })
            .catch(err =>{
                console.log(err);
            })
        })
        .catch(err =>{
            console.log(err);
        })
}
}

const deletefeed =(req , res)=>{
    feedModel.findByIdAndDelete(req.params.id)
        .then (()=>{
            res.redirect("/feed")
        })
        .catch(err =>{
            console.log(err);
        })
}


module.exports={
    homePage,
    creatNewFeed,
    submitNewFeed,
    fullFeed,
    editFeedPage,
    submitNewEdit,
    deletefeed
}