import {Driver} from '../Driver';
import UserInfo from '../model/UserInfo';
import {RequestMethod} from '../RequestMethod';

export default class Merchant extends Driver {

    private tokenUrl = 'https://merchant.shepa.com/api/v1/token';
    private verifyUrl = 'https://merchant.shepa.com/api/v1/verify';

    async send(apiKey: string, amount: number, userInfo?: UserInfo): Promise<any> {
        let res = await this.request(this.tokenUrl, RequestMethod.POST, Object.assign({}, {
            api: apiKey,
            amount: amount,
            email: userInfo?.email,
            mobile: userInfo?.mobile,
            resellerId: '1000000012',
            callback: userInfo?.callback,
            description: userInfo?.description
        }));
        if (res.data.success)
            return res.data.result;

        throw new Error(res.data.error);
    }

    async verify(apiKey: string, token: string, amount: number): Promise<any> {
        let res = await this.request(this.verifyUrl, RequestMethod.POST, Object.assign({}, {
            api: apiKey,
            token: token,
            amount: amount
        }));
        if (res.data.success)
            return res.data.result;

        throw new Error('خطا در ارسال اطلاعات به Shepa.com. لطفا از برقرار بودن اینترنت و در دسترس بودن Shepa.com اطمینان حاصل کنید');
    }


}