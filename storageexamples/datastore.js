const {Datastore} = require('@google-cloud/datastore');
const datastore = new Datastore();



const taskKey = datastore.key('Task');
const task = {
  category: 'Personal',
  done: false,
  priority: 4,
  description: 'Learn Cloud Datastore',
};

const entity = {
  key: taskKey,
  data: task,
};

datastore.upsert(entity);
// Task inserted successfully.'

const query = datastore
    .createQuery('Task')
    .filter('done', '=', false)
    .filter('priority', '>=', 4)
    .order('priority', {
      descending: true,
    });

const res = datastore.runQuery(query);
console.log('Tasks:' + res);
//tasks.forEach(task => console.log(task));


