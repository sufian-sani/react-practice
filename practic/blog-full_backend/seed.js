const sequelize = require('./sequelize');
const Post = require('./models/Post');

// Function to seed dummy data
const seedDatabase = async () => {
    try {
        // Sync Sequelize models with the database
        await sequelize.sync({ force: true });

        // Insert dummy data into the database
        await Post.bulkCreate([
            { title: 'First Post', content: 'Lorem ipsum dolor sit amet.', author: 'John Doe' },
            { title: 'Second Post', content: 'Consectetur adipiscing elit.', author: 'Jane Smith' },
            { title: 'Second Post', content: 'Consectetur adipiscing elit 2.', author: 'Jane Smith 2' },
            { title: 'Second Post', content: 'Consectetur adipiscing elit. 3', author: 'Jane Smith 3' },
            { title: 'Second Post', content: 'Consectetur adipiscing elit. 4', author: 'Jane Smith 4' },
            { title: 'Second Post', content: 'Consectetur adipiscing elit. 5', author: 'Jane Smith 5' },
            // Add more dummy data as needed
        ]);

        console.log('Dummy data seeded successfully');
    } catch (error) {
        console.error('Error seeding dummy data:', error.message);
    } finally {
        // Close the database connection
        await sequelize.close();
    }
};

// Call the function to seed the database
seedDatabase();
