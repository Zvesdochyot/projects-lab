module.exports = {
    development: {
        username: 'admin',
        password: 'password',
        database: 'projects-lab-dev',
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    },
    docker: {
        username: 'admin',
        password: 'password',
        database: 'projects-lab',
        host: 'db',
        dialect: 'mysql',
        port: 3306
    }
}
