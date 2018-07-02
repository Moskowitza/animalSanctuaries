module.exports = function (sequelize, DataTypes) {

  const AnimalSanList = sequelize.define("AnimalSanList", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    SanctuaryName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    ImageLink: {
      type: DataTypes.STRING,
    },
    State: {
      type: DataTypes.STRING,
    },
    Phone: {
      type: DataTypes.STRING,
    },
    Email: {
      type: DataTypes.TEXT,
    },
    Address: {
      type: DataTypes.STRING
    },
    Website: {
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
    Youtube: {
      type: DataTypes.STRING
    },
    Vimeo: {
      type: DataTypes.STRING
    },
    Othermedia: {
      type: DataTypes.STRING
    },
    VolunteerPage: {
      type: DataTypes.STRING
    },
    VisitPage: {
      type: DataTypes.STRING
    },
    DonationPage: {
      type: DataTypes.STRING
    },
    EventPage: {
      type: DataTypes.STRING
    }
    ,
    BlogPage: {
      type: DataTypes.STRING
    },
    AnimalPage: {
      type: DataTypes.STRING
    },
    About: {
      type: DataTypes.STRING
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  });
  return AnimalSanList;
};