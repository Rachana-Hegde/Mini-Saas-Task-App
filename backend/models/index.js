const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./User')(sequelize, Sequelize);
db.Task = require('./Task')(sequelize, Sequelize);

db.User.hasMany(db.Task, { foreignKey: 'userId' });
db.Task.belongsTo(db.User, { foreignKey: 'userId' });

module.exports = db;