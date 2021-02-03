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
        username: 'admin-docker',
        password: 'password-docker',
        database: 'projects-lab-docker',
        host: 'db',
        dialect: 'mysql',
        port: 3306
    }
}
