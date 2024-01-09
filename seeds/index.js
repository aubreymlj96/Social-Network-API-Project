const connection = require('../config/connection');
const mongoose = require('mongoose');
const { user, thought } = require('../models');
const userSeeds = require('./userSeeds');
const thoughtSeeds = require('./thoughtSeeds');

mongoose.connection.on('error', (err) => err);

mongoose.connection.once('open', async () => {
    console.log('Database connection is live');

    let usersCheck = await connection.db.listCollections({username: 'user'}).toArray();
    if(usersCheck.length){ await connection.dropCollection('user') };

    let thoughtsCheck = await connection.db.listCollections({thoughtText: 'thought'}).toArray();
    if(thoughtsCheck.length){ await connection.dropCollection('thought') }

    await user.collection.insertMany(user);
    await thought.collection.insertMany(thought);

    console.info('Successful Message');
    console.log(userSeeds);
    console.log(thoughtSeeds);
    process.exit(0);
  });
