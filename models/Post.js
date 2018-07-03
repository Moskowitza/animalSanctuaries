module.exports = function(sequelize, Sequelize) {
    const Post = sequelize.define("Post", {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      animalSanID:
      {
        type: Sequelize.TEXT,
        allowNull: false,

      }
    });
    return Post;
  };
