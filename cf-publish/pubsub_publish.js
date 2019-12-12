const {PubSub} = require('@google-cloud/pubsub');
const pubsub = new PubSub();

const topicName = "mytopic"
//const data = JSON.stringify({"foo" : "car"});
const data = "sunilkumar";

const dataBuffer = Buffer.from(data);


//const messageId = pubsub.createTopic(topicName);
//console.log(`Topic ${topicName} created.`);

const messageId = pubsub.topic(topicName).publish(dataBuffer);
console.log(`Message ${messageId} published.`);