import { CommanderStatic } from "commander"
import { getPermissions, updatePermissions } from "../services/appPermission"
import { getFromConnection, getToConnection } from "./common"
import Option from "./../includes/Option"

const chalk = require('chalk')

const appMigrationCommand = async (program: CommanderStatic, option: Option) => {
    try {
        let fromConnectionModule = getFromConnection(option)

        let toConnectionModule = getToConnection(option)

        getPermissions(fromConnectionModule, (fromAppPermissions: any) => {
            updatePermissions(toConnectionModule, fromAppPermissions, (toAppResponse: any) => {
                console.log(toAppResponse);
            })
        })
    } catch (error) {
        console.log(chalk.red(error))
        program.help()
        process.exit();
    }
}

export default appMigrationCommand