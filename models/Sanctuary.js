module.exports = function (sequelize, Sequelize) {

  const Sanctuary = sequelize.define("Sanctuary", {
    sanId: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    image: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  Sanctuary.associate = function (models) {
    Sanctuary.belongsToMany(models.User, {
      through: 'UserSanList',
      as: 'Subscribers',
      foreignKey: 'sanId'
    });
  };
  return Sanctuary;
};