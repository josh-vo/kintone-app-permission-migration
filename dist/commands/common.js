"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Connection_1 = require("../includes/Connection");
const getFromConnection = (option) => {
    return new Connection_1.default({
        domain: option.fromDomain,
        username: option.fromUsername,
        password: option.fromPassword,
        appID: option.fromAppID
    });
};
exports.getFromConnection = getFromConnection;
const getToConnection = (option) => {
    return new Connection_1.default({
        domain: option.toDomain,
        username: option.toUsername,
        password: option.toPassword,
        appID: option.toAppID
    });
};
exports.getToConnection = getToConnection;
