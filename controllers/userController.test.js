const supertest = require('supertest')
const req = supertest('http://localhost:3333/')

describe('Getting logged user:', () => {
    test('should return authorizated users', () => {
        return req.post('api/v1/users').send().expect({message: 'Unauthorized!', code: 'unauthorized'})
    })
})

// describe('Getting all users:', () => {
//     test('should return authorizated users', () => {
//         return req.post('api/v1/users').send().expect({message: 'Unauthorized!', code: 'unauthorized'})
//     })
// })