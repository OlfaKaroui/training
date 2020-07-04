
const helloWorld = (req, res)=> {
    console.log(req.body.password)
    res.send("hello world!")

}

const helloGuys = (req, res)=> {
    console.log({req})
    res.send("hello guys!")

}

exports.helloWorld = helloWorld;
exports.helloGuys = helloGuys;