// Example model


module.exports = function (sequelize, DataTypes) {

  var Client = sequelize.define('Client', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Client.hasMany(models.Comments);
      }
    }
  });

  return Client;
};

