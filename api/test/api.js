"use strict";
const request = require('supertest');
const app = 'http://localhost:3000';

// Shitf API test
describe('API: Shitf POST inside body', function() {
    // Tests no body key/values
    describe("No body keys/values", function() {
        it("Should give a 400 error code", function() {
            return request(app)
                    .post('/api/shitf')
                    .send({})
                    .expect(400);
        });
    });

    // Tests wrong body key
    describe("Incorrect body keys", function() {
        it("Should give a 400 error code", function() {
            return request(app)
                .post('/api/shitf')
                .send({
                    wrongKey0: "something wrong",
                    wrongKey1: "something else wrong"
                })
                .expect(400);
        });
    });

    // Tests correct body w/ empty value
    describe("Correct body key with empty value", function() {
        it("Should give a 200 error code, correct content type, and an empty string", function() {
            return request(app)
                .post('/api/shitf')
                .send({
                    messages: ""
                })
                .expect(200)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect({messages: [""]});
        });
    });

    // Tests correct body w/ a normal sentence
    describe("Correct body key with a single sentence", function() {
        it("Should give a 200 error code, correct content type, and 35 💩s", function() {
            return request(app)
                .post('/api/shitf')
                .send({
                    messages: "a normal sentence with numbers 5123"
                })
                .expect(200)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect({messages: [
                    "💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩"
                ]});
        });
    });

    // Tests correct body w/ an array of normal sentences
    describe("Correct body key with multiple sentences", function() {
        it("Should give a 200 error code, correct content type, and 3, 10, and 35 💩s in an array", function() {
            return request(app)
                .post('/api/shitf')
                .send({
                    messages: [
                        "abc",
                        "0123456789",
                        "a normal sentence with numbers 5123"
                    ]
                })
                .expect(200)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect({messages: [
                    "💩💩💩",
                    "💩💩💩💩💩💩💩💩💩💩",
                    "💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩"
                ]});
        });
    });
});

describe('API: Shitf GET via Query Strings', function() {
    // Tests no query string key/values
    describe("No query string keys/values", function() {
        it("Should give a 400 error code", function() {
            return request(app)
                .get('/api/shitf')
                .expect(400);
        });
    });

    // Tests wrong query string key
    describe("Incorrect query string keys", function() {
        it("Should give a 400 error code", function() {
            return request(app)
                .get('/api/shitf?wrongKey0=something+wrong&wrongKey1=something+else+wrong')
                .expect(400);
        });
    });

    // Tests correct query string w/ empty value
    describe("Correct query string key with empty value", function() {
        it("Should give a 200 error code, correct content type, and an empty string", function() {
            return request(app)
                .get('/api/shitf?messages')
                .expect(200)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect({messages: [""]});
        });
    });

    // Tests correct query string w/ a normal sentence
    describe("Correct query string key with a single sentence", function() {
        it("Should give a 200 error code, correct content type, and 35 💩s", function() {
            return request(app)
                .get('/api/shitf?messages=a+normal+sentence+with+numbers+5123')
                .expect(200)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect({messages: [
                    "💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩"
                ]});
        });
    });

    // Tests correct query string w/ an array of normal sentences
    describe("Correct query string key with multiple sentences", function() {
        it("Should give a 200 error code, correct content type, and 3, 10, and 35 💩s in an array", function() {
            return request(app)
                .get('/api/shitf?messages=abc&messages=0123456789&messages=a+normal+sentence+with+numbers+5123')
                .expect(200)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect({messages: [
                    "💩💩💩",
                    "💩💩💩💩💩💩💩💩💩💩",
                    "💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩"
                ]});
        });
    });

    // Tests correct query string w/ an array of correct URI-encoded sentences
    describe("Correct query string key with multiple URI-encoded sentences", function() {
        it("Should give a 200 error code, correct content type, and 2, and 12 💩s in an array", function() {
            return request(app)
                .get('/api/shitf?messages=%202&messages=Hello%20G%C3%BCnter')
                .expect(200)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect({messages: [
                    "💩💩",
                    "💩💩💩💩💩💩💩💩💩💩💩💩"
                ]});
        });
    });
});


describe('API: Shitf POST with both body & query string values', function() {
    // Tests no query string & no body key/values
    describe("No query string & body keys/values", function() {
        it("Should give a 400 error code", function() {
            return request(app)
                .post('/api/shitf')
                .send({})
                .expect(400);
        });
    });

    // Tests wrong query string & body key
    describe("Incorrect query string & body keys", function() {
        it("Should give a 400 error code", function() {
            return request(app)
                .post('/api/shitf?wrongKey0=something+wrong&wrongKey1=something+else+wrong')
                .send({
                    wrongKey0: "something wrong",
                    wrongKey1: "something else wrong"
                })
                .expect(400);
        });
    });

    // Tests correct query string & body w/ empty value
    describe("Correct query string & body key with empty values", function() {
        it("Should give a 200 error code, correct content type, and an array of two empty strings", function() {
            return request(app)
                .post('/api/shitf?messages')
                .send({
                    messages: ""
                })
                .expect(200)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect({messages: ["", ""]});
        });
    });

    // Tests correct query string & body w/ a normal sentence
    describe("Correct query string & body key with a single sentence each", function() {
        it("Should give a 200 error code, correct content type, and 35 💩s", function() {
            return request(app)
                .post('/api/shitf?messages=a+normal+sentence+with+numbers+5123')
                .send({
                    messages: "a normal sentence with numbers 5123"
                })
                .expect(200)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect({messages: [
                    "💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩",
                    "💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩"
                ]});
        });
    });

    // Tests correct query string & body w/ an array of normal sentences each
    describe("Correct query string & body key with multiple sentences each", function() {
        it("Should give a 200 error code, correct content type, and 3, 10, and 35 💩s in an array twice", function() {
            return request(app)
                .post('/api/shitf?messages=abc&messages=0123456789&messages=a+normal+sentence+with+numbers+5123')
                .send({
                    messages: [
                        "abc",
                        "0123456789",
                        "a normal sentence with numbers 5123"
                    ]
                })
                .expect(200)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect({messages: [
                    "💩💩💩",
                    "💩💩💩💩💩💩💩💩💩💩",
                    "💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩",
                    "💩💩💩",
                    "💩💩💩💩💩💩💩💩💩💩",
                    "💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩"
                ]});
        });
    });

    // Tests correct query string & body w/ an array of correct URI-encoded sentences
    describe("Correct query string & body key with multiple URI-encoded sentences", function() {
        it("Should give a 200 error code, correct content type, and 2, 12, 7, and 4 💩s in an array", function() {
            return request(app)
                .post('/api/shitf?messages=%202&messages=Hello%20G%C3%BCnter')
                .send({
                    messages: [
                        " Günter",
                        "!!!!"
                    ]
                })
                .expect(200)
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect({messages: [
                    "💩💩",
                    "💩💩💩💩💩💩💩💩💩💩💩💩",
                    "💩💩💩💩💩💩💩",
                    "💩💩💩💩"
                ]});
        });
    });
});
