module.exports = function(sequelize, DataTypes) {
    var LocationZip = sequelize.define("LocationZip", {
   
      zipcode: DataTypes.INTEGER
    });
    return LocationZip;
  };