const supertest = require('supertest')
const req = supertest('http://localhost:3333/')
// const proj = require('./projectController')

userProj = {
    "name": "MyFirstProject"
}

describe('Create project function:', () => {
    test('should return 201', () => {
        return req.post('api/v1/project').send(userProj).expect(201)
    })
})