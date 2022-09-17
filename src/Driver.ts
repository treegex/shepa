import {Payment} from './Payment';
import * as axios from 'axios';
import UserInfo from './model/UserInfo';
import {RequestMethod} from './RequestMethod';

export abstract class Driver implements Payment {

    async request(url: string, method: RequestMethod, data?: object): Promise<any> {
        if (RequestMethod.GET === 'GET')
            return await axios.default.get(url);

        return await axios.default.post(url, data);
    }

    abstract send(apiKey: string, amount: number, userInfo?: UserInfo): Promise<any>;

    abstract verify(apiKey: string, token: string, amount: number): Promise<any>;

}