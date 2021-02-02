const User = require('./User');
const Project = require('./Project');
const Chat = require('./Chat');

User.hasMany(Project);

Project.belongsTo(User, {
    foreignKey: {
        name: 'author_id'
    },
});

module.exports = {
    User,
    Project,
    Chat
};