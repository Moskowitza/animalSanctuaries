module.exports = function (sequelize, Sequelize) {

    var User = sequelize.define('User', {
        userId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        username: {
            type: Sequelize.TEXT
        },
        email: {
            type: Sequelize.STRING,
            // validate: {
            //     isEmail: true
            // }
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        },

        last_login: {
            type: Sequelize.DATE
        },

 
        last_login: {
            type: Sequelize.DATE
        },
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
    });
    User.associate = function(models) {
        //Swap User for Post We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        //User is the source
        //animal Sanctuary is the target
        User.belongsToMany(models.AnimalSanList, {
            through:'UserSanList',
            as:'sanctuaries',
            foreignKey:'userId'
        });
      };
 
    return User;
}

