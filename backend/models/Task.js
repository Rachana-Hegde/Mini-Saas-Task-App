module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Task', {
    title: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'Pending'
    },
    userId: DataTypes.INTEGER
  });
};