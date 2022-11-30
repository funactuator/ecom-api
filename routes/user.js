const router = require('express').Router();

router.get('/usertest', (req, res) => {
    res.send("User test is successful!")
})

router.post("/userposttest", (req, res) => {
    let username = req.body.username
    console.log("Entered username is ", username);
    res.send("Your username is "+ username);
})

module.exports = router