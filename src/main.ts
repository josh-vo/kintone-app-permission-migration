#!/usr/bin/env node

import appMigrationCommand from "./commands/appMigration"

import fieldMigrationCommand from "./commands/fieldMigration"

import Option from "./includes/Option"

const chalk = require('chalk')
const clear = require('clear')
const program = require('commander')
const configure = require('./constant/config')

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
    .option('--toPassword <password>', 'To User\'s password', '')
// .option('--toGuestSpaceId <guestSpaceId>', 'To Guest Space ID (default: 0)', '0')
// .option('--toBasicUsername <basicUsername>', 'To Basic authentication user name', '')
// .option('--toBasicPassword <basicPassword>', 'To Basic authentication password', '')

program.action(async (options: any) => {
    const option = new Option(options)

    const validator = option.validator()
    if (typeof validator == 'string') {
        console.log(chalk.red(validator))
        program.help()
        process.exit();
    }

    if (option.appMigration) {
        await appMigrationCommand(program, option)
    }

    if (option.fieldMigration) {
        await fieldMigrationCommand(program, option)
    }
})

if (!process.argv.slice(2).length) {
    program.help()
    process.exit()
}
program.parse(process.argv);
