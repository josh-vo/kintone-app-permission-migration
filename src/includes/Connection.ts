type ConnectionProps = {
    domain: string;
    appID: number;
    username?: string;
    password?: string;
}

class Connection {
    protected _props: ConnectionProps;

    constructor(params: ConnectionProps) {
        this._props = {
            ...{
                appID: 0,
                domain: ''
            }, ...params
        };

    }

    public get(): ConnectionProps {
        return this._props;
    }
}

export default Connection;
