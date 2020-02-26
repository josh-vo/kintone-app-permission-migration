import Connection from "../includes/Connection"
import Option from "./../includes/Option"

const getFromConnection = (option: Option) => {
    return new Connection({
        domain: option.fromDomain,
        username: option.fromUsername,
        password: option.fromPassword,
        appID: option.fromAppID
    })
}

const getToConnection = (option: Option) => {
    return new Connection({
        domain: option.toDomain,
        username: option.toUsername,
        password: option.toPassword,
        appID: option.toAppID
    })
}

export { getFromConnection, getToConnection }
