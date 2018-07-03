module.exports = function (sequelize, DataTypes) {

  const AnimalSanList = sequelize.define("AnimalSanList", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
  },
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
  AnimalSanList.associate = function(models) {
    //Swap User for Post We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    //User is the source
    //animal Sanctuary is the target
    AnimalSanList.belongsToMany(models.User, {
      through:UserSanList,
      foreignKey:id
    }); 
  };

  return AnimalSanList;
};