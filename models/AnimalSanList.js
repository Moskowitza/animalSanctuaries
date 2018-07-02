module.exports = function (sequelize, DataTypes) {

  const AnimalSanList = sequelize.define("AnimalSanList", {
    SanctuaryName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    SanctuaryImage: {
      type: DataTypes.STRING
    },
    State: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    animalPhone: {
      type: DataTypes.STRING
    },
    animalSanEmail: {
      type: DataTypes.STRING
    },
    animalSanAddress: {
      type: DataTypes.STRING
    },
    animalWebsite: {
      type: DataTypes.STRING
    },

    Facebook: {
      type: DataTypes.STRING
    },
    Instagram: {
      type: DataTypes.STRING
    },
    Twitter: {
      type: DataTypes.STRING
    },
    youTube: {
      type: DataTypes.STRING
    },
    DonationPage: {
      type: DataTypes.STRING
    },
    Volunteer: {
      type: DataTypes.STRING
    },
    VisitationPage: {
      type: DataTypes.STRING
    },
    animalBlog: {
      type: DataTypes.STRING
    },
    listAnimal:{
      type: DataTypes.STRING
    },
    EventPage: {
      type: DataTypes.STRING
    },
    animalAbout: {
      type: DataTypes.TEXT
    }
  });
  return AnimalSanList;
};