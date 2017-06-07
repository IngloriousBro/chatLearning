/**
 * Created by quentinC on 07/06/2017.
 */
export class User {
    _id: string;
    login: string;
    password: string;
    mail: string;
    interest: [{
        nom: string;
    }];
    constructor() {}
}