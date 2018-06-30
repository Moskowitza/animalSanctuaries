module.exports = function (sequelize, DataTypes) {

  const AnimalSanList = sequelize.define("AnimalSanList", {
    SanctuaryName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    State: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    animalSanID: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Phone: {
      type: DataTypes.STRING
    },
    AnimalSanEmail: {
      type: DataTypes.STRING
    },
    AnimalSanAddress: {
      type: DataTypes.STRING
    },
    AnimalWebsite: {
      type: DataTypes.STRING
    },

    Facebook: {
      type: DataTypes.STRING
    },
    Instagram: {
      type: DataTypes.STRING
    },
    DonationPage: {
      type: DataTypes.STRING
    }
  });
  return AnimalSanList;
};