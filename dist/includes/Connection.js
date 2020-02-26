"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Connection {
    constructor(params) {
        this._props = Object.assign({
            appID: 0,
            domain: ''
        }, params);
    }
    get() {
        return this._props;
    }
}
exports.default = Connection;
