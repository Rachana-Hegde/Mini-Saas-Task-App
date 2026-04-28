const express = require('express');
const cors = require('cors');
const db = require('./models');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server running...");
  });
});