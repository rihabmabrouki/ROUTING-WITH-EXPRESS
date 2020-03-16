const express = require ('express')
const router = express.Router()

router.get('/contact' , (req ,res )=> 
{
    
    res.send("hello from CONTACT page")
    
})

module.exports = router