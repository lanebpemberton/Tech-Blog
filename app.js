//import express
const express = require('express');
//import session
const session = require('express-session');
//import handlebars
const expresshandlebars = require('express-handlebars');
//import backend routes
const routes = require("./routes");
//setup sequelize connection
const sequelize = require('./config/connect');
//initialize sequelize store
const SequelizeStore = require('connect-session-sequelize')(session.Store);
//create express app
const app = express();
//setup port number
const port = process.env.PORT || 3000;
//setup handlebars
const handlebars = expresshandlebars.create();
//setup session
const sess = {
    secret: "coffee java bean lake",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
}
app.use(session(sess));

//setup public directories
app.use(express.static(`${__dirname}/public`));
//setup app to recognize incoming json and form payloads
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//connect handlebars to app and set as view engine
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
//connect routes to app
app.use(routes);
//sync sequelize with application
sequelize.sync({ force: false }).then(() => {
    app.listen(port, () => console.log(`App listening on PORT ${port}`));
})