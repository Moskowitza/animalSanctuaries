module.exports = function (sequelize, Sequelize) {

    var Post = sequelize.define('Post', {
        postId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        comment: {
            type: Sequelize.STRING,
            notEmpty: true
        }
    });
    Post.associate = function(models) {
        Post.belongsTo(models.User, {
            // foreignKey:'userId'
        });
        Post.belongsTo(models.Sanctuary, {
            // foreignKey:'sanId'
        });
      };
    return Post;
}

