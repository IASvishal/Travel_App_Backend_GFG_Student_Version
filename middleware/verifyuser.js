const jwt = require('jsonwebtoken');

const verifyUser = (req, res, next) => {
    const token = req.headers.authorization;
    if(token){
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN, (err, user)=>{
            if(err){
                res.status(403).send({message: "Invalid Token"});
            }
            req.user = user;
            next();
        });

    }else{
        res.send("Please Login")
    }
}

module.exports = verifyUser;