const UserModel = require('../models/user')

module.exports = {
    addUser: data => require('./templates/add')(UserModel, data),
    getUser: (params, sort, selectedFields) =>
        require('./templates/get')(UserModel, params, sort, selectedFields),
    updateUser: (findField, setField) =>
        require('./templates/update')(UserModel, findField, setField),
    deleteUser: findField =>
        require('./templates/delete')(UserModel, findField),
}
