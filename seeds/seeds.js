const sequelize = require('../config/connection'); 
const { User, Blogpost, Comment } = require('../models');   

const seedDatabase = async () => {
    await sequelize.sync([force: true]);
    console.log('\n----- DATABASE SYNCED -----\n');

    const users = await.user.bulkCreate([
        {
            username: 'tim',
            password: 'password123',

        },
        {
            username: 'timmy',
            password: 'password1234',
        },
        {
            username: 'timothy',
            password: 'password12345',
        },
        {
            username: 'mittimmy',
            password: 'password123456',
        },
    ]);

    {
        individualHooks: true, 
        returning: true,    
    }
    console.log('\n----- USERS SEEDED -----\n');
 
    const blogposts = await Blogpost.bulkCreate([
        {
            title: 'Test Title 1',
            body: 'Test body 1',
            user_id: 1,
        },
        {
            title: 'Test Title 2',
            body: 'Test body 2',
            user_id: 2,
        },
        {
            title: 'Test Title 3',
            body: 'Test body 3',
            user_id: 3,
        },
        {
            title: 'Test Title 4',
            body: 'Test body 4',
            user_id: 4,
        },
    ]);

    {
        individualHooks: true,
        returning: true,
    }

    cosnt comments = await Comment.bulkCreate([
        {
            comment_text: 'Test comment 1',
            user_id: 1,
            blogpost_id: 1,
        },
        {
            comment_text: 'Test comment 2',
            user_id: 2,
            blogpost_id: 2,
        },
        {
            comment_text: 'Test comment 3',
            user_id: 3,
            blogpost_id: 3,
        },
        {
            comment_text: 'Test comment 4',
            user_id: 4,
            blogpost_id: 4,
        },
    ]);

    {
        individualHooks: true,
        returning: true,
    }
}

seedDatabase();