const supertest = require('supertest')
const req = supertest('http://localhost:3333/')
// const proj = require('./projectController')

userProj = {
    "name": "MyFirstProject",
    "description": "description"
}

testUserLogin = {
    "email": "p@gmail.com",
    "password": "qwerty123"
}

// changeUserProj = {
//     "projectId": 11,
//     "newIndex": 3,
//     "oldIndex": 0
// }

describe('Create project function:', () => {
    let auth = {};
    beforeAll(loginUser(auth));

    test('should return 201', () => {
        // console.log(auth.token);
        return req
            .post('api/v1/projects/')
            .send(userProj)
            .set('Authorization', 'bearer ' + auth.token)
            .expect(201)
    })
})

describe('Get project function:', () => {
    let auth = {};
    beforeAll(loginUser(auth));

    test('should return 200', () => {
        // console.log(auth.token);
        return req
            .get('api/v1/projects/')
            .set('Authorization', 'bearer ' + auth.token)
            .expect(200)
    })
})

// describe('Change the order function:', ()=>{
//     let auth = {};
//     beforeAll(loginUser(auth));
//
//     test('should return 204', () => {
//         // console.log(auth.token);
//         return req
//             .put('api/v1/projects/')
//             .send(changeUserProj)
//             .set('Authorization', 'bearer ' + auth.token)
//             .expect(204)
//     })
// })

function loginUser(auth) {
    return function (done) {
        req
            .post('api/v1/auth/login')
            .send(testUserLogin)
            .expect(200)
            .end(onResponse);

        function onResponse(err, res) {
            auth.token = res.body.accessToken;
            // console.log(res.body)
            return done();
        }
    };
}