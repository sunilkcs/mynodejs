exports.pubsubfunc = (event, context) => {
    const msg = event.data;
    console.log("The message is " + Buffer.from(msg, 'base64').toString());
}