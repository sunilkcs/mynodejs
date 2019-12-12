exports.helloWorld = (req, res) => {
    res.send('Hello, World');
  };

exports.myfunc = (req,res) => {
  res.status(200).send("Response from my function modified version");
};