"use strict";
var express = require('express');
var router = express.Router();
const helper = require('../helper');

const HTTP_RESPONSE_CODE_BAD_RESPONSE = 400;

router.get('/shitf', function (req, res, next) {

    if (req.query === undefined || req.query === null || req.query.messages === undefined || req.query.messages === null) {
        res.sendStatus(HTTP_RESPONSE_CODE_BAD_RESPONSE);
    }

    var messages = [];

    if(!Array.isArray(req.query.messages)) {
        req.query.messages = [req.query.messages];
    }

    req.query.messages = req.query.messages.map(decodeURI);
    messages.push(...req.query.messages);

    messages = messages.map(decodeURI);

    res.json({'messages': helper.shitf(messages)});
});

router.post('/shitf', function(req, res, next) {
    var messages = [];
    if (req.query.messages === undefined && req.body.messages === undefined) {
        res.sendStatus(HTTP_RESPONSE_CODE_BAD_RESPONSE);
    }
    else if (req.query.messages !== undefined && req.body.messages !== undefined) {
        // Messages in both the query string and the body

        // Array type checks
        if(!Array.isArray(req.query.messages)) {
            req.query.messages = [req.query.messages];
        }
        if(!Array.isArray(req.body.messages)) {
            req.body.messages = [req.body.messages];
        }

        // The strange `...` syntax is a spread operator in ES6,
        // more info here: https://stackoverflow.com/a/35223022
        // btw don't chain the commands, otherwise JS fucks it up:
        // [].push(...req.query.messages).push(...req.body.messages) doesn't work
        req.query.messages = req.query.messages.map(decodeURI);
        messages.push(...req.query.messages);
        messages.push(...req.body.messages);

        res.json({'messages': helper.shitf(messages)});
    }
    else {
        // Messages in either the body string or the body
        if (req.query.messages === undefined) {
            // body has messages
            if(!Array.isArray(req.body.messages)) {
                req.body.messages = [req.body.messages];
            }

            messages.push(...req.body.messages);

            res.json({'messages': helper.shitf(messages)});
        }
        else {
            // query has messages
            if(!Array.isArray(req.query.messages)) {
                req.query.messages = [req.query.messages];
            }

            req.query.messages = req.query.messages.map(decodeURI);
            messages.push(...req.query.messages);

            messages = messages.map(decodeURI);

            res.json({'messages': helper.shitf(messages)});
        }
    }
});

module.exports = router;
