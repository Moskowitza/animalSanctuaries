module.exports = function(sequelize, DataTypes) {
    const Post = sequelize.define("Post", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      animalSanID:
      {
        type: DataTypes.TEXT,
        allowNull: false,

      }
    });
    return Post;
  };
