const sequelize = require('./config/connection');
require('dotenv').config();

// ... your other server setup code ...

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on port:', PORT));
});
