exports.nodejshttpfunc = (req,res) => {
  console.log("Response from my NodeJS function!! for http trigger1");
  res.status(200).send("Response from my NodeJS function!!");
};

exports.nodejspubsubfunc = (event, context) => {
  const msg = event.data;
  console.log("The message from mytopic is " + Buffer.from(msg, 'base64').toString() + " for pubsub trigger!");
}