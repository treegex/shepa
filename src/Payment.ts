import UserInfo from './model/UserInfo';

export interface Payment {
    send(apiKey: string, amount: number, userInfo?: UserInfo): Promise<any>;

    verify(apiKey: string, token: string, amount: number): Promise<any>;
}