"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Option {
    constructor(params) {
        this.appMigration = params.appMigration;
        this.fieldMigration = params.fieldMigration;
        this.fromDomain = params.fromDomain;
        this.fromAppID = params.fromAppID;
        this.fromUsername = params.fromUsername;
        this.fromPassword = params.fromPassword;
        this.toDomain = params.toDomain;
        this.toAppID = params.toAppID;
        this.toUsername = params.toUsername;
        this.toPassword = params.toPassword;
    }
    validator() {
        if (!this.fromDomain) {
            return 'From Domain is required';
        }
        if (!this.fromAppID) {
            return 'From App ID is required';
        }
        if (!this.fromUsername) {
            return 'From Authentication is required';
        }
        if (!this.toDomain) {
            return 'To Domain is required';
        }
        if (!this.toAppID) {
            return 'To App ID is required';
        }
        if (!this.toUsername) {
            return 'To Authentication is required';
        }
        return true;
    }
}
exports.default = Option;
