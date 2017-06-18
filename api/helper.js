"use strict";

function shitf(sadMessagesArray) {
    var happyMessagesArray = [];
    sadMessagesArray.forEach(function (sadMessage) {
        happyMessagesArray.push("💩".repeat(sadMessage.length));
    });
    return happyMessagesArray;
}

/**
 * Functions that are enabled to be exported for use in other files
 */
module.exports = {
    shitf: shitf
};