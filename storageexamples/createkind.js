const {Datastore} = require('@google-cloud/datastore');
const datastore = new Datastore();

const taskKey1 = this.datastore.key(['Task', 1]);
const taskKey2 = this.datastore.key(['Task', 2]);

const task1 = {
  category: 'Personal',
  done: false,
  priority: 4,
  description: 'Learn Cloud Datastore',
};

const task2 = {
  category: 'Work',
  done: false,
  priority: 8,
  description: 'Integrate Cloud Datastore',
};

const entities = [
  {
    key: taskKey1,
    data: task1,
  },
  {
    key: taskKey2,
    data: task2,
  },
];

datastore.upsert(entities);