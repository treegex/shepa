import {Payment} from './Payment';
import UserInfo from "./model/UserInfo";

export {default as UserInfo} from './model/UserInfo';


export default class Shepa implements Payment {

    private readonly driver: string;

    constructor(driver: string) {
        this.driver = driver;
    }


    async send(apiKey: string, amount: number, userInfo?: UserInfo): Promise<any> {
        let driverType = this.driver;
        let driver = await import(`./${driverType}/${driverType}`);

        return new driver.default().send(apiKey, amount, userInfo);
    }

    async verify(apiKey: string, token: string, amount: number): Promise<any> {
        let driverType = this.driver;
        let driver = await import(`./${driverType}/${driverType}`);

        return new driver.default().verify(apiKey, token, amount);
    }

}