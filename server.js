const express = require('express');
const mongoose = require("mongoose")
const passport = require("passport");
const cors = require('cors')

const users = require("./routes/api/users");
const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cardoc", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
// DB Config
// const db = require("./config/keys").mongoURI;

// mongoose.connect(db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// })
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));


// Express will serve up production assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  // Express will serve up the index.html if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use(require("./routes/vin"));

require('./routes/productsRoutes')(app);
require('./routes/carsRoutes')(app);