module.exports = function (sequelize, Sequelize) {

  const AnimalSanList = sequelize.define("AnimalSanList", {
    sanId: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
  },
    SanctuaryName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    SanctuaryImage: {
      type: Sequelize.STRING
    },
    State: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    animalPhone: {
      type: Sequelize.STRING
    },
    animalSanEmail: {
      type: Sequelize.STRING
    },
    animalSanAddress: {
      type: Sequelize.STRING
    },
    animalWebsite: {
      type: Sequelize.STRING
    },
    Facebook: {
      type: Sequelize.STRING
    },
    Instagram: {
      type: Sequelize.STRING
    },
    Twitter: {
      type: Sequelize.STRING
    },
    youTube: {
      type: Sequelize.STRING
    },
    DonationPage: {
      type: Sequelize.STRING
    },
    Volunteer: {
      type: Sequelize.STRING
    },
    VisitationPage: {
      type: Sequelize.STRING
    },
    animalBlog: {
      type: Sequelize.STRING
    },
    listAnimal:{
      type: Sequelize.STRING
    },
    EventPage: {
      type: Sequelize.STRING
    },
    animalAbout: {
      type: Sequelize.TEXT
    }
  });
  AnimalSanList.associate = function(models) {
    //Swap User for Post We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    //User is the source
    //animal Sanctuary is the target
    AnimalSanList.belongsToMany(models.User, {
      through:'UserSanList',
      as:'users',
      foreignKey:'sanId'
    }); 
  };

  return AnimalSanList;
};