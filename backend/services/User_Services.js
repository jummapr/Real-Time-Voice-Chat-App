const UserModels = require('../model/User');


class UserService {

    async FindUser(filter) {
        const user = await UserModels.findOne(filter);

        return user;
    }

    async CreateUser(data) { 

        const user = await UserModels.create(data);

        return user;

    }
    

}

module.exports = new UserService();