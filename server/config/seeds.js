const db = require('./connection');
const { Detection , Site } = require('../models');

db.once('open', async () => {

    await Site.deleteMany();

    await Site.create({
        ID: 1,
        name: 'Test',
        location: 1234,
        timezone: 'a timezone'
    });

    console.log('sites seeded');

    await Detection.deleteMany();

    await Detection.create({
        datetime: 1234,
        class: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        approach: 22,
        movement: 'lorem ipsum',
        lane: 2
    });

    console.log('detections seeded');

    process.exit();
});