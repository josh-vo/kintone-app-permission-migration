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
const appPermission_1 = require("../services/appPermission");
const common_1 = require("./common");
const chalk = require('chalk');
const appMigrationCommand = (program, option) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let fromConnectionModule = common_1.getFromConnection(option);
        let toConnectionModule = common_1.getToConnection(option);
        appPermission_1.getPermissions(fromConnectionModule, (fromAppPermissions) => {
            appPermission_1.updatePermissions(toConnectionModule, fromAppPermissions, (toAppResponse) => {
                console.log(toAppResponse);
            });
        });
    }
    catch (error) {
        console.log(chalk.red(error));
        program.help();
        process.exit();
    }
});
exports.default = appMigrationCommand;
