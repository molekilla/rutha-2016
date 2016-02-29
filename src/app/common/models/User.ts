
export class User {

    static name: string = typeof User;

    email: string;
    id: string;

    constructor(public username?: string,
        public password?: string) {

    }
}