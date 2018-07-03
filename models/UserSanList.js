module.exports = function (sequelize, Sequelize) {
    var UserSanList = sequelize.define('UserSanList', {
        userId: {
            type: Sequelize.INTEGER
        },
        sanId: {
            type: Sequelize.INTEGER
        },
    });
    return UserSanList;
};

