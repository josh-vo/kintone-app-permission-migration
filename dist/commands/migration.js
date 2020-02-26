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
const Connection_1 = require("./../includes/Connection");
const service_1 = require("./../services/service");
const migrationCommand = (program, options) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let fromConnectionModule = null;
        if (options.fromApiToken) {
            fromConnectionModule = new Connection_1.default({
                domain: options.fromDomain,
                apiToken: options.fromApiToken,
                appID: options.fromAppID,
                guestSpaceID: options.fromGuestSpaceId,
                proxyHost: '',
                proxyPort: 0
            });
        }
        else {
            fromConnectionModule = new Connection_1.default({
                domain: options.fromDomain,
                username: options.fromUsername,
                password: options.fromPassword,
                appID: options.fromAppID,
                guestSpaceID: options.fromGuestSpaceID,
                proxyHost: '',
                proxyPort: 0
            });
        }
        let toConnectionModule = null;
        if (options.fromApiToken) {
            toConnectionModule = new Connection_1.default({
                domain: options.toDomain,
                apiToken: options.toApiToken,
                appID: options.toAppID,
                guestSpaceID: options.toGuestSpaceId,
                proxyHost: '',
                proxyPort: 0
            });
        }
        else {
            toConnectionModule = new Connection_1.default({
                domain: options.toDomain,
                username: options.toUsername,
                password: options.toPassword,
                appID: options.toAppID,
                guestSpaceID: options.toGuestSpaceId,
                proxyHost: '',
                proxyPort: 0
            });
        }
        // Get Permission from App
        const fromAppPermissions = yield service_1.getAppPermissions(fromConnectionModule, (jsonResponse) => {
            service_1.updateAppPermissions(toConnectionModule, jsonResponse);
        });
        // Update Permission to App
    }
    catch (error) {
        console.log(error);
        program.help();
        process.exit();
    }
});
exports.default = migrationCommand;
