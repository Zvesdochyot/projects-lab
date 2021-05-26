const supertest = require('supertest')
const req = supertest('http://localhost:3333/')

userDetails = {
    "email": "p@gmail.com",
    "name": "morpheus johnson",
    "nickname": "hackerman228",
    "password": "qwerty123",
    "password_confirmation": "qwerty123"
}

testUserLogin = {
    "email": "p@gmail.com",
    "password": "qwerty123"
}

describe('Register function:', () => {
    test('should return 200', () => {
        return req.post('api/v1/auth/register').send(userDetails).expect(400)
    })
})

describe('Login function:', () => {
    test('should return 200', () => {
        return req.post('api/v1/auth/login').send(testUserLogin).expect(200)
    })
})

describe('Logout function:', () => {
    test('should return 204', () => {
        return req.post('api/v1/auth/logout').send().expect(204)
    })
})