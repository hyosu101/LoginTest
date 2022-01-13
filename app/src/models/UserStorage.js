"use strict";

class UserStorage {
    static #users = {
        id: ["김효수", "이동하", "김채령", "이보람"],
        pw: ["1234", "12345", "123456", "1234567"],
        point: ["5", "7", "10", "3"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // => [id,pw,point]
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {}); 

        return userInfo;
    }
}

module.exports = UserStorage;