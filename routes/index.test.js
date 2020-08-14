require('dotenv').config();
const request = require('supertest');
const app = require('../server');

describe('Test get token path', () => {
    test('It should response POST', async () => {
        const res = await request(app).post('/token');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('access_token');
    })
});

/*
describe('Test get users path', () => {
    test('It should response GET', async () => {
        let urlUserProfile = process.env.URI + process.env.USER_PROFILE_PATH;
        const userId = 123;
        //console.log(urlUserProfile + userId);
        const res = await request(app).get(`/users/${userId}`);
        expect(res.statusCode).toEqual(200);
        //expect(res.body).toHaveProperty('id');
    })
});
*/