exports.logInController = (req, res) => {
    const {email, password} = req.query;
    if(email === "kmonimahanta@gmail.com" && password === "heythere"){
        return res.status(200).json({
            "success" : "Successfully logged in !!"
        });
    }
    return res.status(404).json({
        "error" : "Invalid username or password"
    });
}