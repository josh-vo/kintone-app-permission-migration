"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const getAppPermissions = (connection, callback) => __awaiter(void 0, void 0, void 0, function* () {
    const conn = connection.getKintoneConnection();
    var url = `https://${conn.domain}/k/v1/app/acl.json?app=${conn.appID}`;
    console.log('url', url);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    if (conn.apiToken) {
        xhr.setRequestHeader('X-Cybozu-API-Token', conn.apiToken);
    }
    else {
        const token = Buffer.from(`${conn.username}:${conn.password}`).toString('base64');
        xhr.setRequestHeader('X-Cybozu-Authorization', token);
    }
    xhr.onload = function () {
        if (xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        }
        else {
            // error
            console.log('error 1:', JSON.parse(xhr.responseText));
        }
    };
    xhr.send();
});
exports.getAppPermissions = getAppPermissions;
const updateAppPermissions = (connection, permissionToUpdate) => {
    const conn = connection.getKintoneConnection();
    var url = `https://${conn.domain}/k/v1/app/acl.json`;
    const body = Object.assign({ app: conn.appID }, permissionToUpdate);
    console.log('body', body);
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', url);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/json');
    if (conn.apiToken) {
        xhr.setRequestHeader('X-Cybozu-API-Token', conn.apiToken);
    }
    else {
        const token = Buffer.from(`${conn.username}:${conn.password}`).toString('base64');
        xhr.setRequestHeader('X-Cybozu-Authorization', token);
    }
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
        }
        else {
            // error
            console.log('error 2:', JSON.parse(xhr.responseText));
        }
    };
    xhr.send(JSON.stringify(body));
};
exports.updateAppPermissions = updateAppPermissions;
