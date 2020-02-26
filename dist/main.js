#!/usr/bin/env node
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
const appMigration_1 = require("./commands/appMigration");
const fieldMigration_1 = require("./commands/fieldMigration");
const Option_1 = require("./includes/Option");
const chalk = require('chalk');
const clear = require('clear');
const program = require('commander');
const configure = require('./constant/config');
clear();
program.version(configure.version)
    .description("kintone App Permission Migration Tool")
    .option('--appMigration', 'Migration app permissions', 'false')
    .option('--fieldMigration', 'Migration field permissions', 'false')
    .option('--fromDomain <domain>', 'From Domain name (specify the FQDN)')
    .option('--fromAppID <appID>', 'From App ID (default: 0)', '0')
    .option('--fromUsername <username>', 'From User\'s log in name', '')
    .option('--fromPassword <password>', 'From User\'s password', '')
    // .option('--fromGuestSpaceId <guestSpaceId>', 'From Guest Space ID (default: 0)', '0')
    // .option('--fromBasicUsername <basicUsername>', 'From Basic authentication user name', '')
    // .option('--fromBasicPassword <basicPassword>', 'From Basic authentication password', '')
    .option('--toDomain <domain>', 'To Domain name (specify the FQDN)')
    .option('--toAppID <appID>', 'To App ID (default: 0)', '0')
    .option('--toUsername <username>', 'To User\'s log in name', '')
    .option('--toPassword <password>', 'To User\'s password', '');
// .option('--toGuestSpaceId <guestSpaceId>', 'To Guest Space ID (default: 0)', '0')
// .option('--toBasicUsername <basicUsername>', 'To Basic authentication user name', '')
// .option('--toBasicPassword <basicPassword>', 'To Basic authentication password', '')
program.action((options) => __awaiter(void 0, void 0, void 0, function* () {
    const option = new Option_1.default(options);
    const validator = option.validator();
    if (typeof validator == 'string') {
        console.log(chalk.red(validator));
        program.help();
        process.exit();
    }
    if (option.appMigration) {
        yield appMigration_1.default(program, option);
    }
    if (option.fieldMigration) {
        yield fieldMigration_1.default(program, option);
    }
}));
if (!process.argv.slice(2).length) {
    program.help();
    process.exit();
}
program.parse(process.argv);
