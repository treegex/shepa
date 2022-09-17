export default class UserInfo {

    private readonly _email: string|undefined;
    private readonly _mobile: string|undefined;
    private readonly _description: string|undefined;
    private readonly _callback: undefined | string;


    constructor(email?: string | undefined, mobile?: string | undefined, description?: string | undefined, callback?: string | undefined) {
        this._email = email;
        this._mobile = mobile;
        this._description = description;
        this._callback = callback;
    }

    get email(): string | undefined {
        return this._email;
    }

    get mobile(): string | undefined {
        return this._mobile;
    }

    get description(): string | undefined {
        return this._description;
    }

    get callback(): string | undefined {
        return this._callback;
    }

}