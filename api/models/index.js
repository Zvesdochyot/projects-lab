const User = require('./User');
const Project = require('./Project');

User.hasMany(Project);

Project.belongsTo(User, {
    foreignKey: {
        name: 'author_id'
    },
});

module.exports = {
    User,
    Project
};