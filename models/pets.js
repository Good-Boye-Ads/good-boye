module.exports = function (sequelize, DataTypes) {
  var Pets = sequelize.define("Pets", {

    pet_type: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 25]
      }
    },
    pet_name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 25]
      }
    },
    pet_age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 50]
      }
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 300]
      }
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 300]
      }
    },
  }, {
    timestamp: false,
  });
  
  return Pets;
};