import { CommanderStatic } from "commander"
import { getPermissions, updatePermissions } from "../services/fieldPermission"
import { getFromConnection, getToConnection } from "./common"
import Option from "./../includes/Option"

const chalk = require('chalk')

const fieldMigrationCommand = async (program: CommanderStatic, option: Option) => {
    try {
        let fromConnectionModule = getFromConnection(option)

        let toConnectionModule = getToConnection(option)

        // Get Permission from App
        console.log(chalk.yellow(""))
        getPermissions(fromConnectionModule, (permissions: any) => {
            delete permissions.revision
            updatePermissions(toConnectionModule, permissions, (toAppResponse: any) => {
                console.log(toAppResponse);
            })
        })

        // Update Permission to App
    } catch (error) {
        console.log(chalk.red(error))
        program.help()
        process.exit();
    }
}

export default fieldMigrationCommand
