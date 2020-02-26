import Connection from "../includes/Connection"
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const getPermissions = (connection: Connection, callback: any) => {
    const conn = connection.get()
    var url = `https://${conn.domain}/k/v1/field/acl.json?app=${conn.appID}`

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    const token = Buffer.from(`${conn.username}:${conn.password}`).toString('base64')
    xhr.setRequestHeader('X-Cybozu-Authorization', token);

    xhr.onload = function () {
        if (xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        } else {
            // error
            console.log('Error Get Permissions:', JSON.parse(xhr.responseText));
        }
    };
    xhr.send();
}

const updatePermissions = (connection: Connection, permissionToUpdate: any, callback: any) => {
    const conn = connection.get()

    var url = `https://${conn.domain}/k/v1/field/acl.json`

    const body = {
        app: conn.appID,
        ...permissionToUpdate
    }

    var xhr = new XMLHttpRequest();
    xhr.open('PUT', url);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/json');

    const token = Buffer.from(`${conn.username}:${conn.password}`).toString('base64')
    xhr.setRequestHeader('X-Cybozu-Authorization', token);

    xhr.onload = function () {
        if (xhr.status === 200) {
            callback(JSON.parse(xhr.responseText))
        } else {
            // error
            console.log('Error Update Permissions:', JSON.parse(xhr.responseText));
        }
    };
    xhr.send(JSON.stringify(body));
}

export { getPermissions, updatePermissions }
