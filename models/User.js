module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Topic, {
          foreignKey: 'created_by'
        });
        User.hasMany(models.Message, {
          as: 'Author',
          foreignKey: 'author_id'
        });
      }
    }
  });

  return User;
};
