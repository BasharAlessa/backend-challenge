const express = require("express")
const route= express.Router()
const feedController =require("../controller/feedController")

route.get("/feed" , feedController.homePage)
route.get("/feed/addnew", feedController.creatNewFeed)
route.post("/submit-new-feed" ,feedController.submitNewFeed)
route.get("/feed/:id", feedController.fullFeed)
route.get("/feed/edit/:id" , feedController.editFeedPage)
route.post("/submit-edit/:id" , feedController.submitNewEdit)

route.get("/delete-feed/:id" , feedController.deletefeed)




module.exports=route