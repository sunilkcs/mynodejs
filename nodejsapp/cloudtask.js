// Imports the Google Cloud Tasks library.
const {CloudTasksClient} = require('@google-cloud/tasks');

// Instantiates a client.
const client = new CloudTasksClient();

// TODO(developer): Uncomment these lines and replace with your values.
// const project = 'my-project-id';
// const queue = 'my-queue';
// const location = 'us-central1';
// const url = 'https://example.com/taskhandler';
// const payload = 'Hello, World!';

// Construct the fully qualified queue name.
const parent = client.queuePath('sunilgcpexam', 'us-central1', 'datasets-queue');

const task = {
  httpRequest: {
    httpMethod: 'POST',
    url: 'https://us-central1-sunilgcpexam.cloudfunctions.net/nodejshttpfunc'
  },
};

var jsondata = { name: "SunilKCS", message: "Welcome to Cognizant!" };

const payload = JSON.stringify(jsondata);
console.log(`payload is : ${payload}`)
task.httpRequest.body = Buffer.from(payload).toString('base64');
//task.httpRequest.body = payload;

inSeconds = 0;
if (inSeconds) {
  // The time when the task is scheduled to be attempted.
  task.scheduleTime = {
    seconds: inSeconds + Date.now() / 1000,
  };
}

// Send create task request.
console.log('Sending task:');
console.log(task);
const request = {parent, task};
const response = client.createTask(request);
console.log('Response is : ' + response);
//console.log(`Created task ${response.name}`);