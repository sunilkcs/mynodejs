exports.nodejshttpfunc = (req,res) => {
  var message = req.query.message || req.body.message || 'Hello World2!';
  console.log(`Response from https trigger function is ${message}`);
  res.status(200).send(`Response from http trigger function is ${message}`);
};

exports.nodejspubsubfunc = (event, context) => {
  const msg = event.data;
  console.log("The message from mytopic is " + Buffer.from(msg, 'base64').toString() + " for pubsub trigger!");
}